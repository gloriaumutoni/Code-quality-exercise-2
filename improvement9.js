calculateMatrixSum = (matrix) =>
  matrix
    .reduce((accumulator, value) => accumulator.concat(value), [])
    .reduce((accumulator, value) => accumulator + value, 0);
