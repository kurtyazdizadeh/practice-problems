// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
// [false, true, false],
// [false, false, false]]
// the output should be

// minesweeper(matrix) = [[1, 2, 1],
// [2, 1, 1],
// [1, 1, 1]]


function minesweeper(matrix) {
  const output = [];

  const calcPositionsToCheck = (rowIndex, colIndex) => {
    const rowRange = [];
    const colRange = [];

    if (!rowIndex) {
      rowRange.push(0, 1);
    } else if (rowIndex === matrix.length - 1) {
      rowRange.push(rowIndex - 1, rowIndex);
    } else {
      rowRange.push(rowIndex - 1, rowIndex, rowIndex + 1);
    }

    if (!colIndex) {
      colRange.push(0, 1);
    } else if (colIndex === matrix[rowIndex].length - 1) {
      colRange.push(colIndex - 1, colIndex);
    } else {
      colRange.push(colIndex - 1, colIndex, colIndex + 1);
    }
    return [rowRange, colRange];
  }

  const countBombs = (rowRange, colRange, currentX, currentY) => {
    let bombs = 0;
    for (let i = 0; i < rowRange.length; i++) {
      let x = rowRange[i];
      for (let j = 0; j < colRange.length; j++) {
        let y = colRange[j];
        if (x === currentX && y === currentY) continue;
        if (matrix[x][y]) bombs++;
      }
    }
    return bombs;
  }

  for (let i = 0; i < matrix.length; i++) {
    const row = [];
    for (let j = 0; j < matrix[i].length; j++) {
      const [x, y] = calcPositionsToCheck(i, j);
      row.push(countBombs(x, y, i, j));
    }
    output.push(row);
  }
  return output;
}
