import { fetchWeather } from "./Data/data.js";

const searchInputEl = document.querySelector('.js-search-input');
const searchIcon = document.querySelector('.js-search-icon');

searchIcon.addEventListener('click', () => {
  const input = searchInputEl.value.trim();
  fetchWeather(input);
});

searchInputEl.addEventListener('keyup', (event) => {
  if(event.key === 'Enter'){
    fetchWeather(searchInputEl.value.trim());
  }
});