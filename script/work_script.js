
/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header ', { origin: 'top' });
ScrollReveal().reveal('.fade-heading, .right', { origin: 'right' });
ScrollReveal().reveal('.bottom', { origin: 'bottom' });
ScrollReveal().reveal('.front-heading, .left', { origin: 'left' });

/*-------------------------------------- Typed Js --------------------------------------------*/

const typed = new  Typed('.multitext', {
    strings: ['Graphic Designer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});