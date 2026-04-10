'use strict';

/* =========================
   SAFE HELPERS
========================= */
const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

/* =========================
   GSAP INIT (SAFE)
========================= */
if (typeof gsap !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);

  gsap.defaults({
    ease: "power3.out",
    duration: 1
  });
}

/* =========================
   HERO ANIMATION
========================= */
(function initHero() {
  if (typeof gsap === 'undefined') return;

  const hero = $('.hero');
  if (!hero) return;

  const tl = gsap.timeline();

  tl
    .from(".hero__badge", { y: 40, opacity: 0 })
    .from(".hero__headline span", {
      y: 80,
      opacity: 0,
      stagger: 0.08
    }, "-=0.5")
    .from(".hero__sub", { y: 40, opacity: 0 }, "-=0.5")
    .from(".hero__actions", { y: 40, opacity: 0 }, "-=0.5")
    .from(".hero__bg-img", { scale: 1.15, duration: 2 }, 0);
})();

/* =========================
   PARALLAX HERO
========================= */
(function initParallax() {
  if (typeof gsap === 'undefined') return;

  const bg = $('.hero__bg-img');
  if (!bg) return;

  gsap.to(bg, {
    yPercent: 20,
    ease: "none",
    scrollTrigger: {
      trigger: ".hero",
      start: "top top",
      end: "bottom top",
      scrub: true
    }
  });
})();

/* =========================
   NAVBAR SCROLL
========================= */
(function initNavbarScroll() {
  if (typeof ScrollTrigger === 'undefined') return;

  const nav = $('#navbar');
  if (!nav) return;

  ScrollTrigger.create({
    start: "top -80",
    onEnter: () => nav.classList.add("scrolled"),
    onLeaveBack: () => nav.classList.remove("scrolled")
  });
})();

/* =========================
   REVEAL ELEMENTS
========================= */
(function initReveal() {
  if (typeof gsap === 'undefined') return;

  $$('.fade-in-up').forEach(el => {
    if (el.closest('.cards-grid')) return;

    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: el,
        start: "top 85%"
      }
    });
  });
})();

/* =========================
   CARDS STAGGER
========================= */
(function initCards() {
  if (typeof gsap === 'undefined') return;

  $$('.cards-grid').forEach(grid => {
    const cards = $$('.card', grid);

    gsap.from(cards, {
      y: 60,
      opacity: 0,
      stagger: 0.12,
      scrollTrigger: {
        trigger: grid,
        start: "top 80%"
      }
    });
  });
})();

/* =========================
   COUNTER
========================= */
(function initCounter() {
  if (typeof gsap === 'undefined') return;

  const el = $('#counterValue');
  const section = $('#social-proof');

  if (!el || !section) return;

  const obj = { value: 0 };

  gsap.to(obj, {
    value: 32,
    duration: 2,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    },
    onUpdate: () => {
      el.textContent = Math.floor(obj.value);
    }
  });
})();

/* =========================
   PROGRESS BAR
========================= */
(function initProgress() {
  if (typeof gsap === 'undefined') return;

  const bar = $('#spProgressBar');
  const section = $('#social-proof');

  if (!bar || !section) return;

  gsap.to(bar, {
    width: "64%",
    duration: 1.5,
    scrollTrigger: {
      trigger: section,
      start: "top 80%"
    }
  });
})();

/* =========================
   SCROLL TOP
========================= */
(function initScrollTop() {
  const btn = $('#scrollTop');
  if (!btn) return;

  if (typeof ScrollTrigger !== 'undefined') {
    ScrollTrigger.create({
      start: 300,
      onEnter: () => btn.hidden = false,
      onLeaveBack: () => btn.hidden = true
    });
  }

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* =========================
   NAVBAR MOBILE
========================= */
(function initNavbarMobile() {
  const toggle = $('#navToggle');
  const menu   = $('#navMenu');

  if (!toggle || !menu) return;

  const links = $$('.navbar__link, .navbar__cta', menu);

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');

    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen);
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
    });
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
    }
  });
})();

/* =========================
   CANVAS PARTICLES
========================= */
(function initCanvas() {
  const canvas = $('#heroCanvas');
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
      len: Math.random() * 100 + 40,
      speed: Math.random() * 5 + 2,
      opacity: Math.random() * 0.15 + 0.05
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
      ctx.lineTo(p.x + p.len, p.y);
      ctx.strokeStyle = `rgba(106,180,11,${p.opacity})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      p.x += p.speed;

      if (p.x > canvas.width) {
        p.x = -p.len;
        p.y = Math.random() * canvas.height;
      }
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  init();
  draw();

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    init();
    draw();
  });
})();

/* =========================
   FORM
========================= */
(function initForm() {
  const form = $('#signupForm');
  if (!form) return;

  const name  = $('#fieldName');
  const email = $('#fieldEmail');
  const errorName  = $('#errorName');
  const errorEmail = $('#errorEmail');
  const btn   = $('#submitBtn');
  const success = $('#formSuccess');

  function validateName(v) {
    if (!v.trim()) return 'Informe seu nome';
    if (v.length < 2) return 'Nome muito curto';
    return '';
  }

  function validateEmail(v) {
    if (!v.trim()) return 'Informe seu e-mail';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)) return 'E-mail inválido';
    return '';
  }

  function setError(input, el, msg) {
    input.classList.toggle('has-error', !!msg);
    el.textContent = msg;
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const e1 = validateName(name.value);
    const e2 = validateEmail(email.value);

    setError(name, errorName, e1);
    setError(email, errorEmail, e2);

    if (e1 || e2) return;

    btn.disabled = true;
    btn.textContent = 'Enviando...';

    setTimeout(() => {
      form.hidden = true;
      success.hidden = false;
    }, 800);
  });
})();