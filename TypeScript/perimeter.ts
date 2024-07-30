export const perimeter = (n: number): number => {
    let fibonacciSum = 0;
    let currentValue = 1;
    let previousValue = 0;
    for(let i = 0; i<=n;i++){
    fibonacciSum+= currentValue;
        [previousValue, currentValue] = [currentValue, previousValue + currentValue];
    }
    return fibonacciSum * 4;

    //another way
//     let result: number;
//     let arr: number[] = [];
//     const generateFibonacci = (n:number):number => {
//     if (n <= 1) return 1;
//     return generateFibonacci(n - 1)+ generateFibonacci(n - 2);
// }
//     for (let i = n; i >= 0; i--){
//         result = generateFibonacci(i);
//         arr.push(result);
//     }
//      result = arr.reduce((accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

//     return result*4;
}

console.log(perimeter(1));
// console.log(perimeter(2));
// console.log(perimeter(3));
console.log(perimeter(7));
// console.log(perimeter(5));



    