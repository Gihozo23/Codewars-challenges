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
  public name: string;
  private age: number;
  protected num: number;
  constructor(name: string, age: number, numb: number) {
    this.name = name;
    this.age = age;
    this.num = numb;
  }
  getName(): string | number {
    return `${this.name} ${this.age} ${this.num}`;
  }
}
const p = new Person("ange", 34, 34);
console.log(p.getName());
//Interface
// Write a TypeScript program that creates a function combine that accepts two parameters of types boolean and number. It returns a value that can be either a boolean or a number. Use a union type to achieve this.
interface Car {
  make: string;
  model: string;
}
type Bus = {
  make: string;
  model: string;
  payload?: number;
};
type Vehicle = Bus | Car;
const car: Car = {
  make: "Benz",
  model: "p34",
};
const bus: Bus = {
  make: "Range",
  model: "rava",
};
const vehicle: Vehicle[] = [car, bus];
