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
          <button className="up" onClick={() => handlePress("up")}>A</button>
          <button className="left" onClick={() => handlePress("left")}>B</button>
          <button className="right" onClick={() => handlePress("left")}>X</button>
          <button className="down" onClick={() => handlePress("left")}>Y</button>
        </div>
      </div>
    </>
  );
}
