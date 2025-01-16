"use client";

import { createContext, useContext, useEffect, useState } from "react";
import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";

export type KeyboardButtonStates =
  | "default"
  | "selected-right"
  | "selected-wrong";

const defaultKeyboardMap = new Map<string, string>([
  ["Q", "default"],
  ["W", "default"],
  ["E", "default"],
  ["R", "default"],
  ["T", "default"],
  ["Y", "default"],
  ["U", "default"],
  ["I", "default"],
  ["O", "default"],
  ["P", "default"],
  ["A", "default"],
  ["S", "default"],
  ["D", "default"],
  ["F", "default"],
  ["G", "default"],
  ["H", "default"],
  ["J", "default"],
  ["K", "default"],
  ["L", "default"],
  ["Z", "default"],
  ["X", "default"],
  ["C", "default"],
  ["V", "default"],
  ["B", "default"],
  ["N", "default"],
  ["M", "default"],
]);

const defaultGuesses: string[][] = [[], [], [], [], [], []];

export const KeyMapContext =
  createContext<Map<string, string>>(defaultKeyboardMap);
export const GuessContext = createContext<string[][]>(defaultGuesses);

export default function Home() {
  const [keyMap, setKeyMap] = useState(defaultKeyboardMap);
  const [guesses, setGuesses] = useState(defaultGuesses);
  const [activeRow, setActiveRow] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);

  const map = useContext(KeyMapContext);
  const guess = useContext(GuessContext);

  const resetdefaultKeyboardMap = () => {
    defaultKeyboardMap.forEach((value, key) => {
      defaultKeyboardMap.set(key, "default");
    });

    setGuesses(defaultGuesses);
    setActiveColumn(0);
    setActiveRow(0);
    setKeyMap(defaultKeyboardMap);
    console.log("resetting keyboard map", defaultKeyboardMap);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const key = event.key.toUpperCase();

      /**
       * Backspace handler
       * Allow user to delete a letter
       */

      if (key === "BACKSPACE") {
        console.log("Backspace pressed");
        if (activeRow < 6) guess[activeRow][activeColumn - 1] = "";
        if (activeColumn > 0) setActiveColumn(activeColumn - 1);
      }

      /**
       * Key handling (checks if row is full)
       *
       * Will handle letters as input
       * IF the row is full, must hit enter.
       */
      if (activeColumn !== 6) {
        if (map.get(key)) {
          if (activeRow < 6 && activeColumn < 6) {
            console.log("Key found in map", activeRow, activeColumn);
            guess[activeRow][activeColumn] = key;
            setActiveColumn(activeColumn + 1);
          } else {
            console.log("Guess grid is full");
          }
        }
      } else {
        console.log("Row is full");
        if (key === "ENTER") {
          // CHECK AGAINST VALID LIST AND PREVIOUS GUESSES
          if (true) {
            // THEN
            // UPDATE KEYBOARD
            const listOfLetters = guess[activeRow];
            listOfLetters.forEach(
              (letter) => setKeyMap(new Map(map.set(letter, "selected-right"))) // TODO update with the right color
            );
          }

          // INCREMENT POSITION
          setActiveColumn(0);
          setActiveRow(activeRow + 1);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeColumn, activeRow]); // The empty dependency array ensures the effect runs only once on mount
  // TODO unsure about this dependency array (active col and active row makes this run everyt ime they change)
  return (
    <div>
      {/* {guesses.map((guess, index) => (
        <div >{guess.join(",")}</div>
      ))} */}
      <KeyMapContext.Provider value={keyMap}>
        <GuessContext.Provider value={guesses}>
          <GuessGrid />
          <Keyboard />
        </GuessContext.Provider>
      </KeyMapContext.Provider>
      <button onClick={resetdefaultKeyboardMap}>reset</button>
    </div>
  );
}
