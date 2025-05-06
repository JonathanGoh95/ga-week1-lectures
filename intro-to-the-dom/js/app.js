const titleElement = document.querySelector("#main-title");
const paragraphElement = document.querySelector(".cool");
const bodyElement = document.querySelector("body");
const commentElements = document.querySelectorAll("#comments");
const buttonElement = document.querySelector("button");
const titleElementById = document.getElementById("main-title");
const itemEls = Array.from(commentElements);
// const itemEls = [...commentElements];

paragraphElement.textContent = "The placeholder text is gone!";
paragraphElement.innerHTML = "Comments for <strong><em>today</em></strong>:";

titleElement.style.textAlign = "center";
paragraphElement.style.color = "blue";

const h2Element = document.createElement("h2");
h2Element.textContent = "Comments section";
// bodyElement.appendChild(h2Element);
paragraphElement.after(h2Element);
commentElements.forEach((commentElement) => {
  commentElement.style.fontSize = "30px";
});
if (buttonElement.hasAttribute("disabled") === true) {
  buttonElement.removeAttribute("disabled");
}
buttonElement.setAttribute("id", "submit");
buttonElement.classList.add("btn");
buttonElement.classList.replace("btn", "action-button");
