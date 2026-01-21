function pick(obj, keys) {
  const res = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in obj) {
      res[keys[i]] = obj[keys[i]];
    }
  }

  return res;
}

// Tests
console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c", "x"]));
// { a: 1, c: 3 }
