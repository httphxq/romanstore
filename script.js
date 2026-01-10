document.querySelectorAll('[data-target]').forEach(link => {
    link.addEventListener('click', () => {
        const targetId = link.dataset.target;
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

const curtain = document.querySelector('.top-curtain');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const maxFade = 1000; 

    let opacity = 1 - scrollY / maxFade;
    if (opacity < 0) opacity = 0;

    curtain.style.opacity = opacity;
});
