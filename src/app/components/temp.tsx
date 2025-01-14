import { useEffect } from "react";

export const Temp = () => {
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "Escape") {
        console.log("Escape key pressed");
        // Perform your desired action here
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []); // The empty dependency array ensures the effect runs only once on mount

  return <div>Press the Escape key</div>;
};
