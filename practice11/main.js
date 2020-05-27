const evenOdds = (array) => {
  const output = { odd: [], even: [] };
  const cache = {};

  for (let i = 0; i < array.length; i++) {
    let currentVal = array[i];

    if (typeof currentVal !== 'number') continue;

    if (currentVal % 2) {
      if (cache[currentVal] === undefined) {
        cache[currentVal] = true;
        output.odd.push(currentVal);
      }
    }
    if (currentVal % 2 === 0) {
      if (cache[currentVal] === undefined) {
        cache[currentVal] = true;
        output.even.push(currentVal)
      }
    }
  }

  return output;
}


console.log(evenOdds([2, 5, 1, 6, 8, 2, 20, 'cat', 13, 3]));
