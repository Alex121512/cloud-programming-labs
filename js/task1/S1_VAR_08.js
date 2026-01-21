function safeAdd(a, b) {
  const isIntA = Number.isInteger(a);
  const isIntB = Number.isInteger(b);

  const unsafe =
    Math.abs(a) > Number.MAX_SAFE_INTEGER ||
    Math.abs(b) > Number.MAX_SAFE_INTEGER;

  if (isIntA && isIntB && unsafe) {
    const res = BigInt(a) + BigInt(b);
    console.log("Returned type: BigInt");
    return res;
  } else {
    const res = a + b;
    console.log("Returned type: Number");
    return res;
  }
}

console.log(safeAdd(10, 20));
console.log(safeAdd(9007199254740992, 1));
