import React, { useState } from "react";

const MessageInput = ({ onSendMessage }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);

  const handleSend = () => {
    const content = file ? file.name : message;
    onSendMessage({ username, message: content, date: new Date() });
    setMessage("");
    setFile(null);
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Ім'я користувача"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Повідомлення"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleSend}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.402 6.673C3.142 4.339 5.545 2.625 7.668 3.631L19.612 9.289C21.9 10.372 21.9 13.628 19.612 14.711L7.668 20.37C5.545 21.376 3.143 19.662 3.402 17.328L3.882 13H12C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11H3.883L3.402 6.673Z"
            fill="black"
          />
        </svg>
      </button>
    </div>
  );
};

export default MessageInput;
