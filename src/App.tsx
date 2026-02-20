import { useState } from "react";
import ControllerLayoutComponent from "./components/controller/ControllerLayout";
import FeedbackLayoutComponent from "./components/feedback/FeedbackLayout";
import type { ButtonName } from "./types/gamepad";
import "./App.css";

function App() {
  const [activeButton, setActiveButton] = useState<ButtonName>(null);

  return (
    <>
      <div className="haptic-feedback-container">
        <FeedbackLayoutComponent activeButton={activeButton} />
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent setActiveButton={setActiveButton} />
      </div>
    </>
  );
}

export default App;