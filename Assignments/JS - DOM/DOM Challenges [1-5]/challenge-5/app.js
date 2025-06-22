// Image data
const images = [
  {
    url: "https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Beautiful Mountain Landscape",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Ocean Sunset View",
  },
  {
    url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Autumn Forest Path",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Urban City Skyline",
  },
  {
    url: "https://images.unsplash.com/photo-1749627995669-4d4dda3a9c1d?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Yellow Mountain Flowers",
  },
];

let currentImageIndex = 0;
let intervalId = null;

const carouselTrack = document.querySelector("#carouselTrack");
const carouselCaption = document.querySelector("#caption");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const carouselNav = document.querySelector("#carouselNav");
const autoPlayButton = document.querySelector("#autoPlayButton");
const timerDisplay = document.querySelector("#timerDisplay");
let imageElement;

addImageElement();

function addImageElement() {
  imageElement = document.createElement("div");
  imageElement.classList = "carousel-slide";
  imageElement.style.backgroundImage = `url(${images[currentImageIndex].url})`;
  carouselTrack.appendChild(imageElement);

  showCaption(currentImageIndex);
}

function changeImage(index) {
  // console.log("Index: ", index);

  imageElement.style.backgroundImage = `url(${images[index].url})`;
}

function prevImage(currentImageIndex) {
  if (currentImageIndex == 0) {
    currentImageIndex = images.length;
  }
  currentImageIndex--;
  changeImage(currentImageIndex);
  showCaption(currentImageIndex);

  return currentImageIndex;
}

function showNextImage(currentImageIndex) {
  if (currentImageIndex == images.length - 1) {
    currentImageIndex = -1;
  }
  currentImageIndex++;
  changeImage(currentImageIndex);
  showCaption(currentImageIndex);

  return currentImageIndex;
}

function showCaption(currentImageIndex) {
  carouselCaption.innerHTML = `${images[currentImageIndex].caption}`;
}

prevButton.addEventListener("click", () => {
  currentImageIndex = prevImage(currentImageIndex);
});

nextButton.addEventListener("click", () => {
  currentImageIndex = showNextImage(currentImageIndex);
});

autoPlayButton.addEventListener("click", () => {
  if (autoPlayButton.textContent == "Stop Auto Play") {
    autoPlayButton.textContent = "Start Auto Play";
    stopTimer();
  } else {
    startTimer(currentImageIndex);
    autoPlayButton.textContent = "Stop Auto Play";
  }
});

function startTimer(currentImageIndex) {
  let currentTime = 5;
  timerDisplay.textContent = currentTime;

  intervalId = setInterval(() => {
    if (currentTime == 0) {
      currentImageIndex = showNextImage(currentImageIndex);
      currentTime = 6;
    }

    currentTime--;
    timerDisplay.textContent = currentTime;
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  timerDisplay.textContent = "";
}
