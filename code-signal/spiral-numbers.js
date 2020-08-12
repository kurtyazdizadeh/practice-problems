// Construct a square matrix with a size N × N containing integers from 1 to N * N in a spiral order, starting from top - left and in clockwise direction.

//   Example

// For n = 3, the output should be

// spiralNumbers(n) =
// [[1, 2, 3],
// [8, 9, 4],
// [7, 6, 5]]

class SpiralMatrix {
  constructor(size) {
    this.row = 0;
    this.col = 0;
    this.counter = 1;
    this.directionIndex = 0;
    this.directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    this.size = size;
    this.matrix = [];

    for (let i = 0; i < this.size; i++) {
      this.matrix.push(new Array(this.size).fill(0));
    }
  }
  fill() {
    while (this.counter < this.size ** 2 + 1) {
      let [dRow, dCol] = this.directions[this.directionIndex];
      let [nextRow, nextCol] = [this.row + dRow, this.col + dCol];

      if (this.matrix[this.row][this.col] === 0) {
        this.matrix[this.row][this.col] = this.counter;
        this.counter++;
      }
      if (this.checkNextCoord(nextRow, nextCol)) {
        this.row = nextRow;
        this.col = nextCol;
      } else {
        this.changeDirection();
      }
    }

  }
  checkNextCoord(nextRow, nextCol) {
    if (this.matrix[nextRow] !== undefined) {
      if (this.matrix[nextRow][nextCol] !== undefined) {
        if (this.matrix[nextRow][nextCol] === 0) return true;
      }
    }
    return false;
  }
  changeDirection() {
    this.directionIndex++;
    if (this.directionIndex === this.directions.length) this.directionIndex = 0;
  }
}



function spiralNumbers(n) {
  const spiral = new SpiralMatrix(n);
  spiral.fill();
  return spiral.matrix;
}
