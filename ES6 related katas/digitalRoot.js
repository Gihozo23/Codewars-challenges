const digitalRoot = (n) => {
  // return ((n - 1) % 9) + 1;
  let numberToString = n.toString();
  if (numberToString.length === 1 || n === 0) {
    return n;
  } else {
    while (numberToString.length !== 1) {
      let result = numberToString.split("").reduce((acc, current) => {
        let result1 = parseInt(acc);
        result1 += parseInt(current);
        return result1;
      });
      numberToString = result.toString();
    }
    return Number(numberToString);
  }
};
console.log(digitalRoot(2));
console.log(digitalRoot(16));
console.log(digitalRoot(493193));
