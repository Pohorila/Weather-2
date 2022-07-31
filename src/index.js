function showCity(event) {
  event.preventDefault();
  let cityInput = document.querySelector("#city");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${cityInput.value}`;
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
