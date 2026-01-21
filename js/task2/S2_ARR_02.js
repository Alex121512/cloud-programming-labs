function unique(values) {
  const res = [];

  for (const value of values) {
    if (!res.includes(value)) {
      res.push(value);
    }
  }

  return res;
}

// Tests
console.log(unique([1, 2, 2, 3, 1])); // [1, 2, 3]
console.log(unique(["a", "b", "a", "c"])); // ["a", "b", "c"]
