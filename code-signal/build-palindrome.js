// Given a string, find the shortest possible string which can be achieved by adding characters to the end of initial string to make it a palindrome.

//   Example

// For st = "abcdc", the output should be
// buildPalindrome(st) = "abcdcba".

function buildPalindrome(st) {
  let reversedSt = st.split('').reverse().join('');

  if (st === reversedSt) return st;
  else {
    for (let i = 0; i < st.length; i++) {
      let allEqual = true;
      let overlapChars = 0;
      for (let j = 0; j < st.length - i; j++) {
        if (reversedSt[j] === st[j+i]) {
          overlapChars++;
        }
        else {
          allEqual = false;
          overlapChars = 0;
          break;
        }
      }
      if (allEqual) {
        return st += reversedSt.slice(overlapChars)
      }
    }
  }

}
