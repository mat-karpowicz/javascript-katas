// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// Examples
// repeat("edabit", 3) ➞ ["edabit", "edabit", "edabit"]

// repeat(13, 5) ➞ [13, 13, 13, 13, 13]

// repeat("7", 2) ➞ ["7", "7"]

// repeat(0, 0) ➞ []
// Notes
// item can be either a string or a number.
// times will always be a number.

function repeat(item, times) {
  const array = [];

  for (let i = 1; i <= times; i++) {
    array.push(item);
  }

  return array;

  // return Array(times).fill(item);
}

repeat("edabit", 3); // ["edabit", "edabit", "edabit"]);
repeat(13, 5); // [13, 13, 13, 13, 13]);
repeat("7", 2); //  ["7", "7"]);
repeat("2 0 1 8", 1); // ["2 0 1 8"]);
repeat("tom dick and harry", 6); // ["tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry", "tom dick and harry"]);
repeat(0, 1); // [0]);
repeat(0, 0); // []);
repeat("z", 0); // []);
