// Given a rectangular matrix of characters, add a border of asterisks(*) to it.

//   Example

// For

// picture = ["abc",
//   "ded"]
// the output should be

// addBorder(picture) =
//  ["*****",
//   "*abc*",
//   "*ded*",
//   "*****"]


function addBorder(picture) {
  const newStringLength = picture[0].length + 2;
  const result = [];

  const frameStartEnd = "*".repeat(newStringLength);

  result.push(frameStartEnd);
  for (let i = 0; i < picture.length; i++) {
    result.push(`*${picture[i]}*`);
  }
  result.push(frameStartEnd);

  return result;
}
