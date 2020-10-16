// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
  const strArray = str.split(" ");

  const arrResult = [];

  strArray.map((word) => {
    let reverseWord = "";
    for (let i = word.length - 1; i >= 0; i--) {
      reverseWord += `${word[i]}`;
      console.log(reverseWord);
    }
    arrResult.push(reverseWord);
  });
  return arrResult.join(" ");
}

reverseWords("Hello world!");
reverseWords("The quick brown fox jumps over the lazy dog.");
