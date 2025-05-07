// Display Multiples of 5, 4 Times
/* for (let i = 0; i < 4; i++) {
  console.log(5 * (4 - i));
} */

/* const sumNumbers = (arr) => {
  let total = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      continue;
    }
    total += arr[i];
  }
  return total;
};

console.log(sumNumbers([]));
console.log(sumNumbers([5, 10]));
console.log(sumNumbers([-2, 10, -5])); */

const sumNumbers = (arr) => {
  return arr
    .filter((x) => x > 0)
    .reduce((total, num) => {
      return total + num;
    }, 0);
};

console.log(sumNumbers([5, -18, -35, 57, 5, 8]));
