export const validate = (
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
