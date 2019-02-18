// Header
var header = document.querySelector('.header');
header.querySelector('.menu-trigger').addEventListener('click', function (e) {
  e.preventDefault();
  header.classList.toggle('show-nav');
});

// Logo slider
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

// Resource slider
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

// Team member
var teamMembers = document.querySelectorAll('.team-member');

teamMembers.forEach(function (member) {
  var expandBtn = member.querySelector('.button-expand');
  expandBtn.addEventListener('click', function (e) {
    e.preventDefault();

    var alreadyExpanded = member.classList.contains('expanded');
    var newLabel = alreadyExpanded ? 'Expand' : 'Collapse';

    alreadyExpanded ? member.classList.remove('expanded') : member.classList.add('expanded');
    expandBtn.innerText = newLabel
  });
});

// Text slider
var testimonialSliders = document.querySelectorAll('.testimonial-slider .swiper-container');
testimonialSliders.forEach(function (slider) {
  var sliderContainer = slider.parentNode;

  // initialize swiper
  var swiper = new Swiper (slider, {
    slideClass: 'slide',
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

// feature Sets
var featureSets = document.querySelectorAll('.feature-set');

featureSets.forEach(function (item) {
  var expandBtn = item.querySelector('.button-expand');

  if (expandBtn) {
    expandBtn.addEventListener('click', function (e) {
      e.preventDefault();

      var alreadyExpanded = item.classList.contains('expanded');
      var newLabel = alreadyExpanded ? 'Expand' : 'Collapse';

      alreadyExpanded ? item.classList.remove('expanded') : item.classList.add('expanded');
      expandBtn.innerText = newLabel
    });
  }
});


// plarform Features
var plarformFeatures = document.querySelectorAll('.platform-feature');
console.log(plarformFeatures);
plarformFeatures.forEach(function (item) {
  var expandBtn = item.querySelector('.button-expand');
  expandBtn.addEventListener('click', function (e) {
    e.preventDefault();

    var alreadyExpanded = item.classList.contains('expanded');
    var newLabel = alreadyExpanded ? 'Expand' : 'Collapse';

    alreadyExpanded ? item.classList.remove('expanded') : item.classList.add('expanded');
    expandBtn.innerText = newLabel
  });
});

