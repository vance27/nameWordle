"use client";
import { useContext, useState } from "react";
import { GuessContext } from "../page";

const numberOfLetters = 6;

export default function GuessInput(props: any) {
  const { row } = props;

  const guessContext = useContext(GuessContext);
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
          <div>{guessContext?.[row]?.[index]}</div>
        </div>
      ))}
    </div>
  );
}
