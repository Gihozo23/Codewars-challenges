"use strict";
//Generics help you to reuse a block of code with different types.
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    console.log(uid);
    return Object.assign(Object.assign({}, obj), { uid });
};
// let doc2 = addUID([6, 7, 6, 5, 4, 3]) after including that T extends {name: string} this becomes an error but if we say that it extends object the error will be done 
// console.log(doc2)
let docOne = addUID({ name: "yoshi", age: 40 });
console.log(docOne.name);
const someUser = {
    name: "Mireille",
    age: 89,
    address: "Kibungo"
};
const myUser = {
    name: "Mike",
    age: 16,
    address: ["Nyamirambo", "Nyarugenge"]
};
