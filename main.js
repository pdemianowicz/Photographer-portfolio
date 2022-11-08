const navToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector(".primary-nav");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// ---------- Slider -------------
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  freeMode: {
    enabled: false,
  },
  pagination: {
    enabled: true,
    el: ".swiper-pagination",
    clickable: true,
  },

  paginationDisabledClass: "swiper-pagination-disabled",
  breakpoints: {
    768: {
      slidesPerView: "auto",
      spaceBetween: 40,
      pagination: {
        enabled: false,
      },

      freeMode: {
        enabled: true,
      },
    },
  },
});
