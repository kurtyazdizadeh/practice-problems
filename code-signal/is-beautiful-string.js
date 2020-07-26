// A string is said to be beautiful if each letter in the string appears at most as many times as the previous letter in the alphabet within the string; ie: b occurs no more times than a; c occurs no more times than b; etc.

// Given a string, check whether it is beautiful.

function isBeautifulString(inputString) {
  const map = {};

  for (let i = 0; i < inputString.length; i++) {
    let currentCharacter = inputString[i];
    if (map[currentCharacter] === undefined) {
      map[currentCharacter] = 1;
    } else {
      map[currentCharacter] += 1
    }
  }

  for (const key in map) {
    if (key === 'a') continue;
    const prevChar = String.fromCharCode(key.charCodeAt(0) - 1);
    if (map[key] <= map[prevChar]) continue;
    else return false;
  }

  return true;
}
