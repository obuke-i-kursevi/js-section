const submitBtn = document.querySelector('.weather-data-wrapper__submit-button');
const temperatureData = document.querySelector('.weather-data-wrapper__forecast-temp');
const descriptionData = document.querySelector('.weather-data-wrapper__forecast-desc');
const iconData = document.querySelector('.weather-data-wrapper__weather-image');
const locationData = document.querySelector('.weather-data-wrapper__forecast-location');
const locationInput = document.querySelector('.weather-data-wrapper__location-input');

const API_KEY = '7a19a02025bd5154c66049a41243e8c3';
const API_URL = 'http://api.weatherstack.com/current';

const getWeatherData = async (city) => {

    // http://api.weatherstack.com/current?access_key=YOUR_ACCESS_KEY&query=New York
    const response = await fetch(`${API_URL}?access_key=${API_KEY}&query=${city}`);

    const weatherData = await response.json();

    // console.log(weatherData);
    // console.log(response);

    if(weatherData.success===false) {
        alert(weatherData.error.info);
        return;
    }

    const {temperature, weather_descriptions, weather_icons} = weatherData.current;
    const {name, region, country} = weatherData.location;
    temperatureData.textContent = `${temperature} ℃`;
    descriptionData.textContent = weather_descriptions[0];
    iconData.src = weather_icons[0];
    locationData.textContent = `${name} (${region}), ${country}`;

}

locationInput.addEventListener('keypress', (event) => {
   if(event.key === 'Enter') {
        const inputValue = locationInput.value;
        getWeatherData(inputValue);
   }
});

submitBtn.addEventListener('click', function() {
    const inputValue = locationInput.value;
    getWeatherData(inputValue);
});