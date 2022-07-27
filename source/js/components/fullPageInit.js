import fullpage from '../vendor/fullPage';

var myFullpage = new fullpage('#fullpage', {
	// Navigation
	menu: '#myMenu',
	lockAnchors: false,
	anchors:['index', 'services','portfolio','contacts','project'],
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


	fixedElements:  '#myMenu',


	responsiveWidth: 1024,
  responsiveHeight: 700,
	sectionSelector: '.section',
	slideSelector: '.slide',

	lazyLoading: true,
	observer: true,
});
