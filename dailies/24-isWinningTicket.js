/*-----------------------------------------------------------------------------
Challenge: 24-isWinningTicket

Difficulty:Intermediate

Prompt:

- Write a function called isWinningTicket that accepts a single array as an
  argument.
- The input array represents a 'lottery ticket' consisting of one or more
  nested 2-value arrays. The first value of a nested array will be a string,
  the second an integer.
- The isWinningTicket function should return true if all of the nested arrays
  have a character in the string whose numeric character code equals the
  integer (2nd value).
- If any of the nested arrays have a string where all of the character's
  character code does not match the integer, then return false.

Hints:

- A character/string can be created from a character code using the String.
  fromCharCode() class method.
- A character within a string's character code can be obtained using the
  charCodeAt() string method.

Examples:

isWinningTicket( [ ['ABC', 65] ] ) // => true
isWinningTicket( [ ['ABC', 999], ['XY', 89] ] ) // => false
isWinningTicket( [ ['ABC', 66], ['dddd', 100], ['Hello', 108] ] ) // => true
isWinningTicket( [ ['ABC', 66], ['dddd', 15], ['Hello', 108] ] ) // => false
-----------------------------------------------------------------------------*/
// Your solution for 24-isWinningTicket here:
export const isWinningTicket = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const [str, code] = arr[i]; // Assign the nested array elements to str and code variables
    let found = false; // Create a variable that states if an element is found
    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === code) {
        found = true; // Flip the found variable to true if an element is matched
        break;
      }
    }
    if (!found) return false; // If no matches are found in the whole loop, return false
  }
  return true;
};

console.log(isWinningTicket([["ABC", 65]]));
console.log(
  isWinningTicket([
    ["ABC", 999],
    ["XY", 89],
  ])
);
console.log(
  isWinningTicket([
    ["ABC", 66],
    ["dddd", 100],
    ["Hello", 108],
  ])
);
console.log(
  isWinningTicket([
    ["ABC", 66],
    ["dddd", 15],
    ["Hello", 108],
  ])
);
