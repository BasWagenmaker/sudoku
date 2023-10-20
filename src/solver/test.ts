export const solve = (puzzle: number[][]) => {
  let row = 0;
  let column = 0;
  let done = true;
  for (let r = 0; r < puzzle.length; r++) {
    for (let c = 0; c < puzzle.length; c++)
      if (puzzle[r][c] == 0) {
        (row = r), (column = c), (done = false);
        break;
      }
    if (!done) break;
  }
  if (done) return puzzle;

  for (let value = 1; value <= puzzle.length; value++)
    if (validate(puzzle, row, column, value)) {
      puzzle[row][column] = value;
      if (solve(puzzle)) return puzzle;
      else puzzle[row][column] = 0;
    }
  return false;
};

const validate = (
  puzzle: number[][],
  row: number,
  column: number,
  value: number
) => {
  for (let c = 0; c < puzzle.length; c++)
    if (puzzle[row][c] == value) return false;
  for (let r = 0; r < puzzle.length; r++)
    if (puzzle[r][column] == value) return false;

  const gridSize = Math.floor(Math.sqrt(puzzle.length));
  const gridRow = row - (row % gridSize);
  const gridColumn = column - (column % gridSize);
  for (let r = gridRow; r < gridRow + gridSize; r++)
    for (let c = gridColumn; c < gridColumn + gridSize; c++)
      if (puzzle[r][c] == value) return false;

  return true;
};

const puzzle = [
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
