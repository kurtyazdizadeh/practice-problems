// Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.

//   Example

// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(inputArray) {
  let maxDiff = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    const firstNum = inputArray[i];
    const secondNum = inputArray[i + 1];
    let currentDiff = 0;
    if (firstNum >= secondNum) {
      currentDiff = firstNum - secondNum;
    } else {
      currentDiff = secondNum - firstNum;
    }

    if (currentDiff > maxDiff) {
      maxDiff = currentDiff;
    }
  }

  return maxDiff;
}
