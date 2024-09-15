import React from "react";

const ChatMessage = ({ username, message, date }) => {
  return (
    <div className="chat-message">
      <p>
        <strong>{username}</strong>
      </p>
      <p>{message}</p>
      <p>
        <small>{new Date(date).toLocaleString()}</small>
      </p>
    </div>
  );
};

export default ChatMessage;
