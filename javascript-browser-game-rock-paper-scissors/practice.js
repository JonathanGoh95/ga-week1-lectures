//Function to reverse string order and convert them to Uppercase
const reverseUpperString = (str) => {
  str = [...str] //Converts string to array
    .reverse() //Reverses the array
    .map((e) => e.toUpperCase()) //Converts each element in the array to Uppercase
    .join(""); //Join the array back as a string
  return str;
};

console.log(reverseUpperString("SEI Rocks!"));
