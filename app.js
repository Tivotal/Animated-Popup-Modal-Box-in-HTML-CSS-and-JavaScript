/* Created by Tivotal */

let showBtn = document.querySelector(".show-btn");
let section = document.querySelector("section");
let closeBtn = document.querySelector(".close-btn");
let overlay = document.querySelector(".overlay");

showBtn.addEventListener("click", () => {
  section.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  section.classList.remove("active");
});

overlay.addEventListener("click", () => {
  section.classList.remove("active");
});
