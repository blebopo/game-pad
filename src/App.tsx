import { useState } from "react";
import ControllerLayoutComponent from "./components/controller/ControllerLayout";
import "./App.css";
import FeedbackLayoutComponent from "./components/feedback/FeedbackLayout";
import type { Position } from "./types/Position";

function App() {
  const [botPositon, setBotPosition] = useState([
    {
      x: 5,
      y: 5,
    },
  ]);

  return (
    <>
      <div className="haptic-feedback-container">
        <FeedbackLayoutComponent bot={botPositon}></FeedbackLayoutComponent>
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent></ControllerLayoutComponent>
      </div>
    </>
  );
}

export default App;
