"use client";

import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";
import { Temp } from "./components/temp";

const guessTest = [["C", "A", "L", "L", "U", "M"]];

export default function Home() {
  return (
    <div>
      <GuessGrid
        guesses={guessTest}
        answer={["C", "A", "L", "L", "U", "M"]}
      ></GuessGrid>
      <Keyboard></Keyboard>
      <Temp></Temp>
    </div>
  );
}
