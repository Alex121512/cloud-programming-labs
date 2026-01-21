function isArray(value) {
  return Array.isArray(value);
}

console.log(isArray([])); // true
console.log(isArray({})); // false
console.log(isArray([1, 2, 3])); // true
console.log(isArray("test")); // false
console.log(isArray(352)); // false
