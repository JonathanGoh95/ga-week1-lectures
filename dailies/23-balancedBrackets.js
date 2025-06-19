/*-----------------------------------------------------------------------------
Challenge: 23-balancedBrackets

Difficulty: Intermediate

Prompt:

- Write a function called balancedBrackets that accepts a single string as an
  argument.
- The input string is composed entirely of parentheses, brackets, or curly
  braces, i.e., (), [], or {}. Referred to as "braces" from this point forward.
- The balancedBrackets function should return true if the string's braces are
  "balanced" and false if they are not.
- The brackets are considered unbalanced if any closing bracket does not close
  the same type of opening bracket, ignoring already matched brackets between
  them. These examples may explain it best:

Examples:

balancedBrackets( '()' ) // => true
balancedBrackets( '(]' ) // => false
balancedBrackets( '[{}]' ) // => true
balancedBrackets( '[(])' ) // => false
balancedBrackets( '[({}[])]' ) // => true
-----------------------------------------------------------------------------*/
// Your solution for 23-balancedBrackets here:
export const balancedBrackets = (str) => {
  /* return (
    (str.charAt(0) === "(" && str.charAt(str.length - 1) === ")") ||
    (str.charAt(0) === "[" && str.charAt(str.length - 1) === "]") ||
    (str.charAt(0) === "{" && str.charAt(str.length - 1) === "}")
  ); */
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (let char of str) {
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
    } else if (char === ")" || char === "]" || char === "}") {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(balancedBrackets("()"));
console.log(balancedBrackets("(]"));
console.log(balancedBrackets("[{}]"));
console.log(balancedBrackets("([])"));
console.log(balancedBrackets("[()]"));
console.log(balancedBrackets("[(])"));
console.log(balancedBrackets("[({}[])]"));
console.log(balancedBrackets("([((}[)[)(]{}[])])"));
