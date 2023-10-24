import { validate } from "./validate";

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
