/*-----------------------------------------------------------------------------
Challenge: 13-mumble

Difficulty: Intermediate

Prompt:

- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the
  number of times according to its position within the string arg.
  Additionally, each repeated section of characters should be separated by a
  hyphen (-).
- Examples describe it best..

Examples:

mumble('X') //=> 'X'
mumble('abc') //=> 'a-bb-ccc'
mumble('121') //=> '1-22-111'
mumble('!A 2') //=> '!-AA-   -2222'
-----------------------------------------------------------------------------*/
// Your solution for 13-mumble here:
const mumble = (str) => {
  let output = str[0]; // Declare the output variable with the first character from the string argument
  for (let i = 1; i < str.length; i++) {
    output += "-"; // Separate each character with a '-'
    for (let j = 0; j < i + 1; j++) {
      output += str[i]; // Append the character based on the i loop iteration
    }
  }
  return output;
};

/* const replicateItem = (arr, count) => {
  return arr[count] * (count + 1);
  if (arr[count] === "a") {
    return "a";
  } else if (arr[count] === "b") {
    return "bb";
  } else if (arr[count] === "c") {
    return "ccc";
  }
    arr[count].repeat(count + 1);
}; */

console.log(mumble("X"));
console.log(mumble("abc"));
console.log(mumble("121"));
console.log(mumble("!A 2"));
