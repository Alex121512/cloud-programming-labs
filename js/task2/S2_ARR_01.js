function cleanNumbers(arr) {
  const result = [];

  for (const item of arr) {
    const num = Number(item);
    if (!Number.isNaN(num)) {
      result.push(num);
    }
  }

  return result;
}

// Tests
console.log(cleanNumbers([" 1 ", "x", "2"])); // [1, 2]
console.log(cleanNumbers(["3", " 4 ", "abc", ""])); // [3, 4, 0]
