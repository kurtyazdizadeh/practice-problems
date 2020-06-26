// Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop

function findFactorialRecursive(number) {
  if (number === 2) return 2;
  return number * findFactorialRecursive(number - 1)
}

function findFactorialIterative(number) {
  let answer = number;
  for (let i = number - 1; i > 1; i--) {
    answer *= i;
  }
  return answer;
}
findFactorialRecursive(5);
findFactorialIterative(5);
