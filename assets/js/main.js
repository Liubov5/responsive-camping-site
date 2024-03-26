/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
    
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

// function show(){

// }

// show = () => {

// }

// navToggle.onclick = function(){

// }

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
    navMenu.classList.remove('show-menu');
}

navLink.forEach(item => item.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () => {
    const header = document.getElementById('header');
    this.scrollY >= 50 ? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', bgHeader)


/*=============== GSAP ANIMATION ===============*/
gsap.from('.home__img-2', 1.2, {opacity:0, y:200, delay: .1});
gsap.from('.home__img-3', 1.2, {opacity:0, y:200, delay: .5});
gsap.from('.home__data', 1.2, {opacity:0, y:-60, delay: .9});
gsap.from('.home__bird-1', 1.2, {opacity:0, y:-100, delay: 1.1});
gsap.from('.home__bird-2', 1.2, {opacity:0, x:80, delay: 1.2});
gsap.from('.home__img-1', 1.2, {opacity:0, y:200, delay: 1.2});
gsap.from('.home__img-4', 1.2, {opacity:0, x:200, delay: 1.3});