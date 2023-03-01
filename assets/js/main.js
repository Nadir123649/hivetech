var num = 50;

// $(window).bind('scroll', function () {
//     if ($(window).scrollTop() > num) {
//         $('.header').addClass('fixed-top');
//     } else {
//         $('.header').removeClass('fixed-top');
//     }
// });

$('#toggle').click(function () {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "coverflow",
    mousewheelControl: 1,
    parallax: true,
    speed: 1000,
    mousewheel: {
        releaseOnEdges: true,
    },
});

const heroSwiper = new Swiper(".hero-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
const concernSwiper = new Swiper(".concern-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const testimonialSwiper = new Swiper(".testimonial-swiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});
$(document).ready(function () {
    $('#dropDown').click(function () {
        $('.drop-down').toggleClass('drop-down--active');
    });
});
function uploadingFunction() {
    $("#formInputs").hide();
    $("#fileInput").hide();
    $("#upload").hide();
    $("#uploading").show();
    if ($("#bar").show()) {
        var progressbar = $('#bar'),
            max = progressbar.attr('max'),
            time = (100 / max) * 50,
            value = progressbar.val();

        var loading = function () {
            value += 1;
            addValue = progressbar.val(value);

            if (value == max) {
                clearInterval(animate);
                $("#upload-head").html('Uploaded');
                $("#submit-btn").show();
            }
        };

        var animate = setInterval(function () {
            loading();
        }, time);
    }

}
$("#submit-btn").click(function () {
    $("#upload-head").html('Thank You!');
    $("#bar").hide()
    $("#submit-btn").hide();


})
$(document).ready(function () {

    $(`#${window.location.hash}`).modal('show');

});

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 0,
    nav: true,
    singleItem: true,
    items: 1,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})




