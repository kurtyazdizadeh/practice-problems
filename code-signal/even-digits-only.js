function evenDigitsOnly(n) {
  const numberStr = n.toString();
  let output = true;

  for (let i = 0; i < numberStr.length; i++) {
    if (Number(numberStr[i]) % 2) {
      output = false;
    }
  }

  return output;
}
