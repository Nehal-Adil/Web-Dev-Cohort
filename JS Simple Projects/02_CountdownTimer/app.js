const startButton = document.getElementById("startButton");
const pauseButton = document.getElementById("pauseButtton");
const resumeButton = document.getElementById("resumeButtton");
const timeInput = document.getElementById("timeInput");
const countDownDisplay = document.getElementById("countdownDisplay");

let paused = false;
let timer = -1;

function startTimer() {
  let valueInSeconds = parseInt(timeInput.value);
  console.log(valueInSeconds);

  if (isNaN(valueInSeconds)) {
    countDownDisplay.innerText = "Please enter a valid number";
    return;
  }

  if (valueInSeconds <= 0) {
    countDownDisplay.innerText = "Please enter seconds > 0";
    return;
  }

  if ((timer = -1)) {
    clearInterval(timer);
    const timer = setInterval(() => {
      valueInSeconds--;
      countDownDisplay.innerText = `Time Remaining ${valueInSeconds} seconds`;

      if (valueInSeconds < 0) {
        clearInterval(timer);
        countDownDisplay.innerText = "Times up";
        //   alert("Time up ⏰");
      }
    }, 1 * 1000);
  }
}

// TODO - Pause and Resume Timer

// Pause Timer
// function pauseTimer() {
//   paused = true;
//   timer = -1;
// }

startButton.addEventListener("click", startTimer);
// pauseButton.addEventListener("click", pauseTimer);
