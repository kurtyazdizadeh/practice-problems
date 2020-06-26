const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let currentMin = array[i];
    let currentMinIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (currentMin > array[j]) {
        currentMin = array[j]
        currentMinIndex = j;
      }
    }
    array[currentMinIndex] = array[i];
    array[i] = currentMin;
  }
  return array;
}

selectionSort(numbers);
