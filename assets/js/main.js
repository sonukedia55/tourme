(function ($) {

    "use strict";
    $(".carousel-inner .item:first-child").addClass("active");
    /* Mobile menu click then remove
    ==========================*/
    $(".mainmenu-area #primary_menu li a").on("click", function () {
        $(".navbar-collapse").removeClass("in");
    });

    if(typeof $().owlCarousel == "function"){
        $('.gallery-slide').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1280: {
                    items: 3
                },
                1500: {
                    items: 4
                }
            }
        });
        /* testimonials Slider Active
        =============================*/
        $('.team-slide').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="lnr lnr-chevron-left"></i>', '<i class="lnr lnr-chevron-right"></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });

        
    }

    $('.featureeach').on('mouseover',function(e){
        let itm = e.currentTarget.getAttribute('data-item');
        if(itm){
            $('#myCarouselF').carousel(parseInt(itm))
        }
    })
    
    $(".toggole-boxs").accordion();
   

    $('.mainmenu-area a').click(function(e) {
        $('html, body').animate({
            scrollTop: $("#"+e.currentTarget.dataset['id']).offset().top - 80
        }, 1000);
    });

    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        $('.preloader').fadeOut(500);
        /*WoW js Active
        =================*/
        new WOW().init({
            mobile: false,
        });
    });
})(jQuery);

function toTop(section){
    console.log("jey")
    $('html, body').animate({
        scrollTop:  $("#"+section).offset().top - 80
    }, 1000);
}
