// Create a function that takes two strings as arguments and returns the number of times the first string (the single character) is found in the second string.

// Examples
// charCount("a", "edabit") ➞ 1

// charCount("c", "Chamber of secrets") ➞ 1

// charCount("b", "big fat bubble") ➞ 4
// Notes
// Your output must be case-sensitive (see second example).

function charCount(myChar, str) {
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === myChar) {
      count++;
    }
  }

  return count;
  //   return [...str].filter(x => x===myChar).length;
}

charCount("a", "edabit"); // 1)
charCount("b", "big fat bubble"); // 4)
charCount("c", "Chamber of secrets"); // 1)
charCount("f", "frank and his friends have offered five foxes for sale"); // 7)
charCount("x", "edabit"); // 0)
charCount("a", "Adam and Eve bit the apple and found a snake"); // 6)
charCount("s", "sssssssssssssssssssssssss"); // 25)
charCount("7", "10795426697"); // 2)
