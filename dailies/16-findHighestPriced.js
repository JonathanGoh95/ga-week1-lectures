/*-----------------------------------------------------------------------------
Challenge: 16-findHighestPriced

Difficulty: Intermediate

Prompt:

- Write a function named findHighestPriced that accepts a single array of
  objects.
- The objects contained in the array are guaranteed to have a price property
  holding a numeric value.
- The function should return the object in the array with the largest value
  held in the price property.
- If there's a tie between two or more objects, return the first of those
  objects in the array.
- Return the original object, not a copy.
- Do not mutate the array that is passed in.

Examples:

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 5 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'c3', price: 50 }

findHighestPriced([
  { sku: 'a1', price: 25 },
  { sku: 'b2', price: 50 },
  { sku: 'c3', price: 50 },
  { sku: 'd4', price: 10 }
])
//=> { sku: 'b2', price: 50 }
-----------------------------------------------------------------------------*/
// Your solution for 16-findHighestPriced here:
export const findHighestPriced = (arr) => {
  let max = arr[0]["price"];
  let count = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i]["price"] > max) {
      max = arr[i]["price"];
      count = i;
    }
  }
  return arr[count];
};

console.log(
  findHighestPriced([
    { sku: "a1", price: 25 },
    { sku: "b2", price: 5 },
    { sku: "c3", price: 50 },
    { sku: "d4", price: 10 },
  ])
);

console.log(
  findHighestPriced([
    { sku: "a1", price: 25 },
    { sku: "b2", price: 50 },
    { sku: "c3", price: 50 },
    { sku: "d4", price: 10 },
  ])
);
