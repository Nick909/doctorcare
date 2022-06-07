// let scroll = document.querySelector('#scroll');
window.addEventListener('scroll', onScroll); 

onScroll();

function onScroll() {
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(testimonials);
  activateMenuAtCurrentSection(about);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;

  //verificar se a sesanção passou da linha
  //quais dados vou precisar?
  
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;

  const sectionTopReachOrPassedTargetLine =  targetLine >= sectionTop;


  const sectionEndsAt = sectionTop + sectionHeight;

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine; 

  const sectionBundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine;
  
  const sectionId = section.getAttribute('id');
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);

  menuElement.classList.remove('active');
  if (sectionBundaries) {
    console.log('test')
    menuElement.classList.add('active');
  }
}


function showNavOnScroll() {
  const navigation = document.querySelector('#navigation');
  if (scrollY > 0) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}

function showBackToTopButtonOnScroll() {
  const backToTopButton = document.querySelector('#backToTopButton');
  if (scrollY > 0) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  duration: 1000,
  distance: '30px',
}).reveal(`
  #home, 
  #home img, 
  #home .stats
  #services,
  #services header,
  #services .card,
  #testimonials header,
  #testimonials .card,
  #testimonials .brands,
  #testimonials .carousel__indicators,
  #about,
  #about header,
  #about header .content
  `);
