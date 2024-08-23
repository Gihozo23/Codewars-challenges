/*
A variadic function is a function that takes indefinite number of arguments. 
1. Rest parameter is technically a placeholder for the parameter.
2. The arguments object 
*/
const getIndefiniteNumbers = (...numbers: unknown[]) => numbers;
console.log(getIndefiniteNumbers(5, 7, 78, 6, 8775, "this is string"));