const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  const navMenu = document.querySelector(".nav-menu");

  if (navMenu.style.display == "flex") {
    navMenu.style.display = "none";
  } else {
    navMenu.style.display = "flex";
  }
});

const swiper = new Swiper(".swiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 4000,
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

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
