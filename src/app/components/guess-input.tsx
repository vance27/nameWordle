"use client";
import { useForm, SubmitHandler } from "react-hook-form";

const numberOfLetters = 6;

interface GuessInputProps {
  disabled: boolean;
}

interface GuessInputFormSchema {
  index1: string;
  index2: string;
  index3: string;
  index4: string;
  index5: string;
  index6: string;
}

export default function GuessInput(props: GuessInputProps) {
  const { register, handleSubmit } = useForm<GuessInputFormSchema>();

  return (
    <form className="guess" onSubmit={handleSubmit(() => {})}>
      {Array.from({ length: numberOfLetters }, (_, index) => (
        <input
          {...register(("index" + index + 1) as keyof GuessInputFormSchema)} // TODO look at this again
          key={index}
          disabled={props.disabled}
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
