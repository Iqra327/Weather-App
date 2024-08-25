import { locationError } from "../Error/error.js";

const temperature = document.querySelector('.js-temperature');
const description = document.querySelector('.js-weather-description');
const humidity = document.querySelector('.js-humidity');
const windSpeed =  document.querySelector('.js-wind');
const weatherImg = document.querySelector('.js-weather-img');

export async function fetchWeather(input){
  const apiKey = `32d7643a1bd30b693430efe340ddab41`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`;
  
  document.querySelector('.js-weather-display').style.display = 'none';

  try {
    document.querySelector('.js-error-msg').textContent = 'Searching...';
    const data =await fetch(url).then(
      response => response.json()
    );

    //error msg
    if(data.cod === '404'){
      locationError(data.message);
      return;
    };

    document.querySelector('.js-weather-display').style.display = 'block';
    document.querySelector('.js-location-error').style.display = 'none';
  
    let weatherCases = '';
    switch (data.weather[0].main.toLowerCase()) {
      case 'clouds':
        weatherCases = 'cloud';
        break;
      case 'clear':
        weatherCases = 'clear';
        break;
      case 'rain':
        weatherCases = 'rain';
        break;
      case 'mist':
        weatherCases = 'mist';
        break;
      case 'snow':
        weatherCases = 'snow';
        break;
      case 'smoke':
        weatherCases = 'smoke';
        break;
      default:
        weatherCases = '404';
        break;
    };

    weatherImg.src = `assets/${weatherCases}.png`;
    description.textContent = `${data.weather[0].description}`;
    temperature.textContent = `${data.main.temp}°C`;
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed}Km/H`;
  } 
  catch (error) 
  {
    locationError('OOPS, Something Went Wrong...'); 
  };
};