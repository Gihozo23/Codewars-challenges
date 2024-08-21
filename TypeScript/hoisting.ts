//How are variables declared with var are hoisted ?

//Hoisting is a mechanism in JavaScript where declarations of variables are moved to the top of their scope
// before the codes are executed.

//global scope:

var first = "Declared with var";
console.log(first);
console.log(first)
//functional scope:
console.log(first)
function seeHoisting() {
    console.log(first)
    var first = "Declared with var";
    console.log(first)
    return "I have global scope"
}
seeHoisting()

