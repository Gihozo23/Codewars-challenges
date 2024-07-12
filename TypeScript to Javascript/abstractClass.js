"use strict";
class Person {
    constructor(name, age, address) {
    }
    makeResignationLetter(name) {
        return `Greetinga, ${name}, I regret to inform you ...`;
    }
}
class User {
    constructor(name, age, address) {
        name = "salut",
            age = 98;
    }
    makeAnEffort() {
        return `Greetings, ${name}, Please improve`;
    }
    ;
    makeResignationLetter(name) {
        return `Greetings, ${name}, I regret to inform you ...`;
    }
}
const girl = new User("Omi", 89, "kigali");
console.log(girl.makeAnEffort());
