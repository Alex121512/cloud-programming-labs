function omit(obj, keys) {
  const res = {};

  for (const key in obj) {
    if (!keys.includes(key)) {
      res[key] = obj[key];
    }
  }

  return res;
}

// Tests
console.log(omit({ a: 1, b: 2, c: 3 }, ["b"]));
// { a: 1, c: 3 }
