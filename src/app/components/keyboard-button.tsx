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
    <button onClick={onClick} className="keyboard-button m-1 flex">
      <div
        style={{
          background:
            map.get(button) === "default" ||
            button === "ENTER" ||
            button === "BACKSPACE"
              ? "#818384"
              : map.get(button) === "selected-right"
              ? "#538d4e"
              : map.get(button) === "selected-wrong-place"
              ? "#b59f3b"
              : "#3a3a3c",
        }}
        className="p-2 rounded-md min-w-8 lg:min-w-12 lg:min-h-14 content-center align-top text-center "
      >
        {button === "ENTER" ? "↵" : button === "BACKSPACE" ? "⌫" : button}
      </div>
    </button>
  );
}
