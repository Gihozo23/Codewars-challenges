"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binaryArrayToNumber = binaryArrayToNumber;
function binaryArrayToNumber(arr) {
    let number = 0;
    const reversedArray = arr.reverse();
    for (let i = 0; i < reversedArray.length; i++) {
        number += reversedArray[i] * 2 ** i;
    }
    return number;
}
console.log(binaryArrayToNumber([1, 0, 0, 1]));
