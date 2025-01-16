"use client";

import { createContext, useContext, useEffect, useState } from "react";
import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";

const guessTest = [["C", "A", "L", "L", "U", "M"]];

export type KeyboardButtonStates =
  | "default"
  | "selected-right"
  | "selected-wrong";

const keyboardMap = new Map<string, string>([
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

export const KeyMapContext = createContext<Map<string, string>>(keyboardMap);
export const GuessContext = createContext<string[][]>([[], [], [], [], [], []]);

export default function Home() {
  const [keyMap, setKeyMap] = useState(keyboardMap);
  const [activeRow, setActiveRow] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);

  const map = useContext(KeyMapContext);
  const guesses = useContext(GuessContext);

  const resetKeyboardMap = () => {
    keyboardMap.forEach((value, key) => {
      keyboardMap.set(key, "default");
    });
    setKeyMap(keyboardMap);
    console.log("resetting keyboard map", keyboardMap);
  };

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const key = event.key.toUpperCase();
      if (key === "BACKSPACE") {
        console.log("Backspace pressed");
      }

      if (activeColumn === 6) {
        console.log("Row is full");
        if (key === "ENTER") {
          // CHECK AGAINST GUESSES AND UPDATE KEYBOARD
          const listOfLetters = guesses[activeRow];
          listOfLetters.forEach((letter) =>
            setKeyMap(new Map(map.set(letter, "selected-right")))
          );

          // INCREMENT POSITION
          setActiveColumn(0);
          if (activeRow < 5) {
            setActiveRow(activeRow + 1);
          }
        }
      } else {
        if (map.get(key)) {
          if (activeRow < 6 && activeColumn < 6) {
            console.log("Key found in map", activeRow, activeColumn);
            guesses[activeRow][activeColumn] = key;
            setActiveColumn(activeColumn + 1);
          } else {
            console.log("Guess grid is full");
          }
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeColumn, activeRow]); // The empty dependency array ensures the effect runs only once on mount
  // TODO unsure about this dependency array
  return (
    <div>
      {guesses.map((guess, index) => (
        <div>{guess.join(",")}</div>
      ))}
      <KeyMapContext.Provider value={keyMap}>
        <GuessGrid
          guesses={guessTest}
          activeCol={activeColumn}
          activeRow={activeRow}
        ></GuessGrid>
        <Keyboard></Keyboard>
      </KeyMapContext.Provider>
      <button onClick={resetKeyboardMap}>reset</button>
    </div>
  );
}
