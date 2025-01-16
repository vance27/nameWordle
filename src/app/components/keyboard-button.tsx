import { useContext } from "react";
import { KeyMapContext } from "../page";

export default function KeyboardButton(props: any) {
  const { button } = props;
  const map = useContext(KeyMapContext);

  return (
    <button
      className="keyboard-button"
      style={{
        background:
          map.get(button) === "default"
            ? "#818384"
            : map.get(button) === "selected-right"
            ? "green"
            : "red",
      }}
    >
      <div style={{ outline: "1px red dotted", margin: "2px", padding: "4px" }}>
        {button}
      </div>
    </button>
  );
}
