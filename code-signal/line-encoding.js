// Given a string, return its encoding defined as follows:

// First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
// for example, "aabbbc" is divided into["aa", "bbb", "c"]
// Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
// for example, substring "bbb" is replaced by "3b"
// Finally, all the new strings are concatenated together in the same order and a new string is returned.
//   Example

// For s = "aabbbc", the output should be
// lineEncoding(s) = "2a3bc".

function lineEncoding(s) {
  let currentChar = s[0];
  let count = 0;
  let result = '';

  for (let i = 0; i < s.length; i++) {
    if (s[i] === currentChar) count++;
    if (s[i] !== currentChar) {
      if (count === 1) result += s[i - 1]
      else result += count + s[i - 1]
      currentChar = s[i];
      count = 1;
    }
    if (i === s.length - 1) {
      if (count === 1) result += s[i]
      else result += count + s[i]
    }
  }
  return result;
}
