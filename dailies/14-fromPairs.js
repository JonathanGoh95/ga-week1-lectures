/*-----------------------------------------------------------------------------
Challenge: 14-fromPairs

Difficulty: Intermediate

Prompt:

- Write a function named fromPairs that creates an object from an array
  containing nested arrays.
- Each nested array will have two elements representing key/value pairs used
  to create key/value pairs in an object to be returned by the function.
- If a key appears in multiple pairs, the rightmost pair should overwrite the
  previous entry in the object.

Examples:

fromPairs([ ['a', 1], ['b', 2], ['c', 3] ])
//=> { a: 1, b: 2, c: 3 }

fromPairs([ ['name', 'Sam"], ['age', 24], ['name', 'Sally'] ])
//=> { name: "Sally", age: 24 }
-----------------------------------------------------------------------------*/
// Your solution for 14-fromPairs here:
export const fromPairs = (arr) => {
  if (arr.length === 0) {
    return {};
  }
  let output = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== 2) {
      throw new Error("Array does not have a pair of values");
    }
    output[[arr[i][0]]] = arr[i][1]; // Appends the key-value pair to the object based on the elements within it
  }
  return output;
};

console.log(
  fromPairs([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ])
);
console.log(
  fromPairs([
    ["name", "Sam"],
    ["age", 24],
    ["name", "Sally"],
  ])
);
