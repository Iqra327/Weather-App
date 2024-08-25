export function locationError(input){
  document.querySelector('.js-location-error').style.display = 'block';
  document.querySelector('.js-error-img').src = `assets/404.png`;
  document.querySelector('.js-error-msg').textContent = `${input}`;
};