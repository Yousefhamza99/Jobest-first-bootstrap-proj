const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // when window width is >= 480px
        768: {
          slidesPerView: 2,
          spaceBetween: 0
        },
        // when window width is >= 640px
        992: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
});

