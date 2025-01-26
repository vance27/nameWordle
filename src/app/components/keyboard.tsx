"use client";

import KeyboardButton from "./keyboard-button";

export default function Keyboard() {
  return (
    <div className="flex flex-col space-y-1s" style={{ zIndex: 100 }}>
      <div className="flex justify-center space-x-2">
        <KeyboardButton button={"Q"} />
        <KeyboardButton button={"W"} />
        <KeyboardButton button={"E"} />
        <KeyboardButton button={"R"} />
        <KeyboardButton button={"T"} />
        <KeyboardButton button={"Y"} />
        <KeyboardButton button={"U"} />
        <KeyboardButton button={"I"} />
        <KeyboardButton button={"O"} />
      </div>
      <div className="flex justify-center space-x-2 ">
        <KeyboardButton button={"A"} />
        <KeyboardButton button={"S"} />
        <KeyboardButton button={"D"} />
        <KeyboardButton button={"F"} />
        <KeyboardButton button={"G"} />
        <KeyboardButton button={"H"} />
        <KeyboardButton button={"J"} />
        <KeyboardButton button={"K"} />
        <KeyboardButton button={"L"} />
      </div>
      <div className="flex justify-center space-x-2 ">
        <KeyboardButton button={"ENTER"} />
        <KeyboardButton button={"Z"} />
        <KeyboardButton button={"X"} />
        <KeyboardButton button={"C"} />
        <KeyboardButton button={"V"} />
        <KeyboardButton button={"B"} />
        <KeyboardButton button={"N"} />
        <KeyboardButton button={"M"} />
        <KeyboardButton button={"BACKSPACE"} />
      </div>
    </div>
  );
}
