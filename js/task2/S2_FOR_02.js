function findFirstEven(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      return nums[i];
    }
  }
  return null;
}

// Tests
console.log(findFirstEven([1, 3, 7, 10, 5])); // 10
console.log(findFirstEven([1, 3, 5])); // null
