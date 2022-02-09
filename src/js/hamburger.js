'use strict';

//Hamburger Menu
const hamburgerIcon = document.querySelector('.hamburger-menu');
const navigation = document.querySelector('.navigation');

hamburgerIcon.addEventListener('click', () => {
  navigation.classList.toggle('navigation__active');
  hamburgerIcon.classList.toggle('hamburger-menu__change');
});
