const Message = ({ type, text }) => {
  return (
    <p
      style={{
        color: type === "error" ? "var(--error)" : "var(--success)",
        margin: "0.5rem 0",
      }}
    >
      {text}
    </p>
  );
};

export default Message;
