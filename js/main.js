const responsive = {
    0: {
        items: 1
    },
    320: {
        items: 1
    },
    560: {
        items: 2
    },
    960: {
        items: 3
    }
}

$(document).ready(function () {

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /** click event on toggle menu */
    $toggleCollapse.click(function () {
        $nav.toggleClass('collapse');
    })

    // owl-crousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });


    // click to scroll top
    $('.move-up span').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })

    // AOS Instance
    AOS.init();

});

function function1() {
    window.location.assign("https://www.w3schools.com")
}

function function2() {
    window.location.assign("https://www.instagram.com/")
}

function function3() {
    window.location.assign("https://www.facebook.com")
}

function readMore1() {
    window.location.assign("https://www.facebook.com")
}

function readMore2() {
    window.location.assign("https://www.gmail.com")
}

function readMore3() {
    window.location.assign("https://www.watsapp.com")
}

function readMore4() {
    window.location.assign("https://www.youtube.com")
}