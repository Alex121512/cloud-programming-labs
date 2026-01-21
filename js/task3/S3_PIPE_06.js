function pipeSafe(...fns) {
  return function (value) {
    try {
      let res = value;

      for (let i = 0; i < fns.length; i++) {
        res = fns[i](res);
      }

      return { ok: true, value: res };
    } catch (error) {
      return { ok: false, error: error.message };
    }
  };
}

// Tests
const runSafe = pipeSafe(
  (x) => x + 1,
  (x) => {
    if (x > 2) throw new Error("Too big");
    return x;
  }
);

console.log(runSafe(1)); // { ok: true, value: 2 }
console.log(runSafe(2)); // { ok: false, error: "Too big" }
