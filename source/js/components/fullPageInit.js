import fullpage from '../vendor/fullPage';

const breakpoint = 1025;

const initFullPage = () => {
  let containerWidth = document.documentElement.clientWidth;
  if (containerWidth > breakpoint) {
    let myFullpage = new fullpage('#fullpage', {
      // Navigation
      menu: '#myMenu',
      lockAnchors: false,
      anchors:['first', 'services','portfolio','contacts','project'],
      scrollingSpeed: 1500,
      continuousVertical: false,
      keyboardScrolling: true,
      animateAnchor: true,
      verticalCentered: true,
      responsiveWidth: 1025,
      sectionSelector: '.section',
      paddingBottom: 'min(50px, 3.472vw)',
      paddingTop: 'min(50px, 3.472vw)',
      lazyLoading: true,
      observer: true,
    });
  };
  if (containerWidth < breakpoint) {
      const anchorButtons = document.querySelectorAll('.main-nav__link');
      for(const anchorButton of anchorButtons) {
        anchorButton.addEventListener('click', function(e){
          e.preventDefault();
          const id = e.target.getAttribute('href').replace('#', '');
          window.scrollTo({
            top: document.querySelector(`[data-scroll='${id}']`).offsetTop - 150,
            behavior: 'smooth',
          });
        });
      }


    fullpage_api.destroy('all');
  }

}

  window.addEventListener('resize', () => {
    initFullPage()
  });

  window.addEventListener('DOMContentLoaded', () => {
    initFullPage()
  });

