function toNumberOrNull(x) {
  if (typeof x !== "string") return null;

  const num = +x;
  return Number.isNaN(num) ? null : num;
}

const testsArray = ["12", "12.5", " 12 ", "12x", ""];

testsArray.forEach((value) => {
  console.log(`"${value}" =`, toNumberOrNull(value));
});
