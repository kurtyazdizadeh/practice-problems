// Write a function that reverses characters in (possibly nested) parentheses in the input string.

// Input strings will always be well - formed with matching()s.

//   Example

// For inputString = "(bar)", the output should be
// reverseInParentheses(inputString) = "rab";
// For inputString = "foo(bar)baz", the output should be
// reverseInParentheses(inputString) = "foorabbaz";
// For inputString = "foo(bar)baz(blim)", the output should be
// reverseInParentheses(inputString) = "foorabbazmilb";
// For inputString = "foo(bar(baz))blim", the output should be
// reverseInParentheses(inputString) = "foobazrabblim".
//   Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".


const OPEN = '(';
const CLOSE = ')';

const reverseString = (string) => {
  let output = '';
  for (let i = string.length - 1; i >= 0; i--) {
    output += string[i];
  }
  return output;
}

const reverseInParentheses = (inputString) => {
  let output = '';

  const reverse = (string, startingIndex) => {
    let result = '';
    for (let i = startingIndex; i < string.length; i++) {
      if (string[i] === OPEN) {
        const [resultString, newIndex] = reverse(string, i + 1);
        result += resultString;
        i = newIndex;
        continue;
      }
      if (string[i] === CLOSE) {
        return [reverseString(result), i];
      }
      result += string[i];
    }
    return [reverseString(result), string.length - 1];
  }

  for (let i = 0; i < inputString.length; i++) {
    if (inputString[i] === OPEN) {
      const [resultString, newIndex] = reverse(inputString, i + 1);
      i = newIndex;
      output += resultString;
    }
    if (inputString[i] === CLOSE) continue;
    output += inputString[i];
  }

  return output;
}
