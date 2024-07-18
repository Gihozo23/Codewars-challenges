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
