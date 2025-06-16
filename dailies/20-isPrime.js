/*-----------------------------------------------------------------------------
Challenge: 20-isPrime

Difficulty: Intermediate

Prompt:

- Write a function named isPrime that returns true when the integer argument
  passed to it is a prime number and false when the argument passed to it is
  not prime.
- A prime number is a whole number (integer) greater than 1 that is evenly
  divisible by only itself.

Examples:

isPrime(2) //=> true
isPrime(3) //=> true
isPrime(4) //=> false
isPrime(29) //=> true
isPrime(200) //=> false
-----------------------------------------------------------------------------*/
// Your solution for 20-isPrime here:
export const isPrime = (num) => {
  if (num <= 3) {
    return true; // Returns true immediately if argument is 3 and below
  }
  for (let i = 2; i < num; i++) {
    // Loop does not include 1 and the argument itself
    if (num % i === 0) {
      return false; // Returns false if a divisor is found within the range
    }
  }
  return true;
};

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(5));
console.log(isPrime(7));
console.log(isPrime(11));
console.log(isPrime(13));
console.log(isPrime(17));
console.log(isPrime(29));
console.log(isPrime(16));
console.log(isPrime(211));
console.log(isPrime(200));
console.log(isPrime(1229));
console.log(isPrime(4393139));
