function absoluteValuesSumMinimization(a) {
  const map = {};
  let smallestDiff = Infinity;

  for (let i = 0; i < a.length; i++) {
    let totalDiff = 0;
    for (let j = 0; j < a.length; j++) {
      totalDiff += Math.abs(a[j] - a[i]);
    }
    if (map[totalDiff] === undefined) {
      map[totalDiff] = a[i];
    }
  }

  for (const key in map) {
    if (parseInt(key) < smallestDiff) {
      smallestDiff = key;
    }
  }

  return map[smallestDiff];
}
