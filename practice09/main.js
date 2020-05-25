const fittingWords = (str, arr) => {
  const output = [];

  const characters = str.split('');

  for (let i = 0; i < arr.length; i++) {
    let allMatch = true;
    for (let k = 0; k < characters.length; k++) {
      if (!arr[i].includes(characters[k])) {
        allMatch = false;
      }
    }
    if (allMatch) {
      output.push(arr[i]);
    }
  }
  return output;
}

const myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];

console.log(fittingWords('cat', myArray));
