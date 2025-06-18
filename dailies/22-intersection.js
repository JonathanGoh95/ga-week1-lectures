/*-----------------------------------------------------------------------------
Challenge: 22-intersection

Difficulty: Intermediate

Prompt:

- Write a function named intersection that accepts two arguments, which are
  both arrays. The array arguments may contain any mixture of strings, numbers,
  or booleans - but no reference types (objects).
- The function should return a new array containing all elements in common,
  including repeating element values.
- The ordering of the elements in the returned array is not important.
- If there are no elements in the arrays in common, the intersection function
  should return an empty array.
- The function should not mutate (change) either argument.

Examples:

intersection(['a', 1], []) //=> []
intersection(['a', 1], [true, 'a', 15]) //=> ['a']
intersection([1, 'a', true, 1, 1], [true, 1, 'b', 1]) //=> [1, true, 1]
-----------------------------------------------------------------------------*/
// Your solution for 22-intersection here:
export const intersection = (arr1, arr2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return [];
  }
  const output = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        output.push(arr1[i]); // Inserts the element into the output array
        break; // Stops the current iteration when a similar element between the 2 arrays is found
      }
    }
  }
  return output;
};

console.log(intersection(["a", 1], []));
console.log(intersection(["a", 1], [true, "a", 15]));
console.log(intersection(["a", 1], [true, "b", 15]));
console.log(intersection([1, "a", true, 1, 1], [true, 1, "b", 1]));
