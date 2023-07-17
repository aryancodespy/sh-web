
/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.header, .intro', { origin: 'top' });
ScrollReveal().reveal('.prof, .about-content, .fade-heading', { origin: 'right' });
ScrollReveal().reveal('.about img, .work-item, .btn, footer', { origin: 'bottom' });
ScrollReveal().reveal('.btn-container, .front-heading', { origin: 'left' });

/*-------------------------------------- Typed Js --------------------------------------------*/

const typed = new  Typed('.multitext', {
    strings: ['Graphic Designer', 'Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});