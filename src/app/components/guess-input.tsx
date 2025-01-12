"use client";
import { useForm, SubmitHandler } from "react-hook-form";

const numberOfLetters = 6;

export default function GuessInput() {
  const { register, handleSubmit } = useForm<any>();

  return (
    <form className="guess" onSubmit={handleSubmit(() => {})}>
      {Array.from({ length: numberOfLetters }, () => (
        <input
          type="text"
          size={1}
          maxLength={1}
          style={{
            outline: "1px solid gray",
            background: "inherit",
            width: "4em",
            height: "4em",
            display: "inline-block",
            fontSizeAdjust: "1.58",
            textAlign: "center",
          }}
        ></input>
      ))}
    </form>
  );
}
