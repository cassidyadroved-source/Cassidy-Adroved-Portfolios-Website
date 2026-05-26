document.addEventListener("DOMContentLoaded", () => {
    /* hero on load */
    const heroItems = document.querySelectorAll(".hero .reveal, .hero .mask-reveal");
  
    heroItems.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("active");
      }, index * 180);
    });
  
    /* everything else on scroll */
    const reveals = document.querySelectorAll(".reveal, .mask-reveal");
  
    const revealOnScroll = () => {
      const trigger = window.innerHeight * 0.72;
  
      reveals.forEach((el) => {
        const top = el.getBoundingClientRect().top;
  
        if (top < trigger) {
          el.classList.add("active");
        }
      });
    };
  
    revealOnScroll();
    window.addEventListener("scroll", revealOnScroll, { passive: true });
  });


const toggle = document.querySelector(".dark-mode");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-theme");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark-mode-theme") ? "dark" : "light"
  );
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode-theme");
}

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  navToggle.classList.toggle("active");


});


