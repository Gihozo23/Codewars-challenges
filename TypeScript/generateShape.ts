function generateShape(int: number): string {
  let result: string = "";
  for (let i: number = 0; i < int; i++) {
    result += "+".repeat(int);
    result += `\n`;
  }
  return result.trim(); // your code here
}
generateShape(8);
