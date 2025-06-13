/*-----------------------------------------------------------------------------
Challenge: 19-flatten

Difficulty: Intermediate

Prompt:

- Write a function named flatten that accepts a single array that may contain nested arrays and returns a new "flattened" array.
- A flattened array is an array that contains no nested arrays.
- Arrays maybe nested at any level.
- If any of the arrays have duplicate values those duplicate values should be present in the returned array.
- The values in the new array should maintain their ordering as shown in the examples below.

Hint: This assignment provides an excellent opportunity to use recursion (a
function that calls itself). You can also solve it by using an inner function.

Examples:

flatten( [1, [2, 3]] );
//=> [1, 2, 3]  (a new array)
flatten( [1, [2, [3, [4]]], 1, 'a', ['b', 'c']] );
//=> [1, 2, 3, 4, 1, 'a', 'b', 'c']
-----------------------------------------------------------------------------*/
// Your solution for 19-flatten here:

export const flatten = (arr) => {
  let output = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      const newElem = flatten(arr[i]);
      output.push(...newElem);
    } else {
      output.push(arr[i]);
    }
  }
  return output;
};

console.log(flatten([1, [2, 3]]));
console.log(flatten([1, [2, [3, [4]]], 1, "a", ["b", "c"]]));
