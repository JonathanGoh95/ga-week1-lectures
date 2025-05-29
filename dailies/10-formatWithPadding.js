/*-----------------------------------------------------------------------------
Challenge: 10-formatWithPadding

Difficulty: Basic

Prompt:

- Write a function called formatWithPadding that accepts three arguments:
  - A numeric argument (an integer) representing the number to format.
  - A string argument (a single character) representing the character used to
    "pad" the returned string to a minimum length.
  - Another numeric argument (an integer) representing the length to pad
    the returned string to.
- The function should return the integer as a string, left padded to the
  length of the 3rd arg using the character provided in the 2nd arg.
- If the length of the integer converted to a string is equal or greater than
  the 3rd argument, no padding is needed - just return the integer as a string.

Examples:

formatWithPadding(123, '0', 5) //=> "00123"
formatWithPadding(42, '*', 10) //=> "********42"
formatWithPadding(1234, '*', 3) //=> "1234"
-----------------------------------------------------------------------------*/
// Your solution for 10-formatWithPadding here:
const formatWithPadding = (num1, str, num2) => {
  //Convert num1 to String
  num1 = String(num1);
  //Find the number of characters needed to 'pad' the left of num1.
  const count = num2 - num1.length;
  //If the difference is less than 0, return the original value of num1 as a string.
  if (count < 0) {
    return num1;
  }
  //Use of a for loop to 'pad' 'str' to the left side of num1. '+' works as a concatenation for string.
  for (let i = 0; i < count; i++) {
    num1 = str + num1;
  }
  return num1;
};

console.log(formatWithPadding(123, "0", 5));
console.log(formatWithPadding(42, "*", 10));
console.log(formatWithPadding(1234, "*", 3));
