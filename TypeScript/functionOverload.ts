
/** Function overloading in TS : it is the ability to create multiple functions of the same name 
with different implementations.

1. Overload signature: is a declaration of a function's parameters and return type, but without an actual implementation.

1. Signature implementation : is the actual implementation of the function that handles all the overloads. 


Let's see an example:
*/
function getTheDate(timeStamp: number): Date;// overload signature
function getTheDate(month: number, day: number, y: number): Date; // overload signature
function getTheDate(timeStampOrMonth: number, day?: number, y?: number): Date
{
  //signature implementation
  if (day !== undefined && y !== undefined) { 
    return new Date(y, timeStampOrMonth, day);

  }
  else {
    return new Date(timeStampOrMonth);
  }

}
console.log(getTheDate(2000,8,9));
console.log(getTheDate(9493030));














































// function add(a: string, b: string): string;
// function add(a: number, b: number): number;
// function add(a: number | string, b: number | string): number | string{
//     if (typeof a === "string") return a + b;
//     else if (typeof a === "number" && typeof b === "number") return a + b;
//     else return "";

// };
// console.log(add("Hello", "there"))
// console.log(add(5,8))

// function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const message = Date.now() % 2 === 0 ? 'Hello Tuesdays!' : null
// console.log(Date.now())

// type miney = "hello" | 7 | { name: string, age: number };
// type AllSortsOfStuff =
//    string
//   | number
//   | boolean
//   | object
//   | null
//   | {
//       name: string
//       age: number
//     }
