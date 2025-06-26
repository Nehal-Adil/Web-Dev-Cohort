const timeElement = document.querySelector(".digital-clock");
const dateElement = document.querySelector(".date");
const clock = document.querySelector(".clock");

const secondHand = document.querySelector(".second");
const minuteHand = document.querySelector(".minute");
const hourHand = document.querySelector(".hour");

for (let i = 1; i <= 12; i++) {
  const number = document.createElement("div");
  number.className = "number";
  // number.style.transform = `rotate(${i * 30}deg)`;

  number.style.setProperty("--rotation", `${i * 30}deg`);
  number.innerHTML = `<span>${i}</span>`;
  clock.appendChild(number);
}

function updateClock() {
  const now = new Date();

  const hours = now.getHours() % 12 || 12;
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  let seconds = now.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
  //   console.log(seconds);
  const ampm = now.getHours() >= 12 ? `PM` : `AM`;

  const options = {
    month: "long",
    weekday: "long",
    day: "2-digit",
    year: "numeric",
  };

  const secToDeg = (seconds / 60) * 360;
  const minToDeg = (minutes / 60) * 360;
  const hrToDeg = (hours / 12) * 360;

  secondHand.style.transform = `rotate(${secToDeg}deg)`;
  minuteHand.style.transform = `rotate(${minToDeg}deg)`;
  hourHand.style.transform = `rotate(${hrToDeg}deg)`;

  // secondHand.style.transform = `translateX(-50%) rotate(${secToDeg}deg)`;
  // minuteHand.style.transform = `translateX(-50%) rotate(${minToDeg}deg)`;
  // hourHand.style.transform = `translateX(-50%) rotate(${hrToDeg}deg)`;

  timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  dateElement.textContent = now.toLocaleDateString("en-US", options);
}

setInterval(updateClock, 1000);

updateClock();
