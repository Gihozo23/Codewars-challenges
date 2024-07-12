"use strict";
function generateShape(int) {
    let result = "";
    for (let i = 0; i < int; i++) {
        result += "+".repeat(int);
        result += `\n`;
    }
    return result.trim(); // your code here
}
generateShape(8);
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
// const res = add('Joyous ', '21');
// console.log(res);
