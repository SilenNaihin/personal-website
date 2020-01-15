"use strict";

//Preloader
var preloader = $('.preloader');
$(window).on('load', function() {
    var preloaderFadeOutTime = 500;

    function hidePreloader() {
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

(function($) {
    /*global jQuery $*/

    //portfolio tab nativation

    $(function() {
        $('#portfolio div').not(".highlights").fadeOut();
    });
    
    $(function() {
        var selectedClass = "";
        $(".fil-cat").on('click', function() {
            selectedClass = $(this).attr("data-rel");
            $("#portfolio").fadeTo(100, 0.1);
            $("#portfolio div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("." + selectedClass + "_").fadeIn(0).addClass('scale-anm');
                $("." + selectedClass).fadeIn(500);
                $("#portfolio").fadeTo(300,1);
            }, 300);
        });
    });


}(jQuery));
