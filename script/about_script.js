
/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, .intro', { origin: 'top' });
ScrollReveal().reveal('.about-content p', { origin: 'right' });
ScrollReveal().reveal('.about img, .bottom', { origin: 'bottom' });
ScrollReveal().reveal('.prof', { origin: 'left' });

/*-------------------------------------- Typed Js --------------------------------------------*/

const typed = new  Typed('.multitext', {
    strings: ['Graphic Designer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});