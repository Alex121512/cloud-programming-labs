function mergeDefaults(defaults, overrides) {
  return {
    ...defaults,
    ...overrides,
  };
}

// Tests
const defaults = { host: "localhost", port: 80 };
const overrides = { port: 3000 };

console.log(mergeDefaults(defaults, overrides));
// { host: "localhost", port: 3000 }
