"use client"

import React, { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [inputValue, setInputValue] = useState(""); // Input value
  const [messages, setMessages] = useState([
    {
      id: "1", // Message ID
      chat_id: "Ai", // Chat ID (Ai or Chat)
      text: "Hey, Ich bin LUNA. Frag mich einfach irgendwie und ich gucke was ich tun kann :))", // Message content
    },
  ]);
  const [loading, setLoading] = useState(false); // Loading state

  // Ref for chat container
  const chatContainerRef = useRef(null);

  // Function to fetch data from API
  const fetchData = async (message) => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:8000/ai", {
        message,
      });
      const data = response.data;
      console.log(data.result);

      // Create a new message object
      const newMessage = {
        id: generateUniqueId(),
        chat_id: "Ai", // Chat ID (Ai or Chat)
        text: data.result, // Message content
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the messages array

    } catch (error) {
      console.log("connection error occurred:", error);

      const errorMessage = {
        id: generateUniqueId(),
        chat_id: "Ai", // Chat ID (Ai or Chat)
        text: "I am Not Connected at the moment please try Later or restart all services", // Error message content
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]); // Add error message to the messages array
    } finally {
      setLoading(false); // Set loading state back to false after fetching data
    }
  };

  // Function to clear all messages
  const clearMessages = () => {
    setMessages([]);
    setChat("");
    // Create the initial message object
    const initialMessage = {
      id: generateUniqueId(), // Generate a unique ID for the message
      chat_id: "Ai", // Chat ID (Ai or Chat)
      text: "Hey, Ich bin LUNA. Frag mich einfach irgendwie und ich gucke was ich tun kann :))", // Message content
    };
    setMessages([initialMessage]); // Set the messages array with the initial message
  };

  // Function to add a new message
  const addMessage = () => {
    if (inputValue.trim() !== "") {
      // Create a new message object
      const newMessage = {
        id: generateUniqueId(), // Generate a unique ID for the message
        chat_id: "Chat", // Chat ID (Ai or Chat)
        text: inputValue, // Message content
      };
      setMessages((prevMessages) => [...prevMessages, newMessage]); // Add new message to the messages array
      
      setInputValue(""); // Clear the input value
      setTimeout(() => {
        fetchData(messages.text); // Fetch data after a delay
      }, 1000);
    }
  };

  // Function to handle key down events
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addMessage();
    }
  };

  // Scroll to the bottom of the chat container when messages change
  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);



  // Render the Chat component
  return (
    <div className="min-h-300 justify-center">
      <div className=" bg-[#161b22] rounded-xl flex flex-col min-h-300">
        <div ref={chatContainerRef} className="flex flex-col flex-1 overflow-auto no-scrollbar">
          <MessageList messages={messages} /> {/* Render the message list */}
        </div>

        {loading && (
          // Display the loading indicator if loading state is true
          <div className="flex justify-start items-center mx-5">
            <img src="../assets/nooble/Thinking-Axolotl.gif" alt="Loading..." className="w-20" />
          </div>
        )}

        <div className="mt-auto flex items-center">
          <div className="flex bg-[#374455] rounded-md w-full mb-5 mx-5">
            <button className="rounded-tr-md rounded-br-md px-2 py-3" onClick={clearMessages}>
              <img src="../assets/nooble/clear_chat.png" alt="Send" className="w-10" />
            </button>
            <input
              id="input_user"
              type="text"
              className="w-full bg-[#374455] pl-2 focus:outline-none"
              placeholder="Type here to chat with LUNA ..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="rounded-tr-md rounded-br-md px-2 py-3" onClick={addMessage}>
              <img src="../assets/nooble/right-arrow.png" alt="Send" className="w-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// MessageList component
const MessageList = ({ messages }) => {
  return (
    <div className="flex flex-col p-5" id="chat_window">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${
            message.chat_id === "Chat"
              ? "bg-[#374455] ml-auto rounded-l-md rounded-br-md"
              : "bg-gray-800 rounded-r-md rounded-bl-md mr-auto"
          } p-2 text-gray-300 mx-5 mb-2 flex-row${
            message.chat_id === "Chat" ? "-reverse" : ""
          }`}
        >
          {splitTextIntoLines(message.text, 70)} {/* Split long messages into lines */}
        </div>
      ))}
    </div>
  );
};

// Function to split text into lines
function splitTextIntoLines(text, maxLineLength) {
  if (text.length <= maxLineLength) {
    return text;
  }

  const words = text.split(" ");
  let lines = [];
  let currentLine = "";

  for (let i = 0; i < words.length; i++) {
    if (currentLine.length + words[i].length + 1 > maxLineLength) {
      lines.push(currentLine);
      currentLine = words[i] + " ";
    } else {
      currentLine += words[i] + " ";
    }
  }

  lines.push(currentLine.trim());
  return lines.map((line, index) => <div key={index}>{line}</div>);
}

// Function to generate a unique ID
function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
