const factors = (arr) => {
  const output = {};

  for (let i = 0; i < arr.length; i++) {
    output[arr[i]] = [];

    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        output[arr[i]].push(j);
      }
    }
  }

  return output;
}

console.log(factors([4,2,8,6,3,9]))
