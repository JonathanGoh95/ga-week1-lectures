/*-----------------------------------------------------------------------------
Challenge: 00-sayHello (example)

Difficulty: Basic

Prompt:

Write a function called sayHello that returns the string "Hello!".

Examples:

sayHello() //=> Hello!
-----------------------------------------------------------------------------*/
// Your solution for 00-sayHello (example) here:
export const sayHello = function (greeting = "Hello") {
  return `${greeting}!`;
};

console.log(sayHello());
console.log(sayHello("What's up"));
