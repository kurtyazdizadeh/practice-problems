function countOccurences(array, keyWord){
  var counter = 0;
  for (var i=0; i < array.length; i++) {
    if (array[i] === keyWord) {
      counter++;
    }
  }
  return counter;
}

function wordLengths(array){
  var numberArray = [];
  for (var i=0; i < array.length; i++) {
    numberArray.push(array[i].length)
  }
  return numberArray;
}

function getMinMaxMean(array){
  //sort array in ascending order
  array.sort((a, b) => a - b);

  var minVal = array[0];
  var maxVal = array[array.length - 1];
  var mean = 0;

  //calculate mean
  for(i=0; i<array.length; i++){
    mean += array[i];
  }
  mean /= array.length;

  var results = {
    "min": minVal,
    "max": maxVal,
    "mean": mean
  };
 return results;
}

function findMode(array){
  var modes = [],
      count = [],
      maxIndex = 0;

  for (var i = 0; i < array.length; i++) {
    var number = array[i];
    count[number] = (count[number] || 0) + 1;
    if (count[number] > maxIndex) {
      maxIndex = count[number];
    }
  }

  for (i in count)
    if (count.hasOwnProperty(i)) {
      if (count[i] === maxIndex) {
        modes.push(Number(i));
      }
    }

  return modes;

  // var uniqueNums = [];
  // var unsortedObj = {};

  // //get unique values to compare
  // for (var i = 0; i < array.length; i++){
  //   if (!uniqueNums.includes(array[i])){
  //     uniqueNums.push(array[i]);
  //   }
  // }
  // //count how many times each unique number is in original array
  // for (var i = 0; i < uniqueNums.length; i++) {
  //   var counter = 1;
  //   for (var x = 0; x < array.length; x++) {
  //     if (uniqueNums[i] === array[x]) {
  //       unsortedObj[uniqueNums[i]] = counter++;
  //     }
  //   }
  // }
  // //sort the unsortedObj
  // var sorted = [];
  // for (var uniqueNums in unsortedObj) {
  //   sorted.push([uniqueNums, unsortedObj[uniqueNums]])
  // }
  // sorted.sort((a, b) => a[1] - b[1]);

  // return parseInt(sorted[sorted.length-1][0];


}
