import type { Position } from "../../types/Position";

interface CellProps {
  row: number;
  column: number;
  isBot: boolean;
}

export default function GridCellComponent({ row, column, isBot }: CellProps) {

  return (
    <div key={`${row}-${column}`} className={`cell ${isBot ? "bot" : ""}`} />
  );
}
