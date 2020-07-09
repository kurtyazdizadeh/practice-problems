function alphabeticShift(inputString) {
    let output = '';
    for (let i = 0; i < inputString.length; i++) {
        let nextLetterCode = inputString.charCodeAt(i) + 1;
        if (nextLetterCode === 123) {
            nextLetterCode = 97;
        }
        if (!output){
        output = String.fromCharCode(nextLetterCode);
        } else {
        output += String.fromCharCode(nextLetterCode);
        }
    }
    return output;
}
