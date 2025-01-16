"use client";
import { useState } from "react";
import GuessInput from "./guess-input";

type GuessGridProps = {
  guesses: string[][];
  activeRow: number;
  activeCol: number;
};

const numberOfGuesses = 6;

export default function GuessGrid(props: GuessGridProps) {
  const { guesses, activeRow, activeCol } = props;

  return (
    <div className="guess-grid">
      <div>
        {Array.from({ length: numberOfGuesses }, (_, index) => (
          <GuessInput row={index}></GuessInput>
        ))}
      </div>
    </div>
  );
}
