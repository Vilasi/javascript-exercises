function reverseString(a) {
    let stringToArray = a.split('');
    stringToArray = stringToArray.reverse();
    stringToArray = stringToArray.join('');
    return stringToArray;
}


module.exports = reverseString
