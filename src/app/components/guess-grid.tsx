import GuessInput from "./guess-input";

type GuessGridProps = {
  guesses: string[][];
  answer: string[];
};

const numberOfGuesses = 6;

const guessBox = (
  <div>
    {Array.from({ length: numberOfGuesses }, () => (
      <GuessInput></GuessInput>
    ))}
  </div>
);

export default function GuessGrid(props: GuessGridProps) {
  const { guesses, answer } = props;
  return (
    <div className="guess-grid">
      <div>{guessBox}</div>
    </div>
  );
}
