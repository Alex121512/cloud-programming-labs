const atLeast = (min) => (n) => n >= min;

// Tests
const nums = [1, 5, 10, 15];
console.log(nums.filter(atLeast(10))); // [10, 15]
