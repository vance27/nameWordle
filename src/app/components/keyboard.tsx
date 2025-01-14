"use client";

import { useEffect, useState } from "react";
import KeyboardButton from "./keyboard-button";

const keyboardMap = new Map<string, string>([
  ["Q", "default"],
  ["W", "default"],
  ["E", "default"],
  ["R", "default"],
  ["T", "default"],
  ["Y", "default"],
  ["U", "default"],
  ["I", "default"],
  ["O", "default"],
  ["P", "default"],
]);

export default function Keyboard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [keyboardMap1, setKeyboardMap] = useState(keyboardMap);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "q" || event.key === "Q") {
        console.log("Q key pressed");
        setKeyboardMap(keyboardMap1.set("Q", "active"));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return (
    <>
      <div className="keyboard">
        <div className="keyboard-input">{input}</div>
        <div className="keyboard-output">{output}</div>
      </div>
      <div className="keyboard2">
        <div className="keyboard-row">
          <KeyboardButton state={"default"}>Q</KeyboardButton>
          <KeyboardButton state={"default"}>W</KeyboardButton>
          <KeyboardButton state={"default"}>E</KeyboardButton>
          <KeyboardButton state={"default"}>R</KeyboardButton>
          <KeyboardButton state={"default"}>T</KeyboardButton>
          <KeyboardButton state={"default"}>Y</KeyboardButton>
          <KeyboardButton state={"default"}>U</KeyboardButton>
          <KeyboardButton state={"default"}>I</KeyboardButton>
          <KeyboardButton state={"default"}>O</KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton state={"default"}>A</KeyboardButton>
          <KeyboardButton state={"default"}>S</KeyboardButton>
          <KeyboardButton state={"default"}>D</KeyboardButton>
          <KeyboardButton state={"default"}>F</KeyboardButton>
          <KeyboardButton state={"default"}>G</KeyboardButton>
          <KeyboardButton state={"default"}>H</KeyboardButton>
          <KeyboardButton state={"default"}>J</KeyboardButton>
          <KeyboardButton state={"default"}>K</KeyboardButton>
          <KeyboardButton state={"default"}>L</KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton state={"default"}>Z</KeyboardButton>
          <KeyboardButton state={"default"}>X</KeyboardButton>
          <KeyboardButton state={"default"}>C</KeyboardButton>
          <KeyboardButton state={"default"}>V</KeyboardButton>
          <KeyboardButton state={"default"}>B</KeyboardButton>
          <KeyboardButton state={"default"}>N</KeyboardButton>
          <KeyboardButton state={"default"}>M</KeyboardButton>
        </div>
      </div>
    </>
  );
}
