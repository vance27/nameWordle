"use client";
import { useContext, useEffect, useReducer, useState } from "react";
import { emptyGuess, GuessContext, KeyboardButtonStates } from "../page";

const NUMBER_OF_GUESS = 6;
const WORD_LENGTH = 6;

export default function GuessGrid(props: any) {
  const guessContext = useContext(GuessContext);

  const { activeRow } = props;

  useEffect(() => {
    console.log("guessContext", guessContext);
  }, [guessContext]);

  const boxColor = (currentRow: number, state: KeyboardButtonStates) => {
    if (activeRow <= currentRow) {
      return "black";
    }
    switch (state) {
      case "selected-right":
        return "green";
      case "selected-wrong":
        return "yellow";
      default:
        return "black";
    }
  };

  return (
    <div className="guess-grid">
      <div>
        {Array.from({ length: NUMBER_OF_GUESS }, (_, rowIndex) => (
          <div key={rowIndex} style={{ display: "block" }}>
            {Array.from({ length: WORD_LENGTH }, (_, colIndex) => (
              <div
                key={rowIndex + "-" + colIndex}
                style={{
                  outline: "1px solid gray",
                  background: "inherit",
                  width: "4em",
                  height: "4em",
                  display: "inline-block",
                  fontSizeAdjust: "1.18",
                  textAlign: "center",
                  backgroundColor: boxColor(
                    rowIndex,
                    guessContext[rowIndex][colIndex]?.state
                  ),
                }}
                className="content-center"
              >
                {guessContext
                  ? guessContext[rowIndex][colIndex]?.letter
                  : emptyGuess.letter}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
