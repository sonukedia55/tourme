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
window.dataLayer = window.dataLayer || [];
function showPopUp(type){   
    if(type=="download"){
        window.dataLayer.push({'event': 'download-click'});
        document.querySelector('.contentpop').innerHTML = "Thank you for your interest in Fleebee. We are sorry that all out beta phase slots are taken!<br><br>Please subsribe using your contact, we will reach you with priority when the next wave opens.<br><br><a onclick=toTop('subscribe-page') >Subscribe</a>";
    }
    if(type=="subscribe"){
        document.querySelector('.contentpop').innerHTML = "Thank you for your interset in Fleebee. Your email has been successfully added!";
    }
    document.getElementById('sidepop').style.display = 'block';
}

function saveSubscribe(){
    var em = document.getElementById('mc-email').value;
    if(em && em.length){
        window.dataLayer.push({'event': 'subscribed-click','value':em});
        document.getElementById('mc-email').value = "";
        showPopUp("subscribe");
    }
   // console.log(em)
}