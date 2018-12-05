function removeFromArray() {
    let array = Array.from(arguments);
    let arrayToSearch;
    if (arguments.length === 1) {
        return array[0];
    } else {
        arrayToSearch = [...array[0]];
        // i is the length of the first argument, which is an array
        // i counts down through the array's items
        // when the value of i decrements, the j for loop runs again.
        for (let i = arrayToSearch.length - 1; i >= 0; i--) {
            // j is the length of the arguments
            // j moves through the arguments until it reaches the first argument, the given array
            for (let j = arguments.length - 1; j >= 1; j--) {
                //as j is counted down, arguments[j] is tested to see if it equals arrayToSearch[i]
                // arrayToSearch[i] remains on the i value of the previous loop until j counts down to 1
                if (arrayToSearch[i] === arguments[j]) {
                    arrayToSearch.splice(i, 1);
                }
            }
        }
        return arrayToSearch;
    }
}






module.exports = removeFromArray


