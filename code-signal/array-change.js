function arrayChange(inputArray) {
  let incrementor = 0;
  for (let i = 1; i < inputArray.length; i++) {
    while (inputArray[i] <= inputArray[i - 1]) {
      incrementor++;
      inputArray[i]++;
    }
  }
  return incrementor;
}
