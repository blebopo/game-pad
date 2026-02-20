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
  let className = "cell";
  if (isBullet) className = "cell bullet";
  else if (isHead) className = "bot-head";
  else if (isBot) className = "cell bot";

  return <div className={className} />;
}
