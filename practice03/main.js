function groupArray(arr) {
  const boolean = [];
  const string = [];
  const number = [];
  const undefinedArr = [];
  const nullArr = [];

  for (let i = 0; i < arr.length; i++) {
    switch (typeof arr[i]) {
      case 'number':
        number.push(arr[i]);
        break;
      case 'string':
        string.push(arr[i]);
        break;
      case 'boolean':
        boolean.push(arr[i]);
        break;
      case 'undefined':
        undefinedArr.push(arr[i]);
        break;
      case 'object':
        nullArr.push(arr[i]);
        break;
      default:
        break;
    }
  }
  return [boolean, string, number, undefinedArr, nullArr]
}

const myArray = ['hello', 34, null, true, undefined, false, null, undefined, 'goodbye', 56, 12, '25', true];

console.log(groupArray(myArray))
