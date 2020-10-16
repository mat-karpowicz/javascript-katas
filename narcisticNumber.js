function narcissistic(value) {
  const power = parseInt(Array.from(value.toString()).length);
  let result = 0;

  console.log(Array.from(value.toString()));

  Array.from(value.toString()).forEach((number) => {
    result += Math.pow(number, power);
  });

  return result === value ? true : false;
}
