const burgerBtn = document.querySelector('.burger-btn');
const burgerCloseBtn = document.querySelector('.burger-menu-btn');
const burgerMenu = document.querySelector('.burger-menu');
const header = document.querySelector('.header');

burgerBtn.addEventListener('click', () => {
  burgerMenu.classList.remove('visually-hidden');
  header.classList.add('visually-hidden');
});

burgerCloseBtn.addEventListener('click', () => {
  burgerMenu.classList.add('visually-hidden');
  header.classList.remove('visually-hidden');
});