"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Square = void 0;
class Square {
    constructor(side) {
        this.side = side;
        this.side = side;
    }
    area() {
        return this.side * this.side;
    }
    perimeter() {
        return 4 * this.side;
    }
}
exports.Square = Square;
class Circle {
    constructor(radius) {
        this.radius = radius;
        this.radius = radius;
    }
    area() {
        return this.radius * this.radius * Math.PI;
    }
    perimeter() {
        return 2 * this.radius * Math.PI;
    }
}
exports.Circle = Circle;
