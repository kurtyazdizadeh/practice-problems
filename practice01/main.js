function biggerWords (str, arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (str.length < arr[i].length) {
      result.push(arr[i]);
    }
  }
  return result;
}

const myArray = ['bug', 'insect', 'mammal', 'reptile', 'mammoth', 'turtles'];

console.log(biggerWords('whales', myArray))
