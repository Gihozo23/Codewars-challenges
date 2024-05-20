// Arrow Function Magic: We need a function to calculate the area of a rectangle. 
// Write a concise arrow function calculateArea(width, height) that returns the product of width and height. 
// (Bonus: Can you create an arrow function to check if a number is even or odd?)
let calculateArea= (width,height)=>{
    return width*height;
}
let isEven =(num)=>{
    if (num%2===0)
        return "num is even";
    else return "num is not even"
}
console.log(isEven(7))