//Function to reverse string order and convert them to Uppercase
const reverseUpperString = (str) => {
  str = [...str]; //Converts string to array
  // .reverse() //Reverses the array
  let reverseString = [];
  for (let i = str.length - 1; i >= 0; i--) {
    reverseString.push(str[i]);
  }
  // .map((e) => e.toUpperCase()) //Converts each element in the array to Uppercase
  // .join(""); //Join the array back as a string
  return reverseString.join("");
};

console.log(reverseUpperString("SEI Rocks!"));
