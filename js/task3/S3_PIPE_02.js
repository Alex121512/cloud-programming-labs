function compose(...fns) {
  return function (value) {
    let res = value;

    for (let i = fns.length - 1; i >= 0; i--) {
      res = fns[i](res);
    }

    return res;
  };
}

// Tests
const add = (x) => x + 1;
const double = (x) => x * 2;

const run = compose(add, double);
console.log(run(3)); // 7
