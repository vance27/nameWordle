"use client";
import { useContext, useEffect, useReducer, useState } from "react";
import { GuessContext } from "../page";

const NUMBER_OF_GUESS = 6;
const WORD_LENGTH = 6;

export default function GuessGrid() {
  const guessContext = useContext(GuessContext);

  useEffect(() => {
    console.log("guessContext", guessContext);
  }, [guessContext]);

  return (
    <div className="guess-grid">
      <div>
        MY GUEST CONTEXT{" "}
        {guessContext.map((v) => (
          <div>{v.join("") === "" ? "no content" : v}</div>
        ))}
      </div>
      <div>
        {Array.from({ length: NUMBER_OF_GUESS }, (_, rowIndex) => (
          <div>
            {Array.from({ length: WORD_LENGTH }, (_, colIndex) => (
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
                {guessContext[rowIndex][colIndex] || ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
