import { useState } from "react";
import ControllerLayoutComponent from "./components/controller/ControllerLayout";
import "./App.css";
import FeedbackLayoutComponent from "./components/feedback/FeedbackLayout";
import type { Position } from "./types/Position";

function App() {
  const [count, setCount] = useState(0);

  const bot : Position[] = [{
    x : 5,
    y: 5
  }]

  return (
    <>
      <div className="haptic-feedback-container">
        <FeedbackLayoutComponent bot={bot}></FeedbackLayoutComponent>
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent></ControllerLayoutComponent>
      </div>
    </>
  );
}

export default App;
