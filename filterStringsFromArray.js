// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// Examples
// filterArray([1, 2, "a", "b"]) ➞ [1, 2]

// filterArray([1, "a", "b", 0, 15]) ➞ [1, 0, 15]

// filterArray([1, 2, "aasf", "1", "123", 123]) ➞ [1, 2, 123]
// Notes
// Zero is a non-negative integer.
// The given array only has integers and strings.
// Numbers in the array should not repeat.

function filterArray(arr) {
  return arr.filter((x) => typeof x === "number");
}

filterArray([1, 2, "a", "b"]); // [1, 2])
filterArray([1, "a", "b", 0, 15]); // [1, 0, 15])
filterArray([1, 2, "aasf", "1", "123", 123]); // [1, 2, 123])
filterArray(["jsyt", 4, "yt", 6]); // [4,6])
filterArray(["r", 5, "y", "e", 8, 9]); // [5, 8, 9])
filterArray(["a", "e", "i", "o", "u"]); // [])
filterArray([4, "z", "f", 5]); // [4, 5])
filterArray(["abc", 123]); // [123])
filterArray(["$%^", 567, "&&&"]); // [567])
filterArray(["w", "r", "u", 43, "s", "a", 76, "d", 88]); // [43, 76, 88])
