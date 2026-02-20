import type { ButtonName } from "../../types/gamepad";
import "../../styles/TriggerButton.css";

interface TriggerButtonsProps {
  setActiveButton: (button: ButtonName) => void;
}

const leftTriggers = [
  { label: "LT", value: "LT" as ButtonName, className: "trigger-btn-top" },
  { label: "LB", value: "LB" as ButtonName, className: "trigger-btn-bottom" },
];

const rightTriggers = [
  { label: "RT", value: "RT" as ButtonName, className: "trigger-btn-top" },
  { label: "RB", value: "RB" as ButtonName, className: "trigger-btn-bottom" },
];

export default function TriggerButtons({
  setActiveButton,
}: TriggerButtonsProps) {
  return (
    <div className="triggers">
      <div className="triggers-left">
        {leftTriggers.map(({ label, value }) => (
          <button
            key={value}
            className="trigger-btn"
            onMouseDown={() => setActiveButton(value)}
            onMouseUp={() => setActiveButton(null)}
            onMouseLeave={() => setActiveButton(null)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="triggers-right">
        {rightTriggers.map(({ label, value }) => (
          <button
            key={value}
            className="trigger-btn"
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
