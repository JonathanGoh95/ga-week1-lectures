// const fs = require("node:fs");
const fs = require("node:fs/promises");
// fs.readFile("test.txt", "utf8", (err, data) => {
//   console.log(data);
//   fs.readFile("test2.txt", "utf8", (err2, data2) => {
//     console.log(data2);
//     fs.readFile("test3.txt", "utf8", (err3, data3) => {
//       console.log(data3);
//     });
//   });
// });

const readDataFiles = async () => {
  const data = await fs.readFile("test.txt", "utf8");
  console.log(data);
  const data2 = await fs.readFile("test2.txt", "utf8");
  console.log(data2);
  const data3 = await fs.readFile("test3.txt", "utf8");
  console.log(data3);
};

const readAnotherFile = async () => {
  try {
    // This tries to read a file that does not exist
    const data = await fs.readFile("test4.txt", "utf8");
    console.log(data);
  } catch (error) {
    // This runs if there is an error (like the file not being found)
    console.log(error);
  }
};

readAnotherFile();

readDataFiles();

console.log("Run this as soon as possible.");
