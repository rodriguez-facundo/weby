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

// ------------------------------
// Ajax form submition
// ------------------------------
// Submit the form data
function ajaxFormSubmit(ev) {
    // Prevent the form from actually submitting
    ev.preventDefault();
    var form = ev.target;
    // ajaxFormShowSending(form);

    var formData = new FormData(form);

    // ajaxFormClearValidation(form);

    // Send it to the server
    $.ajax({
        url: '/wheelform/message/send',
        type: 'POST',
        data: formData,
        success: function (response) {
            if (response.success) {
                // $('.thank-you .text', form).html(response.message);
                // $(form).addClass('thank-you');
                form.reset();
                // setTimeout(function(){
                //     $(form).removeClass('thank-you');
                //     $('.thank-you .text', form).html('');
                // }, 3000)
                window.open( $('.download-link', form).val() );
            } else {
                // ajaxFormDisplayValidationMsg(form, response.errors);
            }
        },
        complete: function (){
            // ajaxFormHideSending(form);
        },
        dataType: 'json',
        cache: false,
        contentType: false,
        processData: false
    });
}

// make the function accessible from outside the file
// window.ajaxFormSubmit = ajaxFormSubmit;

// Add the validation class styling and messages
function ajaxFormDisplayValidationMsg(form, messages){
    for ( let key in messages){
        let formGroup = $('[name="'+ key +'"]', form).parent();
        $('.form-control, .form-control-file', formGroup).addClass('is-invalid');
        $('.invalid-feedback', formGroup).append(messages[key]);
   }
}

// Show to user that sending of data is start
function ajaxFormShowSending(form){
    $(form).addClass('sending');
}

// Show to user that sending of data is end
function ajaxFormHideSending(form){
    $(form).removeClass('sending');
}

// Clear the validation messages and styling
function ajaxFormClearValidation(form){
    $('.is-invalid', form).removeClass('is-invalid');
    $('.invalid-feedback', form).html('');
}