/* const adventurer = {
  getName() {
    return ["S", "a", "l", "l", "y"];
  },
  getHome() {
    return { size: 10, length: 20 };
  },
};

const games = [
  function () {
    return 10;
  },
  null,
];

const what = () => {
  return () => {
    return "something";
  };
};

console.log(adventurer.getName()[0]); //Gets the first character of the return string/array in the method
console.log(adventurer.getHome().size);
console.log(games[0]());
console.log(what()()); */

// const names = ["Jonathan", "Joanne", "Jansen", "Jacob"];
// const index = Math.floor(Math.random() * 4);
// console.log(`The Lucky Person is: ${names[index]}`);

// const fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(`Today I ate ${fruits[i]}.`);
// }

/* const whatIAte = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Today I ate ${arr[i]}.`);
  }
};

whatIAte(fruits); */

const fruits = ["apple", "banana", "cherry", "durian"];
/* const result = [];
const firstLetter = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][0].toUpperCase());
  }
  return result;
};

console.log(firstLetter(fruits)); */
const fruitLen = fruits.map((fruit) => {
  return fruit.length;
});

console.log(fruitLen);
