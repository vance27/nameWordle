"use client";

import { createContext, useEffect, useState } from "react";
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
]);

export const KeyMapContext = createContext<Map<string, string>>(keyboardMap);

export default function Home() {
  const [keyMap, setKeyMap] = useState(keyboardMap);

  return (
    <div>
      <KeyMapContext.Provider value={keyMap}>
        <GuessGrid
          guesses={guessTest}
          answer={["C", "A", "L", "L", "U", "M"]}
        ></GuessGrid>
        <Keyboard setKeyMap={setKeyMap}></Keyboard>
      </KeyMapContext.Provider>
    </div>
  );
}
