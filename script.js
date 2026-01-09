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

