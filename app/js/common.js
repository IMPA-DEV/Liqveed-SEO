$(function() {

    /* mixit up */
    var containerEl = document.querySelector('.shop-slider');
    var mixer = mixitup(containerEl);

    /* mixit active btn */
    $('.shop-wrap-navigation button').on('click', function () {
        $('.shop-wrap-navigation button').removeClass('active');
        $(this).addClass('active');
    })

    /* slide hide-show */
    $('.s-1').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-1').addClass('active');
        $('.slider-text-1').addClass('active');
    })

    $('.s-2').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-2').addClass('active');
        $('.slider-text-2').addClass('active');
    })

    $('.s-3').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-3').addClass('active');
        $('.slider-text-3').addClass('active');
    })

    $('.s-4').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-4').addClass('active');
        $('.slider-text-4').addClass('active');
    })

    $('.s-5').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-5').addClass('active');
        $('.slider-text-5').addClass('active');
    })

    $('.s-6').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-6').addClass('active');
        $('.slider-text-6').addClass('active');
    })

    //testimonials slider
    $('.testimonials-slider').slick({
        infinite: true,
        speed: 600,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        cssEase: 'linear',
        arrows: false,
        prevArrow: $('.testimonials-prev'),
        nextArrow: $('.testimonials-next'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    });

});
