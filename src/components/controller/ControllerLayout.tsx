import ActionButtons from "./ActionButtons";
import DPadButtons from "./DPadButtons";
import "../../styles/ControllerLayout.css";

export default function ControllerLayoutComponent() {
  return (
    <>
      <div className="controller-layout-component">
        <div className="controller-dpad-buttons-container">
          <DPadButtons></DPadButtons>
        </div>
        <div className="controller-action-buttons-container">
          <ActionButtons></ActionButtons>
        </div>
      </div>
    </>
  );
}
