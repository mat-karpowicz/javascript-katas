// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// Examples
// toArray({ a: 1, b: 2 }) ➞ [["a", 1], ["b", 2]]

// toArray({ shrimp: 15, tots: 12 }) ➞ [["shrimp", 15], ["tots", 12]]

// toArray({}) ➞ []
// Notes
// Return an empty array if the object is empty.

function toArray(obj) {
  const resultArr = [];

  //   Object.keys(obj).forEach((key) => {
  //     resultArr.push([key.toString(), obj[key]]);
  //   });

  for (const [key, value] of Object.entries(obj)) {
    resultArr.push([key, value]);
  }

  return resultArr;
}

toArray({ a: 1, b: 2 });
toArray({ foo: 33, bar: 45, baz: 67 });
toArray({ shrimp: 15, tots: 12 });
toArray({});
