// ── Sticky header ──────────────────────────────
const header = document.getElementById("siteHeader");
const onScroll = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ── Mobile nav toggle ──────────────────────────
const navToggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.classList.toggle("active", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});

// Close nav on link click
nav.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

// ── Smooth scroll ──────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  });
});

// ── Reveal on scroll ──────────────────────────
const revealEls = document.querySelectorAll(
  ".tl-item, .skill-card, .edu-card, .spotlight-item, .stat-box, .about-text-col p",
);

revealEls.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        const siblings = [
          ...entry.target.parentElement.querySelectorAll(".reveal"),
        ];
        const idx = siblings.indexOf(entry.target);
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, idx * 80);
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
);

revealEls.forEach((el) => observer.observe(el));

// ── Footer year ────────────────────────────────
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Contact form (demo handler) ────────────────
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = "Message sent ✓";
    btn.disabled = true;
    btn.style.background = "#2a7a45";
    btn.style.boxShadow = "none";
    setTimeout(() => {
      btn.textContent = "Send message →";
      btn.disabled = false;
      btn.style.background = "";
      btn.style.boxShadow = "";
      form.reset();
    }, 3500);
  });
}
