const adventurer = {
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
console.log(what()());
