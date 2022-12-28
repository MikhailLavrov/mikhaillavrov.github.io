new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },
  autoHeight: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});