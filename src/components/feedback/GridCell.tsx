import type { Position } from "../../types/Position";

interface CellProps {
  isBot: boolean;
  isHead: boolean;
  isBullet: boolean;
}

export default function GridCellComponent({
  isBot,
  isHead,
  isBullet,
}: CellProps) {
  let typeOfCell = "";
  if (isBullet) typeOfCell = "bullet";
  else if (isBot) typeOfCell = "bot";
  return <div className={`cell ${typeOfCell}`} />;
}
