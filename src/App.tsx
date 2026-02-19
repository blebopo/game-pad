import { useState } from "react";
import ControllerLayoutComponent from "./components/controller/controller-layout";
import "./App.css";
import FeedbackLayoutComponent from "./components/feedback/feedback-layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="haptic-feedback-container">
        <FeedbackLayoutComponent></FeedbackLayoutComponent>
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent></ControllerLayoutComponent>
      </div>
    </>
  );
}

export default App;
