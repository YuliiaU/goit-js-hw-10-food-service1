
import menuItemTpl from './templates/menu-card.hbs';
import menu from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const checkbox = document.getElementById('theme-switch-toggle');
const body = document.querySelector('body');

checkbox.addEventListener('change', changeTheme);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const myTheme = localStorage.getItem('my-theme') || Theme.LIGHT;
body.classList.add(myTheme);

checkbox.checked = myTheme === Theme.DARK;

function changeTheme() {
  if (checkbox.checked) {
    body.classList.replace(Theme.LIGHT, Theme.DARK);
    localStorage.setItem('my-theme', Theme.DARK);
  } else {
    body.classList.replace(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('my-theme', Theme.LIGHT);
  }
}


const menuMarcup = menuItemTpl(menu);

menuContainer.insertAdjacentHTML('beforeend', menuMarcup);