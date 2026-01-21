function invert(obj) {
  const res = {};

  for (const key in obj) {
    const value = obj[key];

    if (res[value]) {
      res[value].push(key);
    } else {
      res[value] = [key];
    }
  }

  return res;
}

// Tests
console.log(invert({ a: 1, b: 2, c: 1 }));
// { '1': ['a', 'c'], '2': ['b'] }
