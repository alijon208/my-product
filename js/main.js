const body = document.querySelector('body');
const themeButton = document.querySelector('.theme-button');
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.header__content');
const gradient = document.querySelector('.gradient');


themeButton.addEventListener('click', function(){
    body.classList.toggle('body-dark')
})

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger--open')
    nav.classList.toggle('nav--opener');
    body.classList.toggle('body-hidden');
    gradient.classList.toggle('nav--opener');
})

gradient.addEventListener('click', function(){
    hamburger.classList.remove('hamburger--open')
    nav.classList.remove('nav--opener');
    body.classList.remove('body-hidden');
    gradient.classList.remove('nav--opener');
})