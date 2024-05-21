const lights = document.querySelectorAll('.light');
let current = 0;

document.querySelector('.next-button').addEventListener('click', () => {
  lights[current].classList.remove('active');
  current++;
  current >= lights.length ? current = 0 : current;
  lights[current].classList.add('active');
});