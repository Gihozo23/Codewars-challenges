export function narcissistic(value: number): boolean {
    let array: string[] = value.toString().split("");
    let lengthOfArray: number = array.length;
    let result: number = 0;
    array.forEach((element) => result += Math.pow(parseInt(element), lengthOfArray))
    return result === value;
}

console.log(narcissistic(153))