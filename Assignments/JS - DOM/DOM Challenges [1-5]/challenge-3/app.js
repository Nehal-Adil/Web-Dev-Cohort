const nameInput = document.querySelector("#nameInput");
const nameDisplay = document.querySelector("#nameDisplay");
const jobInput = document.querySelector("#jobInput");
const jobDisplay = document.querySelector("#jobDisplay");
const ageInput = document.querySelector("#ageInput");
const ageDisplay = document.querySelector("#ageDisplay");
const bioInput = document.querySelector("#bioInput");
const bioDisplay = document.querySelector("#bioDisplay");

nameInput.addEventListener("input", () => {
  nameDisplay.textContent = nameInput.value || "Not Provided";
});

jobInput.addEventListener("input", () => {
  jobDisplay.textContent = jobInput.value || "Not Provided";
});

ageInput.addEventListener("input", () => {
  ageDisplay.textContent = ageInput.value || "Not Provided";
});

bioInput.addEventListener("input", () => {
  bioDisplay.textContent = bioInput.value || "Not Provided";
});
