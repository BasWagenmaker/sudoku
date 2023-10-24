import "./app.css";
import { useEffect, useState } from "react";
import { Board } from "./components/board";
import { solve } from "./solver/test";

const DEFAULT_PUZZLE = [
  [8, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 3, 6, 0, 0, 0, 0, 0],
  [0, 7, 0, 0, 9, 0, 2, 0, 0],
  [0, 5, 0, 0, 0, 7, 0, 0, 0],
  [0, 0, 0, 0, 4, 5, 7, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 3, 0],
  [0, 0, 1, 0, 0, 0, 0, 6, 8],
  [0, 0, 8, 5, 0, 0, 0, 1, 0],
  [0, 9, 0, 0, 0, 0, 4, 0, 0],
];

const clone = (object: unknown) => JSON.parse(JSON.stringify(object));

function App() {
  const [puzzle, setPuzzle] = useState(clone(DEFAULT_PUZZLE));
  const [activeCell, setActiveCell] = useState<[number, number]>([-1, -1]);
  const handleChangeActiveCell = (rowIndex, columnIndex) => {
    if (activeCell[0] === rowIndex && activeCell[1] === columnIndex)
      setActiveCell([-1, -1]);
    else setActiveCell([rowIndex, columnIndex]);
  };

  const solvePuzzle = () => {
    const result = solve(puzzle);
    if (result) setPuzzle(clone(result));
    else alert("Not possible");
  };

  const resetPuzzle = () => {
    setPuzzle(clone(DEFAULT_PUZZLE));
  };

  const handleChangeCell = (event: any) => {
    const UPDATED_PUZZLE = clone(puzzle);
    UPDATED_PUZZLE[activeCell[0]][activeCell[1]] = event.currentTarget.value;
    setPuzzle(UPDATED_PUZZLE);
  };

  return (
    <>
      <Board
        puzzle={puzzle}
        changeActiveCell={handleChangeActiveCell}
        activeCell={activeCell}
      />

      <div className="container mx-auto w-80 text-center grid grid-cols-5 text-center gap-x-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((value: number) => (
          <button
            value={value}
            key={value}
            className="w-auto aspect-square mt-4 disabled:bg-blue-300 bg-blue-500 hover:disabled:bg-blue-300 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={(event) => handleChangeCell(event)}
            disabled={activeCell[0] < 0 || activeCell[1] < 0}
          >
            {value === 0 ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            ) : (
              value
            )}
          </button>
        ))}
      </div>

      <div className="container w-auto mt-4 text-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-4 rounded"
          onClick={solvePuzzle}
        >
          Solve
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={resetPuzzle}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
