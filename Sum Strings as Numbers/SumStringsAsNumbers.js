function sumStrings(a,b) { 
  //changing the strings to numbers
const newA= BigInt(a);
  const newB = BigInt(b);
  const sum = newA+newB; // adding the numbers
  return sum.toString(); //converting the numerical value back to a string
}
