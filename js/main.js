'use strict';

/* ─── Constants ─────────────────────────────────────────── */
const PRIMARY_RGB = '106, 180, 11'; // keep in sync with --primary in styles.css

/* ─── Navbar ────────────────────────────────────────────── */
function initNavbar() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');

  if (!toggle || !menu) return;

  const links = menu.querySelectorAll('.navbar__link, .navbar__cta');

  // Hamburguer toggle
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
  });

  // Fechar menu ao clicar em link
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Fechar menu com Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();
    }
  });

  // Active state por scroll (Intersection Observer nas seções)
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(l => l.classList.remove('is-active'));
          const active = menu.querySelector(`a[href="#${entry.target.id}"]`);
          if (active) active.classList.add('is-active');
        }
      });
    },
    { rootMargin: '-40% 0px -55% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ─── Canvas — Partículas de velocidade ─────────────────── */
function initCanvas() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let raf;

  function resize() {
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 120 + 40,
      speed: Math.random() * 6 + 3,
      opacity: Math.random() * 0.15 + 0.04,
      width: Math.random() * 1.5 + 0.5,
    };
  }

  function init() {
    particles = Array.from({ length: 30 }, createParticle);
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      ctx.lineTo(p.x + p.length, p.y);
      ctx.strokeStyle = `rgba(${PRIMARY_RGB}, ${p.opacity})`;
      ctx.lineWidth = p.width;
      ctx.stroke();

      p.x += p.speed;

      if (p.x > canvas.width + p.length) {
        p.x = -p.length - Math.random() * 200;
        p.y = Math.random() * canvas.height;
      }
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    cancelAnimationFrame(raf);
    resizeTimer = setTimeout(() => { resize(); init(); draw(); }, 120);
  });
}

/* ─── Parallax ───────────────────────────────────────────── */
function initParallax() {
  const img = document.getElementById('heroBgImg');
  if (!img) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (window.innerWidth < 768) {
      img.style.transform = '';
      return;
    }
    if (!ticking) {
      requestAnimationFrame(() => {
        img.style.transform = `translateY(${window.scrollY * 0.4}px)`;
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* ─── Intersection Observer — fade-in-up ────────────────── */
function initObserver() {
  const els = document.querySelectorAll('.fade-in-up');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  els.forEach(el => observer.observe(el));
}

/* ─── Init ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
});
