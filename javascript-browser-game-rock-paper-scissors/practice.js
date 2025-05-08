const range = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return "Arguments shoud be an integer.";
  }
  if (num1 > num2) {
    return "First argument should be less than the second argument.";
  }
  let output = [];
  for (let i = num1; i < num2; i++) {
    output.push(i);
  }
  return output;
};

console.log(range(1, 4));
console.log(range(-2, 3));
console.log(range(1, 1));
console.log(range(5, 2));
console.log(range("a", "b"));
