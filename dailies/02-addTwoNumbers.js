/*-----------------------------------------------------------------------------
Challenge: 02-addTwoNumbers

Difficulty: Basic

Prompt:

- Write a function called addTwoNumbers that accepts two numeric arguments and 
  returns the sum of those two numbers.
- If either argument is not a number, return the value of NaN.

Examples:

addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:
export const addTwoNumbers = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return NaN;
  }
  return num1 + num2;
};

console.log(addTwoNumbers(5, 10));
console.log(addTwoNumbers(10, -2));
console.log(addTwoNumbers(0, 0));
console.log(addTwoNumbers("Hello", 5));
