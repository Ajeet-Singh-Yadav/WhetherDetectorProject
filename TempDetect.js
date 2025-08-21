const apiKey = "1680e92bbbb7274a3641ceb684373285"; 
const submitBtn = document.getElementById("submitBtn");
const locationInput = document.getElementById("locationInput");
const weatherResult = document.getElementById("weatherResult");

submitBtn.addEventListener("click", () => {
  const location = locationInput.value;
  if (location) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.cod === 200) {
          weatherResult.innerHTML = `<p>The temperature in ${data.name} is ${data.main.temp}°C</p>`;
        } else {
          weatherResult.innerHTML = `<p>${data.message}</p>`;
        }
      })
      .catch((error) => {
        weatherResult.innerHTML = `<p>An error occurred: ${error.message}</p>`;
      });
  }
});
