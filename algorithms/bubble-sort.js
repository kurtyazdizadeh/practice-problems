const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      let placeholder = array[j + 1];
      if (array[j] > placeholder) {
        array[j + 1] = array[j];
        array[j] = placeholder;
      }
    }
  }
  return array;
}

bubbleSort(numbers);
