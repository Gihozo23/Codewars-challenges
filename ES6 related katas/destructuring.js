// You are given an array of objects representing employees in a company. 
// Each object contains the following properties: name, age, and department. 
// Your task is to write a function to calculate the average age of each department's employees. 
// The function should return an object containing the department name and the summation of employees' age 
// in each department. jsx 
 const employees = [ { name: 'Alice', age: 30, department: 'Engineering' }, { name: 'Bob', age: 25, department: 'Marketing' },
 { name: 'Charlie', age: 35, department: 'Engineering' }, { name: 'David', age: 40, department: 'HR' }, 
 { name: 'Eve', age: 28, department: 'Marketing' }, ];  //output: { Engineering: 65, Marketing: 53, HR: 40 } // Expected output

//  let calculateDepartAgeSum= (input)=>{
//     let object ={};
//   for (let obj of input ){
//     var {department,age}={...obj};
//     if(object[department]){
//         object[department]+=age;
//     }
//     else object[department]=age;
//   }
//   return object;
// }
let calculateDepartAgeSum=(input)=>{
    return input.reduce((acc,{department,age})=>{
        console.log(department,age)
        acc[department]=(acc[department]||0)+age;
        return acc;
    },{});
};
const result = calculateDepartAgeSum(employees);
console.log(result); // Output: { Engineering: 65, Marketing: 53, HR: 40 }