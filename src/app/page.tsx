import GuessGrid from "./components/guess-grid";
import Keyboard from "./components/keyboard";

const guessTest = [["C", "A", "L", "L", "U", "M"]];

export default function Home() {
  return (
    <div>
      <GuessGrid
        guesses={guessTest}
        answer={["C", "A", "L", "L", "U", "M"]}
      ></GuessGrid>
      <Keyboard></Keyboard>
    </div>
  );
}
