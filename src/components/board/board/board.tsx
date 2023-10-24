import { Cell } from "..";

interface BoardProps {
  puzzle: number[][];
  changeActiveCell: (rowIndex: number, columnIndex: number) => void;
  activeCell: [number, number];
}

export const Board = ({ puzzle, changeActiveCell, activeCell }: BoardProps) => {
  return (
    <div className="container w-96 xl:w-auto drop-shadow-md ">
      <table className="mx-auto overflow-hidden rounded-md">
        <tbody>
          {puzzle.map((row: number[], rowIndex: number) => (
            <tr key={rowIndex}>
              {row.map((cell: number, columnIndex: number) => (
                <Cell
                  value={cell}
                  rowIndex={rowIndex}
                  columnIndex={columnIndex}
                  key={columnIndex + rowIndex * 9}
                  onClick={changeActiveCell}
                  active={
                    activeCell[0] === rowIndex && activeCell[1] === columnIndex
                  }
                />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
