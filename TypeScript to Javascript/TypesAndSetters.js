"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
class Cube {
    constructor(length) {
        this.length = length;
        this.length = length;
    }
    get surfaceArea() {
        return 6 * (this.length * this.length);
    }
    get volume() {
        return Math.pow(this.length, 3);
    }
    set surfaceArea(surfaceArea) {
        this.length = Math.sqrt(surfaceArea / 6);
    }
    set volume(volume) {
        this.length = Math.cbrt(volume);
    }
}
exports.Cube = Cube;
