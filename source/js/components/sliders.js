import Swiper from '../vendor/swiper';

const mySlider = document.querySelector('.portfolio-section__slider');
const mySliderNav = document.querySelector('.portfolio-section__slider-nav');
const textLineSliders = [...document.querySelectorAll('.text-line')];

for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:1024px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
        slidesPerView: "auto",
        spaceBetween: 10,
        observer: true,
        observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}


if (mySlider) {
  let portfolioSliderNav = new Swiper(mySliderNav, {
    spaceBetween: 18,
    slidesPerView: 'auto',
    direction: 'vertical',
    allowTouchMove: true,
    freeMode: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      320: {
        direction: 'horizontal',
      },

      575: {
        slidesPerView: 'auto',
        direction: 'vertical',
      }
    },
  });

  let portfolioSlider = new Swiper(mySlider, {
    spaceBetween: 20,
    slidesPerView: 1,
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
    thumbs: {
     swiper: portfolioSliderNav,
    },
    autoplay: {
      delay: 4000,
    },
  });
}

textLineSliders.map((slider) => {
  let textLine = new Swiper(slider, {
    spaceBetween: 20,
    slidesPerView: 'auto',
    speed: 50000,
    loop: true,
    autoplay: {
      delay: 0,
    },
  });
})

for (const mobileSlider of document.querySelectorAll('.mobile-slider')) {
  if (mobileSlider) {
    (function () {
      "use strict";

      const breakpoint = window.matchMedia("(min-width:576px)");
      let slider;

      const enableSwiper = function () {
        slider = new Swiper(mobileSlider, {
        slidesPerView: "auto",
        spaceBetween: 10,
        observer: true,
        observeParents: true
        });
      };

      const breakpointChecker = function () {
        if (breakpoint.matches === true) {
          if (slider !== undefined) slider.destroy(true, true);

          return;
        } else if (breakpoint.matches === false) {
          return enableSwiper();
        }
      };

      breakpoint.addListener(breakpointChecker);
      breakpointChecker();
    })();
  }

}

