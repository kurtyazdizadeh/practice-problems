var input = 'abc';

function permutations(input_string) {
  var input_array = input_string.split(''); // ['a','b','c']
  var results = [];

  function permute(input_array, queue) {
    var current;
    var queue = queue || '';

    for (var i = 0; i < input_array.length; i++) {
      current = input_array.splice(i, 1);
      if (input_array.length === 0) {
        results.push(queue += current[0]);
      }
      permute(input_array.slice(), queue.concat(current));
      input_array.splice(i, 0, current[0]);
    }

    return results;
  }

  return permute(input_array);
}

console.log(permutations(input));
