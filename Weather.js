const locationInput = document.getElementById('location-input');
const searchBtn = document.getElementById('search-btn');
const weatherIcon = document.getElementById('weather-icon');
const cityName = document.getElementById('city-name');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const windSpeed = document.getElementById('wind-speed');

const apiKey = '9c9ca02a2bf36940e674f97e0d35b99a';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

searchBtn.addEventListener('click', () => {
  const location = locationInput.value.trim();
  if (location) {
    fetchWeatherData(location);
  }
});

function fetchWeatherData(location) {
  const url = `${apiUrl}?q=${location}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      updateWeatherInfo(data);
    })
    .catch(error => {
      console.error('Error fetching weather data:', error);
      alert('Error fetching weather data. Please try again later.');
    });
}

function updateWeatherInfo(data) {
  const { name, main, weather, wind } = data;
  cityName.textContent = name;
  temperature.textContent = `Temperature: ${main.temp}°C`;
  description.textContent = `Weather: ${weather[0].description}`;
  humidity.textContent = `Humidity: ${main.humidity}%`;
  windSpeed.textContent = `Wind Speed: ${wind.speed} m/s`;
  
  weatherIcon.alt = weather[0].description;
}