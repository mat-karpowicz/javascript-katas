function order(words) {
  let newArray = [];
  words.split(" ").forEach((word) => {
    Array.from(word).forEach((letter) => {
      if (Number.isInteger(parseInt(letter))) {
        newArray[parseInt(letter) - 1] = word;
        console.log(newArray);
      }
    });
  });

  const newString = newArray.join(" ");

  return newArray.join(" ");
}
