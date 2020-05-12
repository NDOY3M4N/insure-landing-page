// Grab the hamburger btn from the DOM
const menuBtn = document.querySelector('.navbar__hamburger');
const navbarContainer = document.querySelector('.navbar__links__container');

menuBtn.addEventListener('click', () => {
  navbarContainer.classList.toggle('show');
  if (navbarContainer.classList.contains('show')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'scroll';
  }
});

