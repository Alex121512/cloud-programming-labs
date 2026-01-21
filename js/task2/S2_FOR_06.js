function sumNested(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }

  return sum;
}

// Tests
console.log(sumNested([[1, 2], [3, 4], [5]])); // 15
