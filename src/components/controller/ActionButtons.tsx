import { useEffect, useState } from "react";
import "../../styles/ActionButtons.css";

type Action = "A" | "B" | "X" | "Y" | null;

export default function ActionButtons() {
  const [lastPress, setLastPress] = useState<Action>(null);

  useEffect(() => {
      const actionKeyHandle = (event: KeyboardEvent) => {
        let action: Action = null;
        switch (event.key) {
          case "i":
            action = "Y";
            break;
          case "j":
            action = "X";
            break;
          case "l":
            action = "A";
            break;
          case "k":
            action = "B";
            break;
        }
        if(action){
          handlePress(action);
        }
      };
      window.addEventListener("keydown", actionKeyHandle);
      return () => window.removeEventListener("keydown", actionKeyHandle);
    }, []);

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
