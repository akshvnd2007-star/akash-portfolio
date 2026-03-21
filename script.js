// Scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if (cardTop < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});

// Typing animation
const text = "Developer | Programmer | Tech Enthusiast";
let i = 0;

function typeEffect() {
    const el = document.getElementById("typing");
    if (!el) return;
    if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();
