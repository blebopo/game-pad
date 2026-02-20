import { useEffect, useState } from "react";
import ControllerLayoutComponent from "./components/controller/ControllerLayout";
import FeedbackLayoutComponent from "./components/feedback/FeedbackLayout";
import type { ButtonName } from "./types/gamepad";
import "./App.css";
import type { Position } from "./types/Position";


const GRID_SIZE = 19;


function App() {
  const [activeButton, setActiveButton] = useState<ButtonName>(null);
  const [botPosition, setBotPosition] = useState<Position[]>( [{x: 5, y:5}]);
   
   useEffect(() => {
    if (!activeButton) return;

    const interval = setInterval(() => {
      setBotPosition((prev) => {
        const head = prev[0];
        let newX = head.x;
        let newY = head.y;
        
        // Determins movement
        // If you move up the new coordinate is the bots old cordinate -1 because of how the grid
        // is constructed. Moving up means decreasing y. The same can be shown for the other movements
        /* x →
                  0    1    2    3    ...   18
                --------------------------------
          y=0 | (0,0)(1,0)(2,0)(3,0) ... (18,0)
          y=1 | (0,1)(1,1)(2,1)(3,1) ... (18,1)
          y=2 | (0,2)(1,2)(2,2)(3,2) ... (18,2)
          ... |
          y=18| (0,18)....................(18,18) */
        if (activeButton === "UP")    newY = Math.max(0, head.y - 1);
        if (activeButton === "DOWN")  newY = Math.min(GRID_SIZE - 1, head.y + 1);
        if (activeButton === "LEFT")  newX = Math.max(0, head.x - 1);
        if (activeButton === "RIGHT") newX = Math.min(GRID_SIZE - 1, head.x + 1);

        return [{ x: newX, y: newY }];
      });
    }, 60);

    return () => clearInterval(interval);
  }, [activeButton]);

  return (
    <>
      <div className="haptic-feedback-container">
        <FeedbackLayoutComponent bot={botPosition} activeButton={activeButton} />
      </div>
      <div className="controller-container">
        <ControllerLayoutComponent setActiveButton={setActiveButton} />
      </div>
    </>
  );
}

export default App;