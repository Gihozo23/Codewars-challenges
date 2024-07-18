"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUID = void 0;
exports.default = getUsername;
//Generics help you to reuse a block of code with different types.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    console.log(uid);
    return Object.assign(Object.assign({}, obj), { uid });
};
exports.addUID = addUID;
// let doc2 = addUID([6, 7, 6, 5, 4, 3]) after including that T extends {name: string} this becomes an error but if we say that it extends object the error will be done
// console.log(doc2)
let docOne = (0, exports.addUID)({ name: "yoshi", age: 40 });
console.log(docOne.name);
const someUser = {
    name: "Mireille",
    age: 89,
    address: "Kibungo",
};
const myUser = {
    name: "Mike",
    age: 16,
    address: ["Nyamirambo", "Nyarugenge"],
};
function getUsername(username) {
    if (username !== null) {
        return `User: ${username}`;
    }
    else {
        return "Guest";
    }
}
const result = getUsername("Alice");
const result2 = getUsername(null);
