import { createContext } from "react";

export const emptyGuess: Guess = { letter: " ", state: "default" };

export type KeyboardButtonStates =
  | "default"
  | "selected-right"
  | "selected-wrong";

export const defaultKeyboardMap = new Map<string, KeyboardButtonStates>([
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

export interface Guess {
  letter: string;
  state: KeyboardButtonStates;
}
export const defaultGuesses: Guess[][] = [
  [emptyGuess],
  [emptyGuess],
  [emptyGuess],
  [emptyGuess],
  [emptyGuess],
  [emptyGuess],
];

export const KeyMapContext = createContext<Map<string, string>>(new Map());
export const GuessContext = createContext<Guess[][]>([]);

export const ANSWER = "CALLUM";
