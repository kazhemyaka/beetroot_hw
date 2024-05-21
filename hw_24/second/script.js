document.querySelector('.open-modal').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'flex';
});

document.querySelector('.modal__close').addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});
