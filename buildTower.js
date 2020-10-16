// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as * - returns an Array;

function towerBuilder(nFloors) {
  let finalArray = [];
  for (var i = 0; i < nFloors; i++) {
    finalArray.push(
      " ".repeat(nFloors - i - 1) +
        "*".repeat(i * 2 + 1) +
        " ".repeat(nFloors - i - 1)
    );
  }
  console.log(finalArray);
  return finalArray;
}

towerBuilder(2);
towerBuilder(4);
towerBuilder(6);
