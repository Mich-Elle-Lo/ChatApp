import "./Message.scss";

const Message = ({ msg, username }) => {
  const { name, text, time } = msg;

  const messageClassName = `chat__post ${
    name === username ? "chat__post--left" : "chat__post--right"
  }`;

  return (
    <li className={messageClassName}>
      {name !== "Admin" ? (
        <>
          <div
            className={`chat__post-header ${
              name === username
                ? "chat__post-header--user"
                : "chat__post-header--reply"
            }`}
          >
            <span className="chat__post-name">{name}</span>
            <span className="chat__post-time">{time}</span>
          </div>
          <div className="chat__post-text">{text}</div>
        </>
      ) : (
        <div className="chat__post-text">{text}</div>
      )}
    </li>
  );
};

export default Message;
