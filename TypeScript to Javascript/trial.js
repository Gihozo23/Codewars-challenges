"use strict";
const a = ["hello", 1];
const b = ["beautiful", 2, true];
const c = ["world", 3, true, false, true, false, true];
const d = ["Hey", 9];
// let obj: unknown = { x: 0 };
// obj = { y: 9 };
// if (typeof obj === "object") {
//   obj.y = 10;
// }
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// let x: any = 9;
// x = "you can change me";
// async function fetchData(): Promise<unknown> {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data:  = response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// fetchData();
// let y = fetchData().then((data) => console.log(data))
// let obj: x = { x: 0 };
// // None of the following lines of code will throw compiler errors.
// // Using `any` disables all further type checking, and it is assumed
// // you know the environment better than TypeScript.
// obj.x = "hello"
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";
// const n: number = obj;
// type functionThatReturnsString = () => string
// const trial: functionThatReturnsString = () => {
//     return "0";
// }
// function trial1(): number{
//     return 0;
// }
// let a: number = 2;
// let b: number = 2;
// type functionThatReturnsNumber = () => number
// const trial2: functionThatReturnsNumber = () => 2;
// function trial3():string {
//     return "2";
// }
// // let u:any = true;
// // u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// // Math.round(u);
// // let w: unknown = 1;
// // w = "string";
// // w = {};// no error
// // w = {
// //   runANonExistentMethod: () => {
// //     console.log("I think therefore I am");
// //   }
// // } as { runANonExistentMethod: () => void}
// // // How can we avoid the error for the code commented out below when we don't know the type?
// // // w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
// // if(typeof w === 'object' && w !== null) {
// //   (w as { runANonExistentMethod: Function }).runANonExistentMethod();
// // }
// function add(a: number, b: number): number {
//   return a + b;
// }
// add(7, 7);
//types
// type Users = {
//   firstName : string,
//   lastName : string,
//   age ?: number
// }
// type Employers = {
//   homeAddress: string,
//   workAddress : string,
//   salary : number
// }
// type Person1 = Employers | Users
// const ourFirstPerson: Person1 = {
//   homeAddress: "string",
//   workAddress : "string",
//   salary: 9,
//   // firstName : "string",
//   // lastName : "string",
//   // age : 9
// }
// function whoAmI(user: Users): string{
//   return `My name is ${user.lastName} ${user.firstName} and I am ${user.age} years old, nice to meet you!`;
// }
// console.log(whoAmI({ firstName: "Gihozo", lastName: "Christelle"}));
// let arr = [3, 6, 8];
// function takeAnArray(arr: [a: number, b: number, c: string]) {
//   arr.push("y")
//   console.log(arr);
// }
// takeAnArray([2, 4, "g"]);
//Type casting
let num1 = 2;
let len = num1.length;
function add(a, b) {
    return a + b;
}
let answer = add(8, 9).length;
console.log(len);
function trial5(userData) {
    return {
        "lastName": userData.lastName,
        "age": userData.age
    };
}
function trial1(userData) {
    return `${userData.firstName} and ${userData.lastName}`;
}
function trial2(userData) {
    return `${userData.firstName}`;
}
const user2 = {
    firstName: "Marie",
    lastName: "Lepen",
    age: 90,
    getPerson: function () {
        console.log(`My name is ${this.lastName}, I am ${this.age}`);
    }
};
trial5({});
// Readonly, nonnullable and exclude, extract( for union types only)
function trial(userData) {
    //   userData.age = 3; // can't reassign the property because it is readonly
    return {
        "lastName": userData.lastName,
        "age": userData.age
    };
}
// console.log(trial({ lastName: "Marie", age: 90, getPerson(){} })
// )
// class Girl implements Person {
//   private name;
//   public age: number;
//   protected address: string;
//   constructor(name: string, age: number, address: string) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//   }
//   getPerson() {
//     return `My name ${this.name}, I am ${this.age} years old and I live in ${this.address}`
//   }
// }
// const firstGirl = new Girl("Marie", 67, "Kigali");
// console.log(Girl)
const jsonString = '{"name": "John", "age": 30}';
const parsedObject = JSON.parse(jsonString);
//enums
var myGroup;
(function (myGroup) {
    myGroup[myGroup["b"] = 0] = "b";
    myGroup[myGroup["name"] = 1] = "name";
})(myGroup || (myGroup = {}));
const dfgh = 0;
const arr = [9, 9, 0];
const me = myGroup.name;
function buy(device) {
    if (device === "windows" || "mac") {
        return `${device} is Pc`;
    }
    else {
        return `${device} is Phone`;
    }
}
console.log(buy("mac"));
const youKnow = (a) => {
    throw new Error("HUmmm");
};
youKnow("nigga");
let neverMind;
let str = "youKnow()";
// neverMind =str can not assign never to string 
// Type guards are used to narrow down the types in conditonal blocks
//How to use abstract class 
class Computer {
    constructor() {
        this.id = 0;
    }
}
class laptop {
    constructor(name) {
        this.id = 2;
        this.brand = "hp";
        this.ram = 34;
        this.name = name;
    }
    upgrade(num) {
        return 0;
    }
}
const ipad = new laptop("lenevo");
console.log(ipad.id);
class Person3 {
    constructor(name, age, numb) {
        this.name = name;
        this.age = age;
        this.num = numb;
    }
    getName() {
        return `${this.name} ${this.age} ${this.num}`;
    }
}
const y = new Person3("ange", 34, 34);
console.log(p.getName());
const car1 = {
    make: "Benz",
    model: "p34"
};
const bus1 = {
    make: "Range",
    model: "rava",
};
const vehicle11 = [car1, bus1];
