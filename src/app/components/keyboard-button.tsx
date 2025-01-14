export default function KeyboardButton(props: any) {
  const { children, state } = props;

  return (
    <button
      className="keyboard-button"
      style={{
        background:
          state === "default"
            ? "#818384"
            : state === "selected-right"
            ? "green"
            : "red",
      }}
    >
      <div style={{ outline: "1px red dotted", margin: "2px", padding: "4px" }}>
        {children}
      </div>
    </button>
  );
}
