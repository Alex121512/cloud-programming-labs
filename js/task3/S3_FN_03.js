const makeAdder = (x) => (y) => x + y;

// Tests
const add5 = makeAdder(5);
console.log(add5(3)); // 8
