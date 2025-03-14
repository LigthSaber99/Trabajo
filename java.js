document.addEventListener("DOMContentLoaded", function() {
    const hero = document.getElementById("hero");
    hero.style.opacity = 0;
    hero.style.transition = "opacity 2s";
    setTimeout(() => hero.style.opacity = 1, 500);
});