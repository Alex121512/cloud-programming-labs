function sumUntil(nums, threshold) {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (sum + nums[i] > threshold) {
      break;
    }
    sum += nums[i];
  }

  return sum;
}

// Tests
console.log(sumUntil([1, 2, 3, 4, 5], 6)); // 6
console.log(sumUntil([5, 5, 5], 9)); // 5
