"use client";
import { useState } from "react";

const numberOfLetters = 6;

interface GuessInputProps {
  activeRow: boolean;
}

export default function GuessInput(props: GuessInputProps) {
  const [activeColumn, setActiveColumn] = useState(0);

  return (
    <div>
      {Array.from({ length: numberOfLetters }, (_, index) => (
        <div
          style={{
            outline: "1px solid gray",
            background: "inherit",
            width: "4em",
            height: "4em",
            display: "inline-block",
            // fontSizeAdjust: "1.58", // TODO add this back in
            textAlign: "center",
          }}
          className="content-center"
        >
          <div>Content</div>
        </div>
      ))}
    </div>
  );
}
