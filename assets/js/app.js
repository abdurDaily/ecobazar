$(function () {

    let searchInput = document.querySelector('.search_input');
    let searchPopup = document.querySelector('.search_popup');
    let searchClose = document.querySelector('.search_close');

    searchInput.addEventListener('click', function () {
        searchPopup.classList.add('search_popu_active');
    })
    searchClose.addEventListener('click', function () {
        searchPopup.classList.remove('search_popu_active');
    })

    searchPopup.addEventListener('click', function (e) {
        if (e.target.classList.contains('search_popu_active')) {
            searchPopup.classList.remove('search_popu_active');
        }
    })

    //* HERO SECTION 
    $('.sliders').slick({
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
                }
            },
        ]
    });



})