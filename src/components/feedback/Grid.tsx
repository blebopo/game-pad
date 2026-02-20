import type { Position } from "../../types/Position";
import GridCellComponent from "./GridCell";
import "../../styles/Grid.css"

interface GridProps {
  gridSize: number;
  bot: Position[];
}

export default function GridComponent({ gridSize, bot }: GridProps) {
  const isBotCell = (row: number, col: number) => {
    return bot.some((segment) => segment.x === col && segment.y === row);
  };

  const grid = [];

  for (let row = 0; row < gridSize; row++) {
    const currentRow = [];

    for (let column = 0; column < gridSize; column++) {
      currentRow.push(
        
          <GridCellComponent
            key={`${row}-${column}`}
            isBot={isBotCell(row, column)}
          ></GridCellComponent>
        
      );
    }

    grid.push(
      <div key={row} className="row">
        {currentRow}
      </div>,
    );

  }

    return (
        <div className="board">{grid}</div>
    );
}
