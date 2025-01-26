import { confetti } from "@tsparticles/confetti";
import { useEffect } from "react";

export default function Confetti(props: { hasWon: boolean }) {
  const { hasWon } = props;
  useEffect(() => {
    if (!hasWon) {
      return;
    }
    confetti("my-canvas", {})
      .then(() => {
        console.log("Confetti done");
      })
      .catch((e) => {
        console.error("Confetti error", e);
      });
  }, [hasWon]);

  return <div id="my-canvas"></div>;
}
