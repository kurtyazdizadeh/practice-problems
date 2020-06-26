//Implement a function that reverses a string using iteration...and then recursion!
function reverseString(str) {
  if (str.length === 1) return str;

  let lastChar = str[str.length - 1];
  str = str.substring(0, str.length - 1);

  return lastChar + reverseString(str);
}

reverseString('yoyo mastery')
//should return: 'yretsam oyoy'
