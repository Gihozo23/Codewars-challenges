function zeros (n) {
let count = 0; // to keep track of the number of trailing zeros
  let i = 5; // we set 5 as divisor to count the number of trailing zeros because in factorial, the trailing zeros result from the multiplication of factors 2 and 5 then since multiples of 5 are the less frequent in the factorial sequence; that's why we use 5.
while( n>=i) //this loop will iterate untill n becomes smaller than i, indicating that we have counted all the trailing zeros.
{
  count+= Math.floor(n/i);// to increment the count variable by the result of dividing n by i, and since we want a whole number quotient we are using Math.floor()
  i*=5; // increasing i by 5 ensures that we consider all the multiples of 5 in the factorial
}
  return count; 
}
