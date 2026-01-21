var first = "Hello"; // string
let second = 42; // number
const third = true; // boolean

console.table([
  { name: "first", value: first, type: typeof first },
  { name: "second", value: second, type: typeof second },
  { name: "third", value: third, type: typeof third },
]);
