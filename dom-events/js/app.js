const bodyElement = document.querySelector("body");
const divElement = document.querySelector("div");
const likeButtonElement = document.querySelector("#like-button");
const dislikeButtonElement = document.querySelector("#dislike-button");
const commentButtonElement = document.querySelector("#comment-button");
const commentListElement = document.querySelector("ul");
const inputElement = document.querySelector("input");
let likesCount = 0;
let dislikesCount = 0;

// bodyElement.addEventListener("click", () => {
//   console.log("body");
// });

// divElement.addEventListener("click", () => {
//   console.log("div");
// });

const handleReaction = (event) => {
  if (event.target.id === "like-button") {
    likesCount++;
    likeButtonElement.textContent = `${likesCount} like(s). Like this post!`;
    // likeButtonElement.removeEventListener("click", handleReaction);
  } else if (event.target.id === "dislike-button") {
    dislikesCount++;
    dislikeButtonElement.textContent = `${dislikesCount} dislike(s). Dislike this post!`;
    // dislikeButtonElement.removeEventListener("click", handleReaction);
  }
};

// divElement.addEventListener("click", handleReaction);
likeButtonElement.addEventListener("click", handleReaction);
dislikeButtonElement.addEventListener("click", handleReaction);
// likeButtonElement.addEventListener("click", handleLike());
commentButtonElement.addEventListener("click", () => {
  if (inputElement.value === "") {
    inputElement.setAttribute("placeholder", "The input field is empty");
    document.removeElement("li");
  }
  const commentElement = document.createElement("li");
  commentElement.textContent = inputElement.value;
  commentListElement.appendChild(commentElement);
  inputElement.value = "";
  inputElement.removeAttribute("placeholder");
});
