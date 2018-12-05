function repeatString(a,b) {
    let heyString = "";
    if (b === 1) {
        heyString = a;
        returnString = heyString;
    } else if (b === 0) {
        returnString = heyString;
    } else if (b < 0) {
        heyString = "ERROR";
        returnString = heyString;
    } else {
        for (let i = 0; i < b; i++) {
            heyString += a;
            returnString = heyString;
        }
    }
    return returnString;
}


   module.exports = repeatString
