
var logoSliders = document.querySelectorAll('.logos-slider .swiper-container');
logoSliders.forEach(function (slider) {
    var logoSliderContainer = slider.parentNode.parentNode.parentNode;

    // initialize swiper
    var swiper = new Swiper(slider, {
        slideClass: 'slide',
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        spaceBetween: 90,
        slidesPerView: 5,
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 40
            }
        }
    });

    logoSliderContainer.querySelector('.swiper-button-next').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideNext();
    })

    logoSliderContainer.querySelector('.swiper-button-prev').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slidePrev();
    })
});

var resourcesSliders = document.querySelectorAll('.resources-slider .swiper-container');
resourcesSliders.forEach(function (slider) {
    var sliderContainer = slider.parentNode;

    // initialize swiper
    var swiper = new Swiper(slider, {
        slideClass: 'slide',
        slidesPerView: 5,
        slidesPerGroup: 5,
        spaceBetween: 40,
        breakpoints: {
            640: {
                slidesPerView: 2,
            }
        }
    });

    sliderContainer.querySelector('.swiper-button-next').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slideNext();
    })

    sliderContainer.querySelector('.swiper-button-prev').addEventListener('click', function (e) {
        e.preventDefault();
        swiper.slidePrev();
    })
});