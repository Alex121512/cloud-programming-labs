function countOccurrences(values) {
  const res = {};

  for (let i = 0; i < values.length; i++) {
    const value = values[i];
    res[value] = (res[value] || 0) + 1;
  }

  return res;
}

// Tests
console.log(countOccurrences(["a", "b", "a", "c", "b", "a"]));
// { a: 3, b: 2, c: 1 }
