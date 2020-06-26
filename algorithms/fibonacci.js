// Given a number N return the index value of the Fibonacci sequence, where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

//For example: fibonacciRecursive(6) should return 8

function fibonacciIterative(n) { //0(n) -- linear time... much better time wise
  const fibonacci = [0, 1];
  for (let i = 2; i <= n; i++) {
    let current = fibonacci[i - 1] + fibonacci[i - 2];
    fibonacci.push(current);
  }
  return fibonacci[n];
}

fibonacciIterative(6);

function fibonacciRecursive(n) { // 0(2^n) -- exponential time... BAD
  if (n < 2) return n;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

fibonacciRecursive(8)
