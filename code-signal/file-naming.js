// You are given an array of desired filenames in the order of their creation.Since two files cannot have equal names, the one which comes later will have an addition to its name in a form of(k), where k is the smallest positive integer such that the obtained name is not used yet.

// Return an array of names that will be given to the files.

// Example

// For names = ["doc", "doc", "image", "doc(1)", "doc"], the output should be
// fileNaming(names) = ["doc", "doc(1)", "image", "doc(1)(1)", "doc(2)"].

function fileNaming(names) {
  const hash = {};
  const result = [];

  for (let i = 0; i < names.length; i++) {
    if (hash[names[i]] === undefined) {
      hash[names[i]] = [1];
    } else {
      hash[names[i]].push(hash[names[i]].length + 1)
    }
  }
  for (let i = 0; i < names.length; i++) {
    const currentFile = names[i];
    if (result.includes(currentFile)) {
      let appendedFileName = currentFile + `(${hash[currentFile][0]})`;
      while (result.includes(appendedFileName)) {
        hash[currentFile] = hash[currentFile].map(count => count + 1);
        appendedFileName = currentFile + `(${hash[currentFile][0]})`;
      }
      result.push(currentFile + `(${hash[currentFile].shift()})`);
    } else {
      result.push(currentFile);
    }
  }
  return result;
}
