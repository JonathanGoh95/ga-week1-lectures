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
