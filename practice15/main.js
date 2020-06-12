var target_value = 2;
var target_array = [4, 6, -9, -12, 16, 20, -25, -30];
console.log('target value:' + target_value, 'target_array:', target_array);

function vick_combo_problem_3(n) {
  var main_list = [],
    negative = false,
    counter = 0,
    starting_point = n,
    current_num_to_add = 2;
  for (var i = 0; i < 4; i++) {
    var sublist = [starting_point, starting_point + current_num_to_add];
    main_list.push(sublist);
    current_num_to_add += 1;
    starting_point = sublist[1] + current_num_to_add;
  }
  while (counter < 4) {
    if (counter % 2 != 0) {
      main_list[counter][0] = -main_list[counter][0];
      main_list[counter][1] = -main_list[counter][1];
    }
    counter++;
  }
  // turn multi-dimensional array into a single dimensional array
  var final_list = main_list.concat.apply([], main_list);
  console.log(final_list);
  return final_list;

}

/***************************/
function dan_output(N) {
  var test_array = [];
  var inner2 = null;
  for (var outer = N; outer < N + 4; outer++) {
    for (var inner = outer; inner < outer + 2; inner++) {
      inner2 = ((outer % 2 ? -1 : 1) * outer) * inner;
      test_array.push(inner2);
    }
  }
  return test_array;
}
/***************************/
function rhett_array_thing(num) {
  var a = [];
  for (outer = 0; outer <= 3; outer++) {
    if (outer % 2 === 0) {
      for (inner = 2 * outer; inner <= 2 * outer; inner++) {
        a[inner] = num * num;
        a[inner + 1] = num * (num + 1);
      }
    } else {
      for (inner = 2 * outer; inner <= 2 * outer; inner++) {
        a[inner] = (-1) * num * num;
        a[inner + 1] = (-1) * num * (num + 1);
      }
    }
    num++;
  }
  console.log(a);
}
console.log(dan_output(2));
