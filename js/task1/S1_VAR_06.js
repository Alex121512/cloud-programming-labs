function classifyNumberLike(x) {
  if (typeof x === "number" && Number.isNaN(x)) {
    return "nan";
  }
  if (typeof x === "number") {
    return "number";
  }
  return "not-a-number";
}

const testsArray = [NaN, 0, "0", "abc", undefined];

testsArray.forEach((value) => {
  console.log(value, "=", classifyNumberLike(value));
});
