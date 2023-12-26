$(function(){
    'use strict';

    var winH = $(window).height();
    let upperH =$('.upper-bar').innerHeight();
    let navH = $('.navbar').innerHeight();

    $('.slider, .carousel-item').height(winH-(upperH+navH));

    $('.featured-work ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class')=== 'all'){
            $('.shuffle-images .col-md').css('opacity','1');
        }else{
            $('.shuffle-images .col-md').css('opacity','0.09');
            $($(this).data('class')).css('opacity','1');
        }
    });
});