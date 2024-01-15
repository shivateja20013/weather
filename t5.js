document.addEventListener('DOMContentLoaded', function () {
  function getWeather() {
    const locationInput = document.getElementById('location');
    const locationName = document.getElementById('location-name');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');
    const weatherInfo = document.getElementById('weather-info');

    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const location = locationInput.value;

    if (location.trim() === '') {
      alert('Please enter a location.');
      return;
    }

    const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        locationName.textContent = `${data.name}, ${data.sys.country}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        description.textContent = `Condition: ${data.weather[0].description}`;
        humidity.textContent = `Humidity: ${data.main.humidity}%`;
        windSpeed.textContent = `Wind Speed: ${data.wind.speed} m/s`;

        weatherInfo.classList.remove('hidden');
      })
      .catch(error => {
        alert('Error fetching weather data. Please try again.');
        console.error('Error:', error);
      });
  }

  document.getElementById('location').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
      getWeather();
    }
  });
});
