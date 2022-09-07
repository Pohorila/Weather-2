function showTemperature(response) {
  let iconElement = document.querySelector("#icon");
  document.querySelector("#cityname").innerHTML = response.data.name;
  document.querySelector("#current-temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}
function showCity(event) {
  event.preventDefault();
  let apiKey = "be02bf48bb091676d48ceae50ec17b7a";
  let city = document.querySelector("#city").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
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
