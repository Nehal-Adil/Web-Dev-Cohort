const images = [
  {
    imgSrc:
      "https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1324803/pexels-photo-1324803.jpeg",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/2131614/pexels-photo-2131614.jpeg",
  },
  {
    imgSrc: "https://images.pexels.com/photos/547115/pexels-photo-547115.jpeg",
  },
  {
    imgSrc:
      "https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg",
  },
  {
    imgSrc: "https://images.pexels.com/photos/585752/pexels-photo-585752.jpeg",
  },
];

const colorButton = document.getElementById("colorButton");
const imageButton = document.getElementById("imageButton");

function updateBG() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function updateImage() {
  //   const url = `https://source.unsplash.com/random/1920x1080?sig=${Math.random()}`;

  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImg = images[randomIndex].imgSrc;

  document.body.style.backgroundImage = `url(${selectedImg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.transition = "background-image 0.5s ease-in-out";

  document.querySelector("h1").style.color = "white";
}

colorButton.addEventListener("click", updateBG);
imageButton.addEventListener("click", updateImage);
