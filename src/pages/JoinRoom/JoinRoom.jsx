import { useState } from "react";
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
      <JoinForm handleJoin={handleJoin} />
    </div>
  );
};

export default JoinRoom;
