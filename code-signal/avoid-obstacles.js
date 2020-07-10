function avoidObstacles(inputArray) {
    let highestValue = 0;
    for (let i = 2; i < 1000000; i++) {
        let isEvenlyDivisible = false;
        for (let j = 0; j < inputArray.length; j++) {
            if (inputArray[j] >= highestValue) {
                highestValue = inputArray[j];
            }
            if (!(inputArray[j] % i)) {
                isEvenlyDivisible = true;
            }
        }
        if (!isEvenlyDivisible) return i;
    }
    return highestValue + 1;
}
