export const findOdd = (xs: number[]): number => {
  let occurence: number = 0;
  let oddNumber: number = 0;
  for (let i = 0; i < xs.length; i++) {
    for (let j = 0; j < xs.length; j++) {
      if (xs[i] === xs[j]) {
        occurence++;
      }
    }
    if (occurence % 2 !== 0) {
      oddNumber = xs[i];
      break;
    } else occurence = 0;
  }
  return oddNumber;
};
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));
