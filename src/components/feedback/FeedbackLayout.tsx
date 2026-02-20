import type { ButtonName } from "../../types/gamepad";
import type { Position } from "../../types/Position";
import GridComponent from "./Grid";
import "../../styles/FeedbackLayout.css"

interface FeedbackLayoutProps {
  bot: Position[];
  activeButton: ButtonName 
}

export default function FeedbackLayoutComponent({ bot , activeButton }: FeedbackLayoutProps) {
  const gridSize: number = 19;

  return (
    <>
      {/* Screen */}
      <div className="feedback-screen">
        <div className="feedback-scanlines">
          <GridComponent gridSize={gridSize} bot={bot} />
        </div>
      </div>
    </>
  );
}
