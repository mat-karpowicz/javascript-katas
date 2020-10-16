function findUniq(arr) {
  let obj = {};

  arr.forEach((num) => {
    if (num in obj) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  });
  return console.log(Object.keys(obj).find((key) => obj[key] === 1));
}
findUniq([0, 1, 0]);
findUniq([1, 1, 1, 2, 1, 1]);
findUniq([3, 10, 3, 3, 3]);
