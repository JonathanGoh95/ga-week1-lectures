/*-----------------------------------------------------------------------------
Challenge: 09-charCount

Difficulty: Basic

Prompt:

- Write a function named charCount that accepts a single string argument and
  returns an object that represents the count of each character in the string.
- The returned object should have keys representing the character with its
  value set to the number of times the character appears in the string argument.
- Upper and lower case characters should be counted separately.
- Space characters should be counted too.

Examples:

charCount('hello')
//=> { h: 1, e: 1, l: 2, o: 1 }

charCount('Today is fantastic!')
//=> {
  T: 1,
  o: 1,
  d: 1,
  a: 3,
  y: 1,
  ' ': 2,
  i: 2,
  s: 2,
  f: 1,
  n: 1,
  t: 2,
  c: 1,
  '!': 1
}
-----------------------------------------------------------------------------*/
// Your solution for 09-charCount here:
const charCount = (str) => {
  let output = {};
  for (let i = 0; i < str.length; i++) {
    if (!output[str[i]]) {
      output[str[i]] = 0;
    }
    output[str[i]]++;
  }
  return output;
};

console.log(charCount("hello"));
console.log(charCount("Today is fantastic!"));
