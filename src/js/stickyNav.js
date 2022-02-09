// 'use strict';

//Sticky Nav
const sticky = document.getElementById('sticky');
const nav = document.querySelector('.header');

export const initialCoords = sticky.getBoundingClientRect();
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add('header__sticky');
  } else {
    nav.classList.remove('header__sticky');
  }
});
