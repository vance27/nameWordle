"use client";
import { useState } from "react";
import GuessInput from "./guess-input";

type GuessGridProps = {
  guesses: string[][];
  answer: string[];
};

const numberOfGuesses = 6;

export default function GuessGrid(props: GuessGridProps) {
  const { guesses, answer } = props;

  const [active, setActive] = useState(0);

  return (
    <div className="guess-grid">
      <div>
        {Array.from({ length: numberOfGuesses }, (_, index) => (
          <GuessInput
            activeRow={index === active}
          ></GuessInput>
        ))}
      </div>
    </div>
  );
}
