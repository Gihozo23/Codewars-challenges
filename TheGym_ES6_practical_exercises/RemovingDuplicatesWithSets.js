// // Set Up Sets and Maps: You're working with a list of product IDs that might contain duplicates. 
// // Use a Set to remove all duplicates and return the unique product IDs.

// let removeDuplicates = (arr)=>{
// let result = new Set([...arr]);
// return result;
// }
// console.log(removeDuplicates([1,2,32,1,2,3,4,5,3,2,5,5,3,6,6,7]))


// Implement a function called combineNumbers that receives an array of even and odd numbers mixed, and returns a new array which only contain two elements.
// The first element should be all even numbers from the original array, sorted and concatenated into a string.
// The second element should be all odd numbers from the original array, sorted and concatenated into a string.
// Don’t google.
// Examples:

// let combineNumbers= (input) =>{
//     let resultEven="";
//     let resultOdd="";
// for (let element of input){
//      resultEven += `${element%2===0?element:"" }`;
//      resultOdd+= `${element%2!==0?element:""}`;
// }
// resultEven=resultEven.split("").sort().join("");
// resultOdd=resultOdd.split("").sort().join("");
// return [resultEven,resultOdd];
// }
// console.log(combineNumbers([1, 2, 3])) // return ['2', '13']
// console.log(combineNumbers([5, 2, 4, 7, 0]) )// return ['024', '57']
// console.log(combineNumbers([1, 3, 5, 4, 9, 6, 45, 11, 8, 22])) // return ['46822', '13591145']

// Create a function called findOddsNumbers that takes an array containing both strings and numbers.
//  The function should go through all element in the array and numbers elements will be left unchanged, 
//  for strings the function should examine the size of each string in the array, convert that size to a number
// after converting all strings, the function should return a new array containing only the odd numbers
//  obtained from the conversion.
// let findOddsNumbers= (input) =>{
//     let arr=[];
//     for(let element of input){
//         if(typeof element==="string"){
//             element=element.length;
//         }
//         if(element%2!==0){
//              arr.push(element) // element;
//         }
//         }
//         return arr;
// }
// console.log(findOddsNumbers([1, 3, 'doe', 2, 10, 11, 'john'])) // return [1, 3, 3, 11].
// console.log(findOddsNumbers([1, 2, 3, 4, 'cat', 'horse', 7, 'elephant']) ) //=> [1, 3, 3, 5, 7]

// Create a function called extractNumbers that takes an array of strings that may contain numbers,
//  and returns a new array of numbers extracted from the strings. If no numbers are included in a string the
//   string will be converted into a 0.
let extractNumbers = (input) => {
    let arr = [];
    for (let element of input) {
        let numberFound =false;
        let numStr="";
        for(let char of element){
            if(!isNaN(char)){
                numberFound=true;
                numStr+=char;            
        }
    }
        if(numberFound){
            arr.push(parseInt(numStr));
    }
    else {
        arr.push(0);
    }
}
    
    return arr;
}

console.log(extractNumbers(['2factor', '6nine'])); // returns [ 2, 6 ]
console.log(extractNumbers(['a26b', 'ca67c', 'n4f1r', 'dhaj'])); // returns [ 26, 67, 41, 0 ]
console.log(extractNumbers(['8atem2', 'cat', 'ran', '1'])); // returns [ 82, 0, 0, 1 ]
    