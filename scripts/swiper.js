var swiper = new Swiper(".mySwiper", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
  // scrollbar-hide: true,
  
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 10,
 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});