import type { Position } from "../../types/Position";
import GridCellComponent from "./GridCell";

interface GridProps {
  gridSize: number;
  bot: Position[];
}

export default function Grid({ gridSize, bot }: GridProps) {
  const isBotCell = (row: number, col: number) => {
    return bot.some((segment) => segment.x === col && segment.y === row);
  };

  const grid = [];

  for (let row = 0; row < gridSize; row++) {
    const currentRow = [];

    for (let column = 0; column < gridSize; column++) {
      currentRow.push(
        <>
          <GridCellComponent
            row={row}
            column={column}
            isBot={isBotCell(row, column)}
          ></GridCellComponent>
        </>,
      );
    }

    grid.push(
      <div key={row} className="row">
        {currentRow}
      </div>,
    );

    return <></>;
  }
}
