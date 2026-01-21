function flatten1(arr) {
  const res = [];

  for (const item of arr) {
    if (Array.isArray(item)) {
      res.push(...item);
    } else {
      res.push(item);
    }
  }

  return res;
}

// Tests
console.log(flatten1([1, [2, 3], [4], 5]));
// [1, 2, 3, 4, 5]
