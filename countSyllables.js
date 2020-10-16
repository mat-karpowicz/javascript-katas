// Create a function that counts the number of syllables a word has. Each syllable is separated with a dash -.

// Examples
// numberSyllables("buf-fet") ➞ 2

// numberSyllables("beau-ti-ful") ➞ 3

// numberSyllables("mon-u-men-tal") ➞ 4

// numberSyllables("on-o-mat-o-poe-ia") ➞ 6
// Notes
// Don't forget to return the result.
// If you get stuck on a challenge, find help in the Resources tab.
// If you're really stuck, unlock solutions in the Solutions tab.

function numberSyllables(word) {
  console.log(word.split("-").length);
  return word.split("-").length;
}

numberSyllables("buf-fet"); // 2)
numberSyllables("beau-ti-ful"); // 3)
numberSyllables("mon-u-men-tal"); // 4)
numberSyllables("on-o-mat-o-poe-ia"); // 6)
numberSyllables("o-ver-ly"); // 3)
numberSyllables("pas-try"); // 2)
numberSyllables("flu-id"); // 2)
numberSyllables("syl-la-ble"); // 3)
