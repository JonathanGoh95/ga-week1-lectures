/*-----------------------------------------------------------------------------
Challenge: 11-isPalindrome

Difficulty: Intermediate

Prompt:

- Write a function called isPalindrome that accepts a single string argument,
  then returns true or false depending upon whether or not the string is a
  palindrome.
- A palindrome is a word or phrase that is the same forward or backward.
- Casing and spaces are not included when considering whether or not a string
  is a palindrome.
- If the length of the string is 0 or 1, return true.

Examples:

isPalindrome('SEI Rocks') //=> false
isPalindrome('rotor') //=> true
isPalindrome('A nut for a jar of tuna') //=> true
isPalindrome('') //=> true
-----------------------------------------------------------------------------*/
// Your solution for 11-isPalindrome here:
/**
 *
 * @param {string} str
 * @returns
 */

const isPalindrome = (str) => {
  if (str.length <= 1) {
    return true;
  }
  // Compare the original and reverse strings to see if they are the same. If so, it is a palindrome.
  // Convert the original string to lowercase, remove all spaces
  const original = str.toLowerCase().replaceAll(" ", "");
  // For reverse, converting the string to an array is needed for using the reverse() function, before joining them to become a string again.
  const reverse = str
    .toLowerCase()
    .replaceAll(" ", "")
    .split("")
    .reverse()
    .join("");
  return original === reverse ? true : false;
};

console.log(isPalindrome("SEI Rocks"));
console.log(isPalindrome("rotor"));
console.log(isPalindrome("A nut for a jar of tuna"));
console.log(isPalindrome(""));
