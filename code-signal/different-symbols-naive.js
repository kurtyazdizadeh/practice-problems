function differentSymbolsNaive(s) {
  let total = 0;
  const map = {};

  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === undefined) {
      map[s[i]] = true;
      total++;
    }
  }
  return total;
}
