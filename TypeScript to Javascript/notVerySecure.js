"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.alphanumeric = alphanumeric;
function alphanumeric(string) {
    const lowerCasedString = string.toLowerCase();
    if (lowerCasedString === "" || lowerCasedString.includes(" ") || lowerCasedString.includes(" "))
        return false;
    const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97));
    let count = 0;
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    for (let i = 0; i < lowerCasedString.length; i++) {
        if (alphabet.includes(lowerCasedString[i]) || digits.includes(lowerCasedString[i]))
            count++;
        else
            break;
    }
    return count === lowerCasedString.length;
}
console.log(alphanumeric("hello0_"));
