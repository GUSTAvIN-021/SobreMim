window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("is-hidden");
});

document.getElementById("year").textContent =
    new Date().getFullYear();


const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("is-open");
    mobileMenu.classList.toggle("is-open");
});

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    navbar.classList.toggle(
        "is-scrolled",
        window.scrollY > 50
    );
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("[data-reveal]").forEach(el => {
    observer.observe(el);
});

document.querySelectorAll(".skill-fill").forEach(bar => {
    const width = bar.dataset.width;
    bar.style.width = width + "%";
});

const typingText = document.getElementById("typingText");

const texts = [
    "Desenvolvedor Web",
    "Estudante de Engenharia",
    "Apaixonado por IA"
];

let textIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < texts[textIndex].length) {
        typingText.textContent += texts[textIndex][charIndex];
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = "";
            charIndex = 0;
            textIndex = (textIndex + 1) % texts.length;
            type();
        }, 2000);
    }
}

type();

emailjs.init({
    publicKey: "XVF1OXggan61t4ylc"
});

const contactForm = document.getElementById("contactForm");
const successMessage = document.getElementById("formSuccess");

contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        await emailjs.sendForm(
            "service_fogw7ot",
            "template_bab1xgf",
            contactForm
        );

        successMessage.classList.add("is-visible");
        contactForm.reset();

    } catch (error) {
        console.error("Erro:", error);
        alert("Não foi possível enviar a mensagem.");
    }
});

console.log("SCRIPT CARREGOU");