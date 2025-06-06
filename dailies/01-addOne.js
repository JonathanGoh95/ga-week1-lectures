/*-----------------------------------------------------------------------------
Challenge: 01-addOne

Difficulty: Basic

Prompt:

Write a function called addOne that takes a single number as an argument and 
returns that number plus 1.

Examples:

addOne(1) //=> 2
addOne(-5) //=> -4
-----------------------------------------------------------------------------*/
// Your solution for 01-addOne here:
export const addOne = (num) => {
  if (typeof num !== "number" || isNaN(num)) {
    return "Please input a value.";
  }
  return num + 1;
};

console.log(addOne(3));
console.log(addOne(-4));
