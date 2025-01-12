export default function KeyboardButton(props: any) {
  const { onClick, children } = props;
  return (
    <button
      className="keyboard-button"
      onClick={onClick}
      style={{ background: "#818384" }}
    >
      <div style={{ outline: "1px red dotted", margin: "2px", padding: "4px" }}>
        {children}
      </div>
    </button>
  );
}
