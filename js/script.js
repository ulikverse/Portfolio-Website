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
  treshold: 0.1,
  // rootMargin: `-20px`,
});

headerObserver.observe(header);

/***************************/
/* Reveal sections */
/***************************/

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});
