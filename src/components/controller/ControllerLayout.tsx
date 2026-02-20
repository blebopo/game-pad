import ActionButtons from "./ActionButtons";
import DPadButtons from "./DPadButtons";
import TriggerButtons from "./TriggerButtons";
import type { ButtonName } from "../../types/gamepad";
import "../../styles/ControllerLayout.css";

interface ControllerLayoutProps {
  setActiveButton: (btn: ButtonName) => void;
}

export default function ControllerLayoutComponent({
  setActiveButton,
}: ControllerLayoutProps) {
  return (
    <div className="controller-layout-component">
      <div className="controller-triggers-row">
        <TriggerButtons setActiveButton={setActiveButton} />
      </div>

      <div className="controller-body">
        <div className="controller-dpad-buttons-container">
          <DPadButtons setActiveButton={setActiveButton} />
        </div>
        <div className="controller-center">
          {/* menu buttons go here later */}
        </div>
        <div className="controller-action-buttons-container">
          <ActionButtons setActiveButton={setActiveButton} />
        </div>
      </div>
    </div>
  );
}
