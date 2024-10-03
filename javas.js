let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
menuToggle.onclick = function () {
  header.classList.toggle('active');
}

var swiper = new Swiper(".mySwiper", {
  loop: true,
  direction: "horizontal",
  pagination: {
    el: '.swiper-pagination',
    clickable: true},
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  }
});

var swiper = new Swiper(".EventSlider", {
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5
    }
  }
});
