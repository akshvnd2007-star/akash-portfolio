Replace your entire code with this:

// Show cards on load + scroll
const cards = document.querySelectorAll(".card");

function showCards() {
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < window.innerHeight) {
            card.classList.add("show");
        }
    });
}

// Run on load
window.addEventListener("load", showCards);

// Run on scroll
window.addEventListener("scroll", showCards);


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
