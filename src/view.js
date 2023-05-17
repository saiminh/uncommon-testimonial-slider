import Swiper, {Mousewheel, Pagination} from 'swiper';
 window.addEventListener('DOMContentLoaded', () => {
  
  const swiper = new Swiper('.swiper', {
    modules: [Mousewheel, Pagination],
    loop: false,
    direction: "horizontal",
    mousewheel: {
      forceToAxis: true,
      sensitivity: 1,
      eventsTarget: '.swiper-wrapper'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 0,
    initialSlide: 1,
  });

 })