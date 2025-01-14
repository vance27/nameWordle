"use client";

import { useEffect } from "react";
import { GuessBox } from "./components/guess-box";
import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";

const guessTest = [["C", "A", "L", "L", "U", "M"]];

export default function Home() {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        // Perform your desired action here
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount
  return (
    <div>
      <GuessGrid
        guesses={guessTest}
        answer={["C", "A", "L", "L", "U", "M"]}
      ></GuessGrid>
      <Keyboard></Keyboard>
    </div>
  );
}
