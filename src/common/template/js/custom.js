$(document).ready(function() {
    "use strict";
    var video_data;
    var video_frame;
    var top_bar;
    var nav_bar;
    var secondary_bar;


    $('#menu').on('click', function() {
        if ($(window).width() <= 767) {
            $('.navigation').slideToggle('normal');
        }
        return false;
    });


    $('.navigation>ul> li >a').on('click', function() {
        if ($(window).width() <= 767) {
            $('.navigation>ul> li').removeClass('on');
            $('.navigation>ul> li> ul').slideUp('normal');
            if ($(this).next().next('ul').is(':hidden') == true) {
                $(this).parent('li').addClass('on');
                $(this).next().next('ul').slideDown('normal');
            }
        }
        //return false;
    });

    var top_bar = $('#top-bar').height();
    var nav_bar = $('.nav-wrap').height();
    var secondary_bar = $('.secondary-header').height();
    var $headerOne = $('.header-1');
    var $headerTwo = $('.header-2');
    if ($('.header-style').hasClass('fix-header')) {
        $('body').addClass('p-top');
    }

    $(window).scroll(function () {
        if ($headerTwo.hasClass('fix-header')) {
            if ($(window).scrollTop() >= secondary_bar) {
                $headerTwo.addClass('fix');

            } else {
                $headerTwo.removeClass('fix');
            }
        }
        if ($headerOne.hasClass('fix-header')) {
            if ($(window).scrollTop() >= top_bar) {
                $headerOne.addClass('fix');
            } else {
                $headerOne.removeClass('fix');
            }
        }

    });

});

$(window).on('load', function() {
    $("#preloader").fadeOut();

    if ($('#isotope').length) {
        // init Isotope
        var $grid = $('.isotope').isotope({
            itemSelector: '.item	',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 0
            }
        });
        // filter items on button click
        $('.filter-button-group').on('click', 'a', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue
            });
            var text_value = $(this).text();
            $('.doctor-specialist span').text(text_value);
        });
    }
    if ($('.masonry').length) {
        // init Isotope
        var $grid = $('.masonry').isotope({
            itemSelector: '.item	',
            percentPosition: true,
            layoutMode: 'fitRows',
            fitRows: {
                gutter: 0
            }
        });
    }
});

