const API_KEY = "09047e3382ae3a02c27e67fe96f35723";
const lat = 49.9935;
const lon = 36.230385;
const weatherDiv = document.getElementById("weather");

const fetchWeather = async () => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  );
  const data = await response.json();
  return data;
};

function displayWeather(data) {
  return `
    <h2>${data.name}</h2>
    <p>Description: ${data.weather[0].description}</p>
    <p>Temperature: ${data.main.temp}°C</p>
  `;
}

const getWeather = async () => {
  const savedWeather = JSON.parse(localStorage.getItem("weathexrData"));
  const lastFetchTime = localStorage.getItem("lastFetchTime");

  if (
    savedWeather &&
    lastFetchTime &&
    new Date().getTime() - lastFetchTime < 2 * 60 * 60 * 1000
  ) {
    weatherDiv.innerHTML = displayWeather(savedWeather);
  } else {
    const weatherData = await fetchWeather();
    if (weatherData) {
      localStorage.setItem("weatherData", JSON.stringify(weatherData));
      localStorage.setItem("lastFetchTime", new Date().getTime());
      weatherDiv.innerHTML = displayWeather(weatherData);
    }
  }
};

document.addEventListener("DOMContentLoaded", getWeather);
