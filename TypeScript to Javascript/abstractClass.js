"use strict";
// abstract class Person1 {
//     constructor(name: string, age: number, address: string) {
//     }
//     abstract makeAnEffort(): string;
//     makeResignationLetter(name:string): string{
//         return `Greetinga, ${name}, I regret to inform you ...`
//     }
// }
// class User implements Person1{
//     constructor(name: string, age: number, address: string) {
//         name = "salut",
//             age = 98;
//     }
//     makeAnEffort(){
//         return `Greetings, ${name}, Please improve`;
//     };
//     makeResignationLetter(name:string): string{
//         return `Greetings, ${name}, I regret to inform you ...`
//     }
// }
// const girl = new User("Omi", 89, "kigali")
// console.log(girl.makeAnEffort())
class Person {
    constructor(name, age, numb) {
        this.name = name;
        this.age = age;
        this.num = numb;
    }
    getName() {
        return `${this.name} ${this.age} ${this.num}`;
    }
}
const p = new Person("ange", 34, 34);
console.log(p.getName());
const car = {
    make: "Benz",
    model: "p34"
};
const bus = {
    make: "Range",
    model: "rava",
};
const vehicle = [car, bus];
