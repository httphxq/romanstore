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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("signup-form");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const data = {
            name: document.getElementById("name").value.trim(),
            telegram: document.getElementById("telegram").value.trim(),
            event: document.getElementById("event").value
        };

        if (!data.name || !data.telegram) {
            alert("Заполните все поля");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                alert("Вы успешно записались!");
                form.reset();
            } else {
                alert(result.error || "Ошибка записи");
            }
        } catch (error) {
            alert("Ошибка соединения с сервером");
            console.error(error);
        }
    });
});