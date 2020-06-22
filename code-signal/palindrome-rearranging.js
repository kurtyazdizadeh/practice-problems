// Given a string, find out if its characters can be rearranged to form a palindrome.

//   Example

// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.

// We can rearrange "aabb" to make "abba", which is a palindrome.


function palindromeRearranging(inputString) {
  const map = {};
  for (let i = 0; i < inputString.length; i++) {
    if (map[inputString[i]] === undefined) {
      map[inputString[i]] = 1;
      continue;
    }
    if (map[inputString[i]]) {
      map[inputString[i]]++;
      continue;
    }
  }
  //if odd
  if (inputString.length % 2) {
    let odd = 0;
    for (const key in map) {
      if (map[key] % 2) {
        odd++;
      }
    }
    if (odd > 1) return false;
  }
  //if even
  else {
    for (const key in map) {
      if (map[key] % 2) return false;
    }
  }
  return true;
}
