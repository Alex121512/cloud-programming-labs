const pipe =
  (...fns) =>
  (value) =>
    fns.reduce((v, fn) => fn(v), value);

const normalize = pipe(
  (str) => str.trim(),
  (str) => str.toLowerCase(),
  (str) => str.replace(/\s+/g, " ")
);

// Tests
console.log(normalize("  HeLLo   WoRLd  ")); // "hello world"
