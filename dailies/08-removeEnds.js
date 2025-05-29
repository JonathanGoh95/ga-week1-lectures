/*-----------------------------------------------------------------------------
Challenge: 08-removeEnds

Difficulty: Basic

Prompt:

- Write a function called removeEnds that accepts a single string argument, 
  then returns a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.

Examples:

removeEnds('SEB Rocks!') //=> "EB Rocks"
removeEnds('a') //=> "" (empty string)
-----------------------------------------------------------------------------*/
// Your solution for 08-removeEnds here:
const removeEnds = (str) => {
  if (str.length < 3) {
    return "";
  }
  return str.slice(1, -1);
};

console.log(removeEnds("SEB Rocks!"));
console.log(removeEnds("a"));
