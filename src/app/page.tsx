"use client";

import { useEffect, useState } from "react";
import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";
import {
  defaultKeyboardMap,
  Guess,
  defaultGuesses,
  KeyMapContext,
  GuessContext,
  KeyboardButtonStates,
} from "./types";
import Confetti from "./components/confetti";

export default function Home() {
  const [keyMap, setKeyMap] = useState(new Map(defaultKeyboardMap));
  const [guesses, setGuesses] = useState<Guess[][]>(
    structuredClone(defaultGuesses)
  );

  const [activeRow, setActiveRow] = useState(0);
  const [activeColumn, setActiveColumn] = useState(0);
  const [hasWon, setHasWon] = useState(false);

  const reset = () => {
    console.debug("Resetting next guess");
    // Set next guess to the beginning
    setActiveColumn(0);
    setActiveRow(0);

    // Set guesses to a new array of empty arrays
    console.debug("Resetting guesses", defaultGuesses);
    setGuesses(structuredClone(defaultGuesses));
    console.debug("Guesses", guesses);

    // Set the keyboard map to the default map (new map because it needs to be a copy not a reference)
    console.debug("Resetting keyboard map");
    setKeyMap(new Map(defaultKeyboardMap));

    //Set hasWon to false
    console.debug("Resetting hasWon");
    setHasWon(false);
  };

  const apiCheck = async (word: string) => {
    try {
      const res = await fetch("/api/check", {
        method: "POST",
        body: JSON.stringify(word),
      });
      if (res.status === 200) {
        console.debug("Received 200 from api check");
        const body = await res.json();
        return body.body;
      } else if (res.status === 204) {
        console.debug("Received 204 from api check");
        setHasWon(true);
        return [
          "selected-right",
          "selected-right",
          "selected-right",
          "selected-right",
          "selected-right",
          "selected-right",
        ];
      } else if (res.status === 400) {
        console.log("Received bad response from api check");
        return "not-a-word";
      }
      return undefined;
    } catch (e) {
      console.error("Caught error in api check ", e);
      return undefined;
    }
  };

  const handleKeyDown = (event) => {
    /**
     * This is used to prevent the default behavior of the key
     *
     * e.g. prevent the reset button from being hit repeatedly by the enter key after the first reset
     */
    event.preventDefault();

    if (!hasWon) {
      const key = event.key.toUpperCase();

      /**
       * Backspace handler
       * Allow user to delete a letter
       */
      if (key === "BACKSPACE") {
        console.debug("Backspace pressed");
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
       * Validate key, validate row, validate column
       *
       * Will handle letters as input
       * IF the row is full, must hit enter.
       */
      if (activeColumn !== 6) {
        if (keyMap.get(key) && activeRow < 6 && activeColumn < 6) {
          console.debug("Key found in map", activeRow, activeColumn);
          // SET GUESSED LETTER
          guesses[activeRow][activeColumn] = {
            letter: key,
            state: "default",
          };
          // INCREMENT POSITION
          setActiveColumn(activeColumn + 1);
        }
      } else {
        console.debug("Row is full");
        if (key === "ENTER") {
          // CHECK AGAINST VALID LIST AND PREVIOUS GUESSES
          const word = guesses[activeRow].map((v) => v.letter).join("");
          console.log(word);
          apiCheck(word)
            .then((v) => {
              const guessCheck: KeyboardButtonStates[] = v;

              if (guessCheck && typeof guessCheck !== "string") {
                // THEN
                // UPDATE KEYBOARD
                guessCheck.forEach((guess: KeyboardButtonStates, index) => {
                  const letter = guesses[activeRow][index].letter;
                  const state = keyMap.get(letter);
                  if (guess === "selected-right") {
                    if (state !== "selected-right") {
                      keyMap.set(letter, guess);
                    }
                  } else if (guess === "selected-wrong-place") {
                    if (state === "default") {
                      keyMap.set(letter, guess);
                    }
                  } else if (guess === "selected-wrong") {
                    if (state === "default") {
                      keyMap.set(letter, guess);
                    }
                  }
                  guesses[activeRow][index].state = guess;
                });
                // INCREMENT POSITION
                setActiveColumn(0);
                setActiveRow(activeRow + 1);
              } else {
                console.log(`${word} aint a word`);
              }
            })
            .catch((v) => {
              console.debug("api check unsuccessful", v);
            });
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeColumn, activeRow]);

  return (
    <div className="place-content-center min-h-screen flex flex-col justify-center items-center space-y-4 p-8 sm:p-16">
      <KeyMapContext.Provider value={keyMap}>
        <GuessContext.Provider value={guesses}>
          <div className="flex justify-center space-x-4">
            <GuessGrid activeRow={activeRow} activeColumn={activeColumn} />
          </div>
          <div className="flex justify-center space-x-4">
            <Keyboard />
          </div>
        </GuessContext.Provider>
      </KeyMapContext.Provider>
      <div>
        <p className="text-center">
          {hasWon
            ? "Congratulations! You've won! Welcome Callum Brian Vance Jr. Swanson to the world!"
            : "\b"}
        </p>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          style={{ zIndex: 100 }}
          onClick={reset}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Reset
        </button>
      </div>
      <Confetti hasWon={hasWon} />
    </div>
  );
}
