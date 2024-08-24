const searchInputEl = document.querySelector('.js-search-input');
const searchIcon = document.querySelector('.js-search-icon');
const temperature = document.querySelector('.js-temperature');
const description = document.querySelector('.js-weather-description');
const humidity = document.querySelector('.js-humidity');
const windSpeed =  document.querySelector('.js-wind');
const weatherImg = document.querySelector('.js-weather-img');

searchIcon.addEventListener('click', () => {
  const input = searchInputEl.value.trim();
  fetchWeather(input);
});

async function fetchWeather(input){
  const apiKey = `32d7643a1bd30b693430efe340ddab41`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}`;
  console.log('wait..');
  
  try {
    const response =await fetch(url);
    const data =await response.json();
    console.log(data);

    document.querySelector('.js-weather-display').style.display = 'block';
    weatherImg.src = `assets/${data.weather[0].main}.png`;
    description.textContent = `${data.weather[0].description}`;
    temperature.textContent = `${data.main.temp}°C`;
    
    humidity.textContent = `${data.main.humidity}%`;
    windSpeed.textContent = `${data.wind.speed}Km/H`;
  
  
  } catch (error) {
    weatherImg.src = `assets/404.png`;
    description.textContent = 'Something went wrong...';
    document.querySelector('.js-weather-details').style.display = 'none';      
  }

}








// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 10000, …}
// base
// : 
// "stations"
// clouds
// : 
// {all: 19}
// cod
// : 
// 200
// coord
// : 
// {lon: 72.2813, lat: 32.2898}
// dt
// : 
// 1724519132
// id
// : 
// 1176022
// main
// : 
// feels_like
// : 
// 309.14
// grnd_level
// : 
// 977
// humidity
// : 
// 44
// pressure
// : 
// 1001
// sea_level
// : 
// 1001
// temp
// : 
// 306.87
// temp_max
// : 
// 306.87
// temp_min
// : 
// 306.87
// [[Prototype]]
// : 
// Object
// name
// : 
// "Jauharabad"
// sys
// : 
// {country: 'PK', sunrise: 1724460066, sunset: 1724507144}
// timezone
// : 
// 18000
// visibility
// : 
// 10000
// weather
// : 
// Array(1)
// 0
// : 
// description
// : 
// "few clouds"
// icon
// : 
// "02n"
// id
// : 
// 801
// main
// : 
// "Clouds"
// [[Prototype]]
// : 
// Object
// length
// : 
// 1
// [[Prototype]]
// : 
// Array(0)
// wind
// : 
// deg
// : 
// 93
// gust
// : 
// 2.34
// speed
// : 
// 1.93
// [[Prototype]]
// : 
// Object
// [[Prototype]]
// : 
// Object