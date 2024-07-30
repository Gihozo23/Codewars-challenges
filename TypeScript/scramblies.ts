// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
//can be rearranged to match str2, otherwise returns false.

// step: filter all the letters in str1 that correspond to the letters in str2
//step: 
export const scramble = (str1: string, str2: string): boolean => {
  interface occurenceType {
    [key: string]: number
  };
  const letterOccurence: occurenceType = {}
  for (let char1 of str1) {
    letterOccurence[char1] = (letterOccurence[char1] || 0) + 1;
    
  }
    for (let char2 of str2) {
      if (!letterOccurence[char2]) return false;
      letterOccurence[char2] -= 1;
  }
  return true;
}


console.log(scramble('scriptjavx','javascript') )
console.log(scramble('cedewaraaossoqqyt', 'codewars') )
  console.log(scramble('katas', 'steak'))