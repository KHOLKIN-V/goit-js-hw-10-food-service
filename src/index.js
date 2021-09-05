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

body.classList.add(localStorage.getItem('bodyStatus'));
if (body.classList.contains(Theme.DARK)) {
    toggle.setAttribute('checked', true);
};

toggle.addEventListener('change', onChangeTheme);

function onChangeTheme(e) {
        if(e.target.nodeName != 'INPUT') {
            return;
        };

    body.classList.toggle(Theme.LIGHT);
    body.classList.toggle(Theme.DARK);


    if (body.classList.contains(Theme.LIGHT)) {
        localStorage.setItem('bodyStatus', Theme.LIGHT);
        toggle.setAttribute('checked', false);
    } else if (body.classList.contains(Theme.DARK)) {
        localStorage.setItem('bodyStatus', Theme.DARK);
        toggle.setAttribute('checked', true);
    } 
};