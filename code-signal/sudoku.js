// Sudoku is a number - placement puzzle.The objective is to fill a 9 × 9 grid with digits so that each column, each row, and each of the nine 3 × 3 sub - grids that compose the grid contains all of the digits from 1 to 9.

// This algorithm should check if the given grid of numbers represents a correct solution to Sudoku.

//   Example

// For
// grid =
// [[1, 3, 2, 5, 4, 6, 9, 8, 7],
// [4, 6, 5, 8, 7, 9, 3, 2, 1],
// [7, 9, 8, 2, 1, 3, 6, 5, 4],
// [9, 2, 1, 4, 3, 5, 8, 7, 6],
// [3, 5, 4, 7, 6, 8, 2, 1, 9],
// [6, 8, 7, 1, 9, 2, 5, 4, 3],
// [5, 7, 6, 9, 8, 1, 4, 3, 2],
// [2, 4, 3, 6, 5, 7, 1, 9, 8],
// [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = true;

// For
// grid =
// [[1, 3, 2, 5, 4, 6, 9, 2, 7],
// [4, 6, 5, 8, 7, 9, 3, 8, 1],
// [7, 9, 8, 2, 1, 3, 6, 5, 4],
// [9, 2, 1, 4, 3, 5, 8, 7, 6],
// [3, 5, 4, 7, 6, 8, 2, 1, 9],
// [6, 8, 7, 1, 9, 2, 5, 4, 3],
// [5, 7, 6, 9, 8, 1, 4, 3, 2],
// [2, 4, 3, 6, 5, 7, 1, 9, 8],
// [8, 1, 9, 3, 2, 4, 7, 6, 5]]
// the output should be
// sudoku(grid) = false.

function sudoku(grid) {
  const checkUniqueNums = arr => {
    const set = new Set(arr);
    return set.size === arr.length
  }
  //check rows for unique nums
  for (let i = 0; i < grid.length; i++) {
    if (!checkUniqueNums(grid[i])) return false;
  }
  //check cols for unique nums
  const col = new Array(9).fill(0);
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      col[j] = grid[j][i];
    }
    if (!checkUniqueNums(col)) return false;
  }
  //check 3x3 for unique nums
  const chunks = {
    tl: [], tm: [], tr: [],
    ml: [], mm: [], mr: [],
    bl: [], bm: [], br: []
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      if (i < 3) {
        if (j < 3) chunks.tl.push(grid[i][j]);
        if (j >= 3 && j < 6) chunks.tm.push(grid[i][j]);
        if (j >= 6) chunks.tr.push(grid[i][j]);
      }
      if (i >= 3 && i < 6) {
        if (j < 3) chunks.ml.push(grid[i][j]);
        if (j >= 3 && j < 6) chunks.mm.push(grid[i][j]);
        if (j >= 6) chunks.mr.push(grid[i][j]);
      }
      if (i >= 6) {
        if (j < 3) chunks.bl.push(grid[i][j]);
        if (j >= 3 && j < 6) chunks.bm.push(grid[i][j]);
        if (j >= 6) chunks.br.push(grid[i][j]);
      }
    }
  }
  for (const chunk in chunks) {
    if (!checkUniqueNums(chunks[chunk])) return false;
  }
  return true;
}
