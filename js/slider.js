// const slider = document.querySelector('.slider')
// const sliders = document.querySelectorAll('.slider-item')
// const images = document.querySelectorAll('.slider-item img')
// const dots = document.querySelectorAll('.dot')

// sliderIndex = 1


// /*активная картинка по центру*/
// function updateSleder(){
//     sliders.forEach((slide, index) =>{
//         slide.classList.remove('slick-center')
//         if(index === sliderIndex){
//             slide.classList.add('slick-center')
//         }
//     })


//     //активные точки
//     dots.forEach((dot, index) => {
//         dot.classList.remove('dot-active')
//         if(index === sliderIndex){
//             dot.classList.add('dot-active')
//         }
//     })
//     // нажатие на точки
//     dots.forEach((dot, index) =>{
//         dot.addEventListener('click', () => {
//             sliderIndex = index
//             updateSleder()
//         })
//     })
//     // нажатие на картинки
//     images.forEach((image, index) => {
//         image.addEventListener('click', () => {
//             sliderIndex = index
//             updateSleder()
//         })
//     })
// }


// updateSleder()


let swiper1 = new Swiper(".slider-1", {
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
      depth: 200,
      modifier: 1,
    //   slideShadows: true,
      slidesPerView: 3,   

    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });