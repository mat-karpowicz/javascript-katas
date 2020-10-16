function findOdd(A) {
  let obj = {};

  A.forEach((digit) => {
    if (digit in obj) {
      obj[digit] += 1;
    } else {
      obj[digit] = 1;
    }
  });

  let result;
  for (const [key, value] of Object.entries(obj)) {
    if (value % 2 === 0) {
      result = key;
    }
  }
  return result;
}

findOdd([1, 2, 3, 3, 4, 5, 3, 3]);
