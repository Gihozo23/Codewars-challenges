"use strict";
const letter = "Merde";
const number = 8; // when you use const without assigning a type, the assigned value becomes the type
let alpabet = "abc... ";
let num = 9; // when you use let without assigning a type, type inference is immediately done
let someVar1 = "one";
let som;
function thatThrowsAnError() {
    throw new Error("this is a trial");
}
let someVar = "one";
someVar = thatThrowsAnError(); //this will work because type never is assigned to
