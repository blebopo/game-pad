import ActionButtons from "./action-buttons";
import DPadButtons from "./dpad-buttons";

export default function ControllerLayoutComponent() {
    return (
    <>
      <div className="controller-dpad-buttons-container">
        <DPadButtons></DPadButtons>
      </div>
      <div className="controller-dpad-buttons-actions">
        <ActionButtons></ActionButtons>
      </div>
    </>);
}