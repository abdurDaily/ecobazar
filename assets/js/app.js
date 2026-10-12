
$(document).ready(function () {
  let searchInput = document.querySelector(".search_input");
  let searchPopup = document.querySelector(".search_popup");
  let searchClose = document.querySelector(".search_close");

  searchInput.addEventListener("click", function () {
    searchPopup.classList.add("search_popu_active");
  });
  searchClose.addEventListener("click", function () {
    searchPopup.classList.remove("search_popu_active");
  });

  searchPopup.addEventListener("click", function (e) {
    if (e.target.classList.contains("search_popu_active")) {
      searchPopup.classList.remove("search_popu_active");
    }
  });

  //* HERO SECTION
  $(".sliders").slick({
    arrows: true,
    nextArrow: `<span class="next-btn"><i class="fa-solid fa-arrow-right"></i></span>`,
    prevArrow: `<span class="prev-btn"><i class="fa-solid fa-arrow-left"></i></span>`,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
          // dots:false
        },
      },
    ],
  });

  $("#Grid").mixItUp();

  // product sliders
  $('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
  });

  $('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: false,
    focusOnSelect: true,
    vertical: true,
    prevArrow: `<span class="slider_product_prev"><svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.75 7.75L7.75 0.75L0.75 7.75" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>`,
    nextArrow: `<span class="slider_product_next"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19 8.5L12 15.5L5 8.5" stroke="#999999" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg></span>`,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          arrows: false
        }
      }
    ]
  });
});
