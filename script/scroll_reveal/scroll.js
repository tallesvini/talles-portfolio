ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.scroll_animation_1',{delay: 175, duration: 1500, opacity: 0, distance: "50%", origin: "bottom", reset: true});
ScrollReveal().reveal('.scroll_animation_2', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.scroll_animation_3', { delay: 700, origin: 'right' });
ScrollReveal().reveal('.scroll_animation_4', { delay: 500, origin: 'bottom', interval: 200 });
ScrollReveal().reveal('.scroll_animation_5', { delay: 500, origin: 'top' });
ScrollReveal().reveal('.scroll_animation_6', { delay: 500, origin: 'left', interval: 200 });
ScrollReveal().reveal('.scroll_animation_7', { duration: 800, distance: '50px', easing: 'ease-out', origin: 'bottom', reset: true , scale: 1 ,viewFactor: 0, afterReveal: revealChildren,}, 150);

ScrollReveal().reveal('.scroll_animation_8',{delay: 175, duration: 1500, opacity: 0, distance: "80%", origin: "left", reset: true});