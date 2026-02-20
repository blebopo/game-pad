import type { Position } from "../../types/Position";

interface CellProps {
  isBot: boolean;
  isHead: boolean;
  isBullet: boolean;
}

export default function GridCellComponent({ isBot , isHead, isBullet}: CellProps) {
  return <div className={`cell ${isBot ? "bot" : ""}`} />;
}
