import type { ButtonName } from "../../types/gamepad";
import type { Position } from "../../types/Position";
import GridComponent from "./Grid";

interface FeedbackLayoutProps {
  bot: Position[];
  activeButton: ButtonName 
}

export default function FeedbackLayoutComponent({ bot , activeButton }: FeedbackLayoutProps) {
  const gridSize: number = 19;

  return (
    <>
      <GridComponent gridSize={gridSize} bot={bot} />
    </>
  );
}
