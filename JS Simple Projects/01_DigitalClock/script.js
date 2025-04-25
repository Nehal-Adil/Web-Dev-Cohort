function updateCock() {
  const timeElement = document.getElementById("time");
  const dateElement = document.getElementById("date");

  const now = new Date();
  const hours = now.getHours() % 12 || 12;
  //  const time = 1 || 12  truthy value
  // console.log(time);

  // const minutes = now.getMinutes().toString().padStart(2, "0");
  let minutes = now.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
  // console.log(minutes);

  let seconds = now.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
  dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateCock, 1000);

updateCock();
