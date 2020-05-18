const convert = (str) => {
  let output = '';

  for (let i = 0; i < str.length; i++) {
    output += str.charCodeAt(i);
  }

  return output;
}

console.log(convert('the cat in the hat'));
