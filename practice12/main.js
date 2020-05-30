const stupidSequence = (number) => {
  const result = [];
  for(let i = number*2; i < number+38; i += 2) {
    let o = 0;
    if (i > number*10) {
      o = i / 4;
    } else {
      o = i;
    }
    result.push(o);
  }
  return result;
}

console.log(stupidSequence(2));
console.log(stupidSequence(5));
