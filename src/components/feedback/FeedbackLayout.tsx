import type { ButtonName } from "../../types/gamepad";
import type { Position } from "../../types/Position";
import GridComponent from "./Grid";
import "../../styles/FeedbackLayout.css"

interface FeedbackLayoutProps {
  bot: Position[];
  activeButton: ButtonName;
  bullet: Position | null
}

export default function FeedbackLayoutComponent({ bot , activeButton, bullet }: FeedbackLayoutProps) {
  const gridSize: number = 19;

  return (
    <>
      {/* Screen */}
      <div className="feedback-screen">
        <div className="feedback-scanlines">
          <GridComponent gridSize={gridSize} bot={bot} bullet={bullet} />
        </div>
      </div>
    </>
  );
}
