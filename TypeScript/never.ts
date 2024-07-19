const letter = "Merde";
const number = 8; // when you use const without assigning a type, the assigned value becomes the type

let alpabet = "abc... ";
let num = 9; // when you use let without assigning a type, type inference is immediately done

let someVar1: cher = "one";
let som: never;
// som = someVar1 // An error will occur that "Type 'string' is not assignable to type 'never'."

type cher = "one" | "two" | "three";

function thatThrowsAnError(): never {
  throw new Error("this is a trial");
}
let someVar: cher = "one";
someVar = thatThrowsAnError(); //this will work because type never is assigned to
