/* movies = ["Barbie", "Interstellar", "Get Out", "Thunderbolts"];
movies.push("Parasite", "Dune");
movies.pop();
movies.push("Mission Impossible");
console.log(movies);

let movieNames = "";
for (const item of movies) {
  movieNames += item + " ";
}
console.log(movieNames); */

const books = [];
books.push("The Shining", "Pride and Prejudice");
console.log(books[1]);
books[1] = "Dune";
for (let i = 0; i < books.length; i++) {
  console.log(books[i]);
}
