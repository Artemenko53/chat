import React, { useState } from "react";
import ChatMessage from "./components/chatMessage/chatMessage";
import MessageInput from "./components/messageInput/messageInput";
import "./App.css";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (newMessage) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat">
      <div className="messages">
        {messages.map((msg, index) => (
          <ChatMessage
            key={index}
            username={msg.username}
            message={msg.message}
            date={msg.date}
          />
        ))}
      </div>
      <MessageInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default Chat;
