export abstract class Animal {
  /** @param {number} value The length of the animal in parrots. */
  protected constructor(public value: number) {}

  abstract convertTo(someone: Animal): number;
}

export class Boa extends Animal {
  constructor() {
    super(38); // 1 Boa equals 38 Parrots
  }

  convertTo(someone: Animal): number {
    if (someone instanceof Boa) {
      return 1; // 1 Boa is still 1 Boa
    } else if (someone instanceof Parrot) {
      return this.value; // 1 Boa equals 38 Parrots
    } else if (someone instanceof Monkey) {
      return this.value / 5; // 38 Parrots equal 7.6 Monkeys
    }
    throw new Error("Unknown animal type");
  }
}

export class Parrot extends Animal {
  constructor() {
    super(1); // 1 Parrot equals 1 Parrot
  }

  convertTo(someone: Animal): number {
    if (someone instanceof Boa) {
      return this.value / 38; // 1 Parrot equals 1/38 Boas
    } else if (someone instanceof Parrot) {
      return 1; // 1 Parrot is still 1 Parrot
    } else if (someone instanceof Monkey) {
      return this.value / 5; // 1 Parrot equals 1/5 Monkeys
    }
    throw new Error("Unknown animal type");
  }
}

export class Monkey extends Animal {
  constructor() {
    super(5); // 1 Monkey equals 5 Parrots
  }

  convertTo(someone: Animal): number {
    if (someone instanceof Boa) {
      return this.value / 38; // 5 Parrots equals 5/38 Boas
    } else if (someone instanceof Parrot) {
      return this.value; // 1 Monkey equals 5 Parrots
    } else if (someone instanceof Monkey) {
      return 1; // 1 Monkey is still 1 Monkey
    }
    throw new Error("Unknown animal type");
  }
}
