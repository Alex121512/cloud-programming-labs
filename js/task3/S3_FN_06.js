function mapValues(obj, fn) {
  const res = {};

  for (const key in obj) {
    res[key] = fn(obj[key]);
  }

  return res;
}

// Tests
const data = { a: 1, b: 2, c: 3 };
console.log(mapValues(data, (value) => value * 2));
// { a: 2, b: 4, c: 6 }
