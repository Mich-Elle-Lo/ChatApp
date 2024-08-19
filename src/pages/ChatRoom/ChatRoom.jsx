import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
import ChatDisplay from "../../components/ChatDisplay/ChatDisplay";
import MessageForm from "../../components/MessageForm/MessageForm";
import "./ChatRoom.scss";

const ChatRoom = () => {
  const location = useLocation();
  const { username, room } = location.state;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);
  const [activity, setActivity] = useState("");
  const [userList, setUserList] = useState("");

  useEffect(() => {
    const newSocket = io("http://localhost:4000", {
      path: "/socket.io",
    });
    setSocket(newSocket);
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    if (socket) {
      socket.emit("enterRoom", { name: username, room });

      socket.on("message", (data) => {
        setActivity("");
        const { name, text, time } = data;
        let messageClassName = "chat__post";
        if (name === username) {
          messageClassName += " chat__post--left";
        } else if (name !== "Admin") {
          messageClassName += " chat__post--right";
        }

        setMessages((prevMessages) => [
          ...prevMessages,
          { text, name, time, className: messageClassName },
        ]);
      });

      socket.on("activity", (name) => {
        setActivity(`${name} is typing...`);
        setTimeout(() => {
          setActivity("");
        }, 3000);
      });

      socket.on("userList", ({ users }) => {
        let textContent = users.map((user) => user.name).join(", ");
        setUserList(textContent);
      });
    }
  }, [socket, username, room]);

  const handleInput = (e) => {
    setMessage(e.target.value);
    socket.emit("activity", { name: username });
  };

  const handleMessageForm = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("message", { name: username, text: message });
      setMessage("");
    }
  };

  return (
    <div className="chat">
      <div className="chat__main">
        <h2 className="chat__room">Room: {room}</h2>
        <ChatDisplay messages={messages} username={username} />
        <p className="chat__activity">{activity}</p>
        <MessageForm
          message={message}
          handleInput={handleInput}
          handleMessageForm={handleMessageForm}
        />
      </div>
      <div className="chat__side">
        <p className="chat__users">
          <em>Users in {room}:</em> {userList}
        </p>
      </div>
    </div>
  );
};

export default ChatRoom;
