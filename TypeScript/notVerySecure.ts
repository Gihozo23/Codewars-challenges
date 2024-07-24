export function alphanumeric(string: string): boolean {
    // ^ ensures that the match starts at the beginning of the string.
// [a-z\d] ensures that each character in the string is either a letter (a-z) or a digit (0-9).
// + ensures that there is at least one character.
// $ ensures that the match ends at the end of the string.
// i makes the match case-insensitive, allowing for both uppercase and lowercase letters.
// .test(string) evaluates whether the string matches the pattern described by the regular expression.
  return /^[a-z\d]+$/i.test(string);
    // const lowerCasedString: string = string.toLowerCase();
    // if (lowerCasedString === "" || lowerCasedString.includes(" ") || lowerCasedString.includes(" ")) return false;

    // const alphabet = [...Array(26).keys()].map(i => String.fromCharCode(i + 97))
    // let count: number = 0;
    // const digits = ["0","1","2","3","4","5","6","7","8","9"]

    //     for (let i: number = 0; i < lowerCasedString.length; i++){
    //         if (alphabet.includes(lowerCasedString[i]) || digits.includes(lowerCasedString[i])) count++;
    //         else break;
    //     }   
    // return count === lowerCasedString.length;
}
    console.log(alphanumeric("hello0_"))