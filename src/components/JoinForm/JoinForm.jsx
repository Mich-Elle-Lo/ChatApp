import { useState } from "react";
import "./JoinForm.scss";

const JoinForm = ({ handleJoin }) => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleJoin(username, room);
  };

  return (
    <form className="chat__form--join" onSubmit={handleSubmit}>
      <input
        type="text"
        className="chat__input--name"
        maxLength="8"
        placeholder="Your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="text"
        className="chat__input--room"
        placeholder="Chat room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
        required
      />
      <button className="chat__button--join" type="submit">
        Join
      </button>
    </form>
  );
};

export default JoinForm;
