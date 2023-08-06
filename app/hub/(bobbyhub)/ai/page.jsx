"use client";
import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const chatContainerRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [currentConversationId, setCurrentConversationId] = useState();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi, I'm Luna and I'm here to help you. Just ask me a few questions.",
    },
  ]);
  const [savedconversation, setSavedconversation] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("savedConversation");
    if (savedData) {
      const savedConversation = JSON.parse(savedData);
      setSavedconversation(savedConversation);
    }
  }, []);


  useEffect(() => {
    // Load the saved conversation on component mount
    loadSavedConversation(currentConversationId);
  }, [currentConversationId]);

  const fetchData = async (message) => {
    try {
      const response = await axios.post("http://localhost:8000/chat", {
        message,
      });
      const data = response.data;
      console.log(data.result);

      // the AI message
      const newMessage = { id: "Ai", text: data.result };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      saveMessage(currentConversationId, newMessage);
    } catch (error) {
      // Save the AI error message
      const errorMessage = {
        id: "Ai",
        text: "I am Not Connected at the moment please try Later or restart all services",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
      saveMessage(currentConversationId, errorMessage);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    const newMessage = {
      id: "Ai",
      text: "Hi, I'm Luna and I'm here to help you. Just ask me a few questions.",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    saveMessage(getLatestId(), newMessage)
  };

  const addMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = { id: "user", text: inputValue };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
      setTimeout(() => {
        fetchData(newMessage.text);
      }, 1000);
      saveMessage(currentConversationId, newMessage);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addMessage();
    }
  };

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  const loadSavedConversation = (conversationId) => {
    const savedData = localStorage.getItem("savedConversation");
    if (savedData) {
      const savedConversation = JSON.parse(savedData);
      const selectedConversation = savedConversation.find(
        (conversation) => conversation.id === conversationId
      );

      if (selectedConversation) {
        // Clear existing messages
        setMessages([]);

        // Load the saved conversation messages
        const newMessages = selectedConversation.conversation.map((msg) => ({
          id: msg.id,
          text: msg.text,
        }));
        setMessages(newMessages);
      }
    }
  };

  const saveMessage = (id, message) => {
    const savedData = localStorage.getItem("savedConversation");
    try {
      if (savedData) {
        const savedConversation = JSON.parse(savedData);
        const existingConversation = savedConversation.find(
          (convo) => convo.id === id
        );

        if (existingConversation) {
          // If the conversation exists, update its messages
          existingConversation.conversation.push(message);
        } else {
          // If the conversation doesn't exist, add a new conversation
          savedConversation.push({ id, conversation: [message] });
        }

        // Save the updated conversation to localStorage
        localStorage.setItem(
          "savedConversation",
          JSON.stringify(savedConversation)
        );
      } else {
        // If no savedConversation exists in localStorage, create a new one
        const newConversation = { id, conversation: [message] };
        localStorage.setItem(
          "savedConversation",
          JSON.stringify([newConversation])
        );
      }
    } catch (error) {
      window.alert(
        "Oh no, it seems your localStorage is full.\n Please delete your saved conversations to make room for new ones.\n" + error.message
      );
    }
  };

  const getLatestId = () => {
    const savedData = localStorage.getItem("savedConversation");
    if (savedData) {
      const savedConversation = JSON.parse(savedData);
      if (savedConversation.length === 0) {
        // If no conversations are present, return a default starting id
        return 0;
      } else {
        // Find the maximum id using reduce
        const latestId = savedConversation.reduce((maxId, convo) => {
          return Math.max(maxId, convo.id);
        }, 0);
        console.log(latestId + 1)
        return latestId + 1;
      }
    } else {
      // If no savedConversation exists in localStorage, return a default starting id
      return 0;
    }
  };

  return (
    <div className="flex xs:h-[90%] justify-center xl:mt-12 xs:mt-6">
      <div className="h-5/6 xl:w-1/2 mx-6 bg-[#161b22] rounded-xl flex flex-col">
        <div
          ref={chatContainerRef}
          className="flex flex-col flex-1 overflow-auto no-scrollbar"
        >
          <MessageList messages={messages} />
        </div>

        <div className="mt-auto bg-[#374455] rounded-md flex items-center m-2">
          <img
            src="../assets/nooble/clear_chat.png"
            alt="clear"
            className="w-10 ml-2 cursor-pointer bg-[#374455] rounded-l-md"
            onClick={clearMessages}
          />
          <div className="flex w-full">
            <input
              id="input_user"
              type="text"
              className="w-full bg-[#374455] pl-2 focus:outline-none"
              placeholder="Ask me a few questions"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              className="rounded-tr-md rounded-br-md px-2 py-3"
              onClick={addMessage}
            >
              <img
                src="../assets/nooble/right-arrow.png"
                alt="Send"
                className="w-6 "
              />
            </button>
          </div>
        </div>
      </div>
      <div className="h-5/6 w-1/4 mx-6 bg-[#161b22] rounded-xl flex flex-col">
        <ul>
          {savedconversation.map((conversation) => (
            <li
              key={conversation.id}
              className="p-3 cursor-pointer"
              onClick={() => setCurrentConversationId(conversation.id)}
            >
              {conversation.Title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col p-5">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${
            message.id === "user"
              ? "bg-[#374455] ml-auto rounded-l-md rounded-br-md"
              : "bg-gray-800 rounded-r-md rounded-bl-md mr-auto"
          } p-2 text-gray-300 mx-5 mb-2 flex-row${
            message.id === "user" ? "-reverse" : ""
          }`}
        >
          {splitTextIntoLines(message.text, 70)}
        </div>
      ))}
    </div>
  );
};

function splitTextIntoLines(text, maxLineLength) {
  if (text.length <= maxLineLength) {
    return text;
  }

  const words = text.split(" ");
  let lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    if ((currentLine + words[i]).length > maxLineLength) {
      lines.push(currentLine);
      currentLine = words[i] + " ";
    } else {
      currentLine += words[i] + " ";
    }
  }

  lines.push(currentLine.trim());
  return lines.map((line, index) => <div key={index}>{line}</div>);
}
