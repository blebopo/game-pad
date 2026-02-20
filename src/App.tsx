import React, { useState, useEffect } from "react";
import ControllerLayoutComponent from "./components/controller/ControllerLayout";
import FeedbackLayoutComponent from "./components/feedback/FeedbackLayout";
import type { ButtonName } from "./types/gamepad";
import "./App.css";
import type { Position } from "./types/Position";

const GRID_SIZE = 19;

const colors = ["limegreen", "cyan", "magenta", "yellow", "orange", "white", "#ff69b4"];

function App() {
  const [activeButton, setActiveButton] = useState<ButtonName>(null);
  const [botPosition, setBotPosition] = useState<Position[]>([{ x: 5, y: 5 }]);
  const [bullet, setBullet] = useState<Position | null>(null);
  const [botDirection, setBotDirection] = useState<string>("UP");
  const [colorIndex, setColorIndex] = useState(0);

  const currentBotColor = colors[colorIndex];

  // Move the bot when a direction is held
  useEffect(() => {
    if (!activeButton) return;
    if (!["UP", "DOWN", "LEFT", "RIGHT"].includes(activeButton)) return;

    setBotDirection(activeButton);

    const interval = setInterval(() => {
      setBotPosition((prev) => {
        const head = prev[0];
        let newX = head.x;
        let newY = head.y;

        if (activeButton === "UP")    newY = Math.max(0, head.y - 1);
        if (activeButton === "DOWN")  newY = Math.min(GRID_SIZE - 1, head.y + 1);
        if (activeButton === "LEFT")  newX = Math.max(0, head.x - 1);
        if (activeButton === "RIGHT") newX = Math.min(GRID_SIZE - 1, head.x + 1);

        return [{ x: newX, y: newY }];
      });
    }, 60);

    return () => clearInterval(interval);
  }, [activeButton]);

  // Color change on RB / LB press
  useEffect(() => {
    if (activeButton === "RB") {
      setColorIndex((prev) => (prev + 1) % colors.length);
    } else if (activeButton === "LB") {
      setColorIndex((prev) => (prev - 1 + colors.length) % colors.length);
    }
  }, [activeButton]);

  // Fire a bullet when X is pressed
  useEffect(() => {
    if (activeButton !== "X") return;

    setBullet({ x: botPosition[0].x, y: botPosition[0].y });
  }, [activeButton]);

  // Move the bullet in the last direction the bot was facing
  useEffect(() => {
    if (!bullet) return;

    const interval = setInterval(() => {
      setBullet((prev) => {
        if (!prev) return null;

        let newX = prev.x;
        let newY = prev.y;

        if (botDirection === "UP")    newY = prev.y - 1;
        if (botDirection === "DOWN")  newY = prev.y + 1;
        if (botDirection === "LEFT")  newX = prev.x - 1;
        if (botDirection === "RIGHT") newX = prev.x + 1;

        if (newX < 0 || newX >= GRID_SIZE || newY < 0 || newY >= GRID_SIZE) return null;

        return { x: newX, y: newY };
      });
    }, 80);

    console.log("Bullet fired");
    return () => clearInterval(interval);
  }, [bullet, botDirection]);

  return (
    <>
      <div
        className="haptic-feedback-container"
        style={{ "--bot-color": currentBotColor } as React.CSSProperties}
      >
        <FeedbackLayoutComponent bot={botPosition} activeButton={activeButton} bullet={bullet} />
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent setActiveButton={setActiveButton} />
      </div>
    </>
  );
}

export default App;
