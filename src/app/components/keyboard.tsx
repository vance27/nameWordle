"use client";

import { useState } from "react";
import KeyboardButton from "./keyboard-button";

export default function Keyboard() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  const handleButtonClick = (value: string) => {
    setInput(input + value);
  };

  const handleClearButtonClick = () => {
    setInput("");
  };

  const handleBackspaceButtonClick = () => {
    setInput(input.slice(0, -1));
  };

  const handleEvaluateButtonClick = () => {
    try {
      setOutput(eval(input));
    } catch (e) {
      setOutput("Error");
    }
  };

  return (
    <>
      <div className="keyboard">
        <div className="keyboard-input">{input}</div>
        <div className="keyboard-output">{output}</div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("1")}>
            1
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("2")}>
            2
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("3")}>
            3
          </KeyboardButton>
          <KeyboardButton onClick={handleBackspaceButtonClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"
              />
            </svg>
          </KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("4")}>
            4
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("5")}>
            5
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("6")}>
            6
          </KeyboardButton>
          <KeyboardButton onClick={handleClearButtonClick}>
            Clear
          </KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("7")}>
            7
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("8")}>
            8
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("9")}>
            9
          </KeyboardButton>
          <KeyboardButton onClick={handleEvaluateButtonClick}>=</KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("+")}>
            +
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("-")}>
            -
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("*")}>
            *
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("/")}>
            /
          </KeyboardButton>
        </div>
      </div>
      <div className="keyboard2">
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("Q")}>
            Q
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("W")}>
            W
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("E")}>
            E
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("R")}>
            R
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("T")}>
            T
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("Y")}>
            Y
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("U")}>
            U
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("I")}>
            I
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("O")}>
            O
          </KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("A")}>
            A
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("S")}>
            S
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("D")}>
            D
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("F")}>
            F
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("G")}>
            G
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("H")}>
            H
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("J")}>
            J
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("K")}>
            K
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("L")}>
            L
          </KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton onClick={() => handleButtonClick("Z")}>
            Z
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("X")}>
            X
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("C")}>
            C
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("V")}>
            V
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("B")}>
            B
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("N")}>
            N
          </KeyboardButton>
          <KeyboardButton onClick={() => handleButtonClick("M")}>
            M
          </KeyboardButton>
        </div>
      </div>
    </>
  );
}
