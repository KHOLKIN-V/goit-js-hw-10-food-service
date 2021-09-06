import menuTemplate from './menu.json';
import itemsTemplate from '../src/template-menu.hbs';

const jsMenu = document.querySelector('.js-menu');
const markup = itemsTemplate(menuTemplate);


jsMenu.insertAdjacentHTML('beforeend', markup);

const toggle = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

body.classList.add(Theme.LIGHT);

if (localStorage.getItem('bodyStatus') === Theme.LIGHT) {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    toggle.setAttribute('checked', false);
} else if (localStorage.getItem('bodyStatus') === Theme.DARK) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    toggle.setAttribute('checked', true);
};



toggle.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
    if(e.target.nodeName != 'INPUT') {
        return;
    };
    if (toggle.getAttribute('checked')) {
        toggle.removeAttribute('checked');
        localStorage.setItem('bodyStatus', Theme.LIGHT);
        body.classList.add(Theme.LIGHT);
        body.classList.remove(Theme.DARK);
    } else {
        toggle.setAttribute('checked', true);
        localStorage.setItem('bodyStatus', Theme.DARK);
        body.classList.add(Theme.DARK);
        body.classList.remove(Theme.LIGHT);
    }
};