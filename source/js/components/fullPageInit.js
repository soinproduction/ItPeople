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
      // fixedElements:  '#myMenu',

      responsiveWidth: 1025,
      sectionSelector: '.section',

      paddingBottom: 'min(30px, 3.472vw)',
      paddingTop: 'min(30px, 3.472vw)',

      lazyLoading: true,
      observer: true,
    });
  };
  if (containerWidth < breakpoint) {
    // let myFullpage = new fullpage('#fullpage', {
    //   // Navigation
    //   menu: '#myMenu',
    //   lockAnchors: false,
    //   anchors:['first', 'services','portfolio','contacts','project'],

    //   // autoScrolling: false,
    //   scrollingSpeed: 1500,
    //   // normalScrollElements: '.portfolio-section , .index-second',
    //   // continuousVertical: false,
    //   keyboardScrolling: true,
    //   // animateAnchor: true,
    //   // verticalCentered: true,
    //   // fixedElements:  '#myMenu',


    //   sectionSelector: '.section',

    //   paddingBottom: '50px',
    //   paddingTop: '50px',

    //   lazyLoading: true,
    //   observer: true,
    // });

    fullpage_api.destroy('all');
  }

}

  window.addEventListener('resize', () => {
    initFullPage()
  });

  window.addEventListener('DOMContentLoaded', () => {
    initFullPage()
  });

