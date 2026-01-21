function pipe(...fns) {
  return function (value) {
    let res = value;

    for (let i = 0; i < fns.length; i++) {
      res = fns[i](res);
    }

    return res;
  };
}

// Tests
const add1 = (x) => x + 1;
const double = (x) => x * 2;

const run = pipe(add1, double);
console.log(run(3)); // 8
