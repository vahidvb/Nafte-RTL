$(document).ready(function () {
    $('[data-toggle=tooltip]').tooltip();
    wow = new WOW().init();
    /* remove pre loading section */
    $('.loading').delay(2000).fadeOut('slow');
    /* remove pre loading section */
    // start header & button-up show
    $(window).scroll(function () {
        if ($(window).scrollTop() > 1) {
            $('.header-nav').addClass('sticky');
            $('.btn-up').show();
        } else {
            $('.btn-up').hide();
            $('.header-nav').removeClass('sticky');
        }
    });
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end header & button-up show
    // start close navbar
    $('#btn').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(0px)');
        $('.hover-menu').css('visibility', 'visible');
        $('.hover-menu').click(function () {
            $('.navbar-collapse').css('transform', 'translateX(-100%)');
            $('.hover-menu').css('visibility', 'hidden');
        });
    })
    $('.close').click(function () {
        $('.navbar-collapse').css('transform', 'translateX(-100%)');
        $('body').css('background-color', 'unset');
        $('.hover-menu').css('visibility', 'hidden');
    })
    // end close navbar
    // start top slider
    $('.my-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 0,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });
    // end top slider
    // start pro slider
    $('.pro-slider .owl-carousel').owlCarousel({
        loop: true,
        rtl: true,
        margin: 20,
        autoWidth: false,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    });
    // end pro slider
    // start button-up
    $(".btn-up").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })
    // end button-up
})