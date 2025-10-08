const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');

btn.addEventListenerq('click', toggleMenu());

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}