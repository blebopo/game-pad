import { useEffect } from "react";
import type { ButtonName } from "../../types/gamepad";
import "../../styles/action-buttons.css";

interface ActionButtonsProps {
  setActiveButton: (btn: ButtonName) => void;
}

const actions: { label: string; value: ButtonName }[] = [
  { label: "X", value: "X" },
  { label: "Y", value: "Y" },
  { label: "A", value: "A" },
  { label: "B", value: "B" },
];

const keyMap: Record<string, ButtonName> = {
  i: "Y",
  j: "X",
  l: "A",
  k: "B",
};

export default function ActionButtons({ setActiveButton }: ActionButtonsProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const action = keyMap[e.key];
      if (action) setActiveButton(action);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      if (keyMap[e.key]) setActiveButton(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [setActiveButton]);

  return (
    <div className="action-container">
      <div className="action">
        {actions.map(({ label, value }) => (
          <button
            key={value}
            className={`action-btn ${label}`}
            onMouseDown={() => setActiveButton(value)}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}