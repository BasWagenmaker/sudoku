import "./app.css";
import { useState } from "react";
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
  const solvePuzzle = () => {
    const result = solve(puzzle);
    if (result) setPuzzle(clone(result));
  };

  const resetPuzzle = () => {
    setPuzzle(clone(DEFAULT_PUZZLE));
  };
  return (
    <>
      <Board puzzle={puzzle} />
      <div className="container w-96 mt-4 text-center">
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
