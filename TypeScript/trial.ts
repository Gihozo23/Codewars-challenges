type StringNumberBooleans = [string, number, ...boolean[]];
type StringBooleansNumber = [string, ...boolean[], number];
type BooleansStringNumber = [...boolean[], string, number];
const a: StringNumberBooleans = ["hello", 1];
const b: StringNumberBooleans = ["beautiful", 2, true];
const c: StringNumberBooleans = ["world", 3, true, false, true, false, true];
const d: StringBooleansNumber = ["Hey", 9]

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
let num1: unknown = 2;
let len = (num1 as string).length;
function add(a: number, b: number): number {
  return a + b;
}
let answer = (add(8, 9) as unknown as string).length;
console.log(len);

// //Interface

// How to use Record utility type
// type ourNames = "firstName" | "lastName";
// interface Person {
//   age: number;
//   getPerson(name: string, age: number, address: string): string;
// }
// let names: Record<ourNames, string> = {
//   firstName: "christelle",
//   lastName: "Gihozo"
// }
// console.log(typeof names);


// how to use Partial, Omit and Pick
interface Person1 {
  firstName: string;
  lastName: string;
  age: number;
  getPerson(): void;
}
function trial5(userData: Partial<Person1>): {}{
  return {
    "lastName": userData.lastName,
    "age": userData.age };
}
function trial1(userData: Pick<Person1, "lastName" | "firstName">) :string {
  return `${userData.firstName} and ${userData.lastName}`
}
function trial2(userData: Pick<Person1, "lastName" | "firstName">) : string{
  return `${userData.firstName}`
}

const user2 = {
  firstName: "Marie",
  lastName: "Lepen",
  age: 90,
  getPerson: function () {
    console.log(`My name is ${this.lastName}, I am ${this.age}`)
  }
}
trial5({})

// Readonly, nonnullable and exclude, extract( for union types only)

function trial(userData: Readonly<Person1>): {}{
//   userData.age = 3; // can't reassign the property because it is readonly

  return {
    "lastName": userData.lastName,
    "age": userData.age };
}

type Josuette = "string" | "number" | "boolean"
type PickyNigga = Extract<Josuette, "string" | "boolean">


type Josuette1 = "string" | "number" | "boolean" | undefined | null;

type pickyNigga = NonNullable<Josuette>

type Josuette2 = "string" | "number" | "boolean"
type PickyNigga2 = Extract<Josuette, "string" | "boolean">

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
enum myGroup {
    b,
  name,
  
}
const dfgh: myGroup = 0
const arr =[9,9,0]
const me: myGroup = myGroup.name

// function smaller(nums: number[]): number[] {
//   let count = 0;
//   let result = [];
//   for(let el of nums){
//       for (let i = 1; i < nums.length; i++){
//           if(el > nums[i]){
//               count++
//           }
//       }
//       result.push(count);
//       count = 0;
      
//   }
//   console.log(result)
//   return result;
// }
// smaller([5, 4, 3, 2, 1]);
// // smaller( [1, 2, 0])


//Type Narrowing is the process of narrowing down the types in conditonal blocks
type Pc = "mac" | "windows";
type Phone = "ios" | "android";

function buy(device: Pc | Phone) {
  if (device === "windows" || "mac") {
    return `${device} is Pc`;
  }
  else {
    return `${device} is Phone`
  }
} 
console.log(buy("mac"))

const youKnow = (a : "nigga" | string) => {
    throw new Error("HUmmm")
}
youKnow("nigga")
let neverMind: never;
let str: string = "youKnow()";
// neverMind =str can not assign never to string 

// Type guards are used to narrow down the types in conditonal blocks
//How to use abstract class 
abstract class Computer {
    readonly id:number=0
    abstract brand:string;
    abstract ram:number;
    storage?:number
    abstract upgrade(num:number):number
    
    }
    class laptop implements Computer{
        name:string
        constructor(name:string){
        this.name=name
        }
     id=2
    brand="hp"
    ram=34
    upgrade(num:number):number{
        return 0
    }
    }
    const ipad = new laptop("lenevo");
console.log(ipad.id)
    
class Person3{
        public name:string;
        private age:number;
        protected num:number;
        constructor(name:string,age:number,numb:number){
            this.name=name;
            this.age=age
            this.num = numb
        }
        getName():string|number{
            return `${this.name} ${this.age} ${this.num}`
        }
    }
    const  y= new Person3("ange",34,34);
    console.log(p.getName());
// Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.  
    interface Car1 {
        make:string;
        model:string;
    }
    type Bus1= {
        make:string;
        model:string;
        payload?:number
    }
    type Vehicle1 = Bus1|Car
    const car1:Car1={
        make:"Benz",
        model:"p34"
    }
    const bus1:Bus1={
        make:"Range",
        model:"rava",
    }
    const vehicle11:Vehicle1[]=[car1,bus1]