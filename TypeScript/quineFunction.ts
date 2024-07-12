//Generics help you to reuse a block of code with different types.
export const addUID = <T extends { name: string }>(obj: T) => {
    let uid = Math.floor(Math.random() * 1000);
    console.log(uid)
    return { ...obj, uid }; 
};
// let doc2 = addUID([6, 7, 6, 5, 4, 3]) after including that T extends {name: string} this becomes an error but if we say that it extends object the error will be done 
// console.log(doc2)
let docOne = addUID({name: "yoshi", age: 40});
console.log(docOne.name);

//Interface defines who an object should look, the structure and also the types
interface myFirst <T>{
    name: string;
    age: number;
    address: T
}
const someUser: myFirst<string> = {
    name: "Mireille",
    age: 89,
    address: "Kibungo"
}
const myUser: myFirst<string[]> = {
    name: "Mike",
    age: 16,
    address: ["Nyamirambo", "Nyarugenge"]
}
 export default function getUsername(username: string |null) {
    if (username !== null) {
      return `User: ${username}`
    } else {
      return 'Guest'
    }
}
const result = getUsername('Alice')


const result2 = getUsername(null)

type ResourceStatus<TContent> = unknown;
type Example = ResourceStatus<{
    id: string;
    name: string;
    tracks: string[];
}>;
type Example1 = unknown;

