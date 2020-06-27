const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < i; j++) {
      if (array[i] < array[j]) {
        const lesser = array.splice(i, 1);
        if (j === 0) {
          array.unshift(lesser[0]);
        } else {
          array.splice(j, 0, lesser[0]);
        }
      }
    }
  }
}

insertionSort(numbers);
console.log(numbers);
