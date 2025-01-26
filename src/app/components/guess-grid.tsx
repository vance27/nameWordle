"use client";
import { useContext } from "react";
import { emptyGuess, GuessContext, KeyboardButtonStates } from "../types";

const NUMBER_OF_GUESS = 6;
const WORD_LENGTH = 6;

interface GuessGridProps {
  activeRow: number;
  activeColumn: number;
}

export default function GuessGrid(props: GuessGridProps) {
  const guessContext = useContext(GuessContext);

  const { activeRow, activeColumn } = props;

  const boxColor = (currentRow: number, state: KeyboardButtonStates) => {
    if (activeRow <= currentRow) {
      return "black";
    }
    switch (state) {
      case "selected-right":
        return "#538d4e";
      case "selected-wrong":
        return "#b59f3b";
      default:
        return "black";
    }
  };

  const borderColor = (currentRow: number, currentCol: number) => {
    if (currentRow === activeRow && currentCol === activeColumn) {
      return "#97979e";
    }
    return "#3a3a3c";
  };

  return (
    <div style={{ padding: "1em" }}>
      {Array.from({ length: NUMBER_OF_GUESS }, (_, rowIndex) => (
        <div key={rowIndex} className="flex">
          {Array.from({ length: WORD_LENGTH }, (_, colIndex) => (
            <div
              key={rowIndex + "-" + colIndex}
              style={{
                outlineColor: borderColor(rowIndex, colIndex),
                backgroundColor: boxColor(
                  rowIndex,
                  guessContext[rowIndex][colIndex]?.state
                ),
              }}
              className="content-center align-top outline-solid  w-12 h-12 rounded-sm m-1 text-center bg-inherit inline-block text-2xl"
            >
              {guessContext
                ? guessContext[rowIndex][colIndex]?.letter
                : emptyGuess.letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
