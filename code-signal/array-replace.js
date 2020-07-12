function arrayReplace(inputArray, elemToReplace, substitutionElem) {
  return inputArray.map(element => {
    if (element === elemToReplace) {
      return element = substitutionElem;
    } else return element;
  })
}
