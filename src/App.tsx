import { useState } from "react"
/*import feedback-layout from "./feedback/feedback-layout"*/
import Gamepad from "./components/Gamepad"

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
