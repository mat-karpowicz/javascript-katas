// Repeating Letters
// Create a function that takes a string and returns a string in which each character is repeated once.

// Examples
// doubleChar("String") ➞ "SSttrriinngg"

// doubleChar("Hello World!") ➞ "HHeelllloo  WWoorrlldd!!"

// doubleChar("1234!_ ") ➞ "11223344!!__  "

function doubleChar(str) {
  const newArray = [];

  str.split("").forEach((letter) => {
    newArray.push(letter.repeat(2));
  });

  return newArray.join("");

  //  return str.split('').map(x => x + x).join('');
}

doubleChar("String"); // "SSttrriinngg")
doubleChar("Hello World!"); // "HHeelllloo  WWoorrlldd!!")
doubleChar("1234!_ "); // "11223344!!__  ")
doubleChar("##^&%%*&%%$#@@!"); // "####^^&&%%%%**&&%%%%$$##@@@@!!")
doubleChar("scandal"); // "ssccaannddaall")
doubleChar("economics"); // "eeccoonnoommiiccss")
doubleChar(" "); // "  ")
