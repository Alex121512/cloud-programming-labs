function get(obj, path, fallback) {
  const parts = path.split(".");
  let current = obj;

  for (let i = 0; i < parts.length; i++) {
    if (current == null || !(parts[i] in current)) {
      return fallback;
    }
    current = current[parts[i]];
  }

  return current;
}

// Tests
const data = { a: { b: { c: 10 } } };

console.log(get(data, "a.b.c", null)); // 10
console.log(get(data, "a.b.x", "N/A")); // N/A
