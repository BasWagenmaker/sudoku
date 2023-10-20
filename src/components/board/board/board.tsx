import { useState } from "react";
import { Cell } from "..";

interface BoardProps {
  puzzle: number[][];
}

export const Board = ({ puzzle }: BoardProps) => {
  const [activeCell, setActiveCell] = useState([null, null]);
  const handleClick = (rowIndex, columnIndex) => {
    if (activeCell[0] === rowIndex && activeCell[1] === columnIndex)
      setActiveCell([null, null]);
    else setActiveCell([rowIndex, columnIndex]);
  };
  return (
    <>
      <div className="container drop-shadow-md">
        <table>
          <tbody>
            {puzzle.map((row: number[], rowIndex: number) => (
              <tr key={rowIndex}>
                {row.map((cell: number, columnIndex: number) => (
                  <Cell
                    value={cell}
                    rowIndex={rowIndex}
                    columnIndex={columnIndex}
                    key={columnIndex + rowIndex * 9}
                    onClick={handleClick}
                    active={
                      activeCell[0] === rowIndex &&
                      activeCell[1] === columnIndex
                    }
                  />
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
