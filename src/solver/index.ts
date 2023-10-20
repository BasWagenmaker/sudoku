// console.log("Sudoku time");

// type Sudoku = number[][];

// type Cell = {
//   row: number;
//   column: number;
// };

// type Options = {
//   cell: Cell;
//   options: number[];
// };

// type Option = {
//   cell: Cell;
//   option: number;
// };

// // const puzzle: Sudoku = [
// //   [2, 0, 0, 0, 3, 0, 0, 0, 0],
// //   [0, 4, 0, 0, 8, 1, 0, 0, 0],
// //   [0, 0, 0, 0, 0, 0, 0, 4, 0],
// //   [5, 0, 0, 0, 0, 0, 0, 0, 0],
// //   [3, 0, 0, 0, 0, 0, 0, 0, 6],
// //   [0, 0, 9, 0, 0, 0, 1, 0, 0],
// //   [0, 0, 0, 7, 0, 9, 6, 0, 5],
// //   [9, 0, 5, 0, 0, 0, 0, 0, 4],
// //   [0, 6, 2, 0, 1, 8, 0, 0, 9],
// // ];

// const puzzle: Sudoku = [
//   [2, 0, 0, 0, 3, 0, 0, 0, 0],
//   [0, 4, 0, 0, 8, 1, 5, 6, 2],
//   [0, 0, 0, 2, 7, 5, 3, 4, 1],
//   [5, 2, 7, 1, 6, 3, 4, 9, 8],
//   [3, 1, 4, 8, 9, 7, 2, 5, 6],
//   [6, 8, 9, 4, 5, 2, 1, 7, 3],
//   [1, 3, 8, 7, 4, 9, 6, 2, 5],
//   [9, 7, 5, 3, 2, 6, 8, 1, 4],
//   [4, 6, 2, 5, 1, 8, 7, 3, 9],
// ];

// const solve = (puzzle: Sudoku) => {
//   const graph = new Map();
//   const visited = new Set();
//   const stack = [puzzle];

//   while (stack.length > 0) {
//     const vertex = <Sudoku>stack.shift();
//     if (win(vertex)) {
//       console.log("Solution found!");
//       console.table(vertex);
//       return;
//     }
//     const key = JSON.stringify(vertex);
//     if (!visited.has(key)) {
//       visited.add(key);
//       const options = getPuzzleOptions(vertex);
//       graph.set(vertex, options);
//       const newOptions = options.filter(
//         (option) => !visited.has(JSON.stringify(option))
//       );
//       stack.push(...newOptions);
//     }
//   }
// };

// const win = (puzzle: Sudoku) => {
//   const entries = puzzle.flat();
//   if (entries.includes(0)) return false;
//   return validatePuzzle(puzzle);
// };

// const getRow = (puzzle: Sudoku, cell: Cell) => {
//   return puzzle[cell.row].filter((number) => number > 0);
// };

// const getColumn = (puzzle: Sudoku, cell: Cell) => {
//   const column = [
//     puzzle[0][cell.column],
//     puzzle[1][cell.column],
//     puzzle[2][cell.column],
//     puzzle[3][cell.column],
//     puzzle[4][cell.column],
//     puzzle[5][cell.column],
//     puzzle[6][cell.column],
//     puzzle[7][cell.column],
//     puzzle[8][cell.column],
//   ];
//   return column.filter((number) => number > 0);
// };

// const getGrid = (puzzle: Sudoku, cell: Cell) => {
//   const gridRow = Math.floor(cell.row / 3);
//   const gridColumn = Math.floor(cell.column / 3);
//   const grid = [
//     puzzle[gridRow * 3][gridColumn * 3],
//     puzzle[gridRow * 3][gridColumn * 3 + 1],
//     puzzle[gridRow * 3][gridColumn * 3 + 2],
//     puzzle[gridRow * 3 + 1][gridColumn * 3],
//     puzzle[gridRow * 3 + 1][gridColumn * 3 + 1],
//     puzzle[gridRow * 3 + 1][gridColumn * 3 + 2],
//     puzzle[gridRow * 3 + 2][gridColumn * 3],
//     puzzle[gridRow * 3 + 2][gridColumn * 3 + 1],
//     puzzle[gridRow * 3 + 2][gridColumn * 3 + 2],
//   ];
//   return grid.filter((number) => number > 0);
// };

// const validate = (numbers: (number | 0)[]) => {
//   const filteredNumbers = numbers.filter((number) => number > 0);
//   return filteredNumbers.length === new Set(filteredNumbers).size;
// };

// const validateCell = (puzzle: Sudoku, cell: Cell) => {
//   return (
//     validate(getRow(puzzle, cell)) &&
//     validate(getColumn(puzzle, cell)) &&
//     validate(getGrid(puzzle, cell))
//   );
// };

// const getCellOptions = (puzzle: Sudoku, cell: Cell) => {
//   if (puzzle[cell.row][cell.column] > 0) return [];
//   const totalOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const row = getRow(puzzle, cell);
//   const column = getColumn(puzzle, cell);
//   const grid = getGrid(puzzle, cell);
//   const existing = Array.from(new Set([...row, ...column, ...grid]));
//   const options = totalOptions.filter(
//     (option: number) => !existing.includes(option)
//   );
//   return options;
// };

// const getPuzzleOptions = (puzzle: Sudoku) => {
//   const puzzleOptions: Options[] = [];
//   puzzle.forEach((row: number[], rowIndex: number) => {
//     return row.forEach((_column: number, columnIndex) => {
//       const cell = {
//         row: rowIndex,
//         column: columnIndex,
//       };
//       const cellOptions = getCellOptions(puzzle, cell);
//       puzzleOptions.push({ cell, options: cellOptions });
//     });
//   });
//   puzzleOptions.sort((a: Options, b: Options) => {
//     return a.options.length - b.options.length;
//   });
//   const filteredOptions = puzzleOptions.filter(
//     (option: Options) => option.options.length > 0
//   );
//   const mappedPuzzleOptions: Sudoku[] = [];
//   filteredOptions.forEach((options: Options) =>
//     options.options.forEach((option: number) => {
//       const newPuzzle = JSON.parse(JSON.stringify(puzzle));
//       newPuzzle[options.cell.row][options.cell.column] = option;
//       mappedPuzzleOptions.push(newPuzzle);
//     })
//   );
//   return mappedPuzzleOptions;
// };

// const validatePuzzle = (puzzle: Sudoku) => {
//   let validityPuzzle = true;
//   puzzle.forEach((row: number[], rowIndex: number) => {
//     return row.forEach((_column: number, columnIndex) => {
//       const cell = {
//         row: rowIndex,
//         column: columnIndex,
//       };
//       const validityCell = validateCell(puzzle, cell);
//       if (!validityCell)
//         console.error(
//           `Invalid cell: row: ${cell.row}, column: ${cell.column}, value: ${
//             puzzle[cell.row][cell.column]
//           }`
//         );
//       validityPuzzle = validityPuzzle && validityCell;
//     });
//   });
//   return validityPuzzle;
// };

// solve(puzzle);
// // console.log(`Valid: ${validatePuzzle(puzzle)}`);
// // console.table(puzzle);
// // console.log("Options:");
// // console.log(getPuzzleOptions(puzzle));
