/*
A variadic function is a function that takes indefinite number of arguments.
*/

/*
*
PART TWO : ARGUMENTS OBJECT VS REST PARAMETER
In JavaScript, every function has access to a special object called arguments. 
This object contains all the arguments passed to the function, regardless of how many were provided.
It
* 
*/
function getTheBiggestNumber(...args) {
  return args.reduce((biggestNumber, current) => (biggestNumber > current ? biggestNumber : current));
}
console.log(Math.max(2, 3, 4, 6, 98, 5, 7));
console.log(getTheBiggestNumber(2, 3, 4, 6, 98, 5, 7));
//Other examples of methods that use the arguments object in the background are push(), console.log()
// and so many others that were designed before ES6
