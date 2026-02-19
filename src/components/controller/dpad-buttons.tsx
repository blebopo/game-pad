import { useState } from "react";

type Direction = "up" | "down" | "left" | "right" | null;

export default function DPadButtons() {
  const [lastPress, setLastPress] = useState<Direction>(null);

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
