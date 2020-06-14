var target_value = 2;
var target_array = [2, 3, 5, 6, 8, 9, 11, 12];
console.log('target value:' + target_value, 'target_array:', target_array);
function davidg_spitSequence(n) {
  var arr = [n]; //n = 2
  var adder = 1;
  var newVal = n;
  while (arr.length < 8) {
    newVal += adder; //2 + 1 = 3
    arr.push(newVal); //[2, 3]
    adder += 1;
    if (arr.length === 8) {
      break;
    } else {
      newVal += adder;
      arr.push(newVal);
      adder -= 1;
    }
  }
  console.log(arr);
}

//davidg_spitSequence(2);

function danielp_spitSequence(N) {
  var array = [];
  var difference = 3;
  for (var outer = N; outer < (7 + N + difference); outer += difference) {
    for (var inner = 0; inner < 2; inner++) {
      array.push(outer + inner);
    }
  }
  return array;
}



function vick_patterned_Array(n) {
  var current_num,
    list = [n, n + 1];
  for (var i = 2; i < 8; i++) {
    if (i % 2 == 0) {
      list[i] = list[i - 1] + n;

    }
    else {
      list[i] = list[i - 1] + 1;
    }
  }
  return list;

}
console.log(vick_patterned_Array(2));
