function cleanNumbers(arr) {
  const res = [];

  for (const item of arr) {
    const num = Number(item);
    if (!Number.isNaN(num)) {
      res.push(num);
    }
  }

  return res;
}

// Tests
console.log(cleanNumbers([" 1 ", "x", "2"])); // [1, 2]
console.log(cleanNumbers(["3", " 4 ", "abc", ""])); // [3, 4, 0]
