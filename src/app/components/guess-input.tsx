"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { on } from "events";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";

const numberOfLetters = 6;

interface GuessInputProps {
  activeRow: boolean;
}

const GuessInputFormSchema = z.object({
  index1: z.string().length(1).regex(/[A-Z]/),
  index2: z.string().length(1).regex(/[A-Z]/),
  index3: z.string().length(1).regex(/[A-Z]/),
  index4: z.string().length(1).regex(/[A-Z]/),
  index5: z.string().length(1).regex(/[A-Z]/),
  index6: z.string().length(1).regex(/[A-Z]/),
});

export default function GuessInput(props: GuessInputProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(GuessInputFormSchema),
    reValidateMode: "onBlur",
    defaultValues: {
      index1: "",
      index2: "",
      index3: "",
      index4: "",
      index5: "",
      index6: "",
    },
  });

  const [activeColumn, setActiveColumn] = useState(0);

  const onChange = (e: any, index: number) => {
    if (e.target.value) {
      if (index < numberOfLetters - 1) {
        console.log("setting active column to", index + 1);
        setActiveColumn(index + 1);
      }
    }
  };

  return (
    <form className="guess" onSubmit={handleSubmit(() => {})}>
      {Array.from({ length: numberOfLetters }, (_, index) => (
        <input
          {...register(("index" + index + 1) as any)} // TODO look at this again
          key={index}
          disabled={activeColumn !== index || !props.activeRow}
          autoFocus={activeColumn === index && props.activeRow}
          type="text"
          size={1}
          onChange={(e) => onChange(e, index)}
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
