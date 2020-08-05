// Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

//   Example

// For n = 152, the output should be
// deleteDigit(n) = 52;
// For n = 1001, the output should be
// deleteDigit(n) = 101

function deleteDigit(n) {
  const str = n.toString();
  let maxNum = 0;

  for (let i = 0; i < str.length; i++) {
    const arr = str.split('');
    arr[i] = '';
    const newNum = +arr.join('');
    if (newNum > maxNum) maxNum = newNum;
  }

  return maxNum;
}
