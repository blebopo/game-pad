import { useState } from "react"
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
