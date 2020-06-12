const mathSequences = (num1, num2) => {
  const result = [];

  result.push(`${num1}+${num2}=${num1+num2}`);
  result.push(`${num1}-${num2}=${num1-num2}`);
  result.push(`${num1}*${num2}=${num1*num2}`);
  result.push(`${num1}/${num2}=${num1/num2}`);

  return result;
}

console.log(mathSequences(2,5));
