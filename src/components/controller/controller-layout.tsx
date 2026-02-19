import ActionButtons from "./action-buttons";
import DPadButtons from "./dpad-buttons";
import type { ButtonName } from "../../types/gamepad";
import "../../styles/controller-layout.css";

interface ControllerLayoutProps {
  setActiveButton: (btn: ButtonName) => void;
}

export default function ControllerLayoutComponent({ setActiveButton }: ControllerLayoutProps) {
  return (
    <div className="controller-layout-component">
      <div className="controller-dpad-buttons-container">
        <DPadButtons setActiveButton={setActiveButton} />
      </div>
      <div className="controller-action-buttons-container">
        <ActionButtons setActiveButton={setActiveButton} />
      </div>
    </div>
  );
}