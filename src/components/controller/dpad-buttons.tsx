import { useEffect, useState } from "react";
import "../../styles/dpad-buttons.css";

type Direction = "up" | "down" | "left" | "right" | null;

export default function DPadButtons() {
  const [lastPress, setLastPress] = useState<Direction>(null);

  useEffect(() => {
    const dPadKeyHandle = (event: KeyboardEvent) => {
      let direction: Direction = null;
      switch (event.key) {
        case "w":
        case "ArrowUp":
          direction = "up";
          break;
        case "s":
        case "ArrowDown":
          direction = "down";
          break;
        case "a":
        case "ArrowLeft":
          direction = "left";
          break;
        case "d":
        case "ArrowRight":
          direction = "right";
          break;
      }
      if(direction){
        handlePress(direction);
      }
    };
    window.addEventListener("keydown", dPadKeyHandle);
    return () => window.removeEventListener("keydown", dPadKeyHandle);
  }, []);

  function handlePress(direction: Direction) {
    setLastPress(direction);
    console.log(`Pressed: ${direction}`);
  }
  return (
    <>
      <div className="dpad-container">
        <div className="dpad">
          <button className="left" onClick={() => handlePress("left")}>
            ←
          </button>
          <button className="up" onClick={() => handlePress("up")}>
            ↑
          </button>
          <button className="right" onClick={() => handlePress("left")}>
            →
          </button>
          <button className="down" onClick={() => handlePress("left")}>
            ↓
          </button>
        </div>
      </div>
    </>
  );
}
