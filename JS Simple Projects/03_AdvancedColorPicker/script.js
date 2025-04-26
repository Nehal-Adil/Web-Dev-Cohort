const coloInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById(
  "complementaryContainer"
);
const saveColorButton = document.getElementById("saveColorButton");
const favoritesContainer = document.getElementById("favoriteContainer");

coloInput.addEventListener("input", () => {
  const selectedColor = coloInput.value;
  //   console.log(selectedColor);
  updateColorDisplay(selectedColor);
  showComplementaryColor(selectedColor);
});

function updateColorDisplay(color) {
  colorCode.innerText = color;
  colorCode.style.color = color;
}

function showComplementaryColor(color) {
  const complementoryColors = getComplementaryColor(color);
  complementaryContainer.innerHTML = ""; // clear previous colors

  complementoryColors.forEach((compColor) => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = compColor;

    complementaryContainer.appendChild(colorBox);
  });
}

function getComplementaryColor(color) {
  const base = parseInt(color.slice(1), 16);
  const compliment = (0xffffff ^ base).toString(16).padStart(6, "0");
  return [`#${compliment}`];
}

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => alert("Color code copied"))
    .catch((err) => console.error("Failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
  const color = colorCode.textContent;
  addFovoriteColor(color);
});

function addFovoriteColor(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorBox.title = color;

  favoritesContainer.appendChild(colorBox);
}
