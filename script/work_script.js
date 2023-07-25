
/* ---------------------------------Scroll Reveal ------------------------------- */
ScrollReveal({ 
    reset: false,
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


// JavaScript code
const videoElement = document.getElementById("video");

// Function to toggle fullscreen mode
function toggleFullScreen() {
  if (!document.fullscreenElement) {
    // If the video is not in fullscreen, make it fullscreen
    if (videoElement.requestFullscreen) {
      videoElement.requestFullscreen();
    } else if (videoElement.mozRequestFullScreen) {
      videoElement.mozRequestFullScreen();
    } else if (videoElement.webkitRequestFullscreen) {
      videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
      videoElement.msRequestFullscreen();
    }
  } else {
    // If the video is already in fullscreen, exit fullscreen
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }
}

// Add click event listener to the play button
videoElement.addEventListener("click", function () {
  if (videoElement.paused) {
    // If the video is paused, play it and toggle fullscreen
    videoElement.play().then(() => toggleFullScreen());
  } else {
    // If the video is playing, toggle fullscreen directly
    toggleFullScreen();
  }
});
