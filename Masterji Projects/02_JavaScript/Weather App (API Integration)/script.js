const cityInput = document.querySelector(".city-input");
const searchBtn = document.querySelector(".search-btn");

const weatherInfoSection = document.querySelector(".weather-info");
const searchCitySection = document.querySelector(".search-city");
const notFoundSection = document.querySelector(".not-found");

const countryText = document.querySelector(".country-txt");
const tempText = document.querySelector(".temp-txt");
const conditionText = document.querySelector(".condition-txt");
const humidityValueText = document.querySelector(".humidity-value-txt");
const windValueText = document.querySelector(".wind-value-txt");
const weatherSummaryImage = document.querySelector(".weather-summary-image");
const currentDateText = document.querySelector(".current-date-text");

const APIKEY = "cf8e371adf1b5f89f3d6bf4ed9b2584a";

async function fetchCityData(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  // console.log(data);

  return data;
}

async function updateWeaterInfo(city) {
  const weatherData = await fetchCityData(city);

  if (weatherData.cod != 200) {
    showDisplaySection(notFoundSection);

    return;
  }
  console.log(weatherData);

  const {
    name,
    main: { temp, humidity },
    weather: [{ id, main }],
    wind: { speed },
  } = weatherData;

  countryText.textContent = name;
  tempText.textContent = Math.round(temp) + " °C";
  conditionText.textContent = main;
  humidityValueText.textContent = humidity + " %";
  windValueText.textContent = speed + " M/s";

  currentDateText.textContent = getCurrentDate();

  weatherSummaryImage.src = `assets/weather/${getWeatherIcon(id)}`;

  showDisplaySection(weatherInfoSection);
}

function getCurrentDate() {
  const date = new Date();
  const options = {
    weekday: "short",
    day: "2-digit",
    month: "short",
  };

  return date.toLocaleDateString(undefined, options);
}

function getWeatherIcon(id) {
  //   console.log(id);
  if (id <= 232) return "thunderstorm.svg";
  if (id <= 321) return "drizzle.svg";
  if (id <= 532) return "rain.svg";
  if (id <= 622) return "snow.svg";
  if (id <= 781) return "atmosphere.svg";
  if (id <= 800) return "clear.svg";
  else return "clouds.svg";
}

function showDisplaySection(sectionToDisplay) {
  const allSections = [weatherInfoSection, searchCitySection, notFoundSection];

  allSections.forEach((section) => (section.style.display = "none"));

  sectionToDisplay.style.display = "flex";
}

searchBtn.addEventListener("click", () => {
  if (cityInput.value.trim() != "") {
    console.log(cityInput.value);

    updateWeaterInfo(cityInput.value);
    cityInput.value = "";
  }
});

cityInput.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && cityInput.value.trim() != "") {
    console.log(cityInput.value);

    updateWeaterInfo(cityInput.value);
    cityInput.value = "";
  }
});
