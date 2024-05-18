// Numbers are fun! Write a generator function fibonacciGenerator(limit) that yields Fibonacci
//  numbers up to a specified limit. Remember, the first two Fibonacci numbers are 0 and 1, and 
// each subsequent number is the sum of the previous two.
function * fibonacciGenerator(limit){
    let [a, b] = [0, 1];
    while(a<=limit){
        yield a;
        [a,b]=[b,a+b];
    }
}
let trial = fibonacciGenerator(8);
trial.next().value;

// function * fibonacciGenerator(limit){
//         let num=0;
//         let num2=1;
//     while (sum <limit){
//         yield num;
//         num=num2;
//         num2=num+num2 // can reassign like num and num2 at different lines
//         ;
//     }
// }
