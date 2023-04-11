/* Menu */

const header = document.querySelector('.main-header');
const navToggle = document.querySelector('.main-header__toggle');
const hero = document.querySelector('.hero');

header.classList.remove('main-header--no-js');
hero.classList.remove('hero--no-js');

navToggle.addEventListener('click', () => {
  if (header.classList.contains('main-header--opened')) {
    header.classList.remove('main-header--opened');
  } else {
    header.classList.add('main-header--opened');
  }
});
