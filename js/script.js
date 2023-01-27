'use strict';

// Reload trick
if (module.hot) {
  module.hot.accept();
}

// Reveal next Section
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

// Year updated
const year = (document.querySelector('.year').innerHTML =
  new Date().getFullYear());
