import { useState } from "react";

type Action = "A" | "B" | "X" | "Y" | null;

export default function DPadButtons() {
  const [lastPress, setLastPress] = useState<Action>(null);

  function handlePress(action: Action) {
    setLastPress(action);
    console.log(`Pressed: ${action}`);
  }
  return (
    <>
      <div className="action-container">
        <div className="action">
          <button className="A" onClick={() => handlePress("A")}>
            A
          </button>
          <button className="B" onClick={() => handlePress("B")}>
            B
          </button>
          <button className="X" onClick={() => handlePress("X")}>
            X
          </button>
          <button className="Y" onClick={() => handlePress("Y")}>
            Y
          </button>
        </div>
      </div>
    </>
  );
}
