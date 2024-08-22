calculateAverage = (numbers) =>
  numbers.reduce((accumulator, value) => accumulator + value, 0) /
  numbers.length;
