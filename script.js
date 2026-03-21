// Fade-in animation
const cards = document.querySelectorAll(".card");

function showCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
}

window.addEventListener("scroll", showCards);
window.addEventListener("load", showCards);

// Mobile menu
function toggleMenu() {
    document.querySelector("nav").classList.toggle("active");
}

// Dark/light toggle
function toggleTheme() {
    document.body.classList.toggle("light");
}
