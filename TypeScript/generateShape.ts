function generateShape(int: number): string {
    let result: string = "";
    for (let i:number = 0; i < int; i++){
        result += "+".repeat(int);
        result += `\n`
    }
    return result.trim(); // your code here
}
generateShape(8)
type Both = string | number;

// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: Both, b: Both) :Both {
//   if (typeof a === 'string' || typeof b === 'string') {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// }

// const res = add('Joyous ', '21');
// console.log(res);