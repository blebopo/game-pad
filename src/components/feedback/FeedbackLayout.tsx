import type { Position } from "../../types/Position";
import GridComponent from "./Grid";

interface FeedbackLayoutProps {
    bot: Position[]
}

export default function FeedbackLayoutComponent( {bot} : FeedbackLayoutProps) {
  const gridSize: number = 19;

  return (
    <>
      <GridComponent gridSize={gridSize} bot={bot}/>
    </>
  );
}
