// Fade-in animation on scroll
document.addEventListener("scroll", () => {
    const elements = document.querySelectorAll(".mv-card, .team-member");
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});
