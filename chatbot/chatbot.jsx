import React, { useState } from "react";
import "./chatbot.css"; 

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi there! How can I assist you today?", isBot: true },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    setMessages([...messages, { text: inputValue, isBot: false }]);
    // Here you can add logic to handle bot responses based on user input
    // For demonstration purposes, let's simulate a bot response after 1 second
    setTimeout(() => {
      setMessages([
        ...messages,
        { text: "I'm sorry, I'm just a demo bot. I can't handle requests yet!", isBot: true },
      ]);
    }, 1000);
    setInputValue("");
  };

  return (
    <div className="body">
        <img src="./logo.jpg"/>
        <div className="nono">
        <iframe
            allow="microphone;"
            width="350"
            height="430"
            src="https://console.dialogflow.com/api-client/demo/embedded/8f3b3617-de36-4ed8-abc1-926da33494bd">
        </iframe>
        </div>
    </div>
  );
};

export default Chatbot;
