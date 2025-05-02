const instructors = ["Beryl", "Hunter", "Joe", "Jurgen", "Ben", "David"];

const aweinstructors = instructors.map((instructor) => {
  return `${instructor} is awesome!`;
});

console.log(aweinstructors);

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
const notJerks = people.filter((person) => {
  return person !== "jerks";
});

console.log(notJerks);

const thingsInMyRoom = [
  "bed",
  "lamp",
  "table",
  "random elephant",
  "three tacos",
];
const isARandomElephantInMyRoom = thingsInMyRoom.some((thing) => {
  return thing === "random elephant";
}); /* Fill code in here */

console.log(isARandomElephantInMyRoom); // true

const thingsInMyRoom2 = [
  "random elephant",
  "random elephant",
  "random elephant",
  "random elephant",
];

const isEverythingInMyRoomARandomElephant = thingsInMyRoom2.every((thing) => {
  return thing === "random elephant";
}); /* Fill code in here */

console.log(isEverythingInMyRoomARandomElephant); // true
