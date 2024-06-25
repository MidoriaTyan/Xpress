let swiper2 = new Swiper('.slider-2', {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    clickable: true,
    slideToClickedSlide: true,
    initialSlide:2,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 4,
      slidesPerView: 5,   
      
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      
    },
  });

  