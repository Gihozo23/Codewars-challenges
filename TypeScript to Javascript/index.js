"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const quineFunction_1 = __importStar(require("./quineFunction"));
(0, quineFunction_1.default)("hey");
console.log((0, quineFunction_1.addUID)({ name: "hello" }));
function logId(id) {
    console.log(id);
}
logId(["string", "number"]);
const getAlbumYear = (year) => {
    if (typeof year === "string") {
        console.log(`The album was released in ${year}.`); // `year` is string
    }
    else if (typeof year === "number") {
        console.log(`The album was released in ${year}.`); // `year` is number | boolean
    }
    console.log(year); // `year` is string | number | boolean
};
getAlbumYear;
const fn = (input) => {
    throw new Error("HEL");
};
// Anything is assignable to unknown!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => { });
let one = fn("hello");
