// Implement the function unique_in_order which takes as argument a
// sequence and returns a list of items without any elements with the same
//  value next to each other and preserving the original order of elements.

uniqueInOrder = function (iterable) {
  const length = Array.from(iterable).length;
  const newArray = [];

  for (let i = 0; i < length; i++) {
    i === 0 ? newArray.push(Array.from(iterable)[i]) : null;

    if (i > 0) {
      if (newArray[newArray.length - 1] !== Array.from(iterable)[i]) {
        newArray.push(Array.from(iterable)[i]);
      }
    }
  }
  return newArray;
};

uniqueInOrder("AAAABBBCCDAABBB");
uniqueInOrder([1, 1, 2, 2, 1]);
