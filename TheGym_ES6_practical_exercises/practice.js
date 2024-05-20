// Create a function that performs a deep comparison between two arrays of objects, checking for equality 
// of nested properties.
// const array1 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// const array2 = [
//     { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
//     { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
// ];

// // console.log(deepEqualArrays(array1, array2));
// output: true
// ......................................................................................

const array1 = [
    { id: 1, name: "Alice", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

const array2 = [
    { id: 1, name: "Alice ", details: { age: 30, city: "New York" } },
    { id: 2, name: "Bob", details: { age: 25, city: "Los Angeles" } }
];

// output: false
let deepEqualArrays = (input1,input2)=>
    {
       let str1= JSON.stringify(input1);
       let str2 =JSON.stringify(input2)
       return `${str1===str2?true:false}`;
    }
    
    
    console.log(deepEqualArrays(array1, array2));
