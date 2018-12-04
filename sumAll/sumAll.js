function sumAll() {
    let arrayToCheck = Array.from(arguments);
    let numbersToSum = [];
    let bigNumber;
    let smallNumber;
    let finalSum;

    for (let i = arrayToCheck.length - 1; i >= 0; i--) {
        if (typeof arrayToCheck[i] !== "number" || arrayToCheck[i] <= 0) {
            return "ERROR"
        } else {
            numbersToSum[i] = arrayToCheck[i];
        }
    }

    bigNumber = Math.max(...numbersToSum);
    smallNumber = Math.min(...numbersToSum);
    finalSum = smallNumber;

    for (let i = smallNumber + 1; i <= bigNumber; i++) {
        finalSum += i
    } 
    return finalSum;
}

module.exports = sumAll
