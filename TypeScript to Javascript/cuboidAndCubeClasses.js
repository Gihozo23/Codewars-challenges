"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = exports.Cuboid = void 0;
class Cuboid {
    constructor(length, width, height) {
        this.length = length;
        this.width = width;
        this.height = height;
    }
    surfaceArea() {
        return (2 *
            (this.width * this.height +
                this.height * this.length +
                this.width * this.length));
    }
    volume() {
        return this.length * this.width * this.height;
    }
}
exports.Cuboid = Cuboid;
class Cube extends Cuboid {
    constructor(length) {
        super(length, length, length);
        this.length = length;
        this.width = length;
        this.height = length;
    }
}
exports.Cube = Cube;
var cuboid = new Cuboid(1, 2, 3);
