function isInfiniteProcess(a, b) {
    return a > b || (b - a) % 2 !== 0;
}
const str = 'This is my example string!';
const substr = 'string!!';
function findCommonCharacters(str1, str2) { 
    const set1 = new Set(str1); 
    const set2 = new Set(str2); 
 
    return Array.from(set1).filter(char => set2.has(char)); 
} 
 
// const string1 = "hello"; 
// const string2 = "world"; 
const commonChars = findCommonCharacters(str, substr); 
console.log(commonChars); // Output: ['l', 'o'] 