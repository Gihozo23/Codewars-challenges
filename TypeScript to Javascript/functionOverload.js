"use strict";
function getTheDate(timeStampOrMonth, day, y) {
    if (day !== undefined && y !== undefined) {
        return new Date(y, timeStampOrMonth, day);
    }
    else {
        return new Date(timeStampOrMonth);
    }
}
console.log(getTheDate(9, 7, 2002));
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
