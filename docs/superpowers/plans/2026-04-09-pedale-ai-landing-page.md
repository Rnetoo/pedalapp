# Pedale-AI Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Mobile First HTML/CSS/JS landing page de pré-lançamento do Pedale-AI com funil de vendas, 9 seções, formulário de captura de leads e animações de ciclismo.

**Architecture:** Single-page com âncoras, arquivos separados (index.html / css/styles.css / js/main.js), sem frameworks ou dependências externas. CSS Mobile First com custom properties espelhando o design system do app. JS vanilla organizado em módulos de função.

**Tech Stack:** HTML5, CSS3 (custom properties, grid, flexbox, scroll-snap), JavaScript ES6+ (Canvas API, Intersection Observer, requestAnimationFrame), Inter via Google Fonts, imagens Unsplash via URL direta.

---

## Mapa de Arquivos

| Arquivo | Responsabilidade |
|---------|-----------------|
| `index.html` | Estrutura semântica completa, todas as 9 seções + navbar + footer |
| `css/styles.css` | Tokens CSS, reset, tipografia, layout Mobile First, animações CSS, todos os componentes |
| `js/main.js` | Canvas partículas, parallax, navbar, Intersection Observer, contador, carrossel, formulário |
| `assets/images/` | Placeholders Unsplash (URLs externas no HTML, pasta para imagens locais futuras) |

---

## Task 1: Estrutura base e tokens CSS

**Files:**
- Create: `index.html`
- Create: `css/styles.css`

- [ ] **Step 1: Criar index.html com estrutura semântica e head**

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Pedale-AI — O treinador de ciclismo com IA que cabe no bolso. Planos personalizados para MTB, Gravel e Speed. Pré-lançamento: R$14,90/mês." />
  <title>Pedale-AI — Seu Treinador de Ciclismo com IA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>
  <!-- Navbar -->
  <!-- Hero -->
  <!-- Problema -->
  <!-- Solução -->
  <!-- Funcionalidades -->
  <!-- App em Ação -->
  <!-- Modalidades -->
  <!-- Social Proof -->
  <!-- Pré-lançamento -->
  <!-- Footer -->
  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Criar css/styles.css com tokens, reset e tipografia base**

```css
/* ─── Tokens ─────────────────────────────────────────────── */
:root {
  --bg: #050508;
  --surface: #11101A;
  --surface-elevated: #1A1925;
  --border: #1C1C28;
  --border-light: #2A2A3A;
  --primary: #6AB40B;
  --primary-light: #7ECC12;
  --primary-dark: #4E8A00;
  --primary-muted: rgba(106, 180, 11, 0.12);
  --primary-glow: rgba(106, 180, 11, 0.25);
  --text-bright: #F5F0FF;
  --text-primary: #F0F0F5;
  --text-secondary: #7878A0;
  --text-muted: #4A4A68;
  --cta-bg: #EFFFED;
  --cta-text: #3D7A00;

  --radius-card: 16px;
  --radius-btn: 14px;
  --radius-chip: 20px;

  --screen-padding: 20px;
  --section-gap: 80px;
}

/* ─── Reset ──────────────────────────────────────────────── */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: var(--bg);
  color: var(--text-primary);
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 16px;
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

img {
  max-width: 100%;
  display: block;
}

a {
  color: inherit;
  text-decoration: none;
}

/* ─── Tipografia base ────────────────────────────────────── */
h1, h2, h3, h4 {
  color: var(--text-bright);
  line-height: 1.2;
  letter-spacing: -0.3px;
}

h1 { font-size: clamp(32px, 8vw, 64px); font-weight: 700; letter-spacing: -0.5px; }
h2 { font-size: clamp(24px, 5vw, 40px); font-weight: 700; }
h3 { font-size: clamp(18px, 3vw, 24px); font-weight: 700; }

p {
  color: var(--text-primary);
  font-size: clamp(15px, 2.5vw, 18px);
  line-height: 1.7;
}

/* ─── Utilitários ────────────────────────────────────────── */
.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--screen-padding);
}

.section {
  padding: var(--section-gap) 0;
}

.section--surface {
  background-color: var(--surface);
}

.label-uppercase {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* ─── Animações de entrada (controladas por JS) ──────────── */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.fade-in-up.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Reduced motion ─────────────────────────────────────── */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  .fade-in-up { opacity: 1; transform: none; transition: none; }
  canvas { display: none; }
}
```

- [ ] **Step 3: Verificar no browser que o fundo OLED e a fonte Inter carregam corretamente**

Abra `index.html` no browser. Esperado: página preta (#050508), sem conteúdo ainda — só o fundo correto.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: estrutura base e design tokens CSS"
```

---

## Task 2: Navbar

**Files:**
- Modify: `index.html` — seção `<!-- Navbar -->`
- Modify: `css/styles.css` — adicionar estilos da navbar
- Create: `js/main.js` — função `initNavbar()`

- [ ] **Step 1: Adicionar markup da navbar no index.html**

Substituir `<!-- Navbar -->` por:

```html
<nav class="navbar" id="navbar" aria-label="Navegação principal">
  <div class="container navbar__inner">
    <a href="#hero" class="navbar__logo" aria-label="Pedale-AI — página inicial">
      <span class="navbar__logo-text">Pedale<span class="navbar__logo-accent">-AI</span></span>
    </a>

    <button class="navbar__hamburger" id="navToggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="navMenu">
      <span></span><span></span><span></span>
    </button>

    <ul class="navbar__menu" id="navMenu" role="list">
      <li><a href="#problema" class="navbar__link">O Problema</a></li>
      <li><a href="#solucao" class="navbar__link">Solução</a></li>
      <li><a href="#funcionalidades" class="navbar__link">Funcionalidades</a></li>
      <li><a href="#modalidades" class="navbar__link">Modalidades</a></li>
      <li>
        <a href="#prelancamento" class="navbar__cta">
          Garantir vaga
        </a>
      </li>
    </ul>
  </div>
</nav>
```

- [ ] **Step 2: Adicionar estilos da navbar no styles.css**

```css
/* ─── Navbar ─────────────────────────────────────────────── */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background: rgba(5, 5, 8, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.navbar__logo-text {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-bright);
}

.navbar__logo-accent {
  color: var(--primary);
}

.navbar__hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  min-width: 44px;
  min-height: 44px;
  justify-content: center;
  align-items: center;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__hamburger.is-open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.navbar__hamburger.is-open span:nth-child(2) { opacity: 0; }
.navbar__hamburger.is-open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

.navbar__menu {
  display: none;
  flex-direction: column;
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: rgba(5, 5, 8, 0.97);
  border-bottom: 1px solid var(--border);
  padding: 16px 20px 24px;
  list-style: none;
  gap: 4px;
}

.navbar__menu.is-open {
  display: flex;
}

.navbar__link {
  display: block;
  padding: 10px 0;
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
  transition: color 0.2s;
  min-height: 44px;
  display: flex;
  align-items: center;
}

.navbar__link:hover,
.navbar__link.is-active {
  color: var(--primary);
}

.navbar__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: var(--cta-bg);
  color: var(--cta-text);
  font-size: 14px;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: var(--radius-btn);
  margin-top: 8px;
  min-height: 44px;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.navbar__cta:hover {
  transform: scale(1.02);
  box-shadow: 0 4px 20px var(--primary-glow);
}

/* Desktop */
@media (min-width: 768px) {
  .navbar__hamburger { display: none; }

  .navbar__menu {
    display: flex !important;
    flex-direction: row;
    position: static;
    background: transparent;
    border: none;
    padding: 0;
    gap: 8px;
    align-items: center;
  }

  .navbar__link { padding: 0 8px; min-height: auto; }
  .navbar__cta { margin-top: 0; }
}
```

- [ ] **Step 3: Criar js/main.js com initNavbar()**

```js
'use strict';

/* ─── Navbar ────────────────────────────────────────────── */
function initNavbar() {
  const toggle = document.getElementById('navToggle');
  const menu = document.getElementById('navMenu');
  const links = menu.querySelectorAll('.navbar__link');

  // Hamburguer toggle
  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Fechar menu ao clicar em link
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
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

/* ─── Init ──────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
});
```

- [ ] **Step 4: Verificar no browser**

Redimensione para mobile: hamburguer deve aparecer, clicar abre o menu com slide. Em desktop: links horizontais visíveis, CTA verde.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: navbar responsiva com hamburguer e active state"
```

---

## Task 3: Seção Hero com Canvas de partículas e Parallax

**Files:**
- Modify: `index.html` — seção `<!-- Hero -->`
- Modify: `css/styles.css` — estilos do hero
- Modify: `js/main.js` — funções `initCanvas()` e `initParallax()`

- [ ] **Step 1: Adicionar markup do Hero**

Substituir `<!-- Hero -->` por:

```html
<section class="hero" id="hero" aria-label="Apresentação">
  <canvas class="hero__canvas" id="heroCanvas" aria-hidden="true"></canvas>
  <div class="hero__bg" id="heroBg" role="img" aria-label="Ciclista em estrada">
    <img
      src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=1600&q=80"
      alt=""
      class="hero__bg-img"
      id="heroBgImg"
      aria-hidden="true"
    />
    <div class="hero__overlay" aria-hidden="true"></div>
  </div>

  <div class="container hero__content">
    <div class="hero__badge" aria-label="Informação de pré-lançamento">
      <span>50 VAGAS</span>
      <span class="hero__badge-sep" aria-hidden="true">·</span>
      <span>PRÉ-LANÇAMENTO</span>
      <span class="hero__badge-sep" aria-hidden="true">·</span>
      <span>R$14,90/mês</span>
    </div>

    <h1 class="hero__headline fade-in-up">
      Chega de pedalar<br />sem saber o que<br />está fazendo.
    </h1>

    <p class="hero__sub fade-in-up">
      Pedale-AI é o treinador de ciclismo com IA que monta seu plano,
      analisa seu esforço e evolui com você — direto no seu bolso.
    </p>

    <div class="hero__actions fade-in-up">
      <a href="#prelancamento" class="btn btn--primary">
        Quero ser avisado
      </a>
      <a href="#funcionalidades" class="btn btn--secondary">
        Ver funcionalidades
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos do Hero**

```css
/* ─── Botões globais ─────────────────────────────────────── */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 700;
  border-radius: var(--radius-btn);
  padding: 14px 28px;
  min-height: 48px;
  cursor: pointer;
  border: none;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  text-align: center;
}

.btn--primary {
  background: var(--cta-bg);
  color: var(--cta-text);
}

.btn--primary:hover {
  transform: scale(1.02);
  box-shadow: 0 6px 24px var(--primary-glow);
}

.btn--secondary {
  background: transparent;
  color: var(--text-primary);
  border: 1.5px solid var(--border-light);
}

.btn--secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
}

/* ─── Hero ───────────────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100svh;
  display: flex;
  align-items: center;
  padding-top: 60px; /* navbar height */
  overflow: hidden;
}

.hero__canvas {
  position: absolute;
  inset: 0;
  z-index: 2;
  pointer-events: none;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  will-change: transform;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: rgba(5, 5, 8, 0.78);
}

.hero__content {
  position: relative;
  z-index: 3;
  padding-top: 60px;
  padding-bottom: 80px;
}

.hero__badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--primary-muted);
  color: var(--primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: var(--radius-chip);
  border: 1px solid rgba(106, 180, 11, 0.25);
  margin-bottom: 24px;
}

.hero__badge-sep {
  opacity: 0.5;
}

.hero__headline {
  max-width: 700px;
  margin-bottom: 20px;
  transition-delay: 0.1s;
}

.hero__sub {
  max-width: 560px;
  color: var(--text-secondary);
  margin-bottom: 36px;
  transition-delay: 0.2s;
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition-delay: 0.3s;
}

@media (min-width: 480px) {
  .hero__actions {
    flex-direction: row;
    flex-wrap: wrap;
  }
}
```

- [ ] **Step 3: Adicionar initCanvas() e initParallax() no main.js**

Adicionar antes do bloco `Init`, após `initNavbar`:

```js
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
      ctx.strokeStyle = `rgba(106, 180, 11, ${p.opacity})`;
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

  window.addEventListener('resize', () => {
    cancelAnimationFrame(raf);
    resize();
    init();
    draw();
  });
}

/* ─── Parallax ───────────────────────────────────────────── */
function initParallax() {
  const img = document.getElementById('heroBgImg');
  if (!img) return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Desabilitar em mobile (performance)
  if (window.innerWidth < 768) return;

  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        img.style.transform = `translateY(${scrollY * 0.4}px)`;
        ticking = false;
      });
      ticking = true;
    }
  });
}
```

Atualizar o bloco `Init`:

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
});
```

- [ ] **Step 4: Verificar no browser**

Esperado: partículas verdes passando horizontalmente sobre a foto com overlay escuro. Em mobile, partículas presentes mas sem parallax. Scroll suave ao clicar no CTA.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: hero com canvas de partículas e parallax"
```

---

## Task 4: Intersection Observer — Animações de entrada + Seção Problema

**Files:**
- Modify: `index.html` — seção `<!-- Problema -->`
- Modify: `css/styles.css` — estilos da seção Problema
- Modify: `js/main.js` — função `initObserver()`

- [ ] **Step 1: Adicionar markup da seção Problema**

Substituir `<!-- Problema -->` por:

```html
<section class="section section--surface" id="problema" aria-labelledby="problema-titulo">
  <div class="container">
    <p class="label-uppercase fade-in-up">O problema</p>
    <h2 class="section__headline fade-in-up" id="problema-titulo">
      Você pedala. Mas está evoluindo?
    </h2>
    <p class="section__sub fade-in-up">
      A maioria dos ciclistas amadores treina com dedicação, mas sem estrutura.
      O resultado é esforço sem direção.
    </p>

    <div class="cards-grid cards-grid--3 problema__grid">
      <article class="card fade-in-up" style="--delay: 0.1s">
        <div class="card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
          </svg>
        </div>
        <h3 class="card__title">Treina no feeling</h3>
        <p class="card__text">Sem referência de intensidade, você pode estar sempre treinando forte demais — ou de menos.</p>
      </article>

      <article class="card fade-in-up" style="--delay: 0.2s">
        <div class="card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h3 class="card__title">Não conhece suas zonas de FC</h3>
        <p class="card__text">Frequência cardíaca é a ferramenta mais poderosa do ciclismo amador — e a mais ignorada.</p>
      </article>

      <article class="card fade-in-up" style="--delay: 0.3s">
        <div class="card__icon" aria-hidden="true">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>
          </svg>
        </div>
        <h3 class="card__title">Plano genérico do YouTube</h3>
        <p class="card__text">Treinos copiados da internet não consideram seu histórico, seu nível ou seus objetivos.</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos de seção e cards no styles.css**

```css
/* ─── Seções — padrão ────────────────────────────────────── */
.section__headline {
  margin: 12px 0 16px;
}

.section__sub {
  color: var(--text-secondary);
  max-width: 600px;
  margin-bottom: 48px;
}

/* ─── Grid de cards ──────────────────────────────────────── */
.cards-grid {
  display: grid;
  gap: 16px;
}

.cards-grid--3 {
  grid-template-columns: 1fr;
}

@media (min-width: 640px) {
  .cards-grid--3 { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .cards-grid--3 { grid-template-columns: repeat(3, 1fr); }
}

/* ─── Card base ──────────────────────────────────────────── */
.card {
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 24px;
  transition-delay: var(--delay, 0s);
}

.card__icon {
  color: var(--primary);
  margin-bottom: 16px;
}

.card__title {
  font-size: 17px;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 10px;
}

.card__text {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

- [ ] **Step 3: Adicionar initObserver() no main.js**

Adicionar antes do bloco `Init`:

```js
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
```

Atualizar bloco `Init`:

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
});
```

- [ ] **Step 4: Verificar no browser**

Ao scrollar até a seção Problema, os 3 cards devem aparecer com fade-in staggerado. Verificar que o Hero também usa fade-in-up corretamente no carregamento.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: seção problema + intersection observer fade-in"
```

---

## Task 5: Seção Solução — 3 Pilares

**Files:**
- Modify: `index.html` — seção `<!-- Solução -->`
- Modify: `css/styles.css` — estilos da solução

- [ ] **Step 1: Adicionar markup da seção Solução**

Substituir `<!-- Solução -->` por:

```html
<section class="section" id="solucao" aria-labelledby="solucao-titulo">
  <div class="container">
    <p class="label-uppercase fade-in-up">A solução</p>
    <h2 class="section__headline fade-in-up" id="solucao-titulo">Pedale-AI resolve isso.</h2>
    <p class="section__sub fade-in-up">
      Inteligência artificial aplicada ao ciclismo amador. Sem complicação, sem planilha.
    </p>

    <div class="cards-grid cards-grid--3 solucao__grid">
      <article class="card card--pillar fade-in-up" style="--delay: 0.1s">
        <div class="card__icon card__icon--large" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
          </svg>
        </div>
        <h3 class="card__title">Plano Personalizado por IA</h3>
        <p class="card__text">Seu plano semanal é gerado com base no seu nível, disponibilidade e objetivos. Atualizado conforme você evolui.</p>
      </article>

      <article class="card card--pillar fade-in-up" style="--delay: 0.2s">
        <div class="card__icon card__icon--large" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h3 class="card__title">Zonas de Treino Inteligentes</h3>
        <p class="card__text">Calcule suas 5 zonas de frequência cardíaca e treine na intensidade certa para cada objetivo.</p>
      </article>

      <article class="card card--pillar fade-in-up" style="--delay: 0.3s">
        <div class="card__icon card__icon--large" aria-hidden="true">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
          </svg>
        </div>
        <h3 class="card__title">Evolução Contínua</h3>
        <p class="card__text">O app aprende com seus treinos, monitora sua fadiga e ajusta a carga para que você evolua sem se machucar.</p>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos do pillar card**

```css
/* ─── Card pilar (solução) ───────────────────────────────── */
.card--pillar {
  text-align: center;
  border-color: var(--primary-muted);
  background: var(--surface);
  position: relative;
  overflow: hidden;
}

.card--pillar::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--primary), transparent);
}

.card__icon--large {
  margin: 0 auto 20px;
}
```

- [ ] **Step 3: Verificar no browser**

Os 3 pilares devem aparecer com ícone centralizado, linha verde no topo do card e stagger de fade-in ao scrollar.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: seção solução com 3 pilares"
```

---

## Task 6: Seção Funcionalidades

**Files:**
- Modify: `index.html` — seção `<!-- Funcionalidades -->`
- Modify: `css/styles.css` — estilos de feature

- [ ] **Step 1: Adicionar markup da seção Funcionalidades**

Substituir `<!-- Funcionalidades -->` por:

```html
<section class="section section--surface" id="funcionalidades" aria-labelledby="func-titulo">
  <div class="container">
    <p class="label-uppercase fade-in-up">Funcionalidades</p>
    <h2 class="section__headline fade-in-up" id="func-titulo">
      Tudo que você precisa.<br />Nada que você não usa.
    </h2>

    <div class="features">
      <article class="feature fade-in-up">
        <div class="feature__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1534787238916-9ba6764efd4f?w=800&q=80"
            alt="Ciclista consultando plano de treino no celular"
            class="feature__img"
            loading="lazy"
          />
        </div>
        <div class="feature__content">
          <span class="feature__num" aria-hidden="true">01</span>
          <h3 class="feature__title">Plano Semanal Adaptativo</h3>
          <p class="feature__text">A IA monta seu calendário de treinos considerando seus dias disponíveis, seu nível atual e sua meta. Cada semana, o plano evolui com você.</p>
        </div>
      </article>

      <article class="feature feature--reverse fade-in-up">
        <div class="feature__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80"
            alt="Ciclista descansando após treino"
            class="feature__img"
            loading="lazy"
          />
        </div>
        <div class="feature__content">
          <span class="feature__num" aria-hidden="true">02</span>
          <h3 class="feature__title">Check-in de Prontidão Diário</h3>
          <p class="feature__text">Antes de pedalar, responda um check-in rápido. O app identifica sinais de fadiga e ajusta a intensidade do treino do dia automaticamente.</p>
        </div>
      </article>

      <article class="feature fade-in-up">
        <div class="feature__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
            alt="Ciclista registrando treino"
            class="feature__img"
            loading="lazy"
          />
        </div>
        <div class="feature__content">
          <span class="feature__num" aria-hidden="true">03</span>
          <h3 class="feature__title">Registro de Treino Simplificado</h3>
          <p class="feature__text">Registre distância, duração, sensação e FC em segundos. O histórico fica organizado para você acompanhar sua evolução semana a semana.</p>
        </div>
      </article>

      <article class="feature feature--reverse fade-in-up">
        <div class="feature__img-wrap">
          <img
            src="https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?w=800&q=80"
            alt="Monitor de frequência cardíaca em ciclismo"
            class="feature__img"
            loading="lazy"
          />
        </div>
        <div class="feature__content">
          <span class="feature__num" aria-hidden="true">04</span>
          <h3 class="feature__title">Análise de Zonas de FC</h3>
          <p class="feature__text">Visualize quanto tempo você passou em cada zona no treino. Entenda se está treinando com a intensidade certa para seus objetivos.</p>
        </div>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos de feature**

```css
/* ─── Features alternadas ────────────────────────────────── */
.features {
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-top: 48px;
}

.feature {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  align-items: center;
}

@media (min-width: 768px) {
  .feature {
    grid-template-columns: 1fr 1fr;
  }

  .feature--reverse .feature__img-wrap {
    order: 2;
  }

  .feature--reverse .feature__content {
    order: 1;
  }
}

.feature__img-wrap {
  border-radius: var(--radius-card);
  overflow: hidden;
  aspect-ratio: 4 / 3;
  border: 1px solid var(--border);
}

.feature__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.feature__img-wrap:hover .feature__img {
  transform: scale(1.04);
}

.feature__num {
  display: block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  color: var(--primary);
  text-transform: uppercase;
  margin-bottom: 12px;
}

.feature__title {
  font-size: clamp(20px, 3vw, 26px);
  margin-bottom: 14px;
}

.feature__text {
  color: var(--text-secondary);
  font-size: 15px;
  line-height: 1.7;
}
```

- [ ] **Step 3: Verificar no browser**

Features devem aparecer empilhadas em mobile e alternadas (imagem/texto, texto/imagem) em desktop. Hover na imagem faz zoom suave.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: seção funcionalidades com layout alternado"
```

---

## Task 7: Seção App em Ação — Carrossel de Screenshots

**Files:**
- Modify: `index.html` — seção `<!-- App em Ação -->`
- Modify: `css/styles.css` — estilos do carrossel
- Modify: `js/main.js` — função `initCarousel()`

- [ ] **Step 1: Adicionar markup da seção App em Ação**

Substituir `<!-- App em Ação -->` por:

```html
<section class="section" id="app-em-acao" aria-labelledby="app-titulo">
  <div class="container">
    <p class="label-uppercase fade-in-up">App em ação</p>
    <h2 class="section__headline fade-in-up" id="app-titulo">Veja o app na prática.</h2>
    <p class="section__sub fade-in-up">
      Interface limpa, dados relevantes, sem distrações. Feito para você usar durante e depois do treino.
    </p>
  </div>

  <div class="carousel fade-in-up" role="region" aria-label="Screenshots do app Pedale-AI">
    <div class="carousel__track" id="carouselTrack">

      <figure class="carousel__item">
        <div class="phone-frame">
          <img
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&q=80"
            alt="Tela de plano semanal do Pedale-AI — placeholder"
            class="phone-frame__img"
            loading="lazy"
          />
        </div>
        <figcaption class="carousel__caption">Plano semanal</figcaption>
      </figure>

      <figure class="carousel__item">
        <div class="phone-frame">
          <img
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&q=80"
            alt="Tela de check-in de prontidão — placeholder"
            class="phone-frame__img"
            loading="lazy"
          />
        </div>
        <figcaption class="carousel__caption">Check-in diário</figcaption>
      </figure>

      <figure class="carousel__item">
        <div class="phone-frame">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80"
            alt="Tela de registro de treino — placeholder"
            class="phone-frame__img"
            loading="lazy"
          />
        </div>
        <figcaption class="carousel__caption">Registro de treino</figcaption>
      </figure>

      <figure class="carousel__item">
        <div class="phone-frame">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&q=80"
            alt="Tela de zonas de frequência cardíaca — placeholder"
            class="phone-frame__img"
            loading="lazy"
          />
        </div>
        <figcaption class="carousel__caption">Zonas de FC</figcaption>
      </figure>

      <figure class="carousel__item">
        <div class="phone-frame">
          <img
            src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=400&q=80"
            alt="Tela de histórico e evolução — placeholder"
            class="phone-frame__img"
            loading="lazy"
          />
        </div>
        <figcaption class="carousel__caption">Histórico e evolução</figcaption>
      </figure>

    </div>

    <div class="carousel__dots" role="tablist" aria-label="Navegar entre screenshots" id="carouselDots"></div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos do carrossel e phone frame**

```css
/* ─── Carrossel ──────────────────────────────────────────── */
.carousel {
  position: relative;
  margin-top: 48px;
  overflow: hidden;
  /* Glow verde atrás */
  background: radial-gradient(ellipse 60% 40% at 50% 50%, rgba(106,180,11,0.06) 0%, transparent 70%);
  padding: 40px 0;
}

.carousel__track {
  display: flex;
  gap: 24px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding: 0 calc(50% - 140px);
}

.carousel__track::-webkit-scrollbar {
  display: none;
}

.carousel__item {
  flex: 0 0 280px;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

/* ─── Phone Frame ────────────────────────────────────────── */
.phone-frame {
  width: 280px;
  height: 560px;
  border-radius: 40px;
  border: 2px solid var(--border-light);
  overflow: hidden;
  position: relative;
  background: var(--surface);
  box-shadow: 0 0 0 6px var(--surface), 0 0 0 8px var(--border), 0 20px 60px rgba(0,0,0,0.5);
}

.phone-frame__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel__caption {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  text-align: center;
}

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 24px;
}

.carousel__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--border-light);
  border: none;
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  min-width: 24px;
  min-height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: content-box;
  padding: 8px;
  box-sizing: content-box;
  background-color: var(--border-light);
  border-radius: 50%;
  width: 8px;
  height: 8px;
}

.carousel__dot.is-active {
  background-color: var(--primary);
  transform: scale(1.2);
}
```

- [ ] **Step 3: Adicionar initCarousel() no main.js**

```js
/* ─── Carrossel ──────────────────────────────────────────── */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const dotsContainer = document.getElementById('carouselDots');
  if (!track || !dotsContainer) return;

  const items = track.querySelectorAll('.carousel__item');
  let currentIndex = 0;

  // Criar dots
  items.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'carousel__dot' + (i === 0 ? ' is-active' : '');
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Screenshot ${i + 1}`);
    dot.setAttribute('aria-selected', String(i === 0));
    dot.addEventListener('click', () => scrollToItem(i));
    dotsContainer.appendChild(dot);
  });

  function updateDots(index) {
    dotsContainer.querySelectorAll('.carousel__dot').forEach((dot, i) => {
      dot.classList.toggle('is-active', i === index);
      dot.setAttribute('aria-selected', String(i === index));
    });
    currentIndex = index;
  }

  function scrollToItem(index) {
    const item = items[index];
    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    updateDots(index);
  }

  // Atualizar dots ao scrollar
  const itemObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
          const index = Array.from(items).indexOf(entry.target);
          if (index !== -1) updateDots(index);
        }
      });
    },
    { root: track, threshold: 0.5 }
  );

  items.forEach(item => itemObserver.observe(item));
}
```

Atualizar bloco `Init`:

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
  initCarousel();
});
```

- [ ] **Step 4: Verificar no browser**

Carrossel deve ter scroll horizontal suave com snap. Dots embaixo atualizam conforme o item centralizado. Em mobile, scroll por dedo funciona normalmente.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: carrossel de screenshots com scroll-snap e dots"
```

---

## Task 8: Seção Modalidades

**Files:**
- Modify: `index.html` — seção `<!-- Modalidades -->`
- Modify: `css/styles.css` — estilos de modalidades

- [ ] **Step 1: Adicionar markup da seção Modalidades**

Substituir `<!-- Modalidades -->` por:

```html
<section class="section section--surface" id="modalidades" aria-labelledby="modal-titulo">
  <div class="container">
    <p class="label-uppercase fade-in-up">Modalidades</p>
    <h2 class="section__headline fade-in-up" id="modal-titulo">Para o seu estilo de pedal.</h2>
    <p class="section__sub fade-in-up">
      Seja qual for a sua bike, o Pedale-AI entende suas demandas e entrega treinos para o seu terreno.
    </p>

    <div class="cards-grid cards-grid--3 modalidades__grid">
      <article class="modal-card fade-in-up" style="--delay: 0.1s">
        <img
          src="https://images.unsplash.com/photo-1544191696-102dbdaeeaa0?w=800&q=80"
          alt="Mountain bike em trilha"
          class="modal-card__img"
          loading="lazy"
        />
        <div class="modal-card__overlay" aria-hidden="true"></div>
        <div class="modal-card__content">
          <span class="modal-card__badge">MTB</span>
          <h3 class="modal-card__title">Mountain Bike</h3>
          <p class="modal-card__text">Trilhas, subidas e descidas. Treinos de força e resistência para dominar o off-road.</p>
        </div>
      </article>

      <article class="modal-card fade-in-up" style="--delay: 0.2s">
        <img
          src="https://images.unsplash.com/photo-1558816280-dee9521ff364?w=800&q=80"
          alt="Ciclista gravel em estrada de terra"
          class="modal-card__img"
          loading="lazy"
        />
        <div class="modal-card__overlay" aria-hidden="true"></div>
        <div class="modal-card__content">
          <span class="modal-card__badge">Gravel</span>
          <h3 class="modal-card__title">Gravel</h3>
          <p class="modal-card__text">Aventura sem fronteiras. Foco em resistência aeróbica para os longos percursos mistos.</p>
        </div>
      </article>

      <article class="modal-card fade-in-up" style="--delay: 0.3s">
        <img
          src="https://images.unsplash.com/photo-1502164980785-f8aa41d53611?w=800&q=80"
          alt="Ciclista speed em estrada asfaltada"
          class="modal-card__img"
          loading="lazy"
        />
        <div class="modal-card__overlay" aria-hidden="true"></div>
        <div class="modal-card__content">
          <span class="modal-card__badge">Speed</span>
          <h3 class="modal-card__title">Speed</h3>
          <p class="modal-card__text">Estrada, performance e velocidade. Treinos em zonas de potência para evoluir cada watt.</p>
        </div>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos de modal-card**

```css
/* ─── Cards de modalidade ────────────────────────────────── */
.modal-card {
  position: relative;
  border-radius: var(--radius-card);
  overflow: hidden;
  aspect-ratio: 3 / 4;
  cursor: default;
  border: 1px solid var(--border);
  transition: border-color 0.3s, transform 0.3s;
}

.modal-card:hover {
  border-color: var(--primary);
  transform: translateY(-4px);
}

.modal-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.modal-card:hover .modal-card__img {
  transform: scale(1.06);
}

.modal-card__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(5,5,8,0.92) 0%, rgba(5,5,8,0.3) 60%, transparent 100%);
}

.modal-card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 24px;
}

.modal-card__badge {
  display: inline-block;
  background: var(--primary-muted);
  color: var(--primary);
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: var(--radius-chip);
  margin-bottom: 10px;
  border: 1px solid rgba(106,180,11,0.3);
}

.modal-card__title {
  font-size: 22px;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 8px;
}

.modal-card__text {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.5;
}
```

- [ ] **Step 3: Verificar no browser**

3 cards com foto de fundo, overlay gradiente e conteúdo ancorado no rodapé. Hover levanta o card e faz zoom na imagem em desktop.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: seção modalidades MTB, Gravel e Speed"
```

---

## Task 9: Seção Social Proof com Contador Animado

**Files:**
- Modify: `index.html` — seção `<!-- Social proof -->`
- Modify: `css/styles.css` — estilos de social proof
- Modify: `js/main.js` — função `initCounter()`

- [ ] **Step 1: Adicionar markup da seção Social Proof**

Substituir `<!-- Social proof -->` por:

```html
<section class="section" id="social-proof" aria-labelledby="sp-titulo">
  <div class="container">
    <div class="sp-counter fade-in-up" aria-live="polite">
      <p class="sp-counter__number">
        <span id="counterValue" aria-label="32 ciclistas">0</span>
      </p>
      <p class="sp-counter__label">ciclistas já garantiram sua vaga</p>
      <div class="sp-progress" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="50" aria-label="32 de 50 vagas preenchidas">
        <div class="sp-progress__bar" id="spProgressBar" style="width: 0%"></div>
      </div>
      <p class="sp-counter__sub">32 de 50 vagas preenchidas</p>
    </div>

    <h2 class="section__headline fade-in-up" id="sp-titulo" style="text-align:center; margin-top: 64px;">
      O que nossos testadores dizem.
    </h2>

    <div class="testimonials fade-in-up">
      <article class="testimonial" aria-label="Depoimento de Carlos M.">
        <div class="testimonial__header">
          <div class="testimonial__avatar" aria-hidden="true">CM</div>
          <div>
            <p class="testimonial__name">Carlos M.</p>
            <p class="testimonial__role">Ciclista Gravel · SP</p>
          </div>
        </div>
        <blockquote class="testimonial__quote">
          "Finalmente entendi o que são as zonas de frequência cardíaca e como aplicar nos meus treinos. Em 6 semanas melhorei meu tempo no percurso de referência."
        </blockquote>
      </article>

      <article class="testimonial" aria-label="Depoimento de Ana P.">
        <div class="testimonial__header">
          <div class="testimonial__avatar" aria-hidden="true">AP</div>
          <div>
            <p class="testimonial__name">Ana P.</p>
            <p class="testimonial__role">MTB · MG</p>
          </div>
        </div>
        <blockquote class="testimonial__quote">
          "O check-in de prontidão me salvou de treinar com fadiga acumulada duas vezes. Parece simples, mas fez toda a diferença na minha recuperação."
        </blockquote>
      </article>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos de social proof**

```css
/* ─── Contador ───────────────────────────────────────────── */
.sp-counter {
  text-align: center;
  max-width: 480px;
  margin: 0 auto;
}

.sp-counter__number {
  font-size: clamp(56px, 15vw, 96px);
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
  margin-bottom: 8px;
  font-variant-numeric: tabular-nums;
}

.sp-counter__label {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 20px;
}

.sp-progress {
  height: 6px;
  background: var(--border-light);
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 10px;
}

.sp-progress__bar {
  height: 100%;
  background: var(--primary);
  border-radius: 3px;
  transition: width 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.sp-counter__sub {
  font-size: 13px;
  color: var(--text-muted);
}

/* ─── Depoimentos ────────────────────────────────────────── */
.testimonials {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 40px;
}

@media (min-width: 640px) {
  .testimonials { grid-template-columns: repeat(2, 1fr); }
}

.testimonial {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-card);
  padding: 24px;
}

.testimonial__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.testimonial__avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--primary-muted);
  color: var(--primary);
  font-size: 13px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(106,180,11,0.25);
  flex-shrink: 0;
}

.testimonial__name {
  font-size: 15px;
  font-weight: 700;
  color: var(--text-bright);
}

.testimonial__role {
  font-size: 12px;
  color: var(--text-muted);
}

.testimonial__quote {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  font-style: italic;
  border-left: 2px solid var(--primary-muted);
  padding-left: 14px;
}
```

- [ ] **Step 3: Adicionar initCounter() no main.js**

```js
/* ─── Contador animado ───────────────────────────────────── */
function initCounter() {
  const counterEl = document.getElementById('counterValue');
  const progressBar = document.getElementById('spProgressBar');
  if (!counterEl || !progressBar) return;

  const TARGET = 32;
  const TOTAL = 50;
  let animated = false;

  function animateCounter() {
    if (animated) return;
    animated = true;

    const duration = 1200;
    const start = performance.now();

    function easeOut(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.round(easeOut(progress) * TARGET);
      counterEl.textContent = value;
      counterEl.setAttribute('aria-label', `${value} ciclistas`);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        // Animar barra de progresso
        progressBar.style.width = `${(TARGET / TOTAL) * 100}%`;
      }
    }

    requestAnimationFrame(update);
  }

  const observer = new IntersectionObserver(
    entries => {
      if (entries[0].isIntersecting) {
        animateCounter();
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );

  observer.observe(counterEl);
}
```

Atualizar bloco `Init`:

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
  initCarousel();
  initCounter();
});
```

- [ ] **Step 4: Verificar no browser**

Ao scrollar até a seção, o número deve contar de 0 até 32 com ease-out em ~1.2s. Barra de progresso preenche até 64% logo após.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: social proof com contador animado e depoimentos"
```

---

## Task 10: Seção Pré-lançamento — Formulário

**Files:**
- Modify: `index.html` — seção `<!-- Pré-lançamento -->`
- Modify: `css/styles.css` — estilos do formulário
- Modify: `js/main.js` — função `initForm()`

- [ ] **Step 1: Adicionar markup da seção Pré-lançamento**

Substituir `<!-- Pré-lançamento -->` por:

```html
<section class="section" id="prelancamento" aria-labelledby="form-titulo">
  <div class="container">
    <div class="prelancamento">
      <div class="prelancamento__header">
        <span class="prelancamento__badge">PREÇO DE FUNDADOR</span>
        <h2 class="prelancamento__titulo fade-in-up" id="form-titulo">
          Entre na lista.<br />Seja o primeiro a pedalar com IA.
        </h2>

        <div class="prelancamento__preco fade-in-up">
          <span class="prelancamento__preco-de" aria-label="De R$39,90 por mês">R$39,90<span>/mês</span></span>
          <div class="prelancamento__preco-por">
            <span class="prelancamento__preco-valor" aria-label="Por apenas R$14,90 por mês">R$14,90</span>
            <span class="prelancamento__preco-label">/mês</span>
          </div>
        </div>

        <p class="prelancamento__urgencia fade-in-up">
          Apenas <strong>50 vagas</strong> neste preço. Depois do lançamento, o valor sobe para R$39,90/mês.
        </p>

        <div class="prelancamento__progress fade-in-up" role="group" aria-label="Vagas disponíveis">
          <div class="sp-progress" role="progressbar" aria-valuenow="32" aria-valuemin="0" aria-valuemax="50" aria-label="32 de 50 vagas preenchidas">
            <div class="sp-progress__bar" style="width: 64%"></div>
          </div>
          <p class="prelancamento__progress-label">
            <strong>32 de 50 vagas</strong> preenchidas — restam apenas <strong>18</strong>
          </p>
        </div>
      </div>

      <form class="form" id="signupForm" action="#" novalidate aria-label="Formulário de cadastro no pré-lançamento">
        <div class="form__group">
          <label for="fieldName" class="form__label">Seu nome</label>
          <input
            type="text"
            id="fieldName"
            name="name"
            class="form__input"
            placeholder="Como prefere ser chamado?"
            autocomplete="given-name"
            required
            aria-required="true"
          />
          <span class="form__error" id="errorName" role="alert" aria-live="polite"></span>
        </div>

        <div class="form__group">
          <label for="fieldEmail" class="form__label">Seu e-mail</label>
          <input
            type="email"
            id="fieldEmail"
            name="email"
            class="form__input"
            placeholder="seuemail@exemplo.com"
            autocomplete="email"
            required
            aria-required="true"
          />
          <span class="form__error" id="errorEmail" role="alert" aria-live="polite"></span>
        </div>

        <button type="submit" class="btn btn--primary form__submit" id="submitBtn">
          Garantir minha vaga por R$14,90/mês
        </button>

        <p class="form__microcopy">Sem spam. Você recebe apenas o aviso de lançamento e seu acesso antecipado.</p>
      </form>

      <div class="form__success" id="formSuccess" aria-live="polite" hidden>
        <div class="form__success-icon" aria-hidden="true">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
          </svg>
        </div>
        <h3 class="form__success-title">Vaga garantida!</h3>
        <p class="form__success-text">Você está na lista. Assim que o Pedale-AI lançar, você será o primeiro a saber — com seu preço de fundador garantido.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Step 2: Adicionar estilos do pré-lançamento e formulário**

```css
/* ─── Pré-lançamento ─────────────────────────────────────── */
.prelancamento {
  max-width: 600px;
  margin: 0 auto;
  background: var(--surface);
  border-radius: 24px;
  border: 1px solid var(--border);
  border-top: 2px solid var(--primary);
  padding: 40px 24px;
}

@media (min-width: 640px) {
  .prelancamento { padding: 48px 48px; }
}

.prelancamento__header {
  text-align: center;
  margin-bottom: 36px;
}

.prelancamento__badge {
  display: inline-block;
  background: var(--primary-muted);
  color: var(--primary);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: var(--radius-chip);
  margin-bottom: 16px;
  border: 1px solid rgba(106,180,11,0.25);
}

.prelancamento__titulo {
  font-size: clamp(24px, 5vw, 36px);
  margin-bottom: 28px;
}

.prelancamento__preco {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-bottom: 16px;
}

.prelancamento__preco-de {
  font-size: 18px;
  color: var(--text-muted);
  text-decoration: line-through;
}

.prelancamento__preco-de span {
  font-size: 14px;
}

.prelancamento__preco-por {
  display: flex;
  align-items: baseline;
  gap: 4px;
}

.prelancamento__preco-valor {
  font-size: clamp(44px, 12vw, 64px);
  font-weight: 700;
  color: var(--primary);
  line-height: 1;
  font-variant-numeric: tabular-nums;
}

.prelancamento__preco-label {
  font-size: 20px;
  font-weight: 600;
  color: var(--text-secondary);
}

.prelancamento__urgencia {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 20px;
}

.prelancamento__urgencia strong {
  color: var(--text-primary);
}

.prelancamento__progress {
  margin-bottom: 8px;
}

.prelancamento__progress-label {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 8px;
}

.prelancamento__progress-label strong {
  color: var(--text-secondary);
}

/* ─── Formulário ─────────────────────────────────────────── */
.form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form__group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form__label {
  font-size: 13px;
  font-weight: 600;
  color: var(--text-secondary);
  letter-spacing: 0.3px;
}

.form__input {
  background: var(--surface-elevated);
  border: 1px solid var(--border-light);
  border-radius: 12px;
  padding: 14px 16px;
  font-size: 15px;
  color: var(--text-primary);
  font-family: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;
  min-height: 48px;
  width: 100%;
}

.form__input::placeholder {
  color: var(--text-muted);
}

.form__input:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px var(--primary-muted);
}

.form__input.has-error {
  border-color: #EF4444;
  box-shadow: 0 0 0 3px rgba(239,68,68,0.12);
}

.form__error {
  font-size: 12px;
  color: #EF4444;
  min-height: 16px;
}

.form__submit {
  width: 100%;
  font-size: 15px;
  padding: 16px;
  margin-top: 8px;
}

.form__submit:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}

.form__microcopy {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
  line-height: 1.5;
}

/* ─── Sucesso ────────────────────────────────────────────── */
.form__success {
  text-align: center;
  padding: 24px 0;
}

.form__success-icon {
  color: var(--primary);
  margin-bottom: 16px;
}

.form__success-title {
  font-size: 24px;
  font-weight: 700;
  color: var(--text-bright);
  margin-bottom: 12px;
}

.form__success-text {
  font-size: 15px;
  color: var(--text-secondary);
  max-width: 400px;
  margin: 0 auto;
}
```

- [ ] **Step 3: Adicionar initForm() no main.js**

```js
/* ─── Formulário ─────────────────────────────────────────── */
function initForm() {
  const form = document.getElementById('signupForm');
  const formSuccess = document.getElementById('formSuccess');
  const submitBtn = document.getElementById('submitBtn');
  const nameInput = document.getElementById('fieldName');
  const emailInput = document.getElementById('fieldEmail');
  const errorName = document.getElementById('errorName');
  const errorEmail = document.getElementById('errorEmail');

  if (!form) return;

  function setError(input, errorEl, message) {
    input.classList.toggle('has-error', !!message);
    errorEl.textContent = message;
  }

  function validateName(value) {
    if (!value.trim()) return 'Por favor, informe seu nome.';
    if (value.trim().length < 2) return 'Nome muito curto.';
    return '';
  }

  function validateEmail(value) {
    if (!value.trim()) return 'Por favor, informe seu e-mail.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())) return 'E-mail inválido.';
    return '';
  }

  nameInput.addEventListener('blur', () => {
    setError(nameInput, errorName, validateName(nameInput.value));
  });

  emailInput.addEventListener('blur', () => {
    setError(emailInput, errorEmail, validateEmail(emailInput.value));
  });

  form.addEventListener('submit', e => {
    e.preventDefault();

    const nameErr = validateName(nameInput.value);
    const emailErr = validateEmail(emailInput.value);

    setError(nameInput, errorName, nameErr);
    setError(emailInput, errorEmail, emailErr);

    if (nameErr || emailErr) {
      const firstError = nameErr ? nameInput : emailInput;
      firstError.focus();
      return;
    }

    // Simular envio (substituir por fetch/Formspree/etc)
    submitBtn.disabled = true;
    submitBtn.textContent = 'Garantindo sua vaga...';

    setTimeout(() => {
      form.hidden = true;
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }, 800);
  });
}
```

Atualizar bloco `Init`:

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
  initCarousel();
  initCounter();
  initForm();
});
```

- [ ] **Step 4: Verificar no browser**

Testar: (1) submit com campos vazios mostra erros inline, (2) e-mail inválido mostra erro, (3) submit válido mostra loading 800ms depois mostra tela de sucesso. Não deve usar Alert nativo.

- [ ] **Step 5: Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: formulário pré-lançamento com validação e estado de sucesso"
```

---

## Task 11: Footer

**Files:**
- Modify: `index.html` — seção `<!-- Footer -->`
- Modify: `css/styles.css` — estilos do footer

- [ ] **Step 1: Adicionar markup do Footer**

Substituir `<!-- Footer -->` por:

```html
<footer class="footer" role="contentinfo">
  <div class="container footer__inner">
    <div class="footer__brand">
      <a href="#hero" class="navbar__logo-text" aria-label="Pedale-AI — voltar ao topo">
        Pedale<span class="navbar__logo-accent">-AI</span>
      </a>
      <p class="footer__tagline">Seu treinador de ciclismo no bolso.</p>
    </div>

    <nav class="footer__nav" aria-label="Links de rodapé">
      <ul role="list">
        <li><a href="#problema" class="footer__link">O Problema</a></li>
        <li><a href="#solucao" class="footer__link">Solução</a></li>
        <li><a href="#funcionalidades" class="footer__link">Funcionalidades</a></li>
        <li><a href="#modalidades" class="footer__link">Modalidades</a></li>
        <li><a href="#prelancamento" class="footer__link">Pré-lançamento</a></li>
      </ul>
    </nav>

    <div class="footer__social">
      <a href="#" class="footer__social-link" aria-label="Instagram do Pedale-AI">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </a>
      <a href="#" class="footer__social-link" aria-label="Strava do Pedale-AI">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <polyline points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      </a>
    </div>
  </div>

  <div class="footer__bottom">
    <div class="container">
      <p>© 2026 Pedale-AI. Todos os direitos reservados.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 2: Adicionar estilos do footer**

```css
/* ─── Footer ─────────────────────────────────────────────── */
.footer {
  background: var(--surface);
  border-top: 1px solid var(--border);
  padding-top: 48px;
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding-bottom: 40px;
}

@media (min-width: 768px) {
  .footer__inner {
    grid-template-columns: 1fr 1fr 1fr;
    align-items: start;
  }
}

.footer__tagline {
  font-size: 14px;
  color: var(--text-muted);
  margin-top: 8px;
}

.footer__nav ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer__link {
  font-size: 14px;
  color: var(--text-secondary);
  transition: color 0.2s;
  display: block;
  padding: 4px 0;
  min-height: 32px;
  display: flex;
  align-items: center;
}

.footer__link:hover {
  color: var(--primary);
}

.footer__social {
  display: flex;
  gap: 12px;
}

.footer__social-link {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  background: var(--surface-elevated);
  border-radius: 50%;
  border: 1px solid var(--border);
  transition: color 0.2s, border-color 0.2s;
}

.footer__social-link:hover {
  color: var(--primary);
  border-color: var(--primary);
}

.footer__bottom {
  border-top: 1px solid var(--border);
  padding: 16px 0;
}

.footer__bottom p {
  font-size: 12px;
  color: var(--text-muted);
  text-align: center;
}
```

- [ ] **Step 3: Verificar no browser**

Footer com brand, links e ícones sociais. Em mobile: empilhado. Em desktop: 3 colunas.

- [ ] **Step 4: Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: footer com navegação e redes sociais"
```

---

## Task 12: Polimento final — padding do body, scroll top e ajustes Mobile First

**Files:**
- Modify: `css/styles.css` — ajustes finais
- Modify: `index.html` — botão scroll-to-top

- [ ] **Step 1: Adicionar padding-top no body para compensar navbar fixa**

Adicionar no `body` no styles.css:

```css
body {
  /* ... existente ... */
  padding-top: 60px; /* navbar height */
}

/* Remover padding-top do hero pois body já compensa */
.hero {
  padding-top: 0;
}
```

- [ ] **Step 2: Adicionar botão scroll-to-top**

No `index.html`, antes do `<script>`:

```html
<button class="scroll-top" id="scrollTop" aria-label="Voltar ao topo" hidden>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <polyline points="18 15 12 9 6 15"/>
  </svg>
</button>
```

No `styles.css`:

```css
/* ─── Scroll to top ──────────────────────────────────────── */
.scroll-top {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 50;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--surface-elevated);
  border: 1px solid var(--border-light);
  color: var(--text-secondary);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s, color 0.2s, border-color 0.2s;
  box-shadow: 0 4px 20px rgba(0,0,0,0.4);
}

.scroll-top:hover {
  color: var(--primary);
  border-color: var(--primary);
}

.scroll-top[hidden] {
  display: none;
}
```

No `main.js`, adicionar função e chamar no `Init`:

```js
/* ─── Scroll to top ──────────────────────────────────────── */
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.hidden = window.scrollY < 400;
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
```

```js
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initCanvas();
  initParallax();
  initObserver();
  initCarousel();
  initCounter();
  initForm();
  initScrollTop();
});
```

- [ ] **Step 3: Revisar toda a página em mobile (375px)**

Checklist visual:
- [ ] Navbar hamburguer funciona
- [ ] Hero: badge, headline, sub e CTAs empilhados sem overflow
- [ ] Seções: texto não ultrapassa a borda
- [ ] Cards: 1 coluna
- [ ] Carrossel: scroll horizontal funciona por dedo
- [ ] Formulário: campos full width, botão full width
- [ ] Footer: empilhado verticalmente

- [ ] **Step 4: Revisar em desktop (1280px)**

- [ ] Cards em 3 colunas nas seções Problema, Solução e Modalidades
- [ ] Features alternadas corretamente
- [ ] Navbar com links horizontais
- [ ] Footer em 3 colunas
- [ ] Parallax do hero funcionando

- [ ] **Step 5: Commit final**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: polimento final mobile first e scroll-to-top"
```

---

## Self-Review — Cobertura da Spec

| Requisito da Spec | Task que implementa |
|-------------------|---------------------|
| HTML/CSS/JS puro, arquivos separados | Task 1 |
| Tokens CSS espelhando Colors.ts | Task 1 |
| Mobile First, breakpoints | Tasks 1–11 (todo CSS) |
| Navbar fixa com blur e hamburguer | Task 2 |
| Hero com imagem Unsplash + overlay | Task 3 |
| Canvas partículas de velocidade | Task 3 |
| Parallax desativado em mobile | Task 3 |
| Smooth scroll | Task 1 (CSS) |
| Badge 50 VAGAS · PRÉ-LANÇAMENTO | Task 3 |
| Intersection Observer fade-in-up | Task 4 |
| Seção Problema — 3 cards | Task 4 |
| Seção Solução — 3 pilares | Task 5 |
| Seção Funcionalidades — 4 features | Task 6 |
| Carrossel screenshots com scroll-snap | Task 7 |
| Seção Modalidades — MTB/Gravel/Speed | Task 8 |
| Contador animado + barra progresso | Task 9 |
| Depoimentos placeholder | Task 9 |
| Formulário nome + e-mail | Task 10 |
| Preço R$14,90 riscado R$39,90 | Task 10 |
| 50 vagas com barra de progresso | Task 10 |
| Validação inline sem Alert | Task 10 |
| Estado de sucesso sem reload | Task 10 |
| Footer com links e redes sociais | Task 11 |
| Scroll-to-top | Task 12 |
| prefers-reduced-motion | Tasks 1, 3 |
| Imagens com loading="lazy" | Tasks 4–9 |
| aria-label e acessibilidade | Todas as tasks |
