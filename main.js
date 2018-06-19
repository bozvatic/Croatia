// Navbar Burger Icon

document.addEventListener('DOMContentLoaded', function() {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

        // Add a click event on each of them
        $navbarBurgers.forEach(function($el) {
            $el.addEventListener('click', function() {

                // Get the target from the "data-target" attribute
                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');

            });
        });
    }

});

// Slider

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000);
}

// Arrow Up

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $(".gore").fadeIn();
        } else {
            $(".gore").fadeOut();
        }
    });
    $("gore").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
});

// Animation Scroll Reveal

window.sr = ScrollReveal();
sr.reveal('.central', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    delay: 2000
});
sr.reveal('.slavonia', {
    duration: 2000,
    origin: 'top',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.zagreb', {
    duration: 2000,
    origin: 'right',
    distance: '300px',
    delay: 2000
});
sr.reveal('.gradovi', {
    duration: 3000,
    distance: '300px',
    origin: 'left'
});
sr.reveal('.plaze', {
    duration: 3000,
    distance: '400px',
    origin: 'right'
});
sr.reveal('.istria', {
    duration: 2000,
    origin: 'left',
    delay: '2000',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.dalmatia', {
    duration: 2000,
    origin: 'bottom',
    distance: '300px',
    viewFactor: 0.2
});
sr.reveal('.lika', {
    duration: 2000,
    origin: 'right',
    delay: '2800',
    distance: '300px',
    viewFactor: 0.2
});
