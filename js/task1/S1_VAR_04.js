function typeLabel(value) {
  if (value === null) return "null";
  return typeof value;
}

const testArray = [null, undefined, 42, "42", true, {}, [], () => {}];

testArray.forEach((value) => {
  console.log(value, "=", typeLabel(value));
});
