function expandedForm(num) {
 const string= num.toString();//convert the number to a string because it's iterable
  const arr = [...string] ; // passing the elements of the string as individual arguments to the array
  const arr2= arr.map((element,index)=>  element* Math.pow(10,arr.length-1-index)).filter(element=> element !==0); // we don't have to convert the strings to numeric value because the implicit coercion does it for us when we're making these arithmetic operations 
  const string2 =arr2.join( " + "); // since the array has already been filtered; the zeros were removed; we convert back to a string with the right spacing and signs
  return string2;

}
