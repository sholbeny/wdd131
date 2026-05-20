const year = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

const temperature = 6;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChill = document.querySelector("#wind-chill");

if (temperature <= 10 && windSpeed > 4.8) {
  windChill.textContent = `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
  windChill.textContent = "N/A";
}