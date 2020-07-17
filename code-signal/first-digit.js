function firstDigit(inputString) {
  for (let i = 0; i < inputString.length; i++) {
    if (Number(inputString[i] >= 0) && inputString[i] !== ' ') return inputString[i]
  }
}
