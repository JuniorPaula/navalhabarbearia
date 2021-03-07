 window.addEventListener('scroll', function() {
    let header = document.querySelector(".navbar");
    header.classList.toggle("sticky", window.scrollY > 0)
})

$(document).ready(function() {

    // Scroll pra link interno
    let navBtn = $('.nav-item');

    let bannerSection = $('#home');
    let aboutSection = $('#about-area');
    let serviceSection = $('#service-area');
    let teamSection = $('#team-area');
    let contactSetion = $('#contact-area');

    let scrollTo = '';

    $(navBtn).click(function() {

        let btnId = $(this).attr('id');

        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'service-menu') {
            scrollTo = serviceSection;
        } else if(btnId == 'team-menu') {
            scrollTo = teamSection;
        } else if(btnId == 'contact-menu') {
            scrollTo = contactSetion;
        } else {
            scrollTo = bannerSection;
        }

        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);


    });

    // Scroll animate

    (function() {

        let offset = $(window).height() * 3/4;

        function animeScroll() {
            let documentTop = $(document).scrollTop();

            $('.anime_left').each(function() {
                let top = $(this).offset().top;
                if(documentTop > top - offset) {
                    $(this).addClass('anime_start');
                } else {
                    $(this).removeClass('anime_start');
                }
            });

            $('.anime_right').each(function() {
                let top = $(this).offset().top;
                if(documentTop > top - offset) {
                    $(this).addClass('anime_start');
                } else {
                    $(this).removeClass('anime_start');
                }
            });

        }

        animeScroll();

        $(document).scroll(function() {
            animeScroll();
        });


    }());


});
