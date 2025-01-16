import { useContext } from "react";
import { KeyMapContext } from "../types";

interface KeyboardButtonProps {
  button: string;
}

export default function KeyboardButton(props: KeyboardButtonProps) {
  const { button } = props;
  const map = useContext(KeyMapContext);

  // TODO this feels wrong lol
  const onClick = () => {
    dispatchEvent(new KeyboardEvent("keydown", { key: `${button}` }));
  };

  return (
    <button
      onClick={onClick}
      className="keyboard-button"
      style={{
        margin: ".25em",
      }}
    >
      <div
        style={{
          padding: "1em",
          borderRadius: "4px",
          background:
            map.get(button) === "default" ||
            button === "ENTER" ||
            button === "BACKSPACE"
              ? "#818384"
              : map.get(button) === "selected-right"
              ? "green"
              : "yellow",
        }}
      >
        {button === "ENTER" ? "↵" : button === "BACKSPACE" ? "⌫" : button}
      </div>
    </button>
  );
}
