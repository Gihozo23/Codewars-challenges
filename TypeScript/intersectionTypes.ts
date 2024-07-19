export function intersect<T extends Object, U extends Object>(
  first: T,
  second: U,
): T & U {
  let result = <T & U>{};
  for (let id in first) {
    if (id in second && id in first) {
      (<any>result)[id] = (<any>first)[id];
    } else break;
  }
  return result;
}
const obj1 = { a: 1 };
const obj2 = { a: 2, b: 2 };
const intersection = intersect(obj1, obj2);
console.log(intersection);
