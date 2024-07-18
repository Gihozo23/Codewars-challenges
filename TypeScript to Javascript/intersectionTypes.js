"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intersect = intersect;
function intersect(first, second) {
    let result = {};
    for (let id in first) {
        if (id in second && id in first) {
            result[id] = first[id];
        }
        else
            break;
    }
    return result;
}
const obj1 = { a: 1 };
const obj2 = { a: 2, b: 2 };
const intersection = intersect(obj1, obj2);
console.log(intersection);
