"use client";

import { useEffect, useState } from "react";
import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";
import {
  defaultKeyboardMap,
  Guess,
  defaultGuesses,
  MyWordsList,
  ANSWER,
  KeyMapContext,
  GuessContext,
} from "./types";

export default function Home() {
  const [keyMap, setKeyMap] = useState(new Map(defaultKeyboardMap));
  const [guesses, setGuesses] = useState<Guess[][]>(
    structuredClone(defaultGuesses)
  );

  const [activeRow, setActiveRow] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);

  const reset = () => {
    console.debug("Resetting next guess");
    // Set next guess to the beginning
    setActiveColumn(0);
    setActiveRow(0);

    // Set guesses to a new array of empty arrays
    console.log("Resetting guesses", defaultGuesses);
    setGuesses(structuredClone(defaultGuesses));

    // Set the keyboard map to the default map (new map because it needs to be a copy not a reference)
    console.debug("Resetting keyboard map");
    setKeyMap(new Map(defaultKeyboardMap));
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (guesses === null) {
        setGuesses(structuredClone(defaultGuesses));
      }

      /**
       * Backspace handler
       * Allow user to delete a letter
       */

      if (key === "BACKSPACE") {
        console.log("Backspace pressed");
        if (activeRow < 6)
          guesses[activeRow][activeColumn - 1] = {
            letter: "",
            state: "default",
          };
        if (activeColumn > 0) setActiveColumn(activeColumn - 1);
      }

      /**
       * Key handling (checks if row is full)
       *
       * Will handle letters as input
       * IF the row is full, must hit enter.
       */
      if (activeColumn !== 6) {
        if (keyMap.get(key)) {
          if (activeRow < 6 && activeColumn < 6) {
            console.log("Key found in map", activeRow, activeColumn);
            guesses[activeRow][activeColumn] = {
              letter: key,
              state: "default",
            };
            setActiveColumn(activeColumn + 1);
          } else {
            console.log("Guess grid is full");
          }
        }
      } else {
        console.log("Row is full");
        if (key === "ENTER") {
          const word = MyWordsList.find(
            (v) => v === guesses[activeRow].map((v) => v.letter).join("")
          );
          if (word) {
            console.log("Word is in the list");
            for (let i = 0; i < 6; i++) {
              if (guesses[activeRow][i].letter === ANSWER[i]) {
                console.log(
                  "Letter is correct",
                  guesses[activeRow][i].letter,
                  ANSWER[i]
                );
                guesses[activeRow][i].state = "selected-right";
              } else if (ANSWER.includes(guesses[activeRow][i].letter)) {
                guesses[activeRow][i].state = "selected-wrong";
              }
            }

            alert("Word is in the list");
          } else {
            console.log("Word is not in the list");
            return;
          }
          // CHECK AGAINST VALID LIST AND PREVIOUS GUESSES
          // TODO submit the result to the backend to check
          if (true) {
            // THEN
            // UPDATE KEYBOARD
            const listOfLetters = guesses[activeRow];
            listOfLetters.forEach((guess: Guess, index) => {
              if (guess.letter === ANSWER[index]) {
                keyMap.set(guess.letter, "selected-right");
              } else if (ANSWER.includes(guess.letter)) {
                if (keyMap.get(guess.letter) !== "selected-right") {
                  keyMap.set(guess.letter, "selected-wrong");
                }
              }
            });
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColumn, activeRow]); // t
  // TODO unsure about this dependency array (active col and active row makes this run everyt ime they change)

  return (
    <div className="grid gap-8 grid-cols-1 justify-center justify-items-center content-center items-center place-content-center">
      <KeyMapContext.Provider value={keyMap}>
        <GuessContext.Provider value={guesses}>
          <GuessGrid activeRow={activeRow} />
          <Keyboard />
        </GuessContext.Provider>
      </KeyMapContext.Provider>
      <button
        onClick={reset}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Reset
      </button>
    </div>
  );
}
