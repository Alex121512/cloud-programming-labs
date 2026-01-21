function inspect(value) {
  return {
    type: typeof value,
    isArray: Array.isArray(value),
    isNull: value === null,
    isNaN: typeof value === "number" && Number.isNaN(value),
  };
}

const samples = [null, undefined, 42, NaN, "hello", {}, [], () => {}];

samples.forEach((v) => {
  console.log(inspect(v));
});
