function extractEachKth(inputArray, k) {
  let output = [];
  for (let i = 0; i < inputArray.length; i++) {
    if ((i + 1) % k === 0) {
      inputArray[i] = false;
    }
  }
  for (let j = 0; j < inputArray.length; j++) {
    output = inputArray.filter(val => val !== false)
  }

  return output;
}
