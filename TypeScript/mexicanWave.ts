export function wave(str: string): Array<string> {
    const result: Array<string> = [];
    const strToArray = str.split("");
    for (let i = 0; i < strToArray.length; i++){
        if (strToArray[i] !== " ")
        {
            let copy = str.split("");
            copy.splice(i, 1, copy[i].toLocaleUpperCase());
            result.push(copy.join(""));
            copy = str.split("");
        }
    }
    return result;
}
  console.log(wave("two words"));