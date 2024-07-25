import React from "react";
import Message from "../Message/Message";
import "./ChatDisplay.scss";

const ChatDisplay = ({ messages, username }) => {
  return (
    <ul className="chat__display">
      {messages.map((msg, index) => (
        <Message key={index} msg={msg} username={username} />
      ))}
    </ul>
  );
};

export default ChatDisplay;
