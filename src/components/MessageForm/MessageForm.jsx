import "./MessageForm.scss";

const MessageForm = ({ message, handleInput, handleMessageForm }) => {
  return (
    <form className="chat__form--message" onSubmit={handleMessageForm}>
      <input
        type="text"
        placeholder="Your message"
        name="message"
        className="chat__input--message"
        onChange={handleInput}
        value={message}
        required
      />
      <button className="chat__button--send" type="submit">
        Send
      </button>
    </form>
  );
};

export default MessageForm;
