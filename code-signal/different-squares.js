// Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.

//   Example

// For

// matrix =
//[[1, 2, 1],
// [2, 2, 2],
// [2, 2, 2],
// [1, 2, 3],
// [2, 2, 1]]
// the output should be
// differentSquares(matrix) = 6.

// Here are all 6 different 2 × 2 squares:

// 1 2
// 2 2

// 2 1
// 2 2

// 2 2
// 2 2

// 2 2
// 1 2

// 2 2
// 2 3

// 2 3
// 2 1

function differentSquares(matrix) {
  if (matrix.length < 2 || matrix[0].length < 2) return 0;
  const allSquares = [];
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      //square as a string to compare: NW, NE, SW, SE coords
      allSquares.push(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j]}${matrix[i + 1][j + 1]}`);
    }
  }
  const set = new Set();
  for (let k = 0; k < allSquares.length; k++) {
    set.add(allSquares[k]);
  }
  return set.size;
}
