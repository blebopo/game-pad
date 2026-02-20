import type { Position } from "../../types/Position";
import GridCellComponent from "./GridCell";
import "../../styles/Grid.css";

interface GridProps {
  gridSize: number;
  bot: Position[];
  bullet: Position | null;
}

export default function GridComponent({ gridSize, bot, bullet }: GridProps) {
  const head = bot[0];

  // Checking if the segment is part of the bot
  const isBotCell = (row: number, col: number) => {
    return bot.some((segment) => segment.x === col && segment.y === row);
  };

  // Checking if it is the beginning of a segment, in the case that
  // we want to increase the length of the bot
  const isHeadCell = (row: number, col: number): boolean => {
    return head !== undefined && head.x === col && head.y === row;
  };

  const isBulletCell = (row: number, col: number): boolean => {
    return (
      bullet !== null &&
      bullet !== undefined &&
      bullet.x === col &&
      bullet.y === row
    );
  };
  const grid = [];

  for (let row = 0; row < gridSize; row++) {
    const currentRow = [];

    for (let column = 0; column < gridSize; column++) {
      currentRow.push(
        <GridCellComponent
          key={`${row}-${column}`}
          isBot={isBotCell(row, column)}
          isHead={isHeadCell(row, column)}
          isBullet={isBulletCell(row, column)}
        ></GridCellComponent>,
      );
    }

    grid.push(
      <div key={row} className="row">
        {currentRow}
      </div>,
    );
  }

  return <div className="grid">{grid}</div>;
}
