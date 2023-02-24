// Fade in effect for entries on scroll
let entries = document.querySelectorAll(".entry");

function fadeInEntries() {
    entries.forEach((entry) => {
        if (entry.getBoundingClientRect().top < window.innerHeight - 50) {
            entry.style.opacity = 1;
            entry.style.transform = "translateY(0)";
        } else {
            entry.style.opacity = 0;
            entry.style.transform = "translateY(50px)";
        }
    });
}

window.addEventListener("load", fadeInEntries);
window.addEventListener("scroll", fadeInEntries);
window.addEventListener("resize", fadeInEntries);
