// Create a function that takes an array of numbers and return "Boom!" if the number 7 appears in the array. Otherwise, return "there is no 7 in the array".

// Examples
// sevenBoom([1, 2, 3, 4, 5, 6, 7]) ➞ "Boom!"

// sevenBoom([8, 6, 33, 100]) ➞ "there is no 7 in the array"

function sevenBoom(arr) {
  console.log(arr.join("").match([7]));
  return arr.join("").match([7]) === null
    ? "there is no 7 in the array"
    : "Boom!";
}

sevenBoom([2, 6, 7, 9, 3]); // "Boom!")
sevenBoom([33, 68, 400, 5]); // "there is no 7 in the array")
// sevenBoom([86, 48, 100, 66]); // "there is no 7 in the array")
// sevenBoom([76, 55, 44, 32]); // "Boom!")
// sevenBoom([35, 4, 9, 37]); // "Boom!")
