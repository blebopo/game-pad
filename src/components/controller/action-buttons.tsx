import { useState } from "react";
import "../../styles/action-buttons.css";

type Action = "A" | "B" | "X" | "Y" | null;

export default function ActionButtons() {
  const [lastPress, setLastPress] = useState<Action>(null);

  function handlePress(action: Action) {
    setLastPress(action);
    console.log(`Pressed: ${action}`);
  }
  return (
    <>
      <div className="action-container">
        <div className="action">
          <button className="X" onClick={() => handlePress("X")}>
            X
          </button>
          <button className="Y" onClick={() => handlePress("Y")}>
            Y
          </button>
          <button className="A" onClick={() => handlePress("A")}>
            A
          </button>
          <button className="B" onClick={() => handlePress("B")}>
            B
          </button>
        </div>
      </div>
    </>
  );
}
