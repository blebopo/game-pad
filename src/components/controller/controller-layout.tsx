import ActionButtons from "./action-buttons";
import DPadButtons from "./dpad-buttons";
import "./controller-layout.css";

export default function ControllerLayoutComponent() {
  return (
    <>
      <div className="controller-layout-component">
        <div className="controller-dpad-buttons-container">
          <DPadButtons></DPadButtons>
        </div>
        <div className="controller-dpad-buttons-actions">
          <ActionButtons></ActionButtons>
        </div>
      </div>
    </>
  );
}
