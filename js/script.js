'use strict';

const sectionHero = document.querySelector('.section-hero');
const sectionAbout = document.querySelector('.about-section');
const sectionSkills = document.querySelector('.skills-section');
const sectionContact = document.querySelector('.contact-section');
const nav = document.querySelector('.header-nav');

/***************************/
/* Navigation */
/***************************/

// Sticky navigation
const header = document.querySelector('.header');

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  treshold: 1,
  // rootMargin: `-20px`,
});

headerObserver.observe(header);
