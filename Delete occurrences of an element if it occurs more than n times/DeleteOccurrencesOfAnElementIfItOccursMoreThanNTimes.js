function deleteNth(arr,n){
 const newArray = []; //array to store the new list
  const occurenceObj = {}; //an empty object to count the occurence of an element
  for(const element of arr)  {
    if(!occurenceObj[element])
      {
        occurenceObj[element]=1;
        newArray.push(element);
      }
    else if(occurenceObj[element]<n){
      occurenceObj[element]++;
      newArray.push(element);
    }
  }
  return newArray;
}
