// You are given two numbers a and b where 0 ≤ a ≤ b.Imagine you construct an array of all the integers from a to b inclusive.You need to count the number of 1s in the binary representations of all the numbers in the array.

//   Example

// For a = 2 and b = 7, the output should be
// rangeBitCount(a, b) = 11.

// Given a = 2 and b = 7 the array is: [2, 3, 4, 5, 6, 7].Converting the numbers to binary, we get[10, 11, 100, 101, 110, 111], which contains 1 + 2 + 1 + 2 + 2 + 3 = 11 1s.

function rangeBitCount(a, b) {
  let count = 0;
  const array = [];
  for (let i = a; i <= b; i++) {
    array.push(i);
  }
  const binaryArr = array.map(num => num.toString(2));
  binaryArr.forEach(num => {
    for (let i = 0; i < num.length; i++) {
      if (num[i] === '1') count++;
    }
  });
  return count;
}
