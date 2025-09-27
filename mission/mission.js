let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let logoContent = document.querySelector('#logo');
let subTextContent = document.querySelector('#sub-text');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'light') {
        logoContent.src = 'byui-logo.webp';
        logoContent.alt = 'BYU-I Logo';
        pageContent.style.backgroundColor = 'white';
        pageContent.style.color = 'black';
        subTextContent.style.color = '#035f9c';
    } else if (current === 'dark') {
        logoContent.src = 'dark-logo.png';
        logoContent.alt = 'BYU-I Dark Logo';
        pageContent.style.backgroundColor = '#242424ff';
        pageContent.style.color = 'white';
        subTextContent.style.color = '#3597d8ff';
    }
}
