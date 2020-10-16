// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// Examples
// findNemo("I am finding Nemo !") ➞ "I found Nemo at 4!"

// findNemo("Nemo is me") ➞ "I found Nemo at 1!"

// findNemo("I Nemo am") ➞ "I found Nemo at 2!"
// Notes
// ! , ? . are always separated from the last word.
// Nemo will always look like Nemo, and not NeMo or other capital variations.
// Nemo's, or anything that says Nemo with something behind it, doesn't count as Finding Nemo.
// If there are multiple Nemo's in the sentence, only return for the first one.

function findNemo(sentence) {
  return sentence.split(" ").indexOf("Nemo") >= 0
    ? `I found Nemo at ${arr.indexOf("Nemo") - 1}!`
    : "I can't find Nemo :(";
}

findNemo("I am Ne mo Nemo !"); // "I found Nemo at 5!")
findNemo("N e m o is NEMO NeMo Nemo !"); // "I found Nemo at 8!")
findNemo("I am Nemo's dad Nemo senior ."); // "I found Nemo at 5!")
findNemo("Oh, hello !"); // "I can't find Nemo :(")
findNemo("Is it Nemos, Nemona, Nemoor or Garfield?"); // "I can't find Nemo :(")
findNemo(
  "Nemo is a clown fish, he has white and orange stripes. Nemo , come back!"
); // "I found Nemo at 1!")
