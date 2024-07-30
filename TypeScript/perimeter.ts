export const perimeter = (n:number):number => {
    if (n <= 1) return 1;
    let arr = [];
    let result = 0;
    console.log(arr.push(perimeter(n - 1), perimeter(n - 2)));
    let i = n;
    while(i > 0){
        result = perimeter(i - 1) + perimeter(i - 2);
        arr.push(result);
        result = 0;
    }
    console.log(arr);
    return 3;
}

console.log(perimeter(1));
console.log(perimeter(2));
console.log(perimeter(3));
console.log(perimeter(4));
console.log(perimeter(5));



    