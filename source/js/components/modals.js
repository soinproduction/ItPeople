import { disableScroll } from '../functions/disable-scroll';
import { enableScroll } from '../functions/enable-scroll';

const overlay = document.querySelector('[data-menu-overlay]');
const closeModal = document.querySelector('.modal__close');


export  const openModal = function(){
  overlay.classList.add('active');
  disableScroll();
  closeModal.addEventListener('click', function(){
    overlay.classList.remove('active');
    enableScroll();
  })
}





