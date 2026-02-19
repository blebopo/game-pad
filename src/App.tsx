import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ControllerLayoutComponent from "./components/controller/controller-layout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="haptic-feedback-container"></div>
      <div className="controller-container">
        <ControllerLayoutComponent></ControllerLayoutComponent>
      </div>
    </>
  );
}

export default App;
