import { useState } from "react";
import WelcomeDisplay from "../../components/WelcomeDisplay/WelcomeDisplay";
import JoinForm from "../../components/JoinForm/JoinForm";
import { useNavigate } from "react-router-dom";
import "./JoinRoom.scss";

const JoinRoom = () => {
  const navigate = useNavigate();

  const handleJoin = (username, room) => {
    navigate("/chat", { state: { username, room } });
  };

  return (
    <div className="joinRoom">
      <WelcomeDisplay />
      <JoinForm handleJoin={handleJoin} />
    </div>
  );
};

export default JoinRoom;
