const redBtn = document.querySelector("#redButton");
const greenBtn = document.querySelector("#greenButton");
const blueBtn = document.querySelector("#blueButton");
const purpleBtn = document.querySelector("#purpleButton");
const resetBtn = document.querySelector("#resetButton");
const mainHeading = document.querySelector("#mainHeading");
const author = document.querySelector("#author");

redBtn.addEventListener("click", () => {
  mainHeading.style.color = "#f00";
  author.style.color = "#f00";
});

greenBtn.addEventListener("click", () => {
  mainHeading.style.color = "#0f0";
  author.style.color = "#0f0";
});

blueBtn.addEventListener("click", () => {
  mainHeading.style.color = "#00f";
  author.style.color = "#00f";
});

purpleBtn.addEventListener("click", () => {
  mainHeading.style.color = "#9b59b6";
  author.style.color = "#9b59b6";
});

resetBtn.addEventListener("click", () => {
  mainHeading.style.color = "#000";
  author.style.color = "#000";
});
