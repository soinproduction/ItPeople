/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/_components.js":
/*!**********************************!*\
  !*** ./source/js/_components.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_fullPageInit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/fullPageInit */ "./source/js/components/fullPageInit.js");
/* harmony import */ var _components_curentCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/curentCard */ "./source/js/components/curentCard.js");
/* harmony import */ var _components_curentCard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_curentCard__WEBPACK_IMPORTED_MODULE_1__);

 // import './components/sliders';
// import './components/tabs';
// import './components/accordions';
// import './components/to-top';
// import './components/select';
// import './components/counter';
// import './components/anchor';
// import './components/more-review';
// import './components/modals';
// import './components/inputmask';
// import './components/replaceEl';
// import './components/main-nav';

/***/ }),

/***/ "./source/js/_functions.js":
/*!*********************************!*\
  !*** ./source/js/_functions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./source/js/functions/mobile-check.js");
/* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/burger */ "./source/js/functions/burger.js");
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/enable-scroll */ "./source/js/functions/enable-scroll.js");
/* harmony import */ var _functions_header_height__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/header-height */ "./source/js/functions/header-height.js");
// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там
// Определение операционной системы на мобильных
 // console.log(mobileCheck())
// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }
// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);
// Фикс фулскрин-блоков
// import './functions/fix-fullheight';
// Реализация бургер-меню

 // Реализация остановки скролла (не забудьте вызвать функцию)

 // Реализация включения скролла (не забудьте вызвать функцию)

 // Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();
// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');
// Получение высоты шапки сайта (не забудьте вызвать функцию)


console.log();
window.addEventListener("DOMContentLoaded", () => {
  (0,_functions_header_height__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
});
window.addEventListener("resize", () => {
  (0,_functions_header_height__WEBPACK_IMPORTED_MODULE_4__.getHeaderHeight)();
}); // Подключение плагина кастом-скролла
// import 'simplebar';
// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });
// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });
// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();
// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');
// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');
// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });
// import { validateForms } from './functions/validate-forms';
// // const rules1 = [...];
// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };
// validateForms('.order-form', rules1, afterForm);

/***/ }),

/***/ "./source/js/_vars.js":
/*!****************************!*\
  !*** ./source/js/_vars.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  windowEl: window,
  documentEl: document,
  htmlEl: document.documentElement,
  bodyEl: document.body
});

/***/ }),

/***/ "./source/js/_vendor.js":
/*!******************************!*\
  !*** ./source/js/_vendor.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./source/js/vendor/focus-visible.js");
/* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/picturefill.js */ "./source/js/vendor/picturefill.js");
/* harmony import */ var _vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_vendor_picturefill_js__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./source/js/components/curentCard.js":
/*!********************************************!*\
  !*** ./source/js/components/curentCard.js ***!
  \********************************************/
/***/ (function() {

const cardParrents = [...document.querySelectorAll('.mini-card')];

for (const cardParrent of cardParrents) {
  const cardButton = cardParrent.querySelector('[data-mini]');
  const bigCards = [...document.querySelectorAll('[data-big]')];
  const listParrent = document.querySelector('.index-second__mini');

  function cardButtonHendler() {
    let curentDataId = this.getAttribute('data-mini');
    let bigCurrentCard = document.querySelector("[data-big='".concat(curentDataId, "']"));
    bigCurrentCard.classList.add('show');
    listParrent.classList.add('active');
  }

  cardButton.addEventListener('click', cardButtonHendler);
  bigCards.map(bigCard => {
    bigCard.querySelector('.big-card__hide').addEventListener('click', function () {
      bigCard.classList.remove('show');
      listParrent.classList.remove('active');
    });
  });
}

/***/ }),

/***/ "./source/js/components/fullPageInit.js":
/*!**********************************************!*\
  !*** ./source/js/components/fullPageInit.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_fullPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../vendor/fullPage */ "./source/js/vendor/fullPage.js");
/* harmony import */ var _vendor_fullPage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_fullPage__WEBPACK_IMPORTED_MODULE_0__);

var myFullpage = new (_vendor_fullPage__WEBPACK_IMPORTED_MODULE_0___default())('#fullpage', {
  // Navigation
  menu: '#myMenu',
  lockAnchors: false,
  anchors: ['index', 'services', 'portfolio', 'contacts', 'project'],
  // navigation: false,
  // navigationPosition: 'right',
  // navigationTooltips: ['firstSlide', 'secondSlide'],
  // showActiveTooltip: false,
  // slidesNavigation: false,
  // slidesNavPosition: 'bottom',
  // Scrolling
  css3: true,
  scrollingSpeed: 700,
  autoScrolling: true,
  fitToSection: true,
  scrollBar: false,
  easing: 'easeInOutCubic',
  easingcss3: 'ease',
  loopBottom: false,
  loopTop: false,
  loopHorizontal: true,
  continuousVertical: false,
  continuousHorizontal: false,
  scrollHorizontally: false,
  interlockedSlides: false,
  dragAndMove: false,
  offsetSections: false,
  resetSliders: false,
  fadingEffect: false,
  normalScrollElements: '#element1, .element2',
  scrollOverflow: true,
  scrollOverflowMacStyle: false,
  scrollOverflowReset: false,
  touchSensitivity: 15,
  bigSectionsDestination: null,
  // Accessibility
  keyboardScrolling: true,
  animateAnchor: true,
  verticalCentered: true,
  paddingTop: '20px',
  paddingBottom: '20px',
  fixedElements: '#myMenu',
  responsiveWidth: 1024,
  responsiveHeight: 700,
  sectionSelector: '.section',
  slideSelector: '.slide',
  lazyLoading: true,
  observer: true
});

/***/ }),

/***/ "./source/js/functions/burger.js":
/*!***************************************!*\
  !*** ./source/js/functions/burger.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./source/js/functions/disable-scroll.js");
/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./source/js/functions/enable-scroll.js");



(function () {
  var _document, _document2, _document3, _document4;

  const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
  const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
  const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
  const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('mobile-menu--active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('active');
    filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.remove('mobile-filters--active');
    filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');

    if (menu !== null && menu !== void 0 && menu.classList.contains('mobile-menu--active')) {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
    } else {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
  const filterBtn = document.querySelector(".mobile-filters");
  const filterBack = document.querySelector(".catalog-aside__back");
  const filterMenu = document.querySelector(".catalog-aside");
  filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.addEventListener('click', function () {
    filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.toggle('mobile-filters--active');
    filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.toggle('active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.toggle('active');
  });
  filterBack === null || filterBack === void 0 ? void 0 : filterBack.addEventListener('click', function () {
    filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');
    overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
  }); //   window.addEventListener('click', function(e) {
  //     if (e.target.classList.contains('catalog-aside.active')) {
  //         console.log('123')
  //     }
  // });
  // menuItems?.forEach(el => {
  //   el.addEventListener('click', () => {
  //     burger?.setAttribute('aria-expanded', 'false');
  //     burger?.setAttribute('aria-label', 'Открыть меню');
  //     burger.classList.remove('burger--active');
  //     menu.classList.remove('mobile-menu--active');
  //     enableScroll();
  //   });
  // });

  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function (e) {
    if (overlay !== null && overlay !== void 0 && overlay.classList.contains('active')) {
      var _document$querySelect;

      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger.classList.remove('burger--active');
      menu.classList.remove('mobile-menu--active');
      (_document$querySelect = document.querySelector('[data-modal].active')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.remove('active');
      overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('active');
      filterBtn === null || filterBtn === void 0 ? void 0 : filterBtn.classList.remove('mobile-filters--active');
      filterMenu === null || filterMenu === void 0 ? void 0 : filterMenu.classList.remove('active');
      console.log(filterMenu);
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    }
  });
})();

/***/ }),

/***/ "./source/js/functions/disable-scroll.js":
/*!***********************************************!*\
  !*** ./source/js/functions/disable-scroll.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableScroll": function() { return /* binding */ disableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const disableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const pagePosition = window.scrollY;
  const paddingOffset = "".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth, "px");
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
  fixBlocks.forEach(el => {
    el.style.paddingRight = paddingOffset;
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = "-".concat(pagePosition, "px");
};

/***/ }),

/***/ "./source/js/functions/enable-scroll.js":
/*!**********************************************!*\
  !*** ./source/js/functions/enable-scroll.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enableScroll": function() { return /* binding */ enableScroll; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const enableScroll = () => {
  var _document;

  const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
  const body = document.body;
  const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
  fixBlocks.forEach(el => {
    el.style.paddingRight = '0px';
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
  window.scroll({
    top: pagePosition,
    left: 0
  });
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'smooth';
};

/***/ }),

/***/ "./source/js/functions/header-height.js":
/*!**********************************************!*\
  !*** ./source/js/functions/header-height.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHeaderHeight": function() { return /* binding */ getHeaderHeight; }
/* harmony export */ });
const getHeaderHeight = () => {
  var _document;

  const headerHeight = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('.header').offsetHeight;
  document.querySelector(':root').style.setProperty('--header-height', "".concat(headerHeight, "px"));
};

/***/ }),

/***/ "./source/js/functions/mobile-check.js":
/*!*********************************************!*\
  !*** ./source/js/functions/mobile-check.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mobileCheck": function() { return /* binding */ mobileCheck; }
/* harmony export */ });
/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./source/js/_vars.js");

const mobileCheck = () => {
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if (/android/i.test(userAgent)) {
    document.documentElement.classList.add('page--android');
    return "Android";
  }

  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    document.documentElement.classList.add('page--ios');
    return "iOS";
  }

  return "unknown";
};

/***/ }),

/***/ "./source/js/vendor/focus-visible.js":
/*!*******************************************!*\
  !*** ./source/js/vendor/focus-visible.js ***!
  \*******************************************/
/***/ (function() {

/**
 * Applies the :focus-visible polyfill at the given scope.
 * A scope in this case is either the top-level Document or a Shadow Root.
 *
 * @param {(Document|ShadowRoot)} scope
 * @see https://github.com/WICG/focus-visible
 */
function applyFocusVisiblePolyfill(scope) {
  var hadKeyboardEvent = true;
  var hadFocusVisibleRecently = false;
  var hadFocusVisibleRecentlyTimeout = null;
  var inputTypesAllowlist = {
    text: true,
    search: true,
    url: true,
    tel: true,
    email: true,
    password: true,
    number: true,
    date: true,
    month: true,
    week: true,
    time: true,
    datetime: true,
    'datetime-local': true
  };
  /**
   * Helper function for legacy browsers and iframes which sometimes focus
   * elements like document, body, and non-interactive SVG.
   * @param {Element} el
   */

  function isValidFocusTarget(el) {
    if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
      return true;
    }

    return false;
  }
  /**
   * Computes whether the given element should automatically trigger the
   * `focus-visible` class being added, i.e. whether it should always match
   * `:focus-visible` when focused.
   * @param {Element} el
   * @return {boolean}
   */


  function focusTriggersKeyboardModality(el) {
    var type = el.type;
    var tagName = el.tagName;

    if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
      return true;
    }

    if (tagName === 'TEXTAREA' && !el.readOnly) {
      return true;
    }

    if (el.isContentEditable) {
      return true;
    }

    return false;
  }
  /**
   * Add the `focus-visible` class to the given element if it was not added by
   * the author.
   * @param {Element} el
   */


  function addFocusVisibleClass(el) {
    if (el.classList.contains('focus-visible')) {
      return;
    }

    el.classList.add('focus-visible');
    el.setAttribute('data-focus-visible-added', '');
  }
  /**
   * Remove the `focus-visible` class from the given element if it was not
   * originally added by the author.
   * @param {Element} el
   */


  function removeFocusVisibleClass(el) {
    if (!el.hasAttribute('data-focus-visible-added')) {
      return;
    }

    el.classList.remove('focus-visible');
    el.removeAttribute('data-focus-visible-added');
  }
  /**
   * If the most recent user interaction was via the keyboard;
   * and the key press did not include a meta, alt/option, or control key;
   * then the modality is keyboard. Otherwise, the modality is not keyboard.
   * Apply `focus-visible` to any current active element and keep track
   * of our keyboard modality state with `hadKeyboardEvent`.
   * @param {KeyboardEvent} e
   */


  function onKeyDown(e) {
    if (e.metaKey || e.altKey || e.ctrlKey) {
      return;
    }

    if (isValidFocusTarget(scope.activeElement)) {
      addFocusVisibleClass(scope.activeElement);
    }

    hadKeyboardEvent = true;
  }
  /**
   * If at any point a user clicks with a pointing device, ensure that we change
   * the modality away from keyboard.
   * This avoids the situation where a user presses a key on an already focused
   * element, and then clicks on a different element, focusing it with a
   * pointing device, while we still think we're in keyboard modality.
   * @param {Event} e
   */


  function onPointerDown(e) {
    hadKeyboardEvent = false;
  }
  /**
   * On `focus`, add the `focus-visible` class to the target if:
   * - the target received focus as a result of keyboard navigation, or
   * - the event target is an element that will likely require interaction
   *   via the keyboard (e.g. a text box)
   * @param {Event} e
   */


  function onFocus(e) {
    // Prevent IE from focusing the document or HTML element.
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
      addFocusVisibleClass(e.target);
    }
  }
  /**
   * On `blur`, remove the `focus-visible` class from the target.
   * @param {Event} e
   */


  function onBlur(e) {
    if (!isValidFocusTarget(e.target)) {
      return;
    }

    if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
        hadFocusVisibleRecently = false;
      }, 100);
      removeFocusVisibleClass(e.target);
    }
  }
  /**
   * If the user changes tabs, keep track of whether or not the previously
   * focused element had .focus-visible.
   * @param {Event} e
   */


  function onVisibilityChange(e) {
    if (document.visibilityState === 'hidden') {
      // If the tab becomes active again, the browser will handle calling focus
      // on the element (Safari actually calls it twice).
      // If this tab change caused a blur on an element with focus-visible,
      // re-apply the class when the user switches back to the tab.
      if (hadFocusVisibleRecently) {
        hadKeyboardEvent = true;
      }

      addInitialPointerMoveListeners();
    }
  }
  /**
   * Add a group of listeners to detect usage of any pointing devices.
   * These listeners will be added when the polyfill first loads, and anytime
   * the window is blurred, so that they are active when the window regains
   * focus.
   */


  function addInitialPointerMoveListeners() {
    document.addEventListener('mousemove', onInitialPointerMove);
    document.addEventListener('mousedown', onInitialPointerMove);
    document.addEventListener('mouseup', onInitialPointerMove);
    document.addEventListener('pointermove', onInitialPointerMove);
    document.addEventListener('pointerdown', onInitialPointerMove);
    document.addEventListener('pointerup', onInitialPointerMove);
    document.addEventListener('touchmove', onInitialPointerMove);
    document.addEventListener('touchstart', onInitialPointerMove);
    document.addEventListener('touchend', onInitialPointerMove);
  }

  function removeInitialPointerMoveListeners() {
    document.removeEventListener('mousemove', onInitialPointerMove);
    document.removeEventListener('mousedown', onInitialPointerMove);
    document.removeEventListener('mouseup', onInitialPointerMove);
    document.removeEventListener('pointermove', onInitialPointerMove);
    document.removeEventListener('pointerdown', onInitialPointerMove);
    document.removeEventListener('pointerup', onInitialPointerMove);
    document.removeEventListener('touchmove', onInitialPointerMove);
    document.removeEventListener('touchstart', onInitialPointerMove);
    document.removeEventListener('touchend', onInitialPointerMove);
  }
  /**
   * When the polfyill first loads, assume the user is in keyboard modality.
   * If any event is received from a pointing device (e.g. mouse, pointer,
   * touch), turn off keyboard modality.
   * This accounts for situations where focus enters the page from the URL bar.
   * @param {Event} e
   */


  function onInitialPointerMove(e) {
    // Work around a Safari quirk that fires a mousemove on <html> whenever the
    // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
    if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
      return;
    }

    hadKeyboardEvent = false;
    removeInitialPointerMoveListeners();
  } // For some kinds of state, we are interested in changes at the global scope
  // only. For example, global pointer input, global key presses and global
  // visibility change should affect the state at every scope:


  document.addEventListener('keydown', onKeyDown, true);
  document.addEventListener('mousedown', onPointerDown, true);
  document.addEventListener('pointerdown', onPointerDown, true);
  document.addEventListener('touchstart', onPointerDown, true);
  document.addEventListener('visibilitychange', onVisibilityChange, true);
  addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
  // scope. This is because focus / blur events that originate from within a
  // shadow root are not re-dispatched from the host element if it was already
  // the active element in its own scope:

  scope.addEventListener('focus', onFocus, true);
  scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
  // DocumentFragment and also has a host property. This check covers native
  // implementation and polyfill implementation transparently. If we only cared
  // about the native implementation, we could just check if the scope was
  // an instance of a ShadowRoot.

  if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
    // Since a ShadowRoot is a special kind of DocumentFragment, it does not
    // have a root element to add a class to. So, we add this attribute to the
    // host element instead:
    scope.host.setAttribute('data-js-focus-visible', '');
  } else if (scope.nodeType === Node.DOCUMENT_NODE) {
    document.documentElement.classList.add('js-focus-visible');
    document.documentElement.setAttribute('data-js-focus-visible', '');
  }
} // It is important to wrap all references to global window and document in
// these checks to support server-side rendering use cases
// @see https://github.com/WICG/focus-visible/issues/199


if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // Make the polyfill helper globally available. This can be used as a signal
  // to interested libraries that wish to coordinate with the polyfill for e.g.,
  // applying the polyfill to a shadow root:
  window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
  // polyfill was loaded lazily:

  var event;

  try {
    event = new CustomEvent('focus-visible-polyfill-ready');
  } catch (error) {
    // IE11 does not support using CustomEvent as a constructor directly:
    event = document.createEvent('CustomEvent');
    event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
  }

  window.dispatchEvent(event);
}

if (typeof document !== 'undefined') {
  // Apply the polyfill to the global document, so that no JavaScript
  // coordination is required to use the polyfill in the top-level document:
  applyFocusVisiblePolyfill(document);
}

/***/ }),

/***/ "./source/js/vendor/fullPage.js":
/*!**************************************!*\
  !*** ./source/js/vendor/fullPage.js ***!
  \**************************************/
/***/ (function(module) {

/*!
* fullPage 4.0.9
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo
*/
(function (global, factory) {
   true ? module.exports = factory() : 0;
})(this, function () {
  'use strict'; // https://tc39.github.io/ecma262/#sec-array.prototype.find

  if (!Array.prototype.find) {
    Object.defineProperty(Array.prototype, 'find', {
      value: function value(predicate) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

        var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

        if (typeof predicate !== 'function') {
          throw new TypeError('predicate must be a function');
        } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


        var thisArg = arguments[1]; // 5. Let k be 0.

        var k = 0; // 6. Repeat, while k < len

        while (k < len) {
          // a. Let Pk be ! ToString(k).
          // b. Let kValue be ? Get(O, Pk).
          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
          // d. If testResult is true, return kValue.
          var kValue = o[k];

          if (predicate.call(thisArg, kValue, k, o)) {
            return kValue;
          } // e. Increase k by 1.


          k++;
        } // 7. Return undefined.


        return undefined;
      }
    });
  } // Production steps of ECMA-262, Edition 6, 22.1.2.1


  if (!Array.from) {
    Array.from = function () {
      var toStr = Object.prototype.toString;

      var isCallable = function isCallable(fn) {
        return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
      };

      var toInteger = function toInteger(value) {
        var number = Number(value);

        if (isNaN(number)) {
          return 0;
        }

        if (number === 0 || !isFinite(number)) {
          return number;
        }

        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };

      var maxSafeInteger = Math.pow(2, 53) - 1;

      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      }; // The length property of the from method is 1.


      return function from(arrayLike
      /*, mapFn, thisArg */
      ) {
        // 1. Let C be the this value.
        var C = this; // 2. Let items be ToObject(arrayLike).

        var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

        if (arrayLike == null) {
          throw new TypeError('Array.from requires an array-like object - not null or undefined');
        } // 4. If mapfn is undefined, then let mapping be false.


        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;

        if (typeof mapFn !== 'undefined') {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError('Array.from: when provided, the second argument must be a function');
          } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


          if (arguments.length > 2) {
            T = arguments[2];
          }
        } // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).


        var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method
        // of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).

        var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

        var k = 0; // 17. Repeat, while k < len… (also steps a - h)

        var kValue;

        while (k < len) {
          kValue = items[k];

          if (mapFn) {
            A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }

          k += 1;
        } // 18. Let putStatus be Put(A, "length", len, true).


        A.length = len; // 20. Return A.

        return A;
      };
    }();
  }

  var win = window;
  var doc = document;
  var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/);
  var isMacDevice = /(Mac|iPhone|iPod|iPad)/i.test(win.navigator.userAgent); // @ts-ignore

  var isTouch = 'ontouchstart' in win || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints; // taken from https://github.com/udacity/ud891/blob/gh-pages/lesson2-focus/07-modals-and-keyboard-traps/solution/modal.js

  var focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]'; // cache common elements

  var FP = {
    test: {},
    shared: {}
  };
  var extensions = ['parallax', 'scrollOverflowReset', 'dragAndMove', 'offsetSections', 'fadingEffect', 'responsiveSlides', 'continuousHorizontal', 'interlockedSlides', 'scrollHorizontally', 'resetSliders', 'cards', 'dropEffect', 'waterEffect'];
  /**
  * forEach polyfill for IE
  * https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Browser_Compatibility
  */

  if (win.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  }

  if (typeof Object.assign != 'function') {
    // Must be writable: true, enumerable: false, configurable: true
    Object.defineProperty(Object, 'assign', {
      value: function assign(target, varArgs) {
        if (target == null) {
          // TypeError if undefined or null
          throw new TypeError('Cannot convert undefined or null to object');
        }

        var to = Object(target);

        for (var index = 1; index < arguments.length; index++) {
          var nextSource = arguments[index];

          if (nextSource != null) {
            // Skip over if undefined or null
            for (var nextKey in nextSource) {
              // Avoid bugs when hasOwnProperty is shadowed
              if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }

        return to;
      },
      writable: true,
      configurable: true
    });
  } //utils

  /**
  * Shows a message in the console of the given type.
  */


  function showError(type, text) {// win.console && win.console[type] && win.console[type]('fullPage: ' + text);
  }

  function isVisible(el) {
    var style = win.getComputedStyle(el);
    return style.display !== 'none';
  }

  function getVisible(elements) {
    return Array.from(elements).filter(function (e) {
      return isVisible(e);
    });
  }
  /**
  * Equivalent of jQuery function $().
  */


  function $(selector, context) {
    context = arguments.length > 1 ? context : document;
    return context ? context.querySelectorAll(selector) : null;
  }
  /**
  * Extends a given Object properties and its childs.
  */


  function deepExtend(out) {
    out = out || {};

    for (var i = 1, len = arguments.length; i < len; ++i) {
      var obj = arguments[i];

      if (!obj) {
        continue;
      }

      for (var key in obj) {
        if (!obj.hasOwnProperty(key) || key == '__proto__' || key == 'constructor') {
          continue;
        } // based on https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/


        if (Object.prototype.toString.call(obj[key]) === '[object Object]') {
          out[key] = deepExtend(out[key], obj[key]);
          continue;
        }

        out[key] = obj[key];
      }
    }

    return out;
  }
  /**
  * Checks if the passed element contains the passed class.
  */


  function hasClass(el, className) {
    if (el == null) {
      return false;
    }

    return el.classList.contains(className);
  }
  /**
  * Gets the window height. Crossbrowser.
  */


  function getWindowHeight() {
    return 'innerHeight' in win ? win.innerHeight : doc.documentElement.offsetHeight;
  }
  /**
  * Gets the window width.
  */


  function getWindowWidth() {
    return win.innerWidth;
  }
  /**
  * Set's the CSS properties for the passed item/s.
  * @param {NodeList|HTMLElement|Object} items
  * @param {Object} props css properties and values.
  */


  function css(items, props) {
    items = getList(items);
    var key;

    for (key in props) {
      if (props.hasOwnProperty(key)) {
        if (key !== null) {
          for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.style[key] = props[key];
          }
        }
      }
    }

    return items;
  }
  /**
  * Gets the previous element to the passed element.
  */


  function prev(item) {
    return item.previousElementSibling;
  }
  /**
  * Gets the next element to the passed element.
  */


  function next(item) {
    return item.nextElementSibling;
  }
  /**
  * Gets the last element from the passed list of elements.
  */


  function last(item) {
    return item[item.length - 1];
  }
  /**
  * Gets index from the passed element.
  * @param {String} selector is optional.
  */


  function index(item, selector) {
    item = isArrayOrList(item) ? item[0] : item;
    var children = selector != null ? $(selector, item.parentNode) : item.parentNode.childNodes;
    var num = 0;

    for (var i = 0; i < children.length; i++) {
      if (children[i] == item) return num;
      if (children[i].nodeType == 1) num++;
    }

    return -1;
  }
  /**
  * Gets an iterable element for the passed element/s
  */


  function getList(item) {
    return !isArrayOrList(item) ? [item] : item;
  }
  /**
  * Adds the display=none property for the passed element/s
  */


  function hide(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = 'none';
    }

    return el;
  }
  /**
  * Adds the display=block property for the passed element/s
  */


  function show(el) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      el[i].style.display = 'block';
    }

    return el;
  }
  /**
  * Checks if the passed element is an iterable element or not
  */


  function isArrayOrList(el) {
    return Object.prototype.toString.call(el) === '[object Array]' || Object.prototype.toString.call(el) === '[object NodeList]';
  }
  /**
  * Adds the passed class to the passed element/s
  */


  function addClass(el, className) {
    el = getList(el);

    for (var i = 0; i < el.length; i++) {
      var item = el[i];
      item.classList.add(className);
    }

    return el;
  }
  /**
  * Removes the passed class to the passed element/s
  * @param {String} `className` can be multiple classnames separated by whitespace
  */


  function removeClass(el, className) {
    el = getList(el);
    var classNames = className.split(' ');

    for (var a = 0; a < classNames.length; a++) {
      className = classNames[a];

      for (var i = 0; i < el.length; i++) {
        var item = el[i];
        item.classList.remove(className);
      }
    }

    return el;
  }
  /**
  * Appends the given element ot the given parent.
  */


  function appendTo(el, parent) {
    parent.appendChild(el);
  }
  /**
  Usage:
   var wrapper = document.createElement('div');
  wrapper.className = 'fp-slides';
  wrap($('.slide'), wrapper);
   https://jsfiddle.net/qwzc7oy3/15/ (vanilla)
  https://jsfiddle.net/oya6ndka/1/ (jquery equivalent)
  */


  function wrap(toWrap, wrapper, isWrapAll) {
    var newParent;
    wrapper = wrapper || doc.createElement('div');

    for (var i = 0; i < toWrap.length; i++) {
      var item = toWrap[i];

      if (isWrapAll && !i || !isWrapAll) {
        newParent = wrapper.cloneNode(true);
        item.parentNode.insertBefore(newParent, item);
      }

      newParent.appendChild(item);
    }

    return toWrap;
  }
  /**
  Usage:
  var wrapper = document.createElement('div');
  wrapper.className = 'fp-slides';
  wrap($('.slide'), wrapper);
   https://jsfiddle.net/qwzc7oy3/27/ (vanilla)
  https://jsfiddle.net/oya6ndka/4/ (jquery equivalent)
  */


  function wrapAll(toWrap, wrapper) {
    wrap(toWrap, wrapper, true);
  }
  /**
  * Usage:
  * unwrap(document.querySelector('#pepe'));
  * unwrap(element);
  *
  * https://jsfiddle.net/szjt0hxq/1/
  *
  */


  function unwrap(wrapper) {
    var wrapperContent = doc.createDocumentFragment();

    while (wrapper.firstChild) {
      wrapperContent.appendChild(wrapper.firstChild);
    }

    wrapper.parentNode.replaceChild(wrapperContent, wrapper);
  }
  /**
  * http://stackoverflow.com/questions/22100853/dom-pure-javascript-solution-to-jquery-closest-implementation
  * Returns the element or `false` if there's none
  */


  function closest(el, selector) {
    if (el && el.nodeType === 1) {
      if (matches(el, selector)) {
        return el;
      }

      return closest(el.parentNode, selector);
    }

    return null;
  }
  /**
  * Places one element (rel) after another one or group of them (reference).
  * @param {HTMLElement} reference
  * @param {HTMLElement|NodeList|String|Array} el
  * https://jsfiddle.net/9s97hhzv/1/
  */


  function after(reference, el) {
    insertBefore(reference, reference.nextSibling, el);
  }
  /**
  * Places one element (rel) before another one or group of them (reference).
  * @param {HTMLElement} reference
  * @param {HTMLElement|NodeList|String|Array} el
  * https://jsfiddle.net/9s97hhzv/1/
  */


  function before(reference, el) {
    insertBefore(reference, reference, el);
  }
  /**
  * Based in https://stackoverflow.com/a/19316024/1081396
  * and https://stackoverflow.com/a/4793630/1081396
  */


  function insertBefore(reference, beforeElement, el) {
    if (!isArrayOrList(el)) {
      if (typeof el == 'string') {
        el = createElementFromHTML(el);
      }

      el = [el];
    }

    for (var i = 0; i < el.length; i++) {
      reference.parentNode.insertBefore(el[i], beforeElement);
    }
  } //http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll


  function getScrollTop(options) {
    if (typeof options !== 'undefined' && options.fitToSection) {
      return doc.body.scrollTop;
    }

    var docElement = doc.documentElement;
    return (win.pageYOffset || docElement.scrollTop) - (docElement.clientTop || 0);
  }
  /**
  * Gets the siblings of the passed element
  */


  function siblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function (child) {
      return child !== el;
    });
  }

  function preventDefault(event) {
    event.preventDefault();
  }

  function getAttr(el, attr) {
    return el.getAttribute(attr);
  }

  function docAddEvent(event, callback, options) {
    doc.addEventListener(event, callback, options === 'undefined' ? null : options);
  }

  function windowAddEvent(event, callback, options) {
    win.addEventListener(event, callback, options === 'undefined' ? null : options);
  }

  function docRemoveEvent(event, callback, options) {
    doc.removeEventListener(event, callback, options === 'undefined' ? null : options);
  }

  function windowRemoveEvent(event, callback, options) {
    win.removeEventListener(event, callback, options === 'undefined' ? null : options);
  }
  /**
  * Determines whether the passed item is of function type.
  */


  function isFunction(item) {
    if (typeof item === 'function') {
      return true;
    }

    var type = Object.prototype.toString.call(item);
    return type === '[object Function]' || type === '[object GeneratorFunction]';
  }
  /**
  * Trigger custom events
  */


  function trigger(el, eventName, data) {
    var event;
    data = typeof data === 'undefined' ? {} : data; // Native

    if (typeof win.CustomEvent === "function") {
      event = new CustomEvent(eventName, {
        detail: data
      });
    } else {
      event = doc.createEvent('CustomEvent');
      event.initCustomEvent(eventName, true, true, data);
    }

    el.dispatchEvent(event);
  }
  /**
  * Polyfill of .matches()
  */


  function matches(el, selector) {
    return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
  }
  /**
  * Toggles the visibility of the passed element el.
  */


  function toggle(el, value) {
    if (typeof value === "boolean") {
      for (var i = 0; i < el.length; i++) {
        el[i].style.display = value ? 'block' : 'none';
      }
    } //we don't use it in other way, so no else :)


    return el;
  }
  /**
  * Creates a HTMLElement from the passed HTML string.
  * https://stackoverflow.com/a/494348/1081396
  */


  function createElementFromHTML(htmlString) {
    var div = doc.createElement('div');
    div.innerHTML = htmlString.trim(); // Change this to div.childNodes to support multiple top-level nodes

    return div.firstChild;
  }
  /**
  * Removes the passed item/s from the DOM.
  */


  function remove(items) {
    items = getList(items);

    for (var i = 0; i < items.length; i++) {
      var item = items[i];

      if (item && item.parentElement) {
        item.parentNode.removeChild(item);
      }
    }
  } //https://jsfiddle.net/w1rktecz/


  function untilAll(item, selector, fn) {
    var sibling = item[fn];
    var siblings = [];

    while (sibling) {
      if (matches(sibling, selector) || selector == null) {
        siblings.push(sibling);
      }

      sibling = sibling[fn];
    }

    return siblings;
  }
  /**
  * Gets all next elements matching the passed selector.
  */


  function nextAll(item, selector) {
    return untilAll(item, selector, 'nextElementSibling');
  }
  /**
  * Gets all previous elements matching the passed selector.
  */


  function prevAll(item, selector) {
    return untilAll(item, selector, 'previousElementSibling');
  }
  /**
  * Converts an object to an array.
  */


  function toArray(objectData) {
    return Object.keys(objectData).map(function (key) {
      return objectData[key];
    });
  }

  function getLast(items) {
    return items[items.length - 1];
  }
  /**
  * Gets the average of the last `number` elements of the given array.
  */


  function getAverage(elements, number) {
    var sum = 0; //taking `number` elements from the end to make the average, if there are not enought, 1

    var lastElements = elements.slice(Math.max(elements.length - number, 1));

    for (var i = 0; i < lastElements.length; i++) {
      sum = sum + lastElements[i];
    }

    return Math.ceil(sum / number);
  }
  /**
  * Sets the value for the given attribute from the `data-` attribute with the same suffix
  * ie: data-srcset ==> srcset  |  data-src ==> src
  */


  function setSrc(element, attribute) {
    element.setAttribute(attribute, getAttr(element, 'data-' + attribute));
    element.removeAttribute('data-' + attribute);
  }

  function getParentsUntil(item, topParentSelector) {
    var parents = [item];

    do {
      item = item.parentNode;
      parents.push(item);
    } while (!matches(item, topParentSelector));

    return parents;
  } //utils are public, so we can use it wherever we want
  // @ts-ignore


  window["fp_utils"] = {
    "$": $,
    "deepExtend": deepExtend,
    "hasClass": hasClass,
    "getWindowHeight": getWindowHeight,
    "css": css,
    "prev": prev,
    "next": next,
    "last": last,
    "index": index,
    "getList": getList,
    "hide": hide,
    "show": show,
    "isArrayOrList": isArrayOrList,
    "addClass": addClass,
    "removeClass": removeClass,
    "appendTo": appendTo,
    "wrap": wrap,
    "wrapAll": wrapAll,
    "unwrap": unwrap,
    "closest": closest,
    "after": after,
    "before": before,
    "insertBefore": insertBefore,
    "getScrollTop": getScrollTop,
    "siblings": siblings,
    "preventDefault": preventDefault,
    "isFunction": isFunction,
    "trigger": trigger,
    "matches": matches,
    "toggle": toggle,
    "createElementFromHTML": createElementFromHTML,
    "remove": remove,
    // "filter": filter,
    "untilAll": untilAll,
    "nextAll": nextAll,
    "prevAll": prevAll,
    "showError": showError
  };

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var EventEmitter = {
    events: {},
    on: function on(event, listener) {
      var _this = this;

      if (_typeof(this.events[event]) !== 'object') {
        this.events[event] = [];
      }

      this.events[event].push(listener);
      return function () {
        return _this.removeListener(event, listener);
      };
    },
    removeListener: function removeListener(event, listener) {
      if (_typeof(this.events[event]) === 'object') {
        var idx = this.events[event].indexOf(listener);

        if (idx > -1) {
          this.events[event].splice(idx, 1);
        }
      }
    },
    emit: function emit(event) {
      var _this2 = this;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      if (_typeof(this.events[event]) === 'object') {
        this.events[event].forEach(function (listener) {
          return listener.apply(_this2, args);
        });
      }
    },
    once: function once(event, listener) {
      var _this3 = this;

      var remove = this.on(event, function () {
        remove();

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        listener.apply(_this3, args);
      });
    }
  };
  var state = {
    numSections: 0,
    numSlides: 0,
    slides: [],
    sections: [],
    activeSection: null,
    scrollTrigger: null,
    isBeyondFullpage: false,
    aboutToScrollToFullPage: false,
    slideMoving: false,
    isResizing: false,
    isScrolling: false,
    lastScrolledDestiny: undefined,
    lastScrolledSlide: undefined,
    activeAnimation: false,
    canScroll: true,
    touchDirection: 'none',
    wheelDirection: 'none',
    isGrabbing: false,
    isUsingWheel: false,
    isWindowFocused: true,
    previousDestTop: 0,
    windowsHeight: getWindowHeight(),
    isDoingContinousVertical: false,
    timeouts: {},
    scrollY: 0,
    scrollX: 0
  }; // @ts-ignore

  win.state = state;

  function setState(props) {
    Object.assign(state, props);
  }

  function getState() {
    return state;
  }

  EventEmitter.on('bindEvents', bindEvents$c);

  function bindEvents$c() {
    //Scrolls to the section when clicking the navigation bullet
    //simulating the jQuery .on('click') event using delegation
    ['click', 'touchstart'].forEach(function (eventName) {
      docAddEvent(eventName, delegatedEvents);
    });
    windowAddEvent('focus', focusHandler);
    internalEvents();
  }

  function internalEvents() {
    EventEmitter.on('onDestroy', onDestroy$8);
  }

  function delegatedEvents(e) {
    EventEmitter.emit('onClickOrTouch', {
      e: e,
      target: e.target
    });
  }

  function onDestroy$8() {
    ['click', 'touchstart'].forEach(function (eventName) {
      docRemoveEvent(eventName, delegatedEvents);
    });
  } // changing isWindowFocused to true on focus event


  function focusHandler() {
    setState({
      isWindowFocused: true
    });
  } // keeping central set of classnames and selectors


  var WRAPPER = 'fullpage-wrapper';
  var WRAPPER_SEL = '.' + WRAPPER; // slimscroll

  var RESPONSIVE = 'fp-responsive';
  var NO_TRANSITION = 'fp-notransition';
  var DESTROYED = 'fp-destroyed';
  var ENABLED = 'fp-enabled';
  var VIEWING_PREFIX = 'fp-viewing';
  var ACTIVE = 'active';
  var ACTIVE_SEL = '.' + ACTIVE;
  var COMPLETELY = 'fp-completely';
  var COMPLETELY_SEL = '.' + COMPLETELY;
  var SNAPS = 'fp-snaps'; // section

  var SECTION_DEFAULT_SEL = '.section';
  var SECTION = 'fp-section';
  var SECTION_SEL = '.' + SECTION;
  var SECTION_ACTIVE_SEL = SECTION_SEL + ACTIVE_SEL;
  var TABLE_CELL = 'fp-tableCell';
  var TABLE_CELL_SEL = '.' + TABLE_CELL;
  var AUTO_HEIGHT = 'fp-auto-height';
  var AUTO_HEIGHT_SEL = '.' + AUTO_HEIGHT;
  var AUTO_HEIGHT_RESPONSIVE = 'fp-auto-height-responsive';
  var AUTO_HEIGHT_RESPONSIVE_SEL = '.' + AUTO_HEIGHT_RESPONSIVE;
  var NORMAL_SCROLL = 'fp-normal-scroll';
  var SECTION_NAV = 'fp-nav';
  var SECTION_NAV_SEL = '#' + SECTION_NAV;
  var SECTION_NAV_TOOLTIP = 'fp-tooltip';
  var SECTION_NAV_TOOLTIP_SEL = '.' + SECTION_NAV_TOOLTIP;
  var SHOW_ACTIVE_TOOLTIP = 'fp-show-active'; // slide

  var SLIDE_DEFAULT_SEL = '.slide';
  var SLIDE = 'fp-slide';
  var SLIDE_SEL = '.' + SLIDE;
  var SLIDE_ACTIVE_SEL = SLIDE_SEL + ACTIVE_SEL;
  var SLIDES_WRAPPER = 'fp-slides';
  var SLIDES_WRAPPER_SEL = '.' + SLIDES_WRAPPER;
  var SLIDES_CONTAINER = 'fp-slidesContainer';
  var SLIDES_CONTAINER_SEL = '.' + SLIDES_CONTAINER;
  var TABLE = 'fp-table';
  var OVERFLOW = 'fp-overflow';
  var OVERFLOW_SEL = '.' + OVERFLOW; // slide nav

  var SLIDES_NAV = 'fp-slidesNav';
  var SLIDES_NAV_SEL = '.' + SLIDES_NAV;
  var SLIDES_NAV_LINK_SEL = SLIDES_NAV_SEL + ' a';
  var SLIDES_STYLED_ARROW = 'fp-arrow';
  var SLIDES_ARROW = 'fp-controlArrow';
  var SLIDES_ARROW_SEL = '.' + SLIDES_ARROW;
  var SLIDES_PREV = 'fp-prev';
  var SLIDES_PREV_SEL = '.' + SLIDES_PREV;
  var SLIDES_ARROW_PREV_SEL = SLIDES_ARROW_SEL + SLIDES_PREV_SEL;
  var SLIDES_NEXT = 'fp-next';
  var SLIDES_NEXT_SEL = '.' + SLIDES_NEXT;
  var SLIDES_ARROW_NEXT_SEL = SLIDES_ARROW_SEL + SLIDES_NEXT_SEL;
  var defaultOptions = {
    //navigation
    menu: false,
    anchors: [],
    lockAnchors: false,
    navigation: false,
    navigationPosition: 'right',
    navigationTooltips: [],
    showActiveTooltip: false,
    slidesNavigation: false,
    slidesNavPosition: 'bottom',
    scrollBar: false,
    hybrid: false,
    licenseKey: '',
    credits: {
      "enabled": true,
      "label": 'Made with fullPage.js',
      "position": 'right'
    },
    //scrolling
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    fitToSection: true,
    easing: 'easeInOutCubic',
    easingcss3: 'ease',
    loopBottom: false,
    loopTop: false,
    loopHorizontal: true,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: null,
    scrollOverflow: true,
    scrollOverflowReset: false,
    touchSensitivity: 5,
    touchWrapper: null,
    bigSectionsDestination: null,
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    allowCorrectDirection: false,
    //design
    scrollOverflowMacStyle: true,
    controlArrows: true,
    controlArrowsHTML: ['<div class="' + SLIDES_STYLED_ARROW + '"></div>', '<div class="' + SLIDES_STYLED_ARROW + '"></div>'],
    controlArrowColor: '#fff',
    verticalCentered: true,
    sectionsColor: [],
    paddingTop: 0,
    paddingBottom: 0,
    fixedElements: null,
    responsive: 0,
    //backwards compabitility with responsiveWiddth
    responsiveWidth: 0,
    responsiveHeight: 0,
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {
      type: 'reveal',
      percentage: 62,
      property: 'translate'
    },
    cards: false,
    cardsOptions: {
      perspective: 100,
      fadeContent: true,
      fadeBackground: true
    },
    //Custom selectors
    sectionSelector: SECTION_DEFAULT_SEL,
    slideSelector: SLIDE_DEFAULT_SEL,
    //events
    afterLoad: null,
    beforeLeave: null,
    onLeave: null,
    afterRender: null,
    afterResize: null,
    afterReBuild: null,
    afterSlideLoad: null,
    onSlideLeave: null,
    afterResponsive: null,
    onScrollOverflow: null,
    lazyLoading: true,
    observer: true
  };
  var container = null;
  var g_initialAnchorsInDom = false;
  var originals = deepExtend({}, defaultOptions); //deep copy

  var g_options = null;

  function getInitialAnchorsInDom() {
    return g_initialAnchorsInDom;
  }

  function setContainer(value) {
    container = value;
  }

  function getContainer(value) {
    return container;
  }

  function getOptions() {
    return g_options || defaultOptions;
  }

  function setOptions(options) {
    g_options = deepExtend({}, defaultOptions, options);
    originals = Object.assign({}, g_options);
  }

  function getOriginals() {
    return originals;
  }

  function setOption(name, value) {
    defaultOptions[name] = value;
  }
  /*
  * Sets the state for a variable with multiple states (original, and temporal)
  * Some variables such as `autoScrolling` or `recordHistory` might change automatically its state when using `responsive` or `autoScrolling:false`.
  * This function is used to keep track of both states, the original and the temporal one.
  * If type is not 'internal', then we assume the user is globally changing the variable.
  */


  function setVariableState(variable, value, type) {
    g_options[variable] = value;

    if (type !== 'internal') {
      originals[variable] = value;
    }
  }
  /**
  * Setting options from DOM elements if they are not provided.
  */


  function setOptionsFromDOM() {
    //no anchors option? Checking for them in the DOM attributes
    if (!getOptions().anchors.length) {
      var anchorsAttribute = '[data-anchor]';
      var anchors = $(getOptions().sectionSelector.split(',').join(anchorsAttribute + ',') + anchorsAttribute, container);

      if (anchors.length && anchors.length === $(getOptions().sectionSelector, container).length) {
        g_initialAnchorsInDom = true;
        anchors.forEach(function (item) {
          getOptions().anchors.push(getAttr(item, 'data-anchor').toString());
        });
      }
    } //no tooltips option? Checking for them in the DOM attributes


    if (!getOptions().navigationTooltips.length) {
      var tooltipsAttribute = '[data-tooltip]';
      var tooltips = $(getOptions().sectionSelector.split(',').join(tooltipsAttribute + ',') + tooltipsAttribute, container);

      if (tooltips.length) {
        tooltips.forEach(function (item) {
          getOptions().navigationTooltips.push(getAttr(item, 'data-tooltip').toString());
        });
      }
    }
  }

  var plainItem = function plainItem(panel) {
    this.anchor = panel.anchor;
    this.item = panel.item;
    this.index = panel.index();
    this.isLast = this.index === panel.item.parentElement.querySelectorAll(panel.selector).length - 1;
    this.isFirst = !this.index;
    this.isActive = panel.isActive;
  };
  /**
  * Item. Slide or Section objects share the same properties.
  */


  var Item = function Item(el, selector) {
    this.parent = this.parent || null;
    this.selector = selector;
    this.anchor = getAttr(el, 'data-anchor') || getOptions().anchors[index(el, getOptions().sectionSelector)];
    this.item = el;
    this.isVisible = isVisible(el);
    this.isActive = hasClass(el, ACTIVE);
    this.hasScroll = hasClass(el, OVERFLOW);
    this.isSection = selector === getOptions().sectionSelector;
    this.container = closest(el, SLIDES_CONTAINER_SEL) || closest(el, WRAPPER_SEL);

    this.index = function () {
      return this.siblings().indexOf(this);
    };
  };

  Item.prototype.siblings = function () {
    if (this.isSection) {
      if (this.isVisible) {
        return state.sections;
      } else {
        return state.sectionsIncludingHidden;
      }
    }

    return this.parent ? this.parent.slides : 0;
  };

  Item.prototype.prev = function () {
    var siblings = this.siblings();
    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
    var prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      return siblings[prevIndex];
    }

    return null;
  };

  Item.prototype.next = function () {
    var siblings = this.siblings();
    var currentIndex = this.isSection ? siblings.indexOf(this) : this.parent.slides.indexOf(this);
    var nextIndex = currentIndex + 1;

    if (nextIndex < siblings.length) {
      return siblings[nextIndex];
    }

    return null;
  };

  Item.prototype.getSiblings = function () {
    if (this.isSection) {
      return state.sections;
    }

    return state.panels;
  };

  function getNodes(panels) {
    return panels.map(function (panel) {
      return panel.item;
    });
  }

  function getPanelByElement(panels, el) {
    return panels.find(function (panel) {
      return panel.item === el;
    });
  }

  var Section = function Section(el) {
    plainItem.call(this, el);
  };

  var Slide = function Slide(el) {
    plainItem.call(this, el);
  };
  /**
  * Gets the active slide (or section) for the given section
  */


  function getSlideOrSection(destiny) {
    var slide = $(SLIDE_ACTIVE_SEL, destiny);

    if (slide.length) {
      destiny = slide[0];
    }

    return destiny;
  }

  function isFullPageAbove() {
    return getContainer().getBoundingClientRect().bottom >= 0;
  }
  /**
  * Gets the scrolling settings depending on the plugin autoScrolling option
  */


  function getScrollSettings(top) {
    var options = getOptions();
    var position;
    var element; //top property animation

    if (options.autoScrolling && !options.scrollBar) {
      position = -top;
      element = $(WRAPPER_SEL)[0];
    } else if (options.fitToSection) {
      position = top;
      element = doc.body;
    } //window real scrolling
    else {
      position = top;
      element = window;
    }

    return {
      options: position,
      element: element
    };
  }
  /**
  * Scrolls the page / slider the given number of pixels.
  * It will do it one or another way dependiong on the library's config.
  */


  function setScrolling(element, val) {
    if (!getOptions().autoScrolling || getOptions().scrollBar || element.self != window && hasClass(element, SLIDES_WRAPPER)) {
      //scrolling horizontally through the slides?
      if (element.self != window && hasClass(element, SLIDES_WRAPPER)) {
        element.scrollLeft = val;
      } //vertical scroll
      else {
        element.scrollTo(0, val);
      }
    } else {
      element.style.top = val + 'px';
    }
  }
  /**
  * Adds transition animations for the given element
  */


  function addAnimation(element) {
    var transition = 'transform ' + getOptions().scrollingSpeed + 'ms ' + getOptions().easingcss3;
    removeClass(element, NO_TRANSITION);
    return css(element, {
      '-webkit-transition': transition,
      'transition': transition
    });
  }
  /**
  * Retuns `up` or `down` depending on the scrolling movement to reach its destination
  * from the current section.
  */


  function getYmovement(activeSection, destiny) {
    var fromIndex = activeSection.index();
    var toIndex = index(destiny, SECTION_SEL);

    if (fromIndex == toIndex) {
      return 'none';
    }

    if (fromIndex > toIndex) {
      return 'up';
    }

    return 'down';
  }
  /**
  * Remove transition animations for the given element
  */


  function removeAnimation(element) {
    return addClass(element, NO_TRANSITION);
  }
  /**
  * Returns the cross-browser transform string.
  */


  function getTransforms(translate3d) {
    return {
      '-webkit-transform': translate3d,
      '-moz-transform': translate3d,
      '-ms-transform': translate3d,
      'transform': translate3d
    };
  }

  var silentScrollId;
  /**
  * Adds a css3 transform property to the container class with or without animation depending on the animated param.
  */

  function transformContainer(translate3d, animated) {
    if (animated) {
      addAnimation(getContainer());
    } else {
      removeAnimation(getContainer());
    }

    clearTimeout(silentScrollId);
    css(getContainer(), getTransforms(translate3d));
    FP.test.translate3d = translate3d; //syncronously removing the class after the animation has been applied.

    silentScrollId = setTimeout(function () {
      removeClass(getContainer(), NO_TRANSITION);
    }, 10);
  }
  /**
  * Scrolls silently (with no animation) the page to the given Y position.
  */


  function silentScroll(top) {
    // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
    // that's why we round it to 0.
    var roundedTop = Math.round(top);

    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
      var translate3d = 'translate3d(0px, -' + roundedTop + 'px, 0px)';
      transformContainer(translate3d, false);
    } else if (getOptions().autoScrolling && !getOptions().scrollBar) {
      css(getContainer(), {
        'top': -roundedTop + 'px'
      });
      FP.test.top = -roundedTop + 'px';
    } else {
      var scrollSettings = getScrollSettings(roundedTop);
      setScrolling(scrollSettings.element, scrollSettings.options);
    }
  }

  FP.setScrollingSpeed = setScrollingSpeed;
  /**
  * Defines the scrolling speed
  */

  function setScrollingSpeed(value, type) {
    setVariableState('scrollingSpeed', value, type);
  } //@ts-check

  /**
  * Simulates the animated scrollTop of jQuery. Used when css3:false or scrollBar:true or autoScrolling:false
  * http://stackoverflow.com/a/16136789/1081396
  */


  function scrollTo(element, to, duration, callback) {
    var start = getScrolledPosition(element);
    var change = to - start;
    var isCallbackFired = false;
    var startTime;
    setState({
      activeAnimation: true
    }); // Making sure we can trigger a scroll animation
    // when css scroll snap is active. Temporally disabling it.

    if (element === doc.body) {
      css(doc.body, {
        'scroll-snap-type': 'none'
      });
    }

    var animateScroll = function animateScroll(timestamp) {
      if (!startTime) {
        startTime = timestamp;
      }

      var currentTime = Math.floor(timestamp - startTime);

      if (state.activeAnimation) {
        //in order to stope it from other function whenever we want
        var val = to;

        if (duration) {
          // @ts-ignore
          val = win.fp_easings[getOptions().easing](currentTime, start, change, duration);
        }

        if (currentTime <= duration) {
          setScrolling(element, val);
        }

        if (currentTime < duration) {
          window.requestAnimationFrame(animateScroll);
        } else if (typeof callback !== 'undefined' && !isCallbackFired) {
          callback();
          isCallbackFired = true;
        }
      } else if (!isCallbackFired) {
        callback();
        isCallbackFired = true;
      }
    };

    window.requestAnimationFrame(animateScroll);
  }
  /**
  * Getting the position of the element to scroll when using jQuery animations
  */


  function getScrolledPosition(element) {
    var position; //is not the window element and is a slide?

    if (element.self != win && hasClass(element, SLIDES_WRAPPER)) {
      position = element.scrollLeft;
    } else if (!getOptions().autoScrolling || getOptions().scrollBar) {
      position = getScrollTop(getOptions());
    } else {
      position = element.offsetTop;
    } //gets the top property of the wrapper


    return position;
  }
  /**
  * Makes sure to only create a Panel object if the element exist
  */


  function nullOrSection(el) {
    if (el && !el.item) {
      return new Section(new SectionPanel(el));
    }

    return el ? new Section(el) : null;
  }

  function nullOrSlide(el) {
    return el ? new Slide(el) : null;
  }
  /**
  * Dispatch events & callbacks
  */


  function fireCallback(eventName, v) {
    var eventData = getEventData(eventName, v);
    trigger(getContainer(), eventName, eventData);

    if (getOptions()[eventName].apply(eventData[Object.keys(eventData)[0]], toArray(eventData)) === false) {
      return false;
    }

    return true;
  }
  /**
  * Gets the event's data for the given event on the right format.
  */


  function getEventData(eventName, v) {
    //using functions to run only the necessary bits within the object
    var paramsPerEvent = {
      afterRender: function afterRender() {
        return {
          section: nullOrSection(getState().activeSection),
          slide: nullOrSlide(getState().activeSection.activeSlide)
        };
      },
      onLeave: function onLeave() {
        return {
          origin: nullOrSection(v.items.origin),
          destination: nullOrSection(v.items.destination),
          direction: v.direction,
          trigger: getState().scrollTrigger
        };
      },
      afterLoad: function afterLoad() {
        return paramsPerEvent.onLeave();
      },
      afterSlideLoad: function afterSlideLoad() {
        return {
          section: nullOrSection(v.items.section),
          origin: nullOrSection(v.items.origin),
          destination: nullOrSection(v.items.destination),
          direction: v.direction,
          trigger: getState().scrollTrigger
        };
      },
      onSlideLeave: function onSlideLeave() {
        return paramsPerEvent.afterSlideLoad();
      },
      beforeLeave: function beforeLeave() {
        return paramsPerEvent.onLeave();
      },
      onScrollOverflow: function onScrollOverflow() {
        return {
          section: nullOrSection(getState().activeSection),
          slide: nullOrSlide(getState().activeSection.activeSlide),
          position: v.position,
          direction: v.direction
        };
      }
    };
    return paramsPerEvent[eventName]();
  }
  /**
  * Plays video and audio elements.
  */


  function playMedia(destiny) {
    var panel = getSlideOrSection(destiny); //playing HTML5 media elements

    $('video, audio', panel).forEach(function (element) {
      if (element.hasAttribute('data-autoplay') && typeof element.play === 'function') {
        element.play();
      }
    }); //youtube videos

    $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
      if (element.hasAttribute('data-autoplay')) {
        playYoutube(element);
      } //in case the URL was not loaded yet. On page load we need time for the new URL (with the API string) to load.


      element.onload = function () {
        if (element.hasAttribute('data-autoplay')) {
          playYoutube(element);
        }
      };
    });
  }
  /**
  * Plays a youtube video
  */


  function playYoutube(element) {
    element.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
  /**
  * Stops video and audio elements.
  */


  function stopMedia(destiny) {
    var panel = getSlideOrSection(destiny); //stopping HTML5 media elements

    $('video, audio', panel).forEach(function (element) {
      if (!element.hasAttribute('data-keepplaying') && typeof element.pause === 'function') {
        element.pause();
      }
    }); //youtube videos

    $('iframe[src*="youtube.com/embed/"]', panel).forEach(function (element) {
      if (/youtube\.com\/embed\//.test(getAttr(element, 'src')) && !element.hasAttribute('data-keepplaying')) {
        element.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    });
  }
  /*
  * Enables the Youtube videos API so we can control their flow if necessary.
  */


  function enableYoutubeAPI() {
    $('iframe[src*="youtube.com/embed/"]', getContainer()).forEach(function (item) {
      addURLParam(item, 'enablejsapi=1');
    });
  }
  /**
  * Adds a new parameter and its value to the `src` of a given element
  */


  function addURLParam(element, newParam) {
    var originalSrc = getAttr(element, 'src');
    element.setAttribute('src', originalSrc + getUrlParamSign(originalSrc) + newParam);
  }
  /*
  * Returns the prefix sign to use for a new parameter in an existen URL.
  *
  * @return {String}  ? | &
  */


  function getUrlParamSign(url) {
    return !/\?/.test(url) ? '?' : '&';
  }
  /**
  * Lazy loads image, video and audio elements.
  */


  function lazyLoad(destiny) {
    if (!getOptions().lazyLoading) {
      return;
    }

    var panel = getSlideOrSection(destiny);
    $('img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]', panel).forEach(function (element) {
      ['src', 'srcset'].forEach(function (type) {
        var attribute = getAttr(element, 'data-' + type);

        if (attribute != null && attribute) {
          setSrc(element, type);
          element.addEventListener('load', function () {});
        }
      });

      if (matches(element, 'source')) {
        var elementToPlay = closest(element, 'video, audio');

        if (elementToPlay) {
          elementToPlay.load();

          elementToPlay.onloadeddata = function () {};
        }
      }
    });
  }

  var $body = null;
  var $html = null;
  var $htmlBody = null; // caching common elements

  function setCache() {
    $body = $('body')[0];
    $html = $('html')[0];
    $htmlBody = $('html, body');
  }
  /**
  * Sets a class for the body of the page depending on the active section / slide
  */


  function setBodyClass() {
    var section = getState().activeSection.item;
    var slide = getState().activeSection.activeSlide;
    var sectionAnchor = getAnchor(section);
    var text = String(sectionAnchor);

    if (slide) {
      var slideAnchor = getAnchor(slide.item);
      text = text + '-' + slideAnchor;
    } //changing slash for dash to make it a valid CSS style


    text = text.replace('/', '-').replace('#', ''); //removing previous anchor classes

    var classRe = new RegExp('\\b\\s?' + VIEWING_PREFIX + '-[^\\s]+\\b', "g");
    $body.className = $body.className.replace(classRe, ''); //adding the current anchor

    addClass($body, VIEWING_PREFIX + '-' + text);
  }
  /**
  * Gets the anchor for the given slide / section. Its index will be used if there's none.
  */


  function getAnchor(element) {
    if (!element) {
      return null;
    }

    var anchor = getAttr(element, 'data-anchor');
    var elementIndex = index(element); //Slide without anchor link? We take the index instead.

    if (anchor == null) {
      anchor = elementIndex;
    }

    return anchor;
  }
  /**
  * Sets the state of the website depending on the active section/slide.
  * It changes the URL hash when needed and updates the body class.
  */


  function setPageStatus(slideIndex, slideAnchor, anchorLink) {
    var sectionHash = '';

    if (getOptions().anchors.length && !getOptions().lockAnchors) {
      //isn't it the first slide?
      if (slideIndex) {
        if (anchorLink != null) {
          sectionHash = anchorLink;
        } //slide without anchor link? We take the index instead.


        if (slideAnchor == null) {
          slideAnchor = slideIndex;
        }

        setState({
          lastScrolledSlide: slideAnchor
        });
        setUrlHash(sectionHash + '/' + slideAnchor); //first slide won't have slide anchor, just the section one
      } else if (slideIndex != null) {
        setState({
          lastScrolledSlide: slideAnchor
        });
        setUrlHash(anchorLink);
      } //section without slides
      else {
        setUrlHash(anchorLink);
      }
    }

    setBodyClass();
  }
  /**
  * Sets the URL hash.
  */


  function setUrlHash(url) {
    if (getOptions().recordHistory) {
      location.hash = url;
    } else {
      //Mobile Chrome doesn't work the normal way, so... lets use HTML5 for phones :)
      if (isTouchDevice || isTouch) {
        win.history.replaceState(undefined, undefined, '#' + url);
      } else {
        var baseUrl = win.location.href.split('#')[0];
        win.location.replace(baseUrl + '#' + url);
      }
    }
  }
  /**
  * Gets the name for screen readers for a section/slide navigation bullet.
  */


  function getBulletLinkName(i, defaultName, item) {
    var anchor = defaultName === 'Section' ? getOptions().anchors[i] : getAttr(item, 'data-anchor');
    return encodeURI(getOptions().navigationTooltips[i] || anchor || defaultName + ' ' + (i + 1));
  }

  function slideBulletHandler(e) {
    preventDefault(e);
    setState({
      scrollTrigger: 'horizontalNav'
    });
    /*jshint validthis:true */

    var sectionElem = closest(this, SECTION_SEL);
    var slides = $(SLIDES_WRAPPER_SEL, closest(this, SECTION_SEL))[0];
    var section = getPanelByElement(getState().sections, sectionElem);
    var destiny = section.slides[index(closest(this, 'li'))];
    EventEmitter.emit('landscapeScroll', {
      slides: slides,
      destination: destiny.item
    });
  }
  /**
  * Sets the state for the horizontal bullet navigations.
  */


  function activeSlidesNavigation(slidesNav, slideIndex) {
    if (getOptions().slidesNavigation && slidesNav != null) {
      removeClass($(ACTIVE_SEL, slidesNav), ACTIVE);
      addClass($('a', $('li', slidesNav)[slideIndex]), ACTIVE);
    }
  }
  /**
  * Creates a landscape navigation bar with dots for horizontal sliders.
  */


  function addSlidesNavigation(section) {
    var sectionElem = section.item;
    var numSlides = section.slides.length;
    appendTo(createElementFromHTML('<div class="' + SLIDES_NAV + '"><ul></ul></div>'), sectionElem);
    var nav = $(SLIDES_NAV_SEL, sectionElem)[0]; //top or bottom

    addClass(nav, 'fp-' + getOptions().slidesNavPosition);

    for (var i = 0; i < numSlides; i++) {
      var slide = $(SLIDE_SEL, sectionElem)[i];
      appendTo(createElementFromHTML('<li><a href="#"><span class="fp-sr-only">' + getBulletLinkName(i, 'Slide', slide) + '</span><span></span></a></li>'), $('ul', nav)[0]);
    } //centering it


    css(nav, {
      'margin-left': '-' + nav.innerWidth / 2 + 'px'
    });
    var activeSlideIndex = section.activeSlide ? section.activeSlide.index() : 0;
    addClass($('a', $('li', nav)[activeSlideIndex]), ACTIVE);
  }

  var isScrollAllowed = {};
  isScrollAllowed.m = {
    'up': true,
    'down': true,
    'left': true,
    'right': true
  };
  isScrollAllowed.k = deepExtend({}, isScrollAllowed.m);
  /**
  * Allowing or disallowing the mouse/swipe scroll in a given direction. (not for keyboard)
  * @param type m (mouse) or k (keyboard)
  */

  function setIsScrollAllowed(value, direction, type) {
    //up, down, left, right
    if (direction !== 'all') {
      isScrollAllowed[type][direction] = value;
    } //all directions?
    else {
      Object.keys(isScrollAllowed[type]).forEach(function (key) {
        isScrollAllowed[type][key] = value;
      });
    }
  }

  function getIsScrollAllowed() {
    return isScrollAllowed;
  }

  EventEmitter.on('onClickOrTouch', onClickOrTouch$2);

  function onClickOrTouch$2(params) {
    var target = params.target;

    if (matches(target, SLIDES_ARROW_SEL) || closest(target, SLIDES_ARROW_SEL)) {
      slideArrowHandler.call(target, params);
    }
  } //Scrolling horizontally when clicking on the slider controls.


  function slideArrowHandler() {
    /*jshint validthis:true */
    var section = closest(this, SECTION_SEL);
    /*jshint validthis:true */

    if (hasClass(this, SLIDES_PREV)) {
      if (getIsScrollAllowed().m.left) {
        setState({
          scrollTrigger: 'slideArrow'
        });
        EventEmitter.emit('moveSlideLeft', {
          section: section
        });
      }
    } else {
      if (getIsScrollAllowed().m.right) {
        setState({
          scrollTrigger: 'slideArrow'
        });
        EventEmitter.emit('moveSlideRight', {
          section: section
        });
      }
    }
  }
  /**
  * Creates the control arrows for the given section
  */


  function createSlideArrows(section) {
    var sectionElem = section.item;
    var arrows = [createElementFromHTML(getOptions().controlArrowsHTML[0]), createElementFromHTML(getOptions().controlArrowsHTML[1])];
    after($(SLIDES_WRAPPER_SEL, sectionElem)[0], arrows);
    addClass(arrows, SLIDES_ARROW);
    addClass(arrows[0], SLIDES_PREV);
    addClass(arrows[1], SLIDES_NEXT);

    if (getOptions().controlArrowColor !== '#fff') {
      css($(SLIDES_ARROW_NEXT_SEL, sectionElem), {
        'border-color': 'transparent transparent transparent ' + getOptions().controlArrowColor
      });
      css($(SLIDES_ARROW_PREV_SEL, sectionElem), {
        'border-color': 'transparent ' + getOptions().controlArrowColor + ' transparent transparent'
      });
    }

    if (!getOptions().loopHorizontal) {
      hide($(SLIDES_ARROW_PREV_SEL, sectionElem));
    }
  }

  function toggleControlArrows(v) {
    if (!getOptions().loopHorizontal && getOptions().controlArrows) {
      //hidding it for the fist slide, showing for the rest
      toggle($(SLIDES_ARROW_PREV_SEL, v.section), v.slideIndex !== 0); //hidding it for the last slide, showing for the rest

      toggle($(SLIDES_ARROW_NEXT_SEL, v.section), next(v.destiny) != null);
    }
  }

  var g_afterSlideLoadsId;
  FP.landscapeScroll = landscapeScroll;
  EventEmitter.on('bindEvents', bindEvents$b);

  function bindEvents$b() {
    EventEmitter.on('onPerformMovement', onPerformMovement);
  }

  function onPerformMovement() {
    clearTimeout(g_afterSlideLoadsId);
  }
  /**
  * Scrolls horizontal sliders.
  */


  function landscapeScroll(slides, destiny, direction) {
    var sectionElem = closest(slides, SECTION_SEL);
    var section = getState().sections.filter(function (section) {
      return section.item == sectionElem;
    })[0];
    var slide = section.slides.filter(function (slide) {
      return slide.item == destiny;
    })[0];
    var v = {
      "slides": slides,
      "destiny": destiny,
      "direction": direction,
      "destinyPos": {
        "left": destiny.offsetLeft
      },
      "slideIndex": slide.index(),
      "section": sectionElem,
      "sectionIndex": section.index(),
      "anchorLink": section.anchor,
      "slidesNav": $(SLIDES_NAV_SEL, sectionElem)[0],
      "slideAnchor": slide.anchor,
      "prevSlide": section.activeSlide.item,
      "prevSlideIndex": section.activeSlide.index(),
      "items": {
        "section": section,
        "origin": section.activeSlide,
        "destination": slide
      },
      //caching the value of isResizing at the momment the function is called
      //because it will be checked later inside a setTimeout and the value might change
      "localIsResizing": state.isResizing
    };
    v.xMovement = getXmovement(v.prevSlideIndex, v.slideIndex);
    v.direction = v.direction ? v.direction : v.xMovement; //important!! Only do it when not resizing

    if (!v.localIsResizing) {
      //preventing from scrolling to the next/prev section when using scrollHorizontally
      setState({
        canScroll: false
      });
    }

    if (getOptions().onSlideLeave) {
      //if the site is not just resizing and readjusting the slides
      if (!v.localIsResizing && v.xMovement !== 'none') {
        if (isFunction(getOptions().onSlideLeave)) {
          if (fireCallback('onSlideLeave', v) === false) {
            setState({
              slideMoving: false
            });
            return;
          }
        }
      }
    }

    addClass(destiny, ACTIVE);
    removeClass(siblings(destiny), ACTIVE);
    updateState();

    if (!v.localIsResizing) {
      stopMedia(v.prevSlide);
      lazyLoad(destiny);
    }

    toggleControlArrows(v); //only changing the URL if the slides are in the current section (not for resize re-adjusting)

    if (section.isActive && !v.localIsResizing) {
      setPageStatus(v.slideIndex, v.slideAnchor, v.anchorLink);
    }

    performHorizontalMove(slides, v, true);
  }
  /**
  * Performs the horizontal movement. (CSS3 or jQuery)
  *
  * @param fireCallback {Boolean} - determines whether or not to fire the callback
  */


  function performHorizontalMove(slides, v, fireCallback) {
    var destinyPos = v.destinyPos;
    activeSlidesNavigation(v.slidesNav, v.slideIndex);
    setState({
      scrollX: Math.round(destinyPos.left)
    });

    if (getOptions().css3) {
      var translate3d = 'translate3d(-' + Math.round(destinyPos.left) + 'px, 0px, 0px)';
      FP.test.translate3dH[v.sectionIndex] = translate3d;
      css(addAnimation($(SLIDES_CONTAINER_SEL, slides)), getTransforms(translate3d));
      clearTimeout(g_afterSlideLoadsId);
      g_afterSlideLoadsId = setTimeout(function () {
        if (fireCallback) {
          afterSlideLoads(v);
        }
      }, getOptions().scrollingSpeed);
    } else {
      FP.test.left[v.sectionIndex] = Math.round(destinyPos.left);
      scrollTo(slides, Math.round(destinyPos.left), getOptions().scrollingSpeed, function () {
        if (fireCallback) {
          afterSlideLoads(v);
        }
      });
    }
  }
  /**
  * Retuns `right` or `left` depending on the scrolling movement to reach its destination
  * from the current slide.
  */


  function getXmovement(fromIndex, toIndex) {
    if (fromIndex == toIndex) {
      return 'none';
    }

    if (fromIndex > toIndex) {
      return 'left';
    }

    return 'right';
  }

  function onDestroy$7() {
    clearTimeout(g_afterSlideLoadsId);
  }

  function afterSlideLoads(v) {
    //if the site is not just resizing and readjusting the slides
    if (!v.localIsResizing) {
      if (isFunction(getOptions().afterSlideLoad)) {
        fireCallback('afterSlideLoad', v);
      } //needs to be inside the condition to prevent problems with continuousVertical and scrollHorizontally
      //and to prevent double scroll right after a windows resize


      setState({
        canScroll: true
      });
      playMedia(v.destiny);
    } //letting them slide again


    setState({
      slideMoving: false
    });
  }
  /**
  * Slides silently (with no animation) the active slider to the given slide.
  * @param noCallback {bool} true or defined -> no callbacks
  */


  function silentLandscapeScroll(activeSlide, noCallbacks) {
    setScrollingSpeed(0, 'internal');

    if (typeof noCallbacks !== 'undefined') {
      //preventing firing callbacks afterSlideLoad etc.
      setState({
        isResizing: true
      });
    }

    landscapeScroll(closest(activeSlide, SLIDES_WRAPPER_SEL), activeSlide);

    if (typeof noCallbacks !== 'undefined') {
      setState({
        isResizing: false
      });
    }

    setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
  }

  var g_prevActiveSectionIndex = null;
  var g_prevActiveSlideIndex = null;
  /**
   * Updates the state of the app.
   */

  function updateState() {
    state.activeSection = null;
    state.sections.map(function (section) {
      var isActive = hasClass(section.item, ACTIVE);
      section.isActive = isActive;
      section.hasScroll = hasClass(section.item, OVERFLOW);

      if (isActive) {
        state.activeSection = section;
      }

      if (section.slides.length) {
        section.activeSlide = null;
        section.slides.map(function (slide) {
          var isActiveSlide = hasClass(slide.item, ACTIVE);
          slide.hasScroll = hasClass(slide.item, OVERFLOW);
          slide.isActive = isActiveSlide;

          if (isActiveSlide) {
            section.activeSlide = slide;
          }
        });
      }
    });
    scrollToNewActivePanel();
  }

  function updateStructuralState() {
    var allSectionItems = $(getOptions().sectionSelector, getContainer());
    var sectionsItems = getVisible(allSectionItems);
    var allSections = Array.from(allSectionItems).map(function (item) {
      return new SectionPanel(item);
    });
    var sections = allSections.filter(function (item) {
      return item.isVisible;
    });
    var slides = sections.reduce(function (acc, section) {
      return acc.concat(section.slides);
    }, []); // keeping track of the previously active section

    g_prevActiveSectionIndex = getPrevActivePanelIndex(state.activeSection);
    g_prevActiveSlideIndex = getPrevActivePanelIndex(state.activeSection ? state.activeSection.activeSlide : null);
    state.numSections = sectionsItems.length;
    state.numSlides = sections.reduce(function (acc, section) {
      return acc + section.slides.length;
    }, 0);
    state.sections = sections;
    state.sectionsIncludingHidden = allSections;
    state.slides = slides;
    state.panels = state.sections.concat(state.slides);
  }

  function getPrevActivePanelIndex(activePanel) {
    if (!activePanel) {
      return null;
    }

    var prevActivePanelItem = activePanel ? activePanel.item : null;
    var hiddenPanels = activePanel.isSection ? state.sectionsIncludingHidden : state.activeSection.slidesIncludingHidden;

    if (prevActivePanelItem) {
      var panel = getPanelByElement(hiddenPanels, prevActivePanelItem);
      return panel ? panel.index() : null;
    }

    return null;
  }
  /**
   * When changes in the DOM take place there's a change
   * the active section is now hidden or removed.
   * fullPage.js will scroll to the closest section nearby.
   */


  function scrollToNewActivePanel() {
    var activeSection = state.activeSection;
    var activeSectionHasSlides = state.activeSection ? state.activeSection.slides.length : false;
    var activeSlide = state.activeSection ? state.activeSection.activeSlide : null; // Hidding / removing the active section ?

    if (!activeSection && state.sections.length && !getState().isBeyondFullpage && g_prevActiveSectionIndex) {
      var newActiveSection = getNewActivePanel(g_prevActiveSectionIndex, state.sections);

      if (newActiveSection) {
        state.activeSection = newActiveSection;
        state.activeSection.isActive = true;
        addClass(state.activeSection.item, ACTIVE);
      }

      if (state.activeSection) {
        silentScroll(state.activeSection.item.offsetTop);
      }
    }

    if (activeSectionHasSlides && !activeSlide && g_prevActiveSlideIndex) {
      var newActiveSlide = getNewActivePanel(g_prevActiveSlideIndex, state.activeSection.slides);

      if (newActiveSlide) {
        state.activeSection.activeSlide = newActiveSlide;
        state.activeSection.activeSlide.isActive = true;
        addClass(state.activeSection.activeSlide.item, ACTIVE);
      }

      if (state.activeSection.activeSlide) {
        silentLandscapeScroll(state.activeSection.activeSlide.item, 'internal');
      }
    }
  }

  function getNewActivePanel(prevActivePanelIndex, siblings) {
    var newActiveSection;
    var prevIndex = prevActivePanelIndex - 1;
    var nextIndex = prevActivePanelIndex;

    do {
      newActiveSection = siblings[prevIndex] || siblings[nextIndex];

      if (newActiveSection) {
        break;
      }

      prevIndex = prevIndex - 1;
      nextIndex = nextIndex + 1;
    } while (prevIndex >= 0 || nextIndex < siblings.length);

    return newActiveSection;
  }
  /**
  * Section object
  */


  var SectionPanel = function SectionPanel(el) {
    var _this = this;

    [].push.call(arguments, getOptions().sectionSelector);
    Item.apply(this, arguments);
    this.allSlidesItems = $(getOptions().slideSelector, el);
    this.slidesIncludingHidden = Array.from(this.allSlidesItems).map(function (item) {
      return new SlidePanel(item, _this);
    });
    this.slides = this.slidesIncludingHidden.filter(function (slidePanel) {
      return slidePanel.isVisible;
    });
    this.activeSlide = this.slides.length ? this.slides.filter(function (slide) {
      return slide.isActive;
    })[0] || this.slides[0] : null;
  };

  SectionPanel.prototype = Item.prototype;
  SectionPanel.prototype.constructor = SectionPanel;
  /**
  * Slide object
  */

  var SlidePanel = function SlidePanel(el, section) {
    this.parent = section;
    Item.call(this, el, getOptions().slideSelector);
  };

  SlidePanel.prototype = Item.prototype;
  SlidePanel.prototype.constructor = SectionPanel;
  /**
  * Adds internal classes to be able to provide customizable selectors
  * keeping the link with the style sheet.
  */

  function addInternalSelectors() {
    addClass($(getOptions().sectionSelector, getContainer()), SECTION);
    addClass($(getOptions().slideSelector, getContainer()), SLIDE);
  }

  function tooltipTextHandler() {
    /*jshint validthis:true */
    trigger(prev(this), 'click');
  }
  /**
  * Activating the vertical navigation bullets according to the given slide name.
  */


  function activateNavDots(name, sectionIndex) {
    var nav = $(SECTION_NAV_SEL)[0];

    if (getOptions().navigation && nav != null && nav.style.display !== 'none') {
      removeClass($(ACTIVE_SEL, nav), ACTIVE);

      if (name) {
        addClass($('a[href="#' + name + '"]', nav), ACTIVE);
      } else {
        addClass($('a', $('li', nav)[sectionIndex]), ACTIVE);
      }
    }
  }
  /**
  * Creates a vertical navigation bar.
  */


  function addVerticalNavigation() {
    remove($(SECTION_NAV_SEL));
    var navigation = doc.createElement('div');
    navigation.setAttribute('id', SECTION_NAV);
    var divUl = doc.createElement('ul');
    navigation.appendChild(divUl);
    appendTo(navigation, $body);
    var nav = $(SECTION_NAV_SEL)[0];
    addClass(nav, 'fp-' + getOptions().navigationPosition);

    if (getOptions().showActiveTooltip) {
      addClass(nav, SHOW_ACTIVE_TOOLTIP);
    }

    var li = '';

    for (var i = 0; i < getState().sections.length; i++) {
      var section = getState().sections[i];
      var link = '';

      if (getOptions().anchors.length) {
        link = section.anchor;
      }

      li += '<li><a href="#' + encodeURI(link) + '"><span class="fp-sr-only">' + getBulletLinkName(section.index(), 'Section') + '</span><span></span></a>'; // Only add tooltip if needed (defined by user)

      var tooltip = getOptions().navigationTooltips[section.index()];

      if (typeof tooltip !== 'undefined' && tooltip !== '') {
        li += '<div class="' + SECTION_NAV_TOOLTIP + ' fp-' + getOptions().navigationPosition + '">' + tooltip + '</div>';
      }

      li += '</li>';
    }

    $('ul', nav)[0].innerHTML = li; //activating the current active section

    var bullet = $('li', $(SECTION_NAV_SEL)[0])[getState().activeSection.index()];
    addClass($('a', bullet), ACTIVE);
  } //Scrolls to the section when clicking the navigation bullet


  function sectionBulletHandler(e) {
    if (e.preventDefault) {
      preventDefault(e);
    }

    setState({
      scrollTrigger: 'verticalNav'
    });
    /*jshint validthis:true */
    // @ts-ignore

    var indexBullet = index(closest(this, SECTION_NAV_SEL + ' li'));
    EventEmitter.emit('scrollPage', {
      destination: getState().sections[indexBullet]
    });
  }

  FP.setRecordHistory = setRecordHistory;
  /**
  * Defines wheter to record the history for each hash change in the URL.
  */

  function setRecordHistory(value, type) {
    setVariableState('recordHistory', value, type);
  }

  FP.setAutoScrolling = setAutoScrolling;
  FP.test.setAutoScrolling = setAutoScrolling;
  /**
  * Sets the autoScroll option.
  * It changes the scroll bar visibility and the history of the site as a result.
  */

  function setAutoScrolling(value, type) {
    //removing the transformation
    if (!value) {
      silentScroll(0);
    }

    setVariableState('autoScrolling', value, type);
    var element = getState().activeSection.item;

    if (getOptions().autoScrolling && !getOptions().scrollBar) {
      css($htmlBody, {
        'overflow': 'hidden',
        'height': '100%'
      });
      removeClass($body, 'fp-scrollable');
      setRecordHistory(getOriginals().recordHistory, 'internal'); //for IE touch devices

      css(getContainer(), {
        '-ms-touch-action': 'none',
        'touch-action': 'none'
      });

      if (element != null) {
        //moving the container up
        silentScroll(element.offsetTop);
      }
    } else {
      css($htmlBody, {
        'overflow': 'visible',
        'height': 'initial'
      });
      addClass($body, 'fp-scrollable');
      var recordHistory = !getOptions().autoScrolling ? false : getOriginals().recordHistory;
      setRecordHistory(recordHistory, 'internal'); //for IE touch devices

      css(getContainer(), {
        '-ms-touch-action': '',
        'touch-action': ''
      }); //scrolling the page to the section with no animation

      if (element != null) {
        css($htmlBody, {
          'scroll-behavior': 'unset'
        });
        var scrollSettings = getScrollSettings(element.offsetTop);
        scrollSettings.element.scrollTo(0, scrollSettings.options);
      }
    }
  }

  FP.setFitToSection = setFitToSection;
  FP.fitToSection = fitToSection;

  var g_isCssSnapsSupported = function () {
    return isCssSnapsSupported();
  }();
  /**
  * Sets fitToSection
  */


  function setFitToSection(value, type) {
    toggleCssSnapsWhenPossible(value);
    setVariableState('fitToSection', value, type);
  }
  /**
  * Adds or removes CSS snaps scrolling behaviour depending on the given value.
  */


  function toggleCssSnapsWhenPossible(value) {
    if (g_isCssSnapsSupported) {
      var canAddSnaps = getOptions().fitToSection && (!getOptions().autoScrolling || getOptions().scrollBar) && value;
      var toggleFunction = canAddSnaps ? addClass : removeClass;
      toggleFunction($html, SNAPS);
    }
  }
  /**
  * Checks for CSS scroll snaps support.
  */


  function isCssSnapsSupported() {
    var style = doc.documentElement.style;
    return 'scrollSnapAlign' in style || 'webkitScrollSnapAlign' in style || 'msScrollSnapAlign' in style;
  }
  /**
  * Fits the site to the nearest active section
  */


  function fitToSection() {// //checking fitToSection again in case it was set to false before the timeout delay
    // if(canScroll){
    //     //allows to scroll to an active section and
    //     //if the section is already active, we prevent firing callbacks
    //     isResizing = true;
    //     scrollPage(state.activeSection);
    //     isResizing = false;
    // }
  }

  FP.setResponsive = setResponsive;
  /**
  * Checks if the site needs to get responsive and disables autoScrolling if so.
  * A class `fp-responsive` is added to the plugin's container in case the user wants to use it for his own responsive CSS.
  */

  function responsive() {
    var widthLimit = getOptions().responsive || getOptions().responsiveWidth; //backwards compatiblity

    var heightLimit = getOptions().responsiveHeight; //only calculating what we need. Remember its called on the resize event.

    var isBreakingPointWidth = widthLimit && win.innerWidth < widthLimit;
    var isBreakingPointHeight = heightLimit && win.innerHeight < heightLimit;

    if (widthLimit && heightLimit) {
      setResponsive(isBreakingPointWidth || isBreakingPointHeight);
    } else if (widthLimit) {
      setResponsive(isBreakingPointWidth);
    } else if (heightLimit) {
      setResponsive(isBreakingPointHeight);
    }
  }
  /**
  * Turns fullPage.js to normal scrolling mode when the viewport `width` or `height`
  * are smaller than the set limit values.
  */


  function setResponsive(active) {
    var isResponsive = isResponsiveMode();

    if (active) {
      if (!isResponsive) {
        setAutoScrolling(false, 'internal');
        setFitToSection(false, 'internal');
        hide($(SECTION_NAV_SEL));
        addClass($body, RESPONSIVE);

        if (isFunction(getOptions().afterResponsive)) {
          getOptions().afterResponsive.call(getContainer(), active);
        } //when on page load, we will remove scrolloverflow if necessary
        // if(getOptions().scrollOverflow){
        //     createScrollBarForAll();
        // }

      }
    } else if (isResponsive) {
      setAutoScrolling(getOriginals().autoScrolling, 'internal');
      setFitToSection(getOriginals().autoScrolling, 'internal');
      show($(SECTION_NAV_SEL));
      removeClass($body, RESPONSIVE);

      if (isFunction(getOptions().afterResponsive)) {
        getOptions().afterResponsive.call(getContainer(), active);
      }
    }
  }
  /**
  * Determines whether fullpage.js is in responsive mode or not.
  */


  function isResponsiveMode() {
    return hasClass($body, RESPONSIVE);
  }

  EventEmitter.on('bindEvents', bindEvents$a);

  function bindEvents$a() {
    //after DOM and images are loaded
    win.addEventListener('load', function () {
      if (getOptions().scrollOverflow && !getOptions().scrollBar) {
        scrollOverflowHandler.makeScrollable();
        scrollOverflowHandler.afterSectionLoads();
      }
    });

    if (getOptions().scrollOverflow) {
      getNodes(getState().panels).forEach(function (el) {
        el.addEventListener('scroll', scrollOverflowHandler.onPanelScroll);
        el.addEventListener('wheel', scrollOverflowHandler.preventScrollWhileMoving);
        el.addEventListener('keydown', scrollOverflowHandler.preventScrollWhileMoving);
        el.addEventListener('keydown', scrollOverflowHandler.blurFocusOnAfterLoad);
      });
    }
  }

  var scrollOverflowHandler = {
    focusedElem: null,
    timeBeforeReachingLimit: null,
    timeLastScroll: null,
    preventScrollWhileMoving: function preventScrollWhileMoving(e) {
      if (!state.canScroll) {
        preventDefault(e);
        return false;
      }
    },
    afterSectionLoads: function afterSectionLoads() {
      // Unfocusing the scrollable element from the orgin section/slide
      if (doc.activeElement === this.focusedElem) {
        // @ts-ignore
        this.focusedElem.blur();
      }

      if ($(OVERFLOW_SEL + ACTIVE_SEL, getState().activeSection.item)[0]) {
        this.focusedElem = $(OVERFLOW_SEL, getState().activeSection.item)[0];
        this.focusedElem.focus();
      }
    },
    makeScrollable: function makeScrollable() {
      if (getOptions().scrollOverflowMacStyle && !isMacDevice) {
        addClass($body, 'fp-scroll-mac');
      }

      getState().panels.forEach(function (el) {
        if (hasClass(el.item, 'fp-noscroll') || hasClass(el.item, AUTO_HEIGHT) || hasClass(el.item, AUTO_HEIGHT_RESPONSIVE) && isResponsiveMode()) {
          return;
        } else {
          var item = scrollOverflowHandler.scrollable(el.item);
          var shouldBeScrollable = scrollOverflowHandler.shouldBeScrollable(el.item);

          if (shouldBeScrollable) {
            addClass(item, OVERFLOW);
            item.setAttribute('tabindex', '-1');
          } else {
            removeClass(item, OVERFLOW);
            item.removeAttribute('tabindex');
          } // updating the state now in case
          // this is executed on page load (after images load)


          el.hasScroll = shouldBeScrollable;
        }
      });
    },
    scrollable: function scrollable(sectionItem) {
      return $(SLIDE_ACTIVE_SEL, sectionItem)[0] || sectionItem;
    },
    isScrollable: function isScrollable(panel) {
      return panel.isSection && panel.activeSlide ? panel.activeSlide.hasScroll : panel.hasScroll;
    },
    shouldBeScrollable: function shouldBeScrollable(item) {
      return item.scrollHeight > win.innerHeight;
    },
    isScrolled: function isScrolled(direction, el) {
      if (!state.canScroll) {
        return false;
      }

      if (!getOptions().scrollOverflow) {
        return true;
      }

      var scrollableItem = scrollOverflowHandler.scrollable(el);
      var positionY = scrollableItem.scrollTop;
      var isTopReached = direction === 'up' && positionY <= 0;
      var isBottomReached = direction === 'down' && scrollableItem.scrollHeight <= Math.ceil(scrollableItem.offsetHeight + positionY);
      var isScrolled = isTopReached || isBottomReached;

      if (!isScrolled) {
        this.timeBeforeReachingLimit = new Date().getTime();
      }

      return isScrolled;
    },
    shouldMovePage: function shouldMovePage() {
      this.timeLastScroll = new Date().getTime();
      var timeDiff = this.timeLastScroll - scrollOverflowHandler.timeBeforeReachingLimit;
      var isUsingTouch = isTouchDevice || isTouch;
      var isGrabbing = isUsingTouch && state.isGrabbing;
      var isNotFirstTimeReachingLimit = state.isUsingWheel && timeDiff > 600;
      return isGrabbing && timeDiff > 400 || isNotFirstTimeReachingLimit;
    },
    onPanelScroll: function () {
      var prevPosition = 0;
      return function (e) {
        var currentPosition = e.target.scrollTop;
        var direction = state.touchDirection !== 'none' ? state.touchDirection : prevPosition < currentPosition ? 'down' : 'up';
        prevPosition = currentPosition;

        if (isFunction(getOptions().onScrollOverflow)) {
          fireCallback('onScrollOverflow', {
            position: currentPosition,
            direction: direction
          });
        }

        if (hasClass(e.target, OVERFLOW) && state.canScroll) {
          if (scrollOverflowHandler.isScrolled(direction, e.target) && scrollOverflowHandler.shouldMovePage()) {
            EventEmitter.emit('onScrollOverflowScrolled', {
              direction: direction
            });
          }
        }
      };
    }()
  };

  function addTableClass(element) {
    if (!getOptions().verticalCentered) {
      return;
    }

    if (!scrollOverflowHandler.isScrollable(element)) {
      //In case we are styling for the 2nd time as in with reponsiveSlides
      if (!hasClass(element.item, TABLE)) {
        addClass(element.item, TABLE);
      }
    }
  }
  /**
  * Styles the horizontal slides for a section.
  */


  function styleSlides(section) {
    var numSlides = section.slides.length;
    var slidesElems = section.allSlidesItems;
    var slides = section.slides;
    var sliderWidth = numSlides * 100;
    var slideWidth = 100 / numSlides;

    if (!$(SLIDES_WRAPPER_SEL, section.item)[0]) {
      var slidesWrapper = doc.createElement('div');
      slidesWrapper.className = SLIDES_WRAPPER; //fp-slides

      wrapAll(slidesElems, slidesWrapper);
      var slidesContainer = doc.createElement('div');
      slidesContainer.className = SLIDES_CONTAINER; //fp-slidesContainer

      wrapAll(slidesElems, slidesContainer);
    }

    css($(SLIDES_CONTAINER_SEL, section.item), {
      'width': sliderWidth + '%'
    });

    if (numSlides > 1) {
      if (getOptions().controlArrows) {
        createSlideArrows(section);
      }

      if (getOptions().slidesNavigation) {
        addSlidesNavigation(section);
      }
    }

    slides.forEach(function (slide) {
      css(slide.item, {
        'width': slideWidth + '%'
      });

      if (getOptions().verticalCentered) {
        addTableClass(slide);
      }
    });
    var startingSlide = section.activeSlide || null; //if the slide won't be an starting point, the default will be the first one
    //the active section isn't the first one? Is not the first slide of the first section? Then we load that section/slide by default.

    if (startingSlide != null && state.activeSection && (state.activeSection.index() !== 0 || state.activeSection.index() === 0 && startingSlide.index() !== 0)) {
      silentLandscapeScroll(startingSlide.item, 'internal');
    } else {
      addClass(slidesElems[0], ACTIVE);
    }
  }

  var startingSection = null;
  FP.getActiveSection = getActiveSection;

  function getStartingSection() {
    return startingSection;
  }
  /**
  * Styling vertical sections
  */


  function styleSection(section) {
    var sectionElem = section.item;
    var hasSlides = section.allSlidesItems.length;
    var index = section.index(); //if no active section is defined, the 1st one will be the default one

    if (!getState().activeSection && section.isVisible) {
      addClass(sectionElem, ACTIVE);
      updateState();
    }

    startingSection = getState().activeSection.item;

    if (getOptions().paddingTop) {
      css(sectionElem, {
        'padding-top': getOptions().paddingTop
      });
    }

    if (getOptions().paddingBottom) {
      css(sectionElem, {
        'padding-bottom': getOptions().paddingBottom
      });
    }

    if (typeof getOptions().sectionsColor[index] !== 'undefined') {
      css(sectionElem, {
        'background-color': getOptions().sectionsColor[index]
      });
    }

    if (typeof getOptions().anchors[index] !== 'undefined') {
      sectionElem.setAttribute('data-anchor', section.anchor);
    }

    if (!hasSlides) {
      addTableClass(section);
    }
  }
  /**
  * Gets the active section.
  */


  function getActiveSection() {
    return getState().activeSection;
  }

  var g_wrapperObserver;
  var g_wrapperObserveConfig = {
    attributes: false,
    subtree: true,
    childList: true,
    characterData: true
  };
  EventEmitter.on('bindEvents', bindEvents$9);
  FP.render = onContentChange;

  function bindEvents$9() {
    if (getOptions().observer && "MutationObserver" in window && $(WRAPPER_SEL)[0]) {
      g_wrapperObserver = createObserver($(WRAPPER_SEL)[0], onContentChange, g_wrapperObserveConfig);
    }

    EventEmitter.on('contentChanged', onContentChange);
  }
  /**
   * Creates a Mutation observer.
   */


  function createObserver(target, callback, config) {
    var observer = new MutationObserver(callback);
    observer.observe(target, config);
    return observer;
  }

  function didSlidesChange() {
    return getVisible($(getOptions().slideSelector, getContainer())).length !== getState().numSlides;
  }

  function didSectionsChange() {
    return getVisible($(getOptions().sectionSelector, getContainer())).length !== getState().numSections;
  }

  function didSectionsOrSlidesChange() {
    return didSlidesChange() || didSectionsChange();
  }
  /**
   * Listen to changes on sections and fires reBuild
   * when those changes affect the section height.
   */


  function onContentChange(mutations) {
    var _didSlidesChange = didSlidesChange();

    if (didSectionsOrSlidesChange() && !state.isDoingContinousVertical) {
      if (getOptions().observer && g_wrapperObserver) {
        // Temporally disabling the observer while
        // we modidy the DOM again
        g_wrapperObserver.disconnect();
      }

      updateStructuralState();
      updateState(); // Removing navs and anchors options

      getOptions().anchors = [];
      remove($(SECTION_NAV_SEL));
      addInternalSelectors();
      setOptionsFromDOM();

      if (getOptions().navigation) {
        addVerticalNavigation();
      }

      if (_didSlidesChange) {
        remove($(SLIDES_NAV_SEL));
        remove($(SLIDES_ARROW_SEL));
      }

      getState().sections.forEach(function (section) {
        if (section.slides.length) {
          if (_didSlidesChange) {
            styleSlides(section);
          }
        } else {
          styleSection(section);
        }
      });
    }

    if (getOptions().observer && g_wrapperObserver && $(WRAPPER_SEL)[0]) {
      g_wrapperObserver.observe($(WRAPPER_SEL)[0], g_wrapperObserveConfig);
    }
  }

  var supportsPassiveEvents = function () {
    //cheks for passive event support
    var g_supportsPassive = false;

    try {
      var opts = Object.defineProperty({}, 'passive', {
        get: function get() {
          g_supportsPassive = true;
        }
      });
      windowAddEvent("testPassive", null, opts);
      windowRemoveEvent("testPassive", null, opts);
    } catch (e) {}

    return function () {
      return g_supportsPassive;
    };
  }();

  function getPassiveOptionsIfPossible() {
    return supportsPassiveEvents() ? {
      passive: false
    } : false;
  }

  new Date().getTime();
  /**
   * Triggers the callback once per scroll wheel action.
   * Based on scrolling speed delay.
   */

  var oncePerScroll = function () {
    var canTriggerEvent = true;
    var prevWheelTime = new Date().getTime();
    var result;
    return function (scrollTrigger, callback) {
      var currentTime = new Date().getTime();
      var timeThreshold = scrollTrigger === 'wheel' ? getOptions().scrollingSpeed : 100;
      canTriggerEvent = currentTime - prevWheelTime >= timeThreshold;

      if (canTriggerEvent) {
        result = callback();
        prevWheelTime = currentTime;
      }

      return typeof result !== 'undefined' ? result : true;
    };
  }();

  var wheelDataHandler = function () {
    var _prevTime = new Date().getTime();

    var _scrollings = [];
    var isScrollingVertically;
    var direction;
    return {
      registerEvent: function registerEvent(e) {
        e = e || win.event;
        var value = e.wheelDelta || -e.deltaY || -e.detail;
        var delta = Math.max(-1, Math.min(1, value));
        var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
        isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
        var curTime = new Date().getTime();
        direction = delta < 0 ? 'down' : 'up'; //Limiting the array to 150 (lets not waste memory!)

        if (_scrollings.length > 149) {
          _scrollings.shift();
        } //keeping record of the previous scrollings


        _scrollings.push(Math.abs(value)); //time difference between the last scroll and the current one


        var timeDiff = curTime - _prevTime;
        _prevTime = curTime; //haven't they scrolled in a while?
        //(enough to be consider a different scrolling action to scroll another section)

        if (timeDiff > 200) {
          //emptying the array, we dont care about old scrollings for our averages
          _scrollings = [];
        }
      },
      isAccelerating: function isAccelerating() {
        var averageEnd = getAverage(_scrollings, 10);
        var averageMiddle = getAverage(_scrollings, 70);
        var isAccelerating = averageEnd >= averageMiddle;
        return _scrollings.length ? isAccelerating && isScrollingVertically : false;
      },
      getDirection: function getDirection() {
        return direction;
      }
    };
  }();

  function scrollBeyondFullPage() {
    var dtop = getDestinationOffset();
    var scrollSettings = getScrollSettings(dtop);
    FP.test.top = -dtop + 'px';
    css(doc.body, {
      'scroll-snap-type': 'none'
    });
    css($htmlBody, {
      'scroll-behavior': 'unset'
    });
    setState({
      canScroll: false
    });
    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
      setTimeout(function () {
        setState({
          isBeyondFullpage: true
        });
        setState({
          canScroll: true
        });
      }, 30);
    });
  }

  function onKeyDown() {
    if (!isFullPageAbove()) {
      return;
    } else {
      scrollUpToFullpage();
    }
  }

  function scrollUpToFullpage() {
    var scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop);
    setState({
      canScroll: false
    });
    scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
      setState({
        canScroll: true
      });
      setState({
        isBeyondFullpage: false
      });
      setState({
        isAboutToScrollToFullPage: false
      });
    });
  }

  function getDestinationOffset() {
    if (!getOptions().css3) {
      return getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight;
    }

    return getScrollTop(getOptions()) + getWindowHeight();
  }

  function beyondFullPageHandler(container, e) {
    new Date().getTime();
    var pauseScroll = getState().isBeyondFullpage && container.getBoundingClientRect().bottom >= 0 && wheelDataHandler.getDirection() === 'up';
    var g_isAboutToScrollToFullPage = getState().isAboutToScrollToFullPage;

    if (g_isAboutToScrollToFullPage) {
      preventDefault(e);
      return false;
    }

    if (getState().isBeyondFullpage) {
      if (!pauseScroll) {
        keyframeTime('set', 'beyondFullpage', 1000);
      } else {
        var shouldSetFixedPosition = !g_isAboutToScrollToFullPage && (!keyframeTime('isNewKeyframe', 'beyondFullpage') || !wheelDataHandler.isAccelerating());
        var scrollSettings;

        if (shouldSetFixedPosition) {
          scrollSettings = getScrollSettings(getLast(getState().sections).item.offsetTop + getLast(getState().sections).item.offsetHeight);
          scrollSettings.element.scrollTo(0, scrollSettings.options);
          setState({
            isAboutToScrollToFullPage: false
          });
          preventDefault(e);
          return false;
        } else if (wheelDataHandler.isAccelerating()) {
          pauseScroll = false;
          setState({
            isAboutToScrollToFullPage: true
          });
          setState({
            scrollTrigger: 'wheel'
          });
          scrollUpToFullpage();
          preventDefault(e);
          return false;
        }
      }

      if (!g_isAboutToScrollToFullPage) {
        // allow normal scrolling, but quitting
        if (!pauseScroll) {
          return true;
        }
      }
    }
  }

  var keyframeTime = function () {
    var isNew = false;
    var frames = {};
    var timeframes = {};
    return function (action, name, timeframe) {
      switch (action) {
        case 'set':
          frames[name] = new Date().getTime();
          timeframes[name] = timeframe;
          break;

        case 'isNewKeyframe':
          var current = new Date().getTime();
          isNew = current - frames[name] > timeframes[name];
          break;
      }

      return isNew;
    };
  }(); //@ts-check

  /**
  * Adds sections before or after the current one to create the infinite effect.
  */


  function createInfiniteSections(v) {
    setState({
      isDoingContinousVertical: true
    });
    var activeSectionItem = getState().activeSection.item; // Scrolling down

    if (!v.isMovementUp) {
      // Move all previous sections to after the active section
      after(activeSectionItem, prevAll(activeSectionItem, SECTION_SEL).reverse());
    } else {
      // Scrolling up
      // Move all next sections to before the active section
      before(activeSectionItem, nextAll(activeSectionItem, SECTION_SEL));
    } // Maintain the displayed position (now that we changed the element order)


    silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

    keepSlidesPosition$1(); // save for later the elements that still need to be reordered

    v.wrapAroundElements = activeSectionItem; // Recalculate animation variables

    v.dtop = v.element.offsetTop;
    v.yMovement = getYmovement(getState().activeSection, v.element);
    return v;
  }
  /**
  * Maintains the active slides in the viewport
  * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
  */


  function keepSlidesPosition$1() {
    var activeSlides = $(SLIDE_ACTIVE_SEL);

    for (var i = 0; i < activeSlides.length; i++) {
      silentLandscapeScroll(activeSlides[i], 'internal');
    }
  } //@ts-check

  /**
  * Maintains the active slides in the viewport
  * (Because the `scroll` animation might get lost with some actions, such as when using continuousVertical)
  */


  function keepSlidesPosition() {
    var activeSlides = $(SLIDE_ACTIVE_SEL);

    for (var i = 0; i < activeSlides.length; i++) {
      silentLandscapeScroll(activeSlides[i], 'internal');
    }
  }
  /**
  * Fix section order after continuousVertical changes have been animated
  */


  function continuousVerticalFixSectionOrder(v) {
    // If continuousVertical is in effect (and autoScrolling would also be in effect then),
    // finish moving the elements around so the direct navigation will function more simply
    if (v.wrapAroundElements == null) {
      return;
    }

    if (v.isMovementUp) {
      before($(SECTION_SEL)[0], v.wrapAroundElements);
    } else {
      after($(SECTION_SEL)[getState().sections.length - 1], v.wrapAroundElements);
    }

    silentScroll(getState().activeSection.item.offsetTop); // Maintain the active slides visible in the viewport

    keepSlidesPosition();
    setState({
      isDoingContinousVertical: false
    });
  }
  /**
  * Makes sure lazyload is done for other sections in the viewport that are not the
  * active one.
  */


  function lazyLoadOthers() {
    var hasAutoHeightSections = $(AUTO_HEIGHT_SEL)[0] || isResponsiveMode() && $(AUTO_HEIGHT_RESPONSIVE_SEL)[0]; //quitting when it doesn't apply

    if (!getOptions().lazyLoading || !hasAutoHeightSections) {
      return;
    } //making sure to lazy load auto-height sections that are in the viewport


    $(SECTION_SEL + ':not(' + ACTIVE_SEL + ')').forEach(function (section) {
      if (isSectionInViewport(section)) {
        lazyLoad(section);
      }
    });
  }
  /**
  * Determines whether a section is in the viewport or not.
  */


  function isSectionInViewport(el) {
    var rect = el.getBoundingClientRect();
    var top = rect.top;
    var bottom = rect.bottom; //sometimes there's a 1px offset on the bottom of the screen even when the
    //section's height is the window.innerHeight one. I guess because pixels won't allow decimals.
    //using this prevents from lazyLoading the section that is not yet visible
    //(only 1 pixel offset is)

    var pixelOffset = 2;
    var isTopInView = top + pixelOffset < state.windowsHeight && top > 0;
    var isBottomInView = bottom > pixelOffset && bottom < state.windowsHeight;
    return isTopInView || isBottomInView;
  }
  /**
  * Sets to active the current menu and vertical nav items.
  */


  function activateMenuAndNav(anchor, index) {
    activateMenuElement(anchor);
    activateNavDots(anchor, index);
  }
  /**
  * Activating the website main menu elements according to the given slide name.
  */


  function activateMenuElement(name) {
    if (getOptions().menu && getOptions().menu.length) {
      $(getOptions().menu).forEach(function (menu) {
        if (menu != null) {
          removeClass($(ACTIVE_SEL, menu), ACTIVE);
          addClass($('[data-menuanchor="' + name + '"]', menu), ACTIVE);
        }
      });
    }
  }
  /**
  * Fires the wheel event once per mouse wheel trigger.
  */


  function fireCallbackOncePerScroll(callbackName, params) {
    if (!isFunction(getOptions().beforeLeave)) {
      return;
    }

    var result = oncePerScroll(getState().scrollTrigger, function () {
      return fireCallback(callbackName, params);
    });
    return result;
  }

  FP.moveTo = moveTo;

  FP.getScrollY = function () {
    return state.scrollY;
  };

  var g_afterSectionLoadsId;
  var g_transitionLapseId;
  EventEmitter.on('onDestroy', onDestroy$6);
  /**
  * Scrolls the site to the given element and scrolls to the slide if a callback is given.
  */

  function scrollPage(section, callback, isMovementUp) {
    var element = section.item;

    if (element == null) {
      return;
    } //there's no element to scroll, leaving the function


    var dtop = getDestinationPosition(element);
    var slideAnchorLink;
    var slideIndex; //local variables

    var v = {
      "element": element,
      "callback": callback,
      "isMovementUp": isMovementUp,
      "dtop": dtop,
      "yMovement": getYmovement(getState().activeSection, element),
      "anchorLink": section.anchor,
      "sectionIndex": section.index(),
      "activeSlide": section.activeSlide ? section.activeSlide.item : null,
      "leavingSection": getState().activeSection.index() + 1,
      //caching the value of isResizing at the momment the function is called
      //because it will be checked later inside a setTimeout and the value might change
      "localIsResizing": state.isResizing,
      "items": {
        "origin": getState().activeSection,
        "destination": section
      },
      "direction": null
    }; //quiting when destination scroll is the same as the current one

    if (getState().activeSection.item == element && !state.isResizing || getOptions().scrollBar && getScrollTop(getOptions()) === v.dtop && !hasClass(element, AUTO_HEIGHT)) {
      return;
    }

    if (v.activeSlide != null) {
      slideAnchorLink = getAttr(v.activeSlide, 'data-anchor');
      slideIndex = index(v.activeSlide, null);
    } //callback (onLeave) if the site is not just resizing and readjusting the slides


    if (!v.localIsResizing) {
      var direction = v.yMovement; //required for continousVertical

      if (typeof isMovementUp !== 'undefined') {
        direction = isMovementUp ? 'up' : 'down';
      } //for the callback


      v.direction = direction;

      if (isFunction(getOptions().beforeLeave)) {
        if (fireCallbackOncePerScroll('beforeLeave', v) === false) {
          return;
        }
      }

      if (isFunction(getOptions().onLeave)) {
        if (!fireCallback('onLeave', v)) {
          return;
        }
      }
    } // If continuousVertical && we need to wrap around


    if (getOptions().autoScrolling && getOptions().continuousVertical && typeof v.isMovementUp !== "undefined" && (!v.isMovementUp && v.yMovement == 'up' || // Intending to scroll down but about to go up or
    v.isMovementUp && v.yMovement == 'down')) {
      // intending to scroll up but about to go down
      v = createInfiniteSections(v);
    } //pausing media of the leaving section (if we are not just resizing, as destinatino will be the same one)


    if (!v.localIsResizing) {
      stopMedia(getState().activeSection.item);
    }

    addClass(element, ACTIVE);
    removeClass(siblings(element), ACTIVE);
    updateState();
    lazyLoad(element); //preventing from activating the MouseWheelHandler event
    //more than once if the page is scrolling

    setState({
      canScroll: FP.test.isTesting
    });
    setPageStatus(slideIndex, slideAnchorLink, v.anchorLink);
    performMovement(v); //flag to avoid callingn `scrollPage()` twice in case of using anchor links

    setState({
      lastScrolledDestiny: v.anchorLink
    }); //avoid firing it twice (as it does also on scroll)

    activateMenuAndNav(v.anchorLink, v.sectionIndex);
  }

  function onDestroy$6() {
    clearTimeout(g_afterSectionLoadsId);
    clearTimeout(g_transitionLapseId);
  }
  /**
  * Returns the destination Y position based on the scrolling direction and
  * the height of the section.
  */


  function getDestinationPosition(element) {
    var elementHeight = element.offsetHeight;
    var elementTop = element.offsetTop; //top of the desination will be at the top of the viewport

    var position = elementTop;
    var isScrollingDown = elementTop > state.previousDestTop;
    var sectionBottom = position - getWindowHeight() + elementHeight;
    var bigSectionsDestination = getOptions().bigSectionsDestination; //is the destination element bigger than the viewport?

    if (elementHeight > getWindowHeight()) {
      //scrolling up?
      if (!isScrollingDown && !bigSectionsDestination || bigSectionsDestination === 'bottom') {
        position = sectionBottom;
      }
    } //sections equal or smaller than the viewport height && scrolling down? ||  is resizing and its in the last section
    else if (isScrollingDown || state.isResizing && next(element) == null) {
      //The bottom of the destination will be at the bottom of the viewport
      position = sectionBottom;
    }
    /*
    Keeping record of the last scrolled position to determine the scrolling direction.
    No conventional methods can be used as the scroll bar might not be present
    AND the section might not be active if it is auto-height and didnt reach the middle
    of the viewport.
    */


    setState({
      previousDestTop: position
    });
    return position;
  }
  /**
  * Performs the vertical movement (by CSS3 or by jQuery)
  */


  function performMovement(v) {
    var isFastSpeed = getOptions().scrollingSpeed < 700;
    var transitionLapse = isFastSpeed ? 700 : getOptions().scrollingSpeed;
    setState({
      touchDirection: 'none',
      scrollY: Math.round(v.dtop)
    });
    EventEmitter.emit('onPerformMovement'); // using CSS3 translate functionality

    if (getOptions().css3 && getOptions().autoScrolling && !getOptions().scrollBar) {
      // The first section can have a negative value in iOS 10. Not quite sure why: -0.0142822265625
      // that's why we round it to 0.
      var translate3d = 'translate3d(0px, -' + Math.round(v.dtop) + 'px, 0px)';
      transformContainer(translate3d, true); //even when the scrollingSpeed is 0 there's a little delay, which might cause the
      //scrollingSpeed to change in case of using silentMoveTo();ç

      if (getOptions().scrollingSpeed) {
        clearTimeout(g_afterSectionLoadsId);
        g_afterSectionLoadsId = setTimeout(function () {
          afterSectionLoads(v); //disabling canScroll when using fastSpeed

          setState({
            canScroll: !isFastSpeed || FP.test.isTesting
          });
        }, getOptions().scrollingSpeed);
      } else {
        afterSectionLoads(v);
      }
    } // using JS to animate
    else {
      var scrollSettings = getScrollSettings(v.dtop);
      FP.test.top = -v.dtop + 'px';
      css($htmlBody, {
        'scroll-behavior': 'unset'
      });
      clearTimeout(g_afterSectionLoadsId);
      scrollTo(scrollSettings.element, scrollSettings.options, getOptions().scrollingSpeed, function () {
        if (getOptions().scrollBar) {
          /* Hack!
          The timeout prevents setting the most dominant section in the viewport as "active" when the user
          scrolled to a smaller section by using the mousewheel (auto scrolling) rather than draging the scroll bar.
           When using scrollBar:true It seems like the scroll events still getting propagated even after the scrolling animation has finished.
          */
          g_afterSectionLoadsId = setTimeout(function () {
            afterSectionLoads(v);
          }, 30);
        } else {
          afterSectionLoads(v); //disabling canScroll when using fastSpeed

          setState({
            canScroll: !isFastSpeed || FP.test.isTesting
          });
        }
      });
    } // enabling canScroll after the minimum transition laps


    if (isFastSpeed) {
      clearTimeout(g_transitionLapseId);
      g_transitionLapseId = setTimeout(function () {
        setState({
          canScroll: true
        });
      }, transitionLapse);
    }
  }
  /**
  * Actions to do once the section is loaded.
  */


  function afterSectionLoads(v) {
    if (getOptions().fitToSection) {
      // Removing CSS snaps for auto-scrolling sections
      if (hasClass($(SECTION_ACTIVE_SEL)[0], AUTO_HEIGHT)) {
        css(doc.body, {
          'scroll-snap-type': 'none'
        });
      }
    }

    setState({
      isBeyondFullpage: false
    });
    continuousVerticalFixSectionOrder(v); //callback (afterLoad) if the site is not just resizing and readjusting the slides

    if (isFunction(getOptions().afterLoad) && !v.localIsResizing) {
      fireCallback('afterLoad', v);
    }

    updateState();

    if (!v.localIsResizing) {
      playMedia(v.element);
    }

    addClass(v.element, COMPLETELY);
    removeClass(siblings(v.element), COMPLETELY);
    lazyLoadOthers();
    scrollOverflowHandler.afterSectionLoads();
    setState({
      canScroll: true
    });

    if (isFunction(v.callback)) {
      v.callback();
    }
  }

  FP.moveSectionDown = moveSectionDown;
  /**
  * Moves the page down one section.
  */

  function moveSectionDown() {
    var next = getState().activeSection.next(); //looping to the top if there's no more sections below

    if (!next && (getOptions().loopBottom || getOptions().continuousVertical)) {
      next = getState().sections[0];
    }

    if (next != null) {
      scrollPage(next, null, false);
    } else if (hasContentBeyondFullPage()) {
      EventEmitter.emit('scrollBeyondFullpage');
    }
  }

  function hasContentBeyondFullPage() {
    return getContainer().scrollHeight < $body.scrollHeight;
  }

  FP.moveSectionUp = moveSectionUp;
  /**
  * Moves the page up one section.
  */

  function moveSectionUp() {
    var prev = getState().activeSection.prev(); //looping to the bottom if there's no more sections above

    if (!prev && (getOptions().loopTop || getOptions().continuousVertical)) {
      prev = getLast(getState().sections);
    }

    if (prev != null) {
      scrollPage(prev, null, true);
    }
  }

  var oldPageY = 0;
  /**
  * Detecting the direction of the mouse movement.
  * Used only for the middle button of the mouse.
  */

  function mouseMoveHandler(e) {
    if (!getOptions().autoScrolling) {
      return;
    }

    if (state.canScroll) {
      // moving up
      if (e.pageY < oldPageY && getIsScrollAllowed().m.up) {
        moveSectionUp();
      } // moving down
      else if (e.pageY > oldPageY && getIsScrollAllowed().m.down) {
        moveSectionDown();
      }
    }

    oldPageY = e.pageY;
  }

  function setOldPageY(value) {
    oldPageY = value;
  }
  /**
  * Determines the way of scrolling up or down:
  * by 'automatically' scrolling a section or by using the default and normal scrolling.
  */


  function scrolling(type) {
    if (!getIsScrollAllowed().m[type]) {
      return;
    }

    var scrollSection = type === 'down' ? moveSectionDown : moveSectionUp;

    if (getOptions().scrollOverflow && scrollOverflowHandler.isScrollable(getState().activeSection)) {
      //is the scrollbar at the start/end of the scroll?
      if (scrollOverflowHandler.isScrolled(type, getState().activeSection.item) && scrollOverflowHandler.shouldMovePage()) {
        scrollSection();
      }
    } else {
      scrollSection();
    }
  }

  var touchStartY = 0;
  var touchStartX = 0;
  var touchEndY = 0;
  var touchEndX = 0;
  var MSPointer = getMSPointer();
  var events = {
    touchmove: 'ontouchmove' in window ? 'touchmove' : MSPointer ? MSPointer.move : null,
    touchstart: 'ontouchstart' in window ? 'touchstart' : MSPointer ? MSPointer.down : null
  };
  /**
  * Adds the possibility to auto scroll through sections on touch devices.
  */

  function addTouchHandler() {
    if (!events.touchmove) {
      return;
    }

    if (isTouchDevice || isTouch) {
      if (getOptions().autoScrolling) {
        $body.removeEventListener(events.touchmove, preventBouncing, {
          passive: false
        });
        $body.addEventListener(events.touchmove, preventBouncing, {
          passive: false
        });
      }

      var touchWrapper = getOptions().touchWrapper;
      touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
      touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
        passive: false
      });
      touchWrapper.addEventListener(events.touchstart, touchStartHandler);
      touchWrapper.addEventListener(events.touchmove, touchMoveHandler, {
        passive: false
      });
    }
  }
  /**
  * Removes the auto scrolling for touch devices.
  */


  function removeTouchHandler() {
    if (!events.touchmove) {
      return;
    }

    if (isTouchDevice || isTouch) {
      // normalScrollElements requires it off #2691
      if (getOptions().autoScrolling) {
        $body.removeEventListener(events.touchmove, touchMoveHandler, {
          passive: false
        });
        $body.removeEventListener(events.touchmove, preventBouncing, {
          passive: false
        });
      }

      var touchWrapper = getOptions().touchWrapper;
      touchWrapper.removeEventListener(events.touchstart, touchStartHandler);
      touchWrapper.removeEventListener(events.touchmove, touchMoveHandler, {
        passive: false
      });
    }
  }
  /* Detecting touch events
   * As we are changing the top property of the page on scrolling, we can not use the traditional way to detect it.
  * This way, the touchstart and the touch moves shows an small difference between them which is the
  * used one to determine the direction.
  */


  function touchMoveHandler(e) {
    var activeSection = closest(e.target, SECTION_SEL) || getState().activeSection.item;
    var hasActiveSectionOverflow = scrollOverflowHandler.isScrollable(getState().activeSection);

    if (isReallyTouch(e)) {
      setState({
        isGrabbing: true,
        isUsingWheel: false
      });

      if (getOptions().autoScrolling) {
        if (!hasActiveSectionOverflow || hasActiveSectionOverflow && !state.canScroll) {
          //preventing the easing on iOS devices
          preventDefault(e);
        }
      }

      var touchEvents = getEventsPage(e);
      touchEndY = touchEvents.y;
      touchEndX = touchEvents.x;
      var isVerticalMovementEnough = Math.abs(touchStartY - touchEndY) > win.innerHeight / 100 * getOptions().touchSensitivity;
      var isHorizontalMovementEnough = Math.abs(touchStartX - touchEndX) > getWindowWidth() / 100 * getOptions().touchSensitivity;
      var isHorizontalPredominantMove = $(SLIDES_WRAPPER_SEL, activeSection).length && Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY);
      var directionH = touchStartX > touchEndX ? 'right' : 'left';
      var directionV = touchStartY > touchEndY ? 'down' : 'up';
      var direction = isHorizontalPredominantMove ? directionH : directionV;
      setState({
        touchDirection: direction
      }); //if movement in the X axys is greater than in the Y and the currect section has slides...

      if (isHorizontalPredominantMove) {
        //is the movement greater than the minimum resistance to scroll?
        if (!state.slideMoving && isHorizontalMovementEnough) {
          if (touchStartX > touchEndX) {
            if (getIsScrollAllowed().m.right) {
              EventEmitter.emit('moveSlideRight', {
                section: activeSection
              });
            }
          } else {
            if (getIsScrollAllowed().m.left) {
              EventEmitter.emit('moveSlideLeft', {
                section: activeSection
              });
            }
          }
        }
      } //vertical scrolling (only when autoScrolling is enabled)
      else if (getOptions().autoScrolling && state.canScroll) {
        //is the movement greater than the minimum resistance to scroll?
        if (isVerticalMovementEnough) {
          scrolling(directionV);
        }
      }
    }
  }
  /**
  * As IE >= 10 fires both touch and mouse events when using a mouse in a touchscreen
  * this way we make sure that is really a touch event what IE is detecting.
  */


  function isReallyTouch(e) {
    //if is not IE   ||  IE is detecting `touch` or `pen`
    return typeof e.pointerType === 'undefined' || e.pointerType != 'mouse';
  }
  /**
  * Handler for the touch start event.
  */


  function touchStartHandler(e) {
    //stopping the auto scroll to adjust to a section
    if (getOptions().fitToSection) {
      setState({
        activeAnimation: false
      });
    }

    if (isReallyTouch(e)) {
      var touchEvents = getEventsPage(e);
      touchStartY = touchEvents.y;
      touchStartX = touchEvents.x;
    }

    windowAddEvent('touchend', touchEndHandler);
  }
  /**
  * Handler for the touch end event.
  */


  function touchEndHandler() {
    windowRemoveEvent('touchend', touchEndHandler);
    setState({
      isGrabbing: false
    });
  }
  /**
  * Gets the pageX and pageY properties depending on the browser.
  * https://github.com/alvarotrigo/fullPage.js/issues/194#issuecomment-34069854
  */


  function getEventsPage(e) {
    var events = {};
    events.y = typeof e.pageY !== 'undefined' && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY;
    events.x = typeof e.pageX !== 'undefined' && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX; //in touch devices with scrollBar:true, e.pageY is detected, but we have to deal with touch events. #1008

    if (isTouch && isReallyTouch(e) && getOptions().scrollBar && typeof e.touches !== 'undefined') {
      events.y = e.touches[0].pageY;
      events.x = e.touches[0].pageX;
    }

    return events;
  }
  /*
  * Returns and object with Microsoft pointers (for IE<11 and for IE >= 11)
  * http://msdn.microsoft.com/en-us/library/ie/dn304886(v=vs.85).aspx
  */


  function getMSPointer() {
    var pointer; //IE >= 11 & rest of browsers

    if (win.PointerEvent) {
      pointer = {
        down: 'pointerdown',
        move: 'pointermove'
      };
    }

    return pointer;
  }
  /*
  * Preventing bouncing in iOS #2285
  */


  function preventBouncing(e) {
    if (getOptions().autoScrolling && isReallyTouch(e) && getIsScrollAllowed().m.up) {
      //preventing the easing on iOS devices
      if (!state.canScroll) {
        preventDefault(e);
      }
    }
  }

  FP.moveSlideLeft = moveSlideLeft;
  FP.moveSlideRight = moveSlideRight;
  /**
  * Slides a slider to the given direction.
  * Optional `section` param.
  */

  function moveSlide(direction, section) {
    var activeSectionItem = section == null ? getState().activeSection.item : section;
    var activeSection = getPanelByElement(state.sections, activeSectionItem);
    var slides = $(SLIDES_WRAPPER_SEL, activeSectionItem)[0]; // more than one slide needed and nothing should be sliding

    if (slides == null || state.slideMoving || activeSection.slides.length < 2) {
      return;
    }

    var currentSlide = activeSection.activeSlide;
    var destiny = direction === 'left' ? currentSlide.prev() : currentSlide.next(); //isn't there a next slide in the secuence?

    if (!destiny) {
      //respect loopHorizontal setting
      if (!getOptions().loopHorizontal) return;
      destiny = direction === 'left' ? getLast(activeSection.slides) : activeSection.slides[0];
    }

    setState({
      slideMoving: !FP.test.isTesting
    });
    landscapeScroll(slides, destiny.item, direction);
  }
  /**
  * Slides left the slider of the active section.
  * Optional `section` param.
  */


  function moveSlideLeft(section) {
    moveSlide('left', section);
  }
  /**
  * Slides right the slider of the active section.
  * Optional `section` param.
  */


  function moveSlideRight(section) {
    moveSlide('right', section);
  }
  /**
  * Gets a section by its anchor / index
  */


  function getSectionByAnchor(sectionAnchor) {
    var section = getState().sections.filter(function (section) {
      return section.anchor === sectionAnchor;
    })[0];

    if (!section) {
      var sectionIndex = typeof sectionAnchor !== 'undefined' ? sectionAnchor - 1 : 0;
      section = getState().sections[sectionIndex];
    }

    return section;
  }
  /**
  * Scrolls the slider to the given slide destination for the given section
  */


  function scrollSlider(slideElem) {
    if (slideElem != null) {
      landscapeScroll(closest(slideElem, SLIDES_WRAPPER_SEL), slideElem);
    }
  }
  /**
  * Scrolls to the given section and slide anchors
  */


  function scrollPageAndSlide(sectionAnchor, slideAnchor) {
    var section = getSectionByAnchor(sectionAnchor); //do nothing if there's no section with the given anchor name

    if (section == null) return;
    var slideElem = getSlideByAnchor(slideAnchor, section); //we need to scroll to the section and then to the slide

    if (section.anchor !== state.lastScrolledDestiny && !hasClass(section.item, ACTIVE)) {
      scrollPage(section, function () {
        scrollSlider(slideElem);
      });
    } //if we were already in the section
    else {
      scrollSlider(slideElem);
    }
  }
  /**
  * Gets a slide inside a given section by its anchor / index
  */


  function getSlideByAnchor(slideAnchor, section) {
    var slide = section.slides.filter(function (slide) {
      return slide.anchor === slideAnchor;
    })[0];

    if (slide == null) {
      slideAnchor = typeof slideAnchor !== 'undefined' ? slideAnchor : 0;
      slide = section.slides[slideAnchor];
    }

    return slide ? slide.item : null;
  }

  FP.moveTo = moveTo$1;
  /**
  * Moves the page to the given section and slide.
  * Anchors or index positions can be used as params.
  */

  function moveTo$1(sectionAnchor, slideAnchor) {
    var destiny = getSectionByAnchor(sectionAnchor);

    if (typeof slideAnchor !== 'undefined') {
      scrollPageAndSlide(sectionAnchor, slideAnchor);
    } else if (destiny != null) {
      scrollPage(destiny);
    }
  } //@ts-check


  var g_controlPressed;
  var g_keydownId;
  EventEmitter.on('bindEvents', bindEvents$8);

  function bindEvents$8() {
    //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.
    windowAddEvent('blur', blurHandler); //Sliding with arrow keys, both, vertical and horizontal

    docAddEvent('keydown', keydownHandler); // for fitToSection:true

    $body.addEventListener('keydown', onBodyClick); //to prevent scrolling while zooming

    docAddEvent('keyup', keyUpHandler);
    EventEmitter.on('onDestroy', onDestroy$5);
  }

  function onDestroy$5() {
    clearTimeout(g_keydownId);
    docRemoveEvent('keydown', keydownHandler);
    docRemoveEvent('keyup', keyUpHandler);
  }

  function isInsideInput() {
    var activeElement = doc.activeElement;
    return matches(activeElement, 'textarea') || matches(activeElement, 'input') || matches(activeElement, 'select') || getAttr(activeElement, 'contentEditable') == "true" || getAttr(activeElement, 'contentEditable') == '';
  } //Sliding with arrow keys, both, vertical and horizontal


  function keydownHandler(e) {
    clearTimeout(g_keydownId);
    var keyCode = e.keyCode;
    var isPressingHorizontalArrows = [37, 39].indexOf(keyCode) > -1;
    var canScrollWithKeyboard = getOptions().autoScrolling || isPressingHorizontalArrows; //tab?

    if (keyCode === 9) {
      onTab(e);
    } else if (!isInsideInput() && getOptions().keyboardScrolling && canScrollWithKeyboard) {
      g_controlPressed = e.ctrlKey;
      g_keydownId = setTimeout(function () {
        onkeydown(e);
      }, 0);
    }
  }
  /**
  * Keydown event
  */


  function onkeydown(e) {
    var shiftPressed = e.shiftKey;
    var activeElement = doc.activeElement;
    var isMediaFocused = matches(activeElement, 'video') || matches(activeElement, 'audio');
    var isScrolled = {
      up: scrollOverflowHandler.isScrolled('up', getState().activeSection.item),
      down: scrollOverflowHandler.isScrolled('down', getState().activeSection.item)
    };
    var isUsingHorizontalArrowKeys = [37, 39].indexOf(e.keyCode) > -1;
    cancelDirectionKeyEvents(e); //do nothing if we can not scroll or we are not using horizotnal key arrows.

    if (!state.canScroll && !isUsingHorizontalArrowKeys) {
      return;
    }

    setState({
      scrollTrigger: 'keydown'
    });

    switch (e.keyCode) {
      //up
      case 38:
      case 33:
        if (getIsScrollAllowed().k.up && isScrolled.up) {
          if (state.isBeyondFullpage) {
            EventEmitter.emit('onKeyDown', {
              e: e
            });
          } else {
            moveSectionUp();
          }
        }

        break;
      //down

      case 32:
        //spacebar
        if (shiftPressed && getIsScrollAllowed().k.up && !isMediaFocused && isScrolled.up) {
          moveSectionUp();
          break;
        }

      /* falls through */

      case 40:
      case 34:
        if (getIsScrollAllowed().k.down && isScrolled.down) {
          if (state.isBeyondFullpage) {
            return;
          } // space bar?


          if (e.keyCode !== 32 || !isMediaFocused) {
            moveSectionDown();
          }
        }

        break;
      //Home

      case 36:
        if (getIsScrollAllowed().k.up) {
          moveTo$1(1);
        }

        break;
      //End

      case 35:
        if (getIsScrollAllowed().k.down) {
          moveTo$1(getState().sections.length);
        }

        break;
      //left

      case 37:
        if (getIsScrollAllowed().k.left) {
          moveSlideLeft();
        }

        break;
      //right

      case 39:
        if (getIsScrollAllowed().k.right) {
          moveSlideRight();
        }

        break;

      default:
        return;
      // exit this handler for other keys
    }
  } //to prevent scrolling while zooming


  function keyUpHandler(e) {
    if (state.isWindowFocused) {
      //the keyup gets fired on new tab ctrl + t in Firefox
      g_controlPressed = e.ctrlKey;
    }
  } //when opening a new tab (ctrl + t), `control` won't be pressed when coming back.


  function blurHandler() {
    setState({
      isWindowFocused: false
    });
    g_controlPressed = false;
  }
  /**
  * Makes sure the tab key will only focus elements within the current section/slide
  * preventing this way from breaking the page.
  * Based on "Modals and keyboard traps"
  * from https://developers.google.com/web/fundamentals/accessibility/focus/using-tabindex
  */


  function onTab(e) {
    var isShiftPressed = e.shiftKey;
    var activeElement = doc.activeElement;
    var focusableElements = getFocusables(getSlideOrSection(getState().activeSection.item));

    function preventAndFocusFirst(e) {
      preventDefault(e);
      return focusableElements[0] ? focusableElements[0].focus() : null;
    } //outside any section or slide? Let's not hijack the tab!


    if (isFocusOutside(e)) {
      return;
    } //is there an element with focus?


    if (activeElement) {
      if (closest(activeElement, SECTION_ACTIVE_SEL + ',' + SECTION_ACTIVE_SEL + ' ' + SLIDE_ACTIVE_SEL) == null) {
        activeElement = preventAndFocusFirst(e);
      }
    } //no element if focused? Let's focus the first one of the section/slide
    else {
      preventAndFocusFirst(e);
    } //when reached the first or last focusable element of the section/slide
    //we prevent the tab action to keep it in the last focusable element


    if (!isShiftPressed && activeElement == focusableElements[focusableElements.length - 1] || isShiftPressed && activeElement == focusableElements[0]) {
      preventDefault(e);
    }
  }
  /**
  * Gets all the focusable elements inside the passed element.
  */


  function getFocusables(el) {
    return [].slice.call($(focusableElementsString, el)).filter(function (item) {
      return getAttr(item, 'tabindex') !== '-1' && //are also not hidden elements (or with hidden parents)
      item.offsetParent !== null;
    });
  }
  /**
  * Determines whether the focus is outside fullpage.js sections/slides or not.
  */


  function isFocusOutside(e) {
    var allFocusables = getFocusables(doc);
    var currentFocusIndex = allFocusables.indexOf(doc.activeElement);
    var focusDestinationIndex = e.shiftKey ? currentFocusIndex - 1 : currentFocusIndex + 1;
    var focusDestination = allFocusables[focusDestinationIndex];
    var destinationItemSlide = closest(focusDestination, SLIDE_SEL);
    var destinationItemSection = closest(focusDestination, SECTION_SEL);
    return !destinationItemSlide && !destinationItemSection;
  }

  function shouldCancelKeyboardNavigation(e) {
    // https://keycode.info/for/34
    // 40 = arrow down
    // 38 = arrow up
    // 32 = spacebar
    // 33  = PageUp
    // 34 = PageDown
    var keyControls = [40, 38, 32, 33, 34];
    return keyControls.indexOf(e.keyCode) > -1 && !state.isBeyondFullpage;
  }

  function onBodyClick(e) {
    if (!isInsideInput()) {
      cancelDirectionKeyEvents(e);
    }
  } //preventing the scroll with arrow keys & spacebar & Page Up & Down keys


  function cancelDirectionKeyEvents(e) {
    if (shouldCancelKeyboardNavigation(e) && !closest(e.target, OVERFLOW_SEL)) {
      e.preventDefault();
    }
  }

  function getControlPressed() {
    return g_controlPressed;
  }

  var prevTime = new Date().getTime();
  var scrollings = [];
  FP.setMouseWheelScrolling = setMouseWheelScrolling;
  /**
  * Adds or remove the possibility of scrolling through sections by using the mouse wheel or the trackpad.
  */

  function setMouseWheelScrolling(value) {
    if (value) {
      addMouseWheelHandler();
      addMiddleWheelHandler();
    } else {
      removeMouseWheelHandler();
      removeMiddleWheelHandler();
    }
  }
  /**
  * Adds the auto scrolling action for the mouse wheel and trackpad.
  * After this function is called, the mousewheel and trackpad movements will scroll through sections
  * https://developer.mozilla.org/en-US/docs/Web/Events/wheel
  */


  function addMouseWheelHandler() {
    var prefix = '';

    var _addEventListener;

    if (win.addEventListener) {
      _addEventListener = "addEventListener";
    } else {
      _addEventListener = "attachEvent";
      prefix = 'on';
    } // detect available wheel event


    var support = 'onwheel' in doc.createElement('div') ? 'wheel' : // Modern browsers support "wheel"
    // @ts-ignore
    doc.onmousewheel !== undefined ? 'mousewheel' : // Webkit and IE support at least "mousewheel"
    'DOMMouseScroll'; // let's assume that remaining browsers are older Firefox

    var passiveEvent = getPassiveOptionsIfPossible();

    if (support == 'DOMMouseScroll') {
      doc[_addEventListener](prefix + 'MozMousePixelScroll', MouseWheelHandler, passiveEvent);
    } //handle MozMousePixelScroll in older Firefox
    else {
      doc[_addEventListener](prefix + support, MouseWheelHandler, passiveEvent);
    }
  }
  /**
  * Binding the mousemove when the mouse's middle button is pressed
  */


  function addMiddleWheelHandler() {
    getContainer().addEventListener('mousedown', mouseDownHandler);
    getContainer().addEventListener('mouseup', mouseUpHandler);
  }
  /**
  * Removes the auto scrolling action fired by the mouse wheel and trackpad.
  * After this function is called, the mousewheel and trackpad movements won't scroll through sections.
  */


  function removeMouseWheelHandler() {
    if (doc.addEventListener) {
      docRemoveEvent('mousewheel', MouseWheelHandler, false); //IE9, Chrome, Safari, Oper

      docRemoveEvent('wheel', MouseWheelHandler, false); //Firefox

      docRemoveEvent('MozMousePixelScroll', MouseWheelHandler, false); //old Firefox
    } else {
      // @ts-ignore
      doc.detachEvent('onmousewheel', MouseWheelHandler); //IE 6/7/8
    }
  }
  /**
  * Unbinding the mousemove when the mouse's middle button is released
  */


  function removeMiddleWheelHandler() {
    getContainer().removeEventListener('mousedown', mouseDownHandler);
    getContainer().removeEventListener('mouseup', mouseUpHandler);
  }
  /**
   * Detecting mousewheel scrolling
   *
   * http://blogs.sitepointstatic.com/examples/tech/mouse-wheel/index.html
   * http://www.sitepoint.com/html5-javascript-mouse-wheel/
   */


  function MouseWheelHandler(e) {
    var curTime = new Date().getTime();
    var isNormalScroll = hasClass($(COMPLETELY_SEL)[0], NORMAL_SCROLL);
    var isScrollAllowedBeyondFullPage = beyondFullPageHandler(getContainer(), e);

    if (!state.isUsingWheel) {
      setState({
        isGrabbing: false,
        isUsingWheel: true,
        touchDirection: 'none'
      });
    } //is scroll allowed?


    if (!getIsScrollAllowed().m.down && !getIsScrollAllowed().m.up) {
      preventDefault(e);
      return false;
    }

    if (isScrollAllowedBeyondFullPage) {
      return true;
    } else if (isScrollAllowedBeyondFullPage === false) {
      preventDefault(e);
      return false;
    } //autoscrolling and not zooming?


    if (getOptions().autoScrolling && !getControlPressed() && !isNormalScroll) {
      // cross-browser wheel delta
      e = e || win.event;
      var value = e.wheelDelta || -e.deltaY || -e.detail;
      var delta = Math.max(-1, Math.min(1, value));
      var horizontalDetection = typeof e.wheelDeltaX !== 'undefined' || typeof e.deltaX !== 'undefined';
      var isScrollingVertically = Math.abs(e.wheelDeltaX) < Math.abs(e.wheelDelta) || Math.abs(e.deltaX) < Math.abs(e.deltaY) || !horizontalDetection;
      var direction = delta < 0 ? 'down' : delta > 0 ? 'up' : 'none'; //Limiting the array to 150 (lets not waste memory!)

      if (scrollings.length > 149) {
        scrollings.shift();
      } //keeping record of the previous scrollings


      scrollings.push(Math.abs(value)); //preventing to scroll the site on mouse wheel when scrollbar is present

      if (getOptions().scrollBar) {
        preventDefault(e);
      } //time difference between the last scroll and the current one


      var timeDiff = curTime - prevTime;
      prevTime = curTime; //haven't they scrolled in a while?
      //(enough to be consider a different scrolling action to scroll another section)

      if (timeDiff > 200) {
        //emptying the array, we dont care about old scrollings for our averages
        scrollings = [];
      }

      setState({
        wheelDirection: direction
      });

      if (state.canScroll) {
        var averageEnd = getAverage(scrollings, 10);
        var averageMiddle = getAverage(scrollings, 70);
        var isAccelerating = averageEnd >= averageMiddle; //to avoid double swipes...

        if (isAccelerating && isScrollingVertically) {
          setState({
            scrollTrigger: 'wheel'
          }); //scrolling down?

          if (delta < 0) {
            scrolling('down');
          } //scrolling up?
          else {
            scrolling('up');
          }
        }
      }

      return false;
    }

    if (getOptions().fitToSection) {
      //stopping the auto scroll to adjust to a section
      setState({
        activeAnimation: false
      });
    }
  } //binding the mousemove when the mouse's middle button is released


  function mouseDownHandler(e) {
    //middle button
    if (e.which == 2) {
      setOldPageY(e.pageY);
      getContainer().addEventListener('mousemove', mouseMoveHandler);
    }
  } //unbinding the mousemove when the mouse's middle button is released


  function mouseUpHandler(e) {
    //middle button
    if (e.which == 2) {
      getContainer().removeEventListener('mousemove', mouseMoveHandler);
    }
  }
  /**
  * Adds or remove the mouse wheel hijacking
  */


  function setMouseHijack(value) {
    if (value) {
      setMouseWheelScrolling(true);
      addTouchHandler();
    } else {
      setMouseWheelScrolling(false);
      removeTouchHandler();
    }
  }

  var g_canFireMouseEnterNormalScroll = true;
  EventEmitter.on('bindEvents', bindEvents$7);

  function bindEvents$7() {
    /**
    * Applying normalScroll elements.
    * Ignoring the scrolls over the specified selectors.
    */
    if (getOptions().normalScrollElements) {
      ['mouseenter', 'touchstart'].forEach(function (eventName) {
        forMouseLeaveOrTouch(eventName, false);
      });
      ['mouseleave', 'touchend'].forEach(function (eventName) {
        forMouseLeaveOrTouch(eventName, true);
      });
    }

    EventEmitter.on('onDestroy', onDestroy$4);
  }

  function onDestroy$4() {
    ['mouseenter', 'touchstart', 'mouseleave', 'touchend'].forEach(function (eventName) {
      docRemoveEvent(eventName, onMouseEnterOrLeave, true); //true is required!
    });
  }

  function forMouseLeaveOrTouch(eventName, allowScrolling) {
    //a way to pass arguments to the onMouseEnterOrLeave function
    document['fp_' + eventName] = allowScrolling;
    docAddEvent(eventName, onMouseEnterOrLeave, true); //capturing phase
  }

  function onMouseEnterOrLeave(e) {
    var type = e.type;
    var isInsideOneNormalScroll = false; //onMouseLeave will use the destination target, not the one we are moving away from

    var target = type === 'mouseleave' ? e.toElement || e.relatedTarget : e.target; //coming from closing a normalScrollElements modal or moving outside viewport?

    if (target == document || !target) {
      setMouseHijack(true);
      return;
    }

    if (type === 'touchend') {
      g_canFireMouseEnterNormalScroll = false;
      setTimeout(function () {
        g_canFireMouseEnterNormalScroll = true;
      }, 800);
    } //preventing mouseenter event to do anything when coming from a touchEnd event
    //fixing issue #3576


    if (type === 'mouseenter' && !g_canFireMouseEnterNormalScroll) {
      return;
    }

    var normalSelectors = getOptions().normalScrollElements.split(',');
    normalSelectors.forEach(function (normalSelector) {
      if (!isInsideOneNormalScroll) {
        var isNormalScrollTarget = matches(target, normalSelector); //leaving a child inside the normalScoll element is not leaving the normalScroll #3661

        var isNormalScrollChildFocused = closest(target, normalSelector);

        if (isNormalScrollTarget || isNormalScrollChildFocused) {
          if (!FP.shared.isNormalScrollElement) {
            setMouseHijack(false);
          }

          FP.shared.isNormalScrollElement = true;
          isInsideOneNormalScroll = true;
        }
      }
    }); //not inside a single normal scroll element anymore?

    if (!isInsideOneNormalScroll && FP.shared.isNormalScrollElement) {
      setMouseHijack(true);
      FP.shared.isNormalScrollElement = false;
    }
  }

  FP.silentMoveTo = silentMoveTo;
  /**
  * Moves the page to the given section and slide with no animation.
  * Anchors or index positions can be used as params.
  */

  function silentMoveTo(sectionAnchor, slideAnchor) {
    setScrollingSpeed(0, 'internal');
    moveTo$1(sectionAnchor, slideAnchor);
    setScrollingSpeed(getOriginals().scrollingSpeed, 'internal');
  }

  var previousHeight = getWindowHeight();
  var windowsWidth = getWindowWidth();
  var g_resizeId;
  var g_isConsecutiveResize = false;
  var g_resizeMobileHandlerId;
  FP.reBuild = reBuild;
  EventEmitter.on('bindEvents', bindEvents$6);

  function bindEvents$6() {
    //when resizing the site, we adjust the heights of the sections, slimScroll...
    windowAddEvent('resize', resizeHandler);
    EventEmitter.on('onDestroy', onDestroy$3);
  }

  function onDestroy$3() {
    clearTimeout(g_resizeId);
    clearTimeout(g_resizeMobileHandlerId);
    windowRemoveEvent('resize', resizeHandler);
  }
  /*
  * Resize event handler.
  */


  function resizeHandler() {
    if (!g_isConsecutiveResize) {
      if (getOptions().autoScrolling && !getOptions().scrollBar || !getOptions().fitToSection) {
        setSectionsHeight(getWindowHeight());
      }
    }

    fitToActiveSection();
    g_isConsecutiveResize = true; //in order to call the functions only when the resize is finished
    //http://stackoverflow.com/questions/4298612/jquery-how-to-call-resize-event-only-once-its-finished-resizing

    clearTimeout(g_resizeId);
    g_resizeId = setTimeout(function () {
      //issue #3336
      //(some apps or browsers, like Chrome/Firefox for Mobile take time to report the real height)
      //so we check it 3 times with intervals in that case
      // for(var i = 0; i< 4; i++){
      resizeActions();
      g_isConsecutiveResize = false; // }
    }, 400);
  }

  function fitToActiveSection() {
    if (isTouchDevice) {
      // Issue #4393 and previously in v3, #3336
      // (some apps or browsers, like Chrome/Firefox will delay a bit to scroll
      // to the focused input
      for (var i = 0; i < 4; i++) {
        g_resizeMobileHandlerId = setTimeout(function () {
          window.requestAnimationFrame(function () {
            // on Android devices the browser scrolls to the focused element
            // messing up the whole page structure. So we need to update the
            // translate3d value when the keyboard shows/hides
            if (getOptions().autoScrolling && !getOptions().scrollBar) {
              silentMoveTo(state.activeSection.index() + 1);
            }
          });
        }, 200 * i);
      }
    }
  }
  /**
  * When resizing the site, we adjust the heights of the sections, slimScroll...
  */


  function resizeActions() {
    setState({
      isResizing: true
    });
    setSectionsHeight('');

    if (getOptions().fitToSection && !getOptions().autoScrolling && !state.isBeyondFullpage) {
      setVhUnits();
    }

    EventEmitter.emit('contentChanged');
    updateState(); //checking if it needs to get responsive

    responsive(); // rebuild immediately on touch devices

    if (isTouchDevice) {
      var activeElement = doc.activeElement; //if the keyboard is NOT visible

      if (!matches(activeElement, 'textarea') && !matches(activeElement, 'input') && !matches(activeElement, 'select')) {
        var currentHeight = getWindowHeight(); //making sure the change in the viewport size is enough to force a rebuild. (20 % of the window to avoid problems when hidding scroll bars)

        if (Math.abs(currentHeight - previousHeight) > 20 * Math.max(previousHeight, currentHeight) / 100) {
          reBuild(true);
          previousHeight = currentHeight;
        }
      }
    } else {
      adjustToNewViewport();
    }

    setState({
      isResizing: false
    });
  }
  /**
   * When resizing is finished, we adjust the slides sizes and positions
   */


  function reBuild(resizing) {
    if (hasClass(getContainer(), DESTROYED)) {
      return;
    } //nothing to do if the plugin was destroyed
    //updating global vars


    setState({
      isResizing: true,
      windowsHeight: getWindowHeight(),
      windowsWidth: getWindowWidth()
    });
    var sections = getState().sections;

    for (var i = 0; i < sections.length; ++i) {
      var section = sections[i];
      var slidesWrap = $(SLIDES_WRAPPER_SEL, section.item)[0];
      var slides = section.slides; //adjusting the position fo the FULL WIDTH slides...

      if (slides.length > 1) {
        landscapeScroll(slidesWrap, section.activeSlide.item);
      }
    }

    if (getOptions().scrollOverflow) {
      scrollOverflowHandler.makeScrollable();
    }

    var sectionIndex = getState().activeSection.index();

    if (!state.isBeyondFullpage) {
      //isn't it the first section?
      if (sectionIndex) {
        //adjusting the position for the current section
        silentMoveTo(sectionIndex + 1);
      }
    }

    setState({
      isResizing: false
    });

    if (isFunction(getOptions().afterResize) && resizing) {
      getOptions().afterResize.call(getContainer(), win.innerWidth, win.innerHeight);
    }

    if (isFunction(getOptions().afterReBuild) && !resizing) {
      getOptions().afterReBuild.call(getContainer());
    }

    trigger(getContainer(), 'afterRebuild');
  }
  /**
  * Adjusts a section to the viewport if it has changed.
  */


  function adjustToNewViewport() {
    var newWindowHeight = getWindowHeight();
    var newWindowWidth = getWindowWidth();

    if (state.windowsHeight !== newWindowHeight || windowsWidth !== newWindowWidth) {
      setState({
        windowsHeight: newWindowHeight
      });
      windowsWidth = newWindowWidth;
      reBuild(true);
    }
  }

  function setSectionsHeight(value) {
    var propertyValue = value === '' ? '' : value + 'px';
    getState().sections.forEach(function (section) {
      css(section.item, {
        'height': propertyValue
      });
    });
  }
  /**
   * Defining the value in px of a VH unit. (Used for autoScrolling: false)
   * To fix the height issue on mobile devices when using VH units.
   * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
   */


  function setVhUnits() {
    if (!getOptions().autoScrolling || getOptions().scrollBar) {
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      var vh = win.innerHeight * 0.01; // Then we set the value in the --vh custom property to the root of the document

      doc.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
    }
  }

  function getAnchorsURL() {
    var section;
    var slide;
    var hash = win.location.hash;

    if (hash.length) {
      //getting the anchor link in the URL and deleting the `#`
      var anchorsParts = hash.replace('#', '').split('/'); //using / for visual reasons and not as a section/slide separator #2803

      var isFunkyAnchor = hash.indexOf('#/') > -1;
      section = isFunkyAnchor ? '/' + anchorsParts[1] : decodeURIComponent(anchorsParts[0]);
      var slideAnchor = isFunkyAnchor ? anchorsParts[2] : anchorsParts[1];

      if (slideAnchor && slideAnchor.length) {
        slide = decodeURIComponent(slideAnchor);
      }
    }

    return {
      section: section,
      slide: slide
    };
  }

  FP.setLockAnchors = setLockAnchors;
  EventEmitter.on('bindEvents', bindEvents$5);

  function bindEvents$5() {
    //detecting any change on the URL to scroll to the given anchor link
    //(a way to detect back history button as we play with the hashes on the URL)
    windowAddEvent('hashchange', hashChangeHandler);
    EventEmitter.on('onDestroy', onDestroy$2);
  }

  function onDestroy$2() {
    windowRemoveEvent('hashchange', hashChangeHandler);
  }
  /**
  * Sets lockAnchors
  */


  function setLockAnchors(value) {
    getOptions().lockAnchors = value;
  }
  /**
  * Detecting any change on the URL to scroll to the given anchor link
  * (a way to detect back history button as we play with the hashes on the URL)
  */


  function hashChangeHandler() {
    if (!state.isScrolling && !getOptions().lockAnchors) {
      var anchors = getAnchorsURL();
      var sectionAnchor = anchors.section;
      var slideAnchor = anchors.slide; //when moving to a slide in the first section for the first time (first time to add an anchor to the URL)

      var isFirstSlideMove = typeof state.lastScrolledDestiny === 'undefined';
      var isFirstScrollMove = typeof state.lastScrolledDestiny === 'undefined' && typeof slideAnchor === 'undefined' && !state.slideMoving;

      if (sectionAnchor && sectionAnchor.length) {
        /*in order to call scrollpage() only once for each destination at a time
        It is called twice for each scroll otherwise, as in case of using anchorlinks `hashChange`
        event is fired on every scroll too.*/
        if (sectionAnchor && sectionAnchor !== state.lastScrolledDestiny && !isFirstSlideMove || isFirstScrollMove || !state.slideMoving && state.lastScrolledSlide != slideAnchor) {
          EventEmitter.emit('onScrollPageAndSlide', {
            sectionAnchor: sectionAnchor,
            slideAnchor: slideAnchor
          });
        }
      }
    }
  }

  EventEmitter.on('bindEvents', bindEvents$4);

  function bindEvents$4() {
    docAddEvent('wheel', wheelDataHandler.registerEvent, getPassiveOptionsIfPossible());
    EventEmitter.on('scrollBeyondFullpage', scrollBeyondFullPage);
    EventEmitter.on('onKeyDown', onKeyDown);
  }

  EventEmitter.on('bindEvents', bindEvents$3);

  function bindEvents$3() {
    EventEmitter.on('onClickOrTouch', onClickOrTouch$1);
  }

  function onClickOrTouch$1(params) {
    var target = params.target;

    if (closest(target, getOptions().menu + ' [data-menuanchor]')) {
      menuItemsHandler.call(target, params);
    }
  } //Menu item handler when not using anchors or using lockAnchors:true


  function menuItemsHandler(e) {
    setState({
      scrollTrigger: 'menu'
    });

    if ($(getOptions().menu)[0] && (getOptions().lockAnchors || !getOptions().anchors.length)) {
      preventDefault(e);
      /*jshint validthis:true */

      EventEmitter.emit('onMenuClick', {
        anchor: getAttr(this, 'data-menuanchor')
      });
    }
  }

  EventEmitter.on('bindEvents', bindEvents$2);

  function bindEvents$2() {
    EventEmitter.on('onClickOrTouch', onClickOrTouch);
  }

  function onClickOrTouch(params) {
    var target = params.target;

    if (target && closest(target, SECTION_NAV_SEL + ' a')) {
      sectionBulletHandler.call(target, params.e);
    } else if (matches(target, SECTION_NAV_TOOLTIP_SEL)) {
      tooltipTextHandler.call(target);
    } else if (matches(target, SLIDES_NAV_LINK_SEL) || closest(target, SLIDES_NAV_LINK_SEL) != null) {
      slideBulletHandler.call(target, params.e);
    }
  }

  var lastScroll = 0;
  var g_scrollId;
  var g_scrollId2;
  EventEmitter.on('onDestroy', onDestroy$1); //when scrolling...

  function scrollHandler(e) {
    var currentSection;
    var currentSectionElem;

    if (state.isResizing || !getState().activeSection) {
      return;
    }

    getLast(getState().sections);

    if (getState().isBeyondFullpage || getState().isAboutToScrollToFullPage) {
      return;
    }

    if (!getOptions().autoScrolling || getOptions().scrollBar) {
      var currentScroll = getScrollTop(getOptions());
      var scrollDirection = getScrollDirection(currentScroll);
      var visibleSectionIndex = 0;
      var screen_mid = currentScroll + getWindowHeight() / 2.0;
      var isAtBottom = $body.scrollHeight - getWindowHeight() === currentScroll;
      var sections = getState().sections;
      setState({
        scrollY: currentScroll
      }); //when using `auto-height` for a small last section it won't be centered in the viewport

      if (isAtBottom) {
        visibleSectionIndex = sections.length - 1;
      } //is at top? when using `auto-height` for a small first section it won't be centered in the viewport
      else if (!currentScroll) {
        visibleSectionIndex = 0;
      } //taking the section which is showing more content in the viewport
      else {
        for (var i = 0; i < sections.length; ++i) {
          var section = sections[i].item; // Pick the the last section which passes the middle line of the screen.

          if (section.offsetTop <= screen_mid) {
            visibleSectionIndex = i;
          }
        }
      }

      if (isCompletelyInViewPort(scrollDirection)) {
        if (!hasClass(getState().activeSection.item, COMPLETELY)) {
          addClass(getState().activeSection.item, COMPLETELY);
          removeClass(siblings(getState().activeSection.item), COMPLETELY);
        }
      } //geting the last one, the current one on the screen


      currentSection = sections[visibleSectionIndex];
      currentSectionElem = currentSection.item; //setting the visible section as active when manually scrolling
      //executing only once the first time we reach the section

      if (!currentSection.isActive) {
        setState({
          isScrolling: true
        });
        var leavingSection = getState().activeSection.item;
        var leavingSectionIndex = getState().activeSection.index() + 1;
        var yMovement = getYmovement(getState().activeSection, currentSectionElem);
        var anchorLink = currentSection.anchor;
        var sectionIndex = currentSection.index() + 1;
        var activeSlide = currentSection.activeSlide;
        var slideIndex;
        var slideAnchorLink;
        var callbacksParams = {
          activeSection: leavingSection,
          sectionIndex: sectionIndex - 1,
          anchorLink: anchorLink,
          element: currentSectionElem,
          leavingSection: leavingSectionIndex,
          direction: yMovement,
          items: {
            origin: getState().activeSection,
            destination: currentSection
          }
        };

        if (activeSlide) {
          slideAnchorLink = activeSlide.anchor;
          slideIndex = activeSlide.index();
        }

        if (state.canScroll) {
          addClass(currentSectionElem, ACTIVE);
          removeClass(siblings(currentSectionElem), ACTIVE);

          if (isFunction(getOptions().beforeLeave)) {
            fireCallbackOncePerScroll('beforeLeave', callbacksParams);
          }

          if (isFunction(getOptions().onLeave)) {
            fireCallback('onLeave', callbacksParams);
          }

          if (isFunction(getOptions().afterLoad)) {
            fireCallback('afterLoad', callbacksParams);
          }

          stopMedia(leavingSection);
          lazyLoad(currentSectionElem);
          playMedia(currentSectionElem);
          activateMenuAndNav(anchorLink, sectionIndex - 1);

          if (getOptions().anchors.length) {
            //needed to enter in hashChange event when using the menu with anchor links
            setState({
              lastScrolledDestiny: anchorLink
            });
          }

          setPageStatus(slideIndex, slideAnchorLink, anchorLink);
          updateState();
        }

        if (getOptions().fitToSection && state.canScroll) {
          // Small timeout in order to avoid entering in hashChange event when scrolling is not finished yet
          clearTimeout(g_scrollId);
          g_scrollId = setTimeout(function () {
            setState({
              isScrolling: false
            });
            var fixedSections = state.sections.filter(function (section) {
              var sectionValues = section.item.getBoundingClientRect();
              return Math.round(sectionValues.bottom) === Math.round(getWindowHeight()) || Math.round(sectionValues.top) === 0;
            }); // No section is fitting the viewport? Let's fix that!

            if (!fixedSections.length) {
              css(doc.body, {
                'scroll-snap-type': 'y mandatory'
              });
            }
          }, 300);
        }
      }
    }
  }

  function onDestroy$1() {
    clearTimeout(g_scrollId);
    clearTimeout(g_scrollId2);
  }
  /**
  * Gets the directon of the the scrolling fired by the scroll event.
  */


  function getScrollDirection(currentScroll) {
    var direction = currentScroll > lastScroll ? 'down' : 'up';
    lastScroll = currentScroll; //needed for auto-height sections to determine if we want to scroll to the top or bottom of the destination

    setState({
      previousDestTop: currentScroll
    });
    return direction;
  }
  /**
  * Determines whether the active section has seen in its whole or not.
  */


  function isCompletelyInViewPort(movement) {
    var top = getState().activeSection.item.offsetTop;
    var bottom = top + getWindowHeight();

    if (movement == 'up') {
      return bottom >= getScrollTop(getOptions()) + getWindowHeight();
    }

    return top <= getScrollTop(getOptions());
  }

  EventEmitter.on('bindEvents', bindEvents$1);
  EventEmitter.on('onDestroy', onDestroy);

  function onDestroy() {
    windowRemoveEvent('scroll', scrollHandler);
  }

  function bindEvents$1() {
    windowAddEvent('scroll', scrollHandler);
    doc.body.addEventListener('scroll', scrollHandler);
    EventEmitter.on('onScrollPageAndSlide', function (params) {
      scrollPageAndSlide(params.sectionAnchor, params.slideAnchor);
    });
    EventEmitter.on('onMenuClick', function (params) {
      moveTo$1(params.anchor, undefined);
    });
    EventEmitter.on('onScrollOverflowScrolled', function (params) {
      var scrollSection = params.direction === 'down' ? moveSectionDown : moveSectionUp;
      scrollSection();
    });
    EventEmitter.on('scrollPage', function (params) {
      scrollPage(params.destination);
    });
  }

  FP.getActiveSlide = getActiveSlide;

  FP.getScrollX = function () {
    return state.scrollX;
  };

  EventEmitter.on('bindEvents', bindEvents);

  function bindEvents() {
    EventEmitter.on('onDestroy', onDestroy$7);
    EventEmitter.on('landscapeScroll', function (params) {
      landscapeScroll(params.slides, params.destination);
    });
    EventEmitter.on('moveSlideRight', function (params) {
      moveSlideRight(params.section);
    });
    EventEmitter.on('moveSlideLeft', function (params) {
      moveSlideLeft(params.section);
    });
  }
  /**
  * Gets the active slide.
  */


  function getActiveSlide() {
    return nullOrSlide(getState().activeSection.activeSlide);
  }

  EventEmitter.on('bindEvents', init$1);

  function init$1() {
    var position = getOptions().credits.position;
    var positionStyle = ['left', 'right'].indexOf(position) > -1 ? "".concat(position, ": 0;") : '';
    var waterMark = "\n        <div class=\"fp-watermark\" style=\"".concat(positionStyle, "\">\n            <a href=\"https://alvarotrigo.com/fullPage/\" \n                rel=\"nofollow noopener\" \n                target=\"_blank\" \n                style=\"text-decoration:none; color: #000;\">\n                    ").concat(getOptions().credits.label, "\n            </a>\n        </div>\n    ");
    var lastSection = getLast(state.sections);
    var shouldUseWaterMark = getOptions().credits.enabled && !state.isValid; // if (lastSection && lastSection.item && shouldUseWaterMark) {
    //   lastSection.item.insertAdjacentHTML('beforeend', waterMark);
    // }
  }

  !function () {
    EventEmitter.on("onInitialise", function () {
      var n, s;
      setState({
        isValid: (getOptions().licenseKey, n = getOptions().licenseKey, s = function (n) {
          var e = parseInt("\x35\x31\x34").toString(16);
          if (!n || n.length < 29 || 4 === n.split(t[0]).length) return null;
          var i = ["\x45\x61\x63\x68", "\x66\x6f\x72"][r()]().join(""),
              s = n[["\x73\x70\x6c\x69\x74"]]("-"),
              l = [];
          s[i](function (t, n) {
            if (n < 4) {
              var i = function (t) {
                var n = t[t.length - 1],
                    e = ["\x4e\x61\x4e", "\x69\x73"][r()]().join("");
                return window[e](n) ? o(n) : function (t) {
                  return t - ACTIVE.length;
                }(n);
              }(t);

              l.push(i);
              var a = o(t[i]);

              if (1 === n) {
                var s = ["\x70\x61", "\x64\x53", "\x74", "\x61\x72\x74"].join("");
                a = a.toString()[s](2, "0");
              }

              e += a, 0 !== n && 1 !== n || (e += "-");
            }
          });
          var p = 0,
              c = "";
          return n.split("-").forEach(function (t, n) {
            if (n < 4) {
              var _r = 0;

              for (var e = 0; e < 4; e++) {
                e !== l[n] && (_r += Math.abs(o(t[e])), isNaN(t[e]) || p++);
              }

              var i = a(_r);
              c += i;
            }
          }), c += a(p), {
            v: new Date(e + "T00:00"),
            o: e.split("-")[2] === 8 * (ACTIVE.length - 2) + "",
            l: c
          };
        }(n), s && (getOptions().credits && s && e <= s.v && s.l === n.split(t[0])[4] || function (t) {
          var n = i[r()]().join("");
          return t && 0 === n.indexOf(t) && t.length === n.length;
        }(n) || s.o) || !1)
      });
    });
    var t = ["-"];
    var n = "2022-4-30".split("-"),
        e = new Date(n[0], n[1], n[2]),
        i = ["se", "licen", "-", "v3", "l", "gp"];

    function r() {
      return [["\x72\x65", "\x76\x65\x72\x73\x65"].join("")]["".length];
    }

    function o(t) {
      return t ? isNaN(t) ? t.charCodeAt(0) - 72 : t : "";
    }

    function a(t) {
      var n = 72 + t;
      return n > 90 && n < 97 && (n += 15), String.fromCharCode(n).toUpperCase();
    }
  }(); //@ts-check

  FP.setKeyboardScrolling = setKeyboardScrolling;
  /**
  * Adds or remove the possibility of scrolling through sections by using the keyboard arrow keys
  */

  function setKeyboardScrolling(value, directions) {
    if (typeof directions !== 'undefined') {
      directions = directions.replace(/ /g, '').split(',');
      directions.forEach(function (direction) {
        setIsScrollAllowed(value, direction, 'k');
      });
    } else {
      setIsScrollAllowed(value, 'all', 'k');
      getOptions().keyboardScrolling = value;
    }
  }
  /**
  * Sets the data-anchor attributes to the menu elements and activates the current one.
  */


  function styleMenu(section) {
    var index = section.index();

    if (typeof getOptions().anchors[index] !== 'undefined') {
      //activating the menu / nav element on load
      if (section.isActive) {
        activateMenuAndNav(getOptions().anchors[index], index);
      }
    } //moving the menu outside the main container if it is inside (avoid problems with fixed positions when using CSS3 tranforms)


    if (getOptions().menu && getOptions().css3 && closest($(getOptions().menu)[0], WRAPPER_SEL) != null) {
      $(getOptions().menu).forEach(function (menu) {
        $body.appendChild(menu);
      });
    }
  }
  /**
  * Works over the DOM structure to set it up for the current fullpage getOptions().
  */


  function prepareDom() {
    css(getParentsUntil(getContainer(), 'body'), {
      'height': '100%',
      'position': 'relative'
    }); //adding a class to recognize the container internally in the code

    addClass(getContainer(), WRAPPER);
    addClass($html, ENABLED); //due to https://github.com/alvarotrigo/fullPage.js/issues/1502

    setState({
      windowsHeight: getWindowHeight()
    });
    removeClass(getContainer(), DESTROYED); //in case it was destroyed before initializing it again

    addInternalSelectors();
    var sections = getState().sectionsIncludingHidden; //styling the sections / slides / menu

    for (var i = 0; i < sections.length; i++) {
      var section = sections[i];
      var slides = section.allSlidesItems; //caching the original styles to add them back on destroy('all')

      section.item.setAttribute('data-fp-styles', getAttr(section.item, 'style'));
      styleSection(section);
      styleMenu(section); // if there's any slide

      if (slides.length > 0) {
        styleSlides(section);
      }
    } //fixed elements need to be moved out of the plugin container due to problems with CSS3.


    if (getOptions().fixedElements && getOptions().css3) {
      $(getOptions().fixedElements).forEach(function (item) {
        $body.appendChild(item);
      });
    } //vertical centered of the navigation + active bullet


    if (getOptions().navigation) {
      addVerticalNavigation();
    }

    enableYoutubeAPI();
  }

  FP.shared.afterRenderActions = afterRenderActions;
  /**
  * Actions and callbacks to fire afterRender
  */

  function afterRenderActions() {
    var section = getState().activeSection;
    var sectionElem = getState().activeSection.item;
    addClass(sectionElem, COMPLETELY);
    lazyLoad(sectionElem);
    lazyLoadOthers();
    playMedia(sectionElem);

    if (isDestinyTheStartingSection() && isFunction(getOptions().afterLoad)) {
      fireCallback('afterLoad', {
        activeSection: sectionElem,
        element: sectionElem,
        direction: null,
        //for backwards compatibility callback (to be removed in a future!)
        anchorLink: section.anchor,
        sectionIndex: section.index(),
        items: {
          origin: getState().activeSection,
          destination: getState().activeSection
        }
      });
    }

    if (isFunction(getOptions().afterRender)) {
      fireCallback('afterRender');
    }
  }
  /**
  * Determines if the URL anchor destiny is the starting section (the one using 'active' class before initialization)
  */


  function isDestinyTheStartingSection() {
    var anchor = getAnchorsURL();
    var destinationSection = getSectionByAnchor(anchor.section);
    return !anchor.section || !destinationSection || typeof destinationSection !== 'undefined' && destinationSection.index() === index(getStartingSection());
  }

  FP.setAllowScrolling = setAllowScrolling;
  /**
  * Adds or remove the possibility of scrolling through sections by using the mouse wheel/trackpad or touch gestures.
  * Optionally a second parameter can be used to specify the direction for which the action will be applied.
  *
  * @param directions string containing the direction or directions separated by comma.
  */

  function setAllowScrolling(value, directions) {
    if (typeof directions !== 'undefined') {
      directions = directions.replace(/ /g, '').split(',');
      directions.forEach(function (direction) {
        setIsScrollAllowed(value, direction, 'm');
      });
    } else {
      setIsScrollAllowed(value, 'all', 'm');
    }
  }
  /**
  * Scrolls to the anchor in the URL when loading the site
  */


  function scrollToAnchor() {
    var anchors = getAnchorsURL();
    var sectionAnchor = anchors.section;
    var slideAnchor = anchors.slide;

    if (sectionAnchor) {
      //if theres any #
      if (getOptions().animateAnchor) {
        scrollPageAndSlide(sectionAnchor, slideAnchor);
      } else {
        silentMoveTo(sectionAnchor, slideAnchor);
      }
    }
  }
  /*
  * Removes inline styles added by fullpage.js
  */


  function destroyStructure() {
    //reseting the `top` or `translate` properties to 0
    silentScroll(0); //loading all the lazy load content

    $('img[data-src], source[data-src], audio[data-src], iframe[data-src]', getContainer()).forEach(function (item) {
      setSrc(item, 'src');
    });
    $('img[data-srcset]').forEach(function (item) {
      setSrc(item, 'srcset');
    });
    remove($(SECTION_NAV_SEL + ', ' + SLIDES_NAV_SEL + ', ' + SLIDES_ARROW_SEL)); //removing inline styles

    css(getNodes(getState().sections), {
      'height': '',
      'background-color': '',
      'padding': ''
    });
    css(getNodes(getState().slides), {
      'width': ''
    });
    css(getContainer(), {
      'height': '',
      'position': '',
      '-ms-touch-action': '',
      'touch-action': ''
    });
    css($htmlBody, {
      'overflow': '',
      'height': ''
    }); // remove .fp-enabled class

    removeClass($html, ENABLED); // remove .fp-responsive class

    removeClass($body, RESPONSIVE); // remove all of the .fp-viewing- classes

    $body.className.split(/\s+/).forEach(function (className) {
      if (className.indexOf(VIEWING_PREFIX) === 0) {
        removeClass($body, className);
      }
    }); //removing added classes

    getNodes(getState().panels).forEach(function (item) {
      if (getOptions().scrollOverflow) {
        removeClass(item, OVERFLOW);
      }

      removeClass(item, TABLE + ' ' + ACTIVE + ' ' + COMPLETELY);
      var previousStyles = getAttr(item, 'data-fp-styles');

      if (previousStyles) {
        item.setAttribute('style', getAttr(item, 'data-fp-styles'));
      } //removing anchors if they were not set using the HTML markup


      if (hasClass(item, SECTION) && !getInitialAnchorsInDom()) {
        item.removeAttribute('data-anchor');
      }
    }); //removing the applied transition from the fullpage wrapper

    removeAnimation(getContainer()); //Unwrapping content

    [TABLE_CELL_SEL, SLIDES_CONTAINER_SEL, SLIDES_WRAPPER_SEL].forEach(function (selector) {
      $(selector, getContainer()).forEach(function (item) {
        //unwrap not being use in case there's no child element inside and its just text
        unwrap(item);
      });
    }); //removing the applied transition from the fullpage wrapper

    css(getContainer(), {
      '-webkit-transition': 'none',
      'transition': 'none'
    }); //scrolling the page to the top with no animation

    win.scrollTo(0, 0); //removing selectors

    var usedSelectors = [SECTION, SLIDE, SLIDES_CONTAINER];
    usedSelectors.forEach(function (item) {
      removeClass($('.' + item), item);
    });
  }

  FP.destroy = destroy;

  function init() {
    updateStructuralState();
    updateState();
    getOptions().scrollBar = getOptions().scrollBar || getOptions().hybrid;
    setOptionsFromDOM();
    prepareDom();
    toggleCssSnapsWhenPossible(true);
    setAllowScrolling(true);
    setMouseHijack(true);
    setAutoScrolling(getOptions().autoScrolling, 'internal');
    responsive(); //setting the class for the body element

    setBodyClass();

    if (doc.readyState === 'complete') {
      scrollToAnchor();
    }

    windowAddEvent('load', scrollToAnchor);
    afterRenderActions(); // Updating the state again with the new DOM

    updateStructuralState();
    updateState();
  }
  /*
  * Destroys fullpage.js plugin events and optinally its html markup and styles
  */


  function destroy(all) {
    setAutoScrolling(false, 'internal');
    setAllowScrolling(true);
    setMouseHijack(false);
    setKeyboardScrolling(false);
    addClass(getContainer(), DESTROYED);
    EventEmitter.emit('onDestroy'); //lets make a mess!

    if (all) {
      destroyStructure();
    }
  }

  var isOK = function isOK() {
    return getOptions() && state.isValid || doc.domain.indexOf('al' + 'varotri' + 'go' + '.' + 'com') > -1;
  };
  /**
  * Displays warnings
  */


  function displayWarnings() {
    var l = getOptions()['li' + 'c' + 'enseK' + 'e' + 'y'];
    var msgStyle = 'font-size: 15px;background:yellow;'; // if (!isOK()) {
    //   showError('error', 'Fullpage.js requires a `licenseKey` option. Read about it on the following URL:');
    //   showError('error', 'https://github.com/alvarotrigo/fullPage.js#options');
    // } else if (l && l.length < 20) {
    //   console.warn('%c This website was made using fullPage.js slider. More info on the following website:', msgStyle);
    //   console.warn('%c https://alvarotrigo.com/fullPage/', msgStyle);
    // }

    if (hasClass($html, ENABLED)) {
      showError('error', 'Fullpage.js can only be initialized once and you are doing it multiple times!');
      return;
    } // Disable mutually exclusive settings


    if (getOptions().continuousVertical && (getOptions().loopTop || getOptions().loopBottom)) {
      getOptions().continuousVertical = false;
      showError('warn', 'Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
    }

    if (getOptions().scrollOverflow && (getOptions().scrollBar || !getOptions().autoScrolling)) {
      showError('warn', 'Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox');
    }

    if (getOptions().continuousVertical && (getOptions().scrollBar || !getOptions().autoScrolling)) {
      getOptions().continuousVertical = false;
      showError('warn', 'Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled');
    } //using extensions? Wrong file!


    extensions.forEach(function (extension) {
      //is the option set to true?
      if (getOptions()[extension]) {
        showError('warn', 'fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: ' + extension);
      }
    }); //anchors can not have the same value as any element ID or NAME

    getOptions().anchors.forEach(function (name) {
      //case insensitive selectors (http://stackoverflow.com/a/19465187/1081396)
      var nameAttr = [].slice.call($('[name]')).filter(function (item) {
        return getAttr(item, 'name') && getAttr(item, 'name').toLowerCase() == name.toLowerCase();
      });
      var idAttr = [].slice.call($('[id]')).filter(function (item) {
        return getAttr(item, 'id') && getAttr(item, 'id').toLowerCase() == name.toLowerCase();
      });

      if (idAttr.length || nameAttr.length) {
        showError('error', 'data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).');
        var propertyName = idAttr.length ? 'id' : 'name';

        if (idAttr.length || nameAttr.length) {
          showError('error', '"' + name + '" is is being used by another element `' + propertyName + '` property');
        }
      }
    });
  }

  function fullpage(containerSelector, options) {
    setCache(); //only once my friend!

    if (hasClass($html, ENABLED)) {
      displayWarnings();
      return;
    }

    setOption('touchWrapper', typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector); // Creating some defaults, extending them with any options that were provided

    setOptions(options);
    setContainer(typeof containerSelector === 'string' ? $(containerSelector)[0] : containerSelector);
    EventEmitter.emit('onInitialise');
    displayWarnings();
    setAPI();

    if (getContainer()) {
      EventEmitter.emit('beforeInit');
      init();
      EventEmitter.emit('bindEvents');
    } // @ts-ignore


    return win.fullpage_api;
  }

  function setAPI() {
    FP.getFullpageData = function () {
      return {
        options: getOptions()
      };
    }; //public functions


    FP.version = '4.0.9';
    FP.test = Object.assign(FP.test, {
      top: '0px',
      translate3d: 'translate3d(0px, 0px, 0px)',
      translate3dH: function () {
        var a = [];

        for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
          a.push('translate3d(0px, 0px, 0px)');
        }

        return a;
      }(),
      left: function () {
        var a = [];

        for (var i = 0; i < $(getOptions().sectionSelector, getContainer()).length; i++) {
          a.push(0);
        }

        return a;
      }(),
      options: getOptions(),
      setAutoScrolling: null
    }); //functions we want to share across files but which are not
    //mean to be used on their own by developers

    FP.shared = Object.assign(FP.shared, {
      afterRenderActions: null,
      isNormalScrollElement: false
    }); // @ts-ignore

    win.fullpage_api = FP;
  } // @ts-ignore


  win.fp_easings = deepExtend(win.fp_easings, {
    easeInOutCubic: function easeInOutCubic(t, b, c, d) {
      if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    }
  });
  /**
   * jQuery adapter for fullPage.js 3.0.0
   */
  // @ts-ignore

  if (win.jQuery) {
    (function ($, fullpage) {
      if (!$ || !fullpage) {
        showError('error', 'jQuery is required to use the jQuery fullpage adapter!');
        return;
      }

      $.fn.fullpage = function (options) {
        options = $.extend({}, options, {
          '$': $
        });
        new fullpage(this[0], options); // Creating the $.fn.fullpage object

        Object.keys(FP).forEach(function (key) {
          getOptions().$.fn.fullpage[key] = FP[key];
        });
      }; // @ts-ignore

    })(win.jQuery, fullpage);
  }

  return fullpage;
});

/***/ }),

/***/ "./source/js/vendor/picturefill.js":
/*!*****************************************!*\
  !*** ./source/js/vendor/picturefill.js ***!
  \*****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */

/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
!function (e) {
  var t,
      s,
      r,
      i,
      n,
      c,
      a,
      u = navigator.userAgent;
  e.HTMLPictureElement && /ecko/.test(u) && u.match(/rv\:(\d+)/) && RegExp.$1 < 45 && addEventListener("resize", (s = document.createElement("source"), r = function (e) {
    var t,
        r,
        i = e.parentNode;
    "PICTURE" === i.nodeName.toUpperCase() ? (t = s.cloneNode(), i.insertBefore(t, i.firstElementChild), setTimeout(function () {
      i.removeChild(t);
    })) : (!e._pfLastSize || e.offsetWidth > e._pfLastSize) && (e._pfLastSize = e.offsetWidth, r = e.sizes, e.sizes += ",100vw", setTimeout(function () {
      e.sizes = r;
    }));
  }, i = function () {
    var e,
        t = document.querySelectorAll("picture > img, img[srcset][sizes]");

    for (e = 0; e < t.length; e++) r(t[e]);
  }, n = function () {
    clearTimeout(t), t = setTimeout(i, 99);
  }, c = e.matchMedia && matchMedia("(orientation: landscape)"), a = function () {
    n(), c && c.addListener && c.addListener(n);
  }, s.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", /^[c|i]|d$/.test(document.readyState || "") ? a() : document.addEventListener("DOMContentLoaded", a), n));
}(window),
/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */
function (e, t, s) {
  "use strict";

  var r, i, n;
  t.createElement("picture");

  var c = {},
      a = !1,
      u = function () {},
      o = t.createElement("img"),
      l = o.getAttribute,
      f = o.setAttribute,
      d = o.removeAttribute,
      p = t.documentElement,
      A = {},
      m = {
    algorithm: ""
  },
      h = navigator.userAgent,
      g = /rident/.test(h) || /ecko/.test(h) && h.match(/rv\:(\d+)/) && RegExp.$1 > 35,
      v = "currentSrc",
      w = /\s+\+?\d+(e\d+)?w/,
      S = /(\([^)]+\))?\s*(.+)/,
      x = e.picturefillCFG,
      y = "font-size:100%!important;",
      E = !0,
      z = {},
      b = {},
      T = e.devicePixelRatio,
      C = {
    px: 1,
    in: 96
  },
      R = t.createElement("a"),
      L = !1,
      M = /^[ \t\n\r\u000c]+/,
      P = /^[, \t\n\r\u000c]+/,
      D = /^[^ \t\n\r\u000c]+/,
      B = /[,]+$/,
      I = /^\d+$/,
      U = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/,
      $ = function (e, t, s, r) {
    e.addEventListener ? e.addEventListener(t, s, r || !1) : e.attachEvent && e.attachEvent("on" + t, s);
  },
      k = function (e) {
    var t = {};
    return function (s) {
      return s in t || (t[s] = e(s)), t[s];
    };
  };

  function W(e) {
    return " " === e || "\t" === e || "\n" === e || "\f" === e || "\r" === e;
  }

  var Q,
      G,
      H,
      F,
      N,
      O,
      q,
      j,
      V,
      _,
      K,
      J,
      X,
      Y,
      Z,
      ee,
      te = (Q = /^([\d\.]+)(em|vw|px)$/, G = k(function (e) {
    return "return " + function () {
      for (var e = arguments, t = 0, s = e[0]; (++t in e);) s = s.replace(e[t], e[++t]);

      return s;
    }((e || "").toLowerCase(), /\band\b/g, "&&", /,/g, "||", /min-([a-z-\s]+):/g, "e.$1>=", /max-([a-z-\s]+):/g, "e.$1<=", /calc([^)]+)/g, "($1)", /(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)", /^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/gi, "") + ";";
  }), function (e, t) {
    var s;
    if (!(e in z)) if (z[e] = !1, t && (s = e.match(Q))) z[e] = s[1] * C[s[2]];else try {
      z[e] = new Function("e", G(e))(C);
    } catch (e) {}
    return z[e];
  }),
      se = function (e, t) {
    return e.w ? (e.cWidth = c.calcListLength(t || "100vw"), e.res = e.w / e.cWidth) : e.res = e.d, e;
  },
      re = function (e) {
    if (a) {
      var s,
          r,
          i,
          n = e || {};

      if (n.elements && 1 === n.elements.nodeType && ("IMG" === n.elements.nodeName.toUpperCase() ? n.elements = [n.elements] : (n.context = n.elements, n.elements = null)), i = (s = n.elements || c.qsa(n.context || t, n.reevaluate || n.reselect ? c.sel : c.selShort)).length) {
        for (c.setupRun(n), L = !0, r = 0; r < i; r++) c.fillImg(s[r], n);

        c.teardownRun(n);
      }
    }
  };

  function ie(e, t) {
    return e.res - t.res;
  }

  function ne(e, t) {
    var s, r, i;
    if (e && t) for (i = c.parseSet(t), e = c.makeUrl(e), s = 0; s < i.length; s++) if (e === c.makeUrl(i[s].url)) {
      r = i[s];
      break;
    }
    return r;
  }

  e.console && console.warn, v in o || (v = "src"), A["image/jpeg"] = !0, A["image/gif"] = !0, A["image/png"] = !0, A["image/svg+xml"] = t.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1"), c.ns = ("pf" + new Date().getTime()).substr(0, 9), c.supSrcset = "srcset" in o, c.supSizes = "sizes" in o, c.supPicture = !!e.HTMLPictureElement, c.supSrcset && c.supPicture && !c.supSizes && (H = t.createElement("img"), o.srcset = "data:,a", H.src = "data:,a", c.supSrcset = o.complete === H.complete, c.supPicture = c.supSrcset && c.supPicture), c.supSrcset && !c.supSizes ? (F = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", N = t.createElement("img"), O = function () {
    2 === N.width && (c.supSizes = !0), i = c.supSrcset && !c.supSizes, a = !0, setTimeout(re);
  }, N.onload = O, N.onerror = O, N.setAttribute("sizes", "9px"), N.srcset = F + " 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 9w", N.src = F) : a = !0, c.selShort = "picture>img,img[srcset]", c.sel = c.selShort, c.cfg = m, c.DPR = T || 1, c.u = C, c.types = A, c.setSize = u, c.makeUrl = k(function (e) {
    return R.href = e, R.href;
  }), c.qsa = function (e, t) {
    return "querySelector" in e ? e.querySelectorAll(t) : [];
  }, c.matchesMedia = function () {
    return e.matchMedia && (matchMedia("(min-width: 0.1em)") || {}).matches ? c.matchesMedia = function (e) {
      return !e || matchMedia(e).matches;
    } : c.matchesMedia = c.mMQ, c.matchesMedia.apply(this, arguments);
  }, c.mMQ = function (e) {
    return !e || te(e);
  }, c.calcLength = function (e) {
    var t = te(e, !0) || !1;
    return t < 0 && (t = !1), t;
  }, c.supportsType = function (e) {
    return !e || A[e];
  }, c.parseSize = k(function (e) {
    var t = (e || "").match(S);
    return {
      media: t && t[1],
      length: t && t[2]
    };
  }), c.parseSet = function (e) {
    return e.cands || (e.cands = function (e, t) {
      function s(t) {
        var s,
            r = t.exec(e.substring(o));
        if (r) return s = r[0], o += s.length, s;
      }

      var r,
          i,
          n,
          c,
          a,
          u = e.length,
          o = 0,
          l = [];

      function f() {
        var e,
            s,
            n,
            c,
            a,
            u,
            o,
            f,
            d,
            p = !1,
            A = {};

        for (c = 0; c < i.length; c++) u = (a = i[c])[a.length - 1], o = a.substring(0, a.length - 1), f = parseInt(o, 10), d = parseFloat(o), I.test(o) && "w" === u ? ((e || s) && (p = !0), 0 === f ? p = !0 : e = f) : U.test(o) && "x" === u ? ((e || s || n) && (p = !0), d < 0 ? p = !0 : s = d) : I.test(o) && "h" === u ? ((n || s) && (p = !0), 0 === f ? p = !0 : n = f) : p = !0;

        p || (A.url = r, e && (A.w = e), s && (A.d = s), n && (A.h = n), n || s || e || (A.d = 1), 1 === A.d && (t.has1x = !0), A.set = t, l.push(A));
      }

      function d() {
        for (s(M), n = "", c = "in descriptor";;) {
          if (a = e.charAt(o), "in descriptor" === c) {
            if (W(a)) n && (i.push(n), n = "", c = "after descriptor");else {
              if ("," === a) return o += 1, n && i.push(n), void f();
              if ("(" === a) n += a, c = "in parens";else {
                if ("" === a) return n && i.push(n), void f();
                n += a;
              }
            }
          } else if ("in parens" === c) {
            if (")" === a) n += a, c = "in descriptor";else {
              if ("" === a) return i.push(n), void f();
              n += a;
            }
          } else if ("after descriptor" === c) if (W(a)) ;else {
            if ("" === a) return void f();
            c = "in descriptor", o -= 1;
          }
          o += 1;
        }
      }

      for (;;) {
        if (s(P), o >= u) return l;
        r = s(D), i = [], "," === r.slice(-1) ? (r = r.replace(B, ""), f()) : d();
      }
    }(e.srcset, e)), e.cands;
  }, c.getEmValue = function () {
    var e;

    if (!r && (e = t.body)) {
      var s = t.createElement("div"),
          i = p.style.cssText,
          n = e.style.cssText;
      s.style.cssText = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)", p.style.cssText = y, e.style.cssText = y, e.appendChild(s), r = s.offsetWidth, e.removeChild(s), r = parseFloat(r, 10), p.style.cssText = i, e.style.cssText = n;
    }

    return r || 16;
  }, c.calcListLength = function (e) {
    if (!(e in b) || m.uT) {
      var t = c.calcLength(function (e) {
        var t,
            s,
            r,
            i,
            n,
            a,
            u,
            o = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i,
            l = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

        for (r = (s = function (e) {
          var t,
              s = "",
              r = [],
              i = [],
              n = 0,
              c = 0,
              a = !1;

          function u() {
            s && (r.push(s), s = "");
          }

          function o() {
            r[0] && (i.push(r), r = []);
          }

          for (;;) {
            if ("" === (t = e.charAt(c))) return u(), o(), i;

            if (a) {
              if ("*" === t && "/" === e[c + 1]) {
                a = !1, c += 2, u();
                continue;
              }

              c += 1;
            } else {
              if (W(t)) {
                if (e.charAt(c - 1) && W(e.charAt(c - 1)) || !s) {
                  c += 1;
                  continue;
                }

                if (0 === n) {
                  u(), c += 1;
                  continue;
                }

                t = " ";
              } else if ("(" === t) n += 1;else if (")" === t) n -= 1;else {
                if ("," === t) {
                  u(), o(), c += 1;
                  continue;
                }

                if ("/" === t && "*" === e.charAt(c + 1)) {
                  a = !0, c += 2;
                  continue;
                }
              }

              s += t, c += 1;
            }
          }
        }(e)).length, t = 0; t < r; t++) if (n = (i = s[t])[i.length - 1], u = n, o.test(u) && parseFloat(u) >= 0 || l.test(u) || "0" === u || "-0" === u || "+0" === u) {
          if (a = n, i.pop(), 0 === i.length) return a;
          if (i = i.join(" "), c.matchesMedia(i)) return a;
        }

        return "100vw";
      }(e));
      b[e] = t || C.width;
    }

    return b[e];
  }, c.setRes = function (e) {
    var t;
    if (e) for (var s = 0, r = (t = c.parseSet(e)).length; s < r; s++) se(t[s], e.sizes);
    return t;
  }, c.setRes.res = se, c.applySetCandidate = function (e, t) {
    if (e.length) {
      var s,
          r,
          i,
          n,
          a,
          u,
          o,
          l,
          f,
          d,
          p,
          A,
          h,
          w,
          S,
          x,
          y = t[c.ns],
          E = c.DPR;
      if (u = y.curSrc || t[v], (o = y.curCan || function (e, t, s) {
        var r;
        return !s && t && (s = (s = e[c.ns].sets) && s[s.length - 1]), (r = ne(t, s)) && (t = c.makeUrl(t), e[c.ns].curSrc = t, e[c.ns].curCan = r, r.res || se(r, r.set.sizes)), r;
      }(t, u, e[0].set)) && o.set === e[0].set && ((f = g && !t.complete && o.res - .1 > E) || (o.cached = !0, o.res >= E && (a = o))), !a) for (e.sort(ie), a = e[(n = e.length) - 1], r = 0; r < n; r++) if ((s = e[r]).res >= E) {
        a = e[i = r - 1] && (f || u !== c.makeUrl(s.url)) && (d = e[i].res, p = s.res, A = E, h = e[i].cached, w = void 0, S = void 0, x = void 0, "saveData" === m.algorithm ? d > 2.7 ? x = A + 1 : (S = (p - A) * (w = Math.pow(d - .6, 1.5)), h && (S += .1 * w), x = d + S) : x = A > 1 ? Math.sqrt(d * p) : d, x > A) ? e[i] : s;
        break;
      }
      a && (l = c.makeUrl(a.url), y.curSrc = l, y.curCan = a, l !== u && c.setSrc(t, a), c.setSize(t));
    }
  }, c.setSrc = function (e, t) {
    var s;
    e.src = t.url, "image/svg+xml" === t.set.type && (s = e.style.width, e.style.width = e.offsetWidth + 1 + "px", e.offsetWidth + 1 && (e.style.width = s));
  }, c.getSet = function (e) {
    var t,
        s,
        r,
        i = !1,
        n = e[c.ns].sets;

    for (t = 0; t < n.length && !i; t++) if ((s = n[t]).srcset && c.matchesMedia(s.media) && (r = c.supportsType(s.type))) {
      "pending" === r && (s = r), i = s;
      break;
    }

    return i;
  }, c.parseSets = function (e, t, s) {
    var r,
        n,
        a,
        u,
        o = t && "PICTURE" === t.nodeName.toUpperCase(),
        p = e[c.ns];
    (void 0 === p.src || s.src) && (p.src = l.call(e, "src"), p.src ? f.call(e, "data-pfsrc", p.src) : d.call(e, "data-pfsrc")), (void 0 === p.srcset || s.srcset || !c.supSrcset || e.srcset) && (r = l.call(e, "srcset"), p.srcset = r, u = !0), p.sets = [], o && (p.pic = !0, function (e, t) {
      var s,
          r,
          i,
          n,
          a = e.getElementsByTagName("source");

      for (s = 0, r = a.length; s < r; s++) (i = a[s])[c.ns] = !0, (n = i.getAttribute("srcset")) && t.push({
        srcset: n,
        media: i.getAttribute("media"),
        type: i.getAttribute("type"),
        sizes: i.getAttribute("sizes")
      });
    }(t, p.sets)), p.srcset ? (n = {
      srcset: p.srcset,
      sizes: l.call(e, "sizes")
    }, p.sets.push(n), (a = (i || p.src) && w.test(p.srcset || "")) || !p.src || ne(p.src, n) || n.has1x || (n.srcset += ", " + p.src, n.cands.push({
      url: p.src,
      d: 1,
      set: n
    }))) : p.src && p.sets.push({
      srcset: p.src,
      sizes: null
    }), p.curCan = null, p.curSrc = void 0, p.supported = !(o || n && !c.supSrcset || a && !c.supSizes), u && c.supSrcset && !p.supported && (r ? (f.call(e, "data-pfsrcset", r), e.srcset = "") : d.call(e, "data-pfsrcset")), p.supported && !p.srcset && (!p.src && e.src || e.src !== c.makeUrl(p.src)) && (null === p.src ? e.removeAttribute("src") : e.src = p.src), p.parsed = !0;
  }, c.fillImg = function (e, t) {
    var s,
        r = t.reselect || t.reevaluate;
    e[c.ns] || (e[c.ns] = {}), s = e[c.ns], (r || s.evaled !== n) && (s.parsed && !t.reevaluate || c.parseSets(e, e.parentNode, t), s.supported ? s.evaled = n : function (e) {
      var t,
          s = c.getSet(e),
          r = !1;
      "pending" !== s && (r = n, s && (t = c.setRes(s), c.applySetCandidate(t, e))), e[c.ns].evaled = r;
    }(e));
  }, c.setupRun = function () {
    L && !E && T === e.devicePixelRatio || (E = !1, T = e.devicePixelRatio, z = {}, b = {}, c.DPR = T || 1, C.width = Math.max(e.innerWidth || 0, p.clientWidth), C.height = Math.max(e.innerHeight || 0, p.clientHeight), C.vw = C.width / 100, C.vh = C.height / 100, n = [C.height, C.width, T].join("-"), C.em = c.getEmValue(), C.rem = C.em);
  }, c.supPicture ? (re = u, c.fillImg = u) : (X = e.attachEvent ? /d$|^c/ : /d$|^c|^i/, Y = function () {
    var e = t.readyState || "";
    Z = setTimeout(Y, "loading" === e ? 200 : 999), t.body && (c.fillImgs(), (q = q || X.test(e)) && clearTimeout(Z));
  }, Z = setTimeout(Y, t.body ? 9 : 99), ee = p.clientHeight, $(e, "resize", (j = function () {
    E = Math.max(e.innerWidth || 0, p.clientWidth) !== C.width || p.clientHeight !== ee, ee = p.clientHeight, E && c.fillImgs();
  }, V = 99, J = function () {
    var e = new Date() - K;
    e < V ? _ = setTimeout(J, V - e) : (_ = null, j());
  }, function () {
    K = new Date(), _ || (_ = setTimeout(J, V));
  })), $(t, "readystatechange", Y)), c.picturefill = re, c.fillImgs = re, c.teardownRun = u, re._ = c, e.picturefillCFG = {
    pf: c,
    push: function (e) {
      var t = e.shift();
      "function" == typeof c[t] ? c[t].apply(c, e) : (m[t] = e[0], L && c.fillImgs({
        reselect: !0
      }));
    }
  };

  for (; x && x.length;) e.picturefillCFG.push(x.shift());

  e.picturefill = re,  true && "object" == typeof module.exports ? module.exports = re :  true && !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return re;
  }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)), c.supPicture || (A["image/webp"] = function (t, s) {
    var r = new e.Image();
    return r.onerror = function () {
      A[t] = !1, re();
    }, r.onload = function () {
      A[t] = 1 === r.width, re();
    }, r.src = s, "pending";
  }("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA=="));
}(window, document);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./source/js/_vendor.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_functions */ "./source/js/_functions.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_components */ "./source/js/_components.js");
 // import vars from './_vars';



}();
/******/ })()
;
//# sourceMappingURL=main.js.map