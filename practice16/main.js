var target_value = 2;
var target_array = [0, 3, 0, 0, 6, 0, 0, 9, 0, 0, 12];
console.log('target value:' + target_value, 'target_array:', target_array);

/*****************************/
function danielp_spitSequence(N) {
  var array = [];
  for (var i = N; i < (N + 11); i++) {
    if (!(i % 3)) {
      array.push(i);
    }
    else {
      array.push(0);
    }
  }
  return array;
}
/*****************************/
function danielp_spitSequence2(N) {
  var array = [];
  for (var i = N; i < (N + 11); i++) {
    array.push(!(i % 3) * i);
  }
  return array;
}
/*****************************/
function vick_num_array_cacacacombo() {
  var starting_num = 2,
    list = [0],
    tracker = 1;
  for (var i = 1; i < 11; i++) {
    if (i == tracker) {
      list[i] = starting_num + tracker;
      tracker += 3;
    }
    else {
      list[i] = 0;
    }
  }
  return list;
}
/*****************************/
function david_sequence(n) {
  var array = [];
  while (array.length < 11) {
    if (n % 3 === 0) {
      array.push(n);
    } else {
      array.push(0);
    }
    n++;
  }
  return array;
}

console.log(danielp_spitSequence2(2));
