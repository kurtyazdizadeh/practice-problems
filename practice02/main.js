function arrayReverse(arr) {
  const result = [];

  for (let i = arr.length -1; i >= 0; i--) {
    result.push(arr[i])
  }

  return result;
}

const myArray = ['hello', 45, 'Bob', 'what', '23'];

console.log(arrayReverse(myArray));
