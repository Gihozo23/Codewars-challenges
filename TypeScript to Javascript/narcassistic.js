"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.narcissistic = narcissistic;
function narcissistic(value) {
    let array = value.toString().split("");
    let lengthOfArray = array.length;
    let result = 0;
    array.forEach((element) => result += Math.pow(parseInt(element), lengthOfArray));
    return result === value;
}
console.log(narcissistic(153));
