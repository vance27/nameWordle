"use client";

import { useContext, useEffect, useState } from "react";
import KeyboardButton from "./keyboard-button";
import { KeyMapContext } from "../page";

export default function Keyboard(props: any) {
  const map = useContext(KeyMapContext);

  useEffect(() => {
    const handleKeyDown = (event: any) => {
      const key = event.key.toUpperCase();
      console.log("Key pressed", key);
      if (map.get(key)) {
        console.log("Key found in map");
        props.setKeyMap(new Map(map.set(key, "selected-right")));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount
  return (
    <>
      <div className="keyboard2">
        <div>{map}</div>
        <div className="keyboard-row">
          <KeyboardButton state={map.get("Q")}>Q</KeyboardButton>
          <KeyboardButton state={map.get("W")}>W</KeyboardButton>
          <KeyboardButton state={map.get("E")}>E</KeyboardButton>
          <KeyboardButton state={map.get("R")}>R</KeyboardButton>
          <KeyboardButton state={map.get("T")}>T</KeyboardButton>
          <KeyboardButton state={map.get("Y")}>Y</KeyboardButton>
          <KeyboardButton state={map.get("U")}>U</KeyboardButton>
          <KeyboardButton state={map.get("I")}>I</KeyboardButton>
          <KeyboardButton state={map.get("O")}>O</KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton state={map.get("Q")}>A</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>S</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>D</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>F</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>G</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>H</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>J</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>K</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>L</KeyboardButton>
        </div>
        <div className="keyboard-row">
          <KeyboardButton state={map.get("Q")}>Z</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>X</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>C</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>V</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>B</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>N</KeyboardButton>
          <KeyboardButton state={map.get("Q")}>M</KeyboardButton>
        </div>
      </div>
    </>
  );
}
