/*-----------------------------------------------------------------------------
Challenge: 15-mergeObjects

Difficulty: Intermediate

Prompt:

- Write a function named mergeObjects that accepts at least two objects as
  arguments, merges the properties of the second through n objects into the
  first object, then finally returns the first object.
- If any objects have the same property key, values from the object(s) later
  in the arguments list should overwrite earlier values.

Examples:

mergeObjects({}, {a: 1})
//=> {a: 1} ( returns a modified version of the object passed into the function as the first argument )

mergeObjects({a: 1, b: 2, c: 3}, {d: 4})
//=> {a: 1, b: 2, c: 3, d: 4}

mergeObjects({a: 1, b: 2, c: 3}, {d: 4}, {b: 22, d: 44})
//=> {a: 1, b: 22, c: 3, d: 44}
-----------------------------------------------------------------------------*/
// Your solution for 15-mergeObjects here:
const mergeObjects = (...objs) => {
  if (objs.length < 2) {
    return "The number of objects is less than 2";
  }
  const target = objs[0];
  for (let i = 1; i < objs.length; i++) {
    for (let key in objs[i]) {
      target[key] = objs[i][key];
    }
  }
  return target;
};

console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }));
console.log(mergeObjects({ a: 1, b: 2, c: 3 }, { d: 4 }, { b: 22, d: 44 }));
