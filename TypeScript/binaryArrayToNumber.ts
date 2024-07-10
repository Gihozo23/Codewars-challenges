export function binaryArrayToNumber(arr: number[]): number{
  let number:number = 0;
    const reversedArray: number[] = arr.reverse();
  for (let i:number = 0; i < reversedArray.length; i++ ) {
    number += reversedArray[i] * (2**i);
  }
    return number;
};
console.log(binaryArrayToNumber([1, 0, 0, 1] ))