import getUsername, { addUID } from "./quineFunction";
getUsername("hey");
console.log(addUID({ name: "hello" }));
function logId(id: ("string" | "number")[]) {
  console.log(id);
}

logId(["string", "number"]);

const getAlbumYear = (year: string | number | boolean) => {
  if (typeof year === "string") {
    console.log(`The album was released in ${year}.`); // `year` is string
  } else if (typeof year === "number") {
    console.log(`The album was released in ${year}.`); // `year` is number | boolean
  }

  console.log(year); // `year` is string | number | boolean
};
getAlbumYear;
const fn = (input: any): never => {
  throw new Error("HEL");
};

// Anything is assignable to unknown!
fn("hello");
fn(42);
fn(true);
fn({});
fn([]);
fn(() => {});
let one: never = fn("hello");
