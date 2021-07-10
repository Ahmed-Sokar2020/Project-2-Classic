/*  Global $ Alert Consol */
$(function() {
    "use strict";

    // Adjust Header Height
    var myHeader = $(".header"),
        mySlider = $(".bxslider")

    myHeader.height($(window).height());

    $(window).resize(function() {
        myHeader.height($(window).height());

        mySlider.each(function() {
            $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
        });
    });

    // Links Add Active Class 
    $(".links li a").click(function() {
        $(this).parent().addClass("active").siblings().removeClass("active");
    });

    // Make The Items List In Center
    mySlider.each(function() {
        $(this).css("paddingTop", ($(window).height() - $(".bxslider li").height()) / 2);
    });

    // Trigger The BX Slider To Remove Bullets
    mySlider.bxSlider({
        pager: false
    });

    // Make Smooth Scroll
    $(".links li a").click(function() {
        $("html, body").animate({
            scrollTop:$("#" + $(this).data("value")).offset().top
        }, 1000);
       
    });

    // Trigger The BX Slider To Remove Bullets
    $(".bxslider2").bxSlider({
        pager: true
    });

   // Trigger The Mixitup To Make Shuffle
   mixitup(".gallery");

   // A djust Shuffle Links
   $(".shuffle li").click(function() {
       $(this).addClass("active").siblings().removeClass("active");
   })

    // Trigger The NiCE Scroll
    $("body").niceScroll({
        cursorcolor:"#1BBC9A",
        cursorwidth:"5px",
        cursorborder: "1px solid #1BBC9A", 
        cursorborderradius: 0,
    });
    
})
