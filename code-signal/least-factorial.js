// Given an integer n, find the minimal k such that

// k = m!(where m! = 1 * 2 * ... * m) for some integer m;
// k >= n.
// In other words, find the smallest factorial which is not less than n.

//   Example

// For n = 17, the output should be
// leastFactorial(n) = 24.

// 17 < 24 = 4! = 1 * 2 * 3 * 4, while 3! = 1 * 2 * 3 = 6 < 17).

function leastFactorial(n) {
  if (n === 1) return 1;
  let max = 2;
  let k = 2;
  while (max < n) {
    max *= k + 1;
    k++;
  }
  return max;
}
