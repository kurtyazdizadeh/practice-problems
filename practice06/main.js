const fibSequence = num => {
  let output = [0, 1];
  for (let i = 2; i < num; i++) {
    output.push(output[i-2] + output[i-1]);
  }

  let returnVal = output[0];

  for (let i = 1; i < output.length; i++) {
    returnVal += ` ${output[i]}`;
  }

  return returnVal;
}

console.log(fibSequence(12));
