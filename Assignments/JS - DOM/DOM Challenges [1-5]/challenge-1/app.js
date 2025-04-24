const toggleButton = document.querySelector("#toggleButton");
const bulbStatus = document.querySelector("#status");
const bulb = document.querySelector("#bulb");
const body = document.querySelector("#body");

let flag = false;

const toggleButtonHandler = () => {
  console.log("toggle button cliked");
  flag = !flag;
  console.log(flag);
  if (flag) {
    bulb.classList.remove("off");
    body.classList.remove("dark-mode");
    toggleButton.textContent = "Turn Off";
    bulbStatus.textContent = "Status: On";
  } else {
    bulb.classList.add("off");
    body.classList.add("dark-mode");
    toggleButton.textContent = "Turn On";
    bulbStatus.textContent = "Status: Off";
  }
};

toggleButton.addEventListener("click", toggleButtonHandler);
