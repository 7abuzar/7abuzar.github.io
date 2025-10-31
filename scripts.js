// script.js
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');
const yearEl = document.getElementById('year');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
  });
}

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav.classList.remove('show');
    }
  });
});

// set footer year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
