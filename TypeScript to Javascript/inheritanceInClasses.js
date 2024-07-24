"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monkey = exports.Parrot = exports.Boa = exports.Animal = void 0;
class Animal {
    /** @param {number} value The length of the animal in parrots. */
    constructor(value) {
        this.value = value;
    }
}
exports.Animal = Animal;
class Boa extends Animal {
    constructor() {
        super(38); // 1 Boa equals 38 Parrots
    }
    convertTo(someone) {
        if (someone instanceof Boa) {
            return 1; // 1 Boa is still 1 Boa
        }
        else if (someone instanceof Parrot) {
            return this.value; // 1 Boa equals 38 Parrots
        }
        else if (someone instanceof Monkey) {
            return this.value / 5; // 38 Parrots equal 7.6 Monkeys
        }
        throw new Error("Unknown animal type");
    }
}
exports.Boa = Boa;
class Parrot extends Animal {
    constructor() {
        super(1); // 1 Parrot equals 1 Parrot
    }
    convertTo(someone) {
        if (someone instanceof Boa) {
            return this.value / 38; // 1 Parrot equals 1/38 Boas
        }
        else if (someone instanceof Parrot) {
            return 1; // 1 Parrot is still 1 Parrot
        }
        else if (someone instanceof Monkey) {
            return this.value / 5; // 1 Parrot equals 1/5 Monkeys
        }
        throw new Error("Unknown animal type");
    }
}
exports.Parrot = Parrot;
class Monkey extends Animal {
    constructor() {
        super(5); // 1 Monkey equals 5 Parrots
    }
    convertTo(someone) {
        if (someone instanceof Boa) {
            return this.value / 38; // 5 Parrots equals 5/38 Boas
        }
        else if (someone instanceof Parrot) {
            return this.value; // 1 Monkey equals 5 Parrots
        }
        else if (someone instanceof Monkey) {
            return 1; // 1 Monkey is still 1 Monkey
        }
        throw new Error("Unknown animal type");
    }
}
exports.Monkey = Monkey;
