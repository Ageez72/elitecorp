$(function () {
   'use strict'
    // Calc Slider Height
    var winH    = $(window).height(),
        upperH  = $('.upper-bar').innerHeight(),
        navbarH = $('.navbar').innerHeight();
    
    $('.slider, .carousel-item').height(winH - (upperH + navbarH));
    
    // Featured Shuffle
    
    $('.featured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === '.all') {
            $('.shuffle-imgs .col-md').css('opacity', 1);   
        } else {
            $('.shuffle-imgs .col-md').css('opacity', '.09');
            $($(this).data('class')).parent().css('opacity', 1);
        }
    });
    
    // prepand Font Awesome Icon
    $(".footer .helpful-links ul li").prepend("<i class=\"fa fa-chevron-right\"></i>");
    
});