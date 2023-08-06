"use client";

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hey, Ich bin die ITECH AI und hier um dir zu helfen. Frage mich einfach nach technischen Fragen.",
    },
  ]);

  const chatContainerRef = useRef(null);

  const fetchData = async (message) => {
    try {
      const response = await axios.post("http://localhost:8000/itech", {
        message,
      });
      const data = response.data;
      console.log(data.result);

      const newMessage = { id: "Ai", text: data.result };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    } catch (error) {
      console.log("connection error occurred:", error);
      const errorMessage = {
        id: "Ai",
        text: "I am Not Connected at the moment please try Later or restart all services",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }
  };

  const clearMessages = () => {
    setMessages([]);
    const newMessage = {
      id: "Ai",
      text: "Hey, Ich bin die ITECH AI und hier um dir zu helfen. Frage mich einfach nach technischen Fragen.",
    };
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  };

  const addMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = { id: "chat", text: inputValue };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue("");
      setTimeout(() => {
        fetchData(newMessage.text);
      }, 1000);
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

  return (
    <div className="h-screen">
    <div className="flex xs:h-[90%] justify-center xl:my-12 xs:my-6">
      <div className="h-5/6 xl:w-1/2 xs:mx-6 bg-[#161b22] rounded-xl flex flex-col">
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
            message.id === "chat"
              ? "bg-[#374455] ml-auto rounded-l-md rounded-br-md"
              : "bg-gray-800 rounded-r-md rounded-bl-md mr-auto"
          } p-2 text-gray-300 mx-5 mb-2 flex-row${
            message.id === "chat" ? "-reverse" : ""
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
