import { useEffect, useState } from "react";
import type { ButtonName } from "../../types/gamepad";
import "../../styles/DPadButtons.css";

interface DPadButtonsProps {
  setActiveButton: (btn: ButtonName) => void;
}

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT" | null;

const keyMap: Record<string, Direction> = {
  w: "UP",
  ArrowUp: "UP",
  s: "DOWN",
  ArrowDown: "DOWN",
  a: "LEFT",
  ArrowLeft: "LEFT",
  d: "RIGHT",
  ArrowRight: "RIGHT",
};

export default function DPadButtons({ setActiveButton }: DPadButtonsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const direction = keyMap[e.key];
      if (direction) setActiveButton(direction);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (keyMap[e.key]) setActiveButton(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setActiveButton]);

  return (
    <div className="dpad-container">
      <div className="dpad">
        <button
          className="up"
          onMouseDown={() => setActiveButton("UP")}
          onMouseUp={() => setActiveButton(null)}
          onMouseLeave={() => setActiveButton(null)}
        >
          ↑
        </button>
        <button
          className="left"
          onMouseDown={() => setActiveButton("LEFT")}
          onMouseUp={() => setActiveButton(null)}
          onMouseLeave={() => setActiveButton(null)}
        >
          ←
        </button>
        <button
          className="right"
          onMouseDown={() => setActiveButton("RIGHT")}
          onMouseUp={() => setActiveButton(null)}
          onMouseLeave={() => setActiveButton(null)}
        >
          →
        </button>
        <button
          className="down"
          onMouseDown={() => setActiveButton("DOWN")}
          onMouseUp={() => setActiveButton(null)}
          onMouseLeave={() => setActiveButton(null)}
        >
          ↓
        </button>
      </div>
    </div>
  );
}
