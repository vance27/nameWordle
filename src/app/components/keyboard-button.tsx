import { useContext } from "react";
import { KeyMapContext } from "../page";

export default function KeyboardButton(props: any) {
  const { button } = props;
  const map = useContext(KeyMapContext);

  return (
    <button
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
            map.get(button) === "default"
              ? "#818384"
              : map.get(button) === "selected-right"
              ? "green"
              : "yellow",
        }}
      >
        {button}
      </div>
    </button>
  );
}
