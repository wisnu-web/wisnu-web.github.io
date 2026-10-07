// ==========================================
// WISNU PERSONAL WEBSITE - JAVASCRIPT
// ==========================================


// ===== TYPING EFFECT =====

const typingText = document.getElementById("typing");

const texts = [
    "Informatics Student",
    "Future Web Developer",
    "Problem Solver",
    "Technology Enthusiast"
];

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

    if (!typingText) return;

    const currentText = texts[textIndex];

    if (!deleting) {

        typingText.textContent =
            currentText.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentText.length) {

            deleting = true;

            setTimeout(typingEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentText.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length) {
                textIndex = 0;
            }
        }
    }

    setTimeout(
        typingEffect,
        deleting ? 50 : 100
    );
}

typingEffect();


// ==========================================
// CURSOR GLOW
// ==========================================

const cursorGlow = document.createElement("div");

cursorGlow.classList.add("cursor-glow");

document.body.appendChild(cursorGlow);

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left =
        event.clientX + "px";

    cursorGlow.style.top =
        event.clientY + "px";

});


// ==========================================
// SCROLL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".card, .about-box, .project, .section-title"
    );

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {

    element.classList.add("hidden");

    observer.observe(element);

});


// ==========================================
// NAVBAR SCROLL
// ==========================================

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


// ==========================================
// DARK / LIGHT MODE
// ==========================================

const themeButton =
    document.getElementById("themeButton");

themeButton?.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (
        document.body.classList.contains("light-mode")
    ) {

        themeButton.textContent = "🌙";

        localStorage.setItem("theme", "light");

    } else {

        themeButton.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    }

});


// Simpan tema ketika website dibuka

if (localStorage.getItem("theme") === "light") {

    document.body.classList.add("light-mode");

    if (themeButton) {
        themeButton.textContent = "🌙";
    }

}


// ==========================================
// MOBILE MENU
// ==========================================

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.querySelector(".nav-links");

menuButton?.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


// Tutup menu setelah memilih halaman

document.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


// ==========================================
// PARTICLE BACKGROUND
// ==========================================

const canvas =
    document.createElement("canvas");

canvas.classList.add("particles");

document.body.prepend(canvas);

const ctx = canvas.getContext("2d");

let particles = [];

function resizeCanvas() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener(
    "resize",
    resizeCanvas
);


class Particle {

    constructor() {

        this.x =
            Math.random() * canvas.width;

        this.y =
            Math.random() * canvas.height;

        this.size =
            Math.random() * 2 + 1;

        this.speedX =
            (Math.random() - 0.5) * 0.5;

        this.speedY =
            (Math.random() - 0.5) * 0.5;

    }

    update() {

        this.x += this.speedX;
        this.y += this.speedY;

        if (
            this.x < 0 ||
            this.x > canvas.width
        ) {
            this.speedX *= -1;
        }

        if (
            this.y < 0 ||
            this.y > canvas.height
        ) {
            this.speedY *= -1;
        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            "rgba(0, 229, 255, 0.5)";

        ctx.fill();

    }

}


function createParticles() {

    particles = [];

    const amount =
        Math.min(
            Math.floor(
                window.innerWidth / 10
            ),
            120
        );

    for (let i = 0; i < amount; i++) {

        particles.push(
            new Particle()
        );

    }

}

createParticles();


function animateParticles() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    particles.forEach(particle => {

        particle.update();
        particle.draw();

    });

    requestAnimationFrame(
        animateParticles
    );

}

animateParticles();


// ==========================================
// CONSOLE
// ==========================================

console.log(
    "🚀 WISNU Website berhasil dijalankan!"
);