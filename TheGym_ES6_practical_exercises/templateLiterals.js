// Template Literal Tidbits: Your company website needs a dynamic welcome message. 
// Write a function greetUser(name) that uses template literals to create a personalized greeting message 
// like "Welcome back, ${name}!".
let greetUser = (name)=>{
return `Welcome back, ${name}!`;
}
console.log(greetUser("Mathilde"))