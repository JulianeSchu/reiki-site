// ================================
// MENU MOBILE
// ================================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-link");

function closeMenu() {
  menuToggle.classList.remove("open");
  nav.classList.remove("open");
  document.body.classList.remove("menu-open");
  menuToggle.setAttribute("aria-expanded", "false");
}

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

// ================================
// HEADER AO ROLAR
// ================================
const header = document.getElementById("header");

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 30);
}

window.addEventListener("scroll", updateHeader);
updateHeader();

// ================================
// LINK ATIVO DO MENU
// ================================
const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
  const scrollPosition = window.scrollY + 160;
  let currentSection = "inicio";

  sections.forEach((section) => {
    if (scrollPosition >= section.offsetTop) {
      currentSection = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );
  });
}

window.addEventListener("scroll", updateActiveLink);

// ================================
// ANIMAÇÃO AO ENTRAR NA TELA
// ================================
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries, observerInstance) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observerInstance.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => observer.observe(element));

// ================================
// BOTÃO VOLTAR AO TOPO
// ================================
const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backToTop.classList.toggle("show", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// ================================
// FORMULÁRIO
// ================================
// Este formulário ainda não envia dados para um servidor.
// Depois podemos conectar ao WhatsApp, Formspree, Google Forms,
// e-mail ou outro serviço.
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = contactForm.elements.nome.value.trim();

  formMessage.textContent =
    `Obrigada${name ? `, ${name}` : ""}! Sua mensagem foi preenchida. Em breve podemos conectar este formulário a um canal real de atendimento.`;

  contactForm.reset();
});

// ================================
// ANO AUTOMÁTICO
// ================================
document.getElementById("year").textContent = new Date().getFullYear();
