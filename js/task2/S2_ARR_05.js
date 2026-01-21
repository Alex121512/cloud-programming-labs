function stats(nums) {
  if (nums.length === 0) return null;

  let min = nums[0];
  let max = nums[0];
  let sum = 0;

  for (const num of nums) {
    if (num < min) min = num;
    if (num > max) max = num;
    sum += num;
  }

  return {
    min,
    max,
    avg: sum / nums.length,
  };
}

// Tests
console.log(stats([1, 2, 3, 4]));
// { min: 1, max: 4, avg: 2.5 }

console.log(stats([])); // null
