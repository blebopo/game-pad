import type { Position } from "../../types/Position";

interface CellProps {
  isBot: boolean;
}

export default function GridCellComponent({ isBot }: CellProps) {

  return (
    <div className={`cell ${isBot ? "bot" : ""}`} />
  );
}
