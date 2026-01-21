const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((v, fn) => fn(v), value);

const processNumbers = pipe(
  (arr) => arr.filter((x) => !Number.isNaN(+x)),
  (arr) => arr.map((x) => +x),
  (arr) => arr.map((x) => x * 2),
  (arr) => arr.reduce((sum, x) => sum + x, 0)
);

// Tests
console.log(processNumbers(["1", "x", "2", "3"])); // 12
