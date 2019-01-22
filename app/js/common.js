$(function() {

    /* mixit active btn */
    $('.shop-wrap-navigation button').on('click', function () {
        $('.shop-wrap-navigation button').removeClass('active');
        $(this).addClass('active');
    });

    /* slide hide-show */
    $('.s-1').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-1').addClass('active');
        $('.slider-text-1').addClass('active');
    });

    $('.s-2').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-2').addClass('active');
        $('.slider-text-2').addClass('active');
    });

    $('.s-3').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-3').addClass('active');
        $('.slider-text-3').addClass('active');
    });

    $('.s-4').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-4').addClass('active');
        $('.slider-text-4').addClass('active');
    });

    $('.s-5').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-5').addClass('active');
        $('.slider-text-5').addClass('active');
    });

    $('.s-6').on('click', function () {
        $('.products-slider-navigation ul li').removeClass('active');
        $('.products-slider-text').removeClass('active');
        $('.products-slider-img').removeClass('active');

        $(this).addClass('active');
        $('.slider-img-6').addClass('active');
        $('.slider-text-6').addClass('active');
    });

    /* products*effects */
    $('.s-1').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-1').addClass('active');
        $('.buy-select-1').addClass('active');
    });

    $('.s-2').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-2').addClass('active');
        $('.buy-select-2').addClass('active');
    });

    $('.s-3').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-3').addClass('active');
        $('.buy-select-3').addClass('active');
    });

    $('.s-4').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-4').addClass('active');
        $('.buy-select-4').addClass('active');
    });

    $('.s-5').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-5').addClass('active');
        $('.buy-select-5').addClass('active');
    });

    $('.s-6').on('click', function () {
        $('.list-shop-about ul li').removeClass('active');
        $('.block-buy-about').removeClass('active');
        $('.block-buy-select').removeClass('active');

        $(this).addClass('active');
        $('.buy-about-6').addClass('active');
        $('.buy-select-6').addClass('active');
    });

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

    //shop slider
    $('.shop-slider').slick({
        infinite: true,
        speed: 1000,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.shop-prev'),
        nextArrow: $('.shop-next'),
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]
    });

    //news slider
    $('.news-slider').slick({
        infinite: true,
        speed: 1000,
        dots: false,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: $('.news-prev'),
        nextArrow: $('.news-next'),
    });


    /* tabs */
    $('ul.tabs-nav li:first').addClass ('active');
    $('ul.tabs-content li:first').addClass('active');

    $('ul.tabs-nav').delegate('li:not(.active)', 'click', function() {

        $(this).addClass('active').siblings().removeClass('active')
            .parents('.tabs').find('ul.tabs-content li').hide()
            .eq($(this).index()).fadeIn('slow');
    })

    /* faq */
    $('.content-faq h4').on('click', function () {
        $(this).toggleClass('active');
        $(this).next().slideToggle('slow');
    })

});

$(function () {
    /* mixit up */
    var containerEl = document.querySelector('.shop-slider');
    var mixer = mixitup(containerEl);
});
