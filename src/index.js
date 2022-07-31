function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let inputCity = document.querySelector("#current-temperature");
  inputCity.innerHTML = `${temperature}°С`;
}

let now = new Date();
let h2 = document.querySelector("h2");
let hour = now.getHours();
hour = hour <= 9 ? "0" + hour : hour;
let min = now.getMinutes();
min = min <= 9 ? "0" + min : min;
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
h2.innerHTML = `${day} ${hour}:${min}`;
let cityForm = document.querySelector("#type-city");
cityForm.addEventListener("submit", showCity);
let cityInput = document.querySelector("#city");
let currentCity = `${cityInput.value}`;
let apiKey = "be02bf48bb091676d48ceae50ec17b7a";
let units = "metric";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=${units}`;
axios.get(apiUrl).then(showTemperature);
