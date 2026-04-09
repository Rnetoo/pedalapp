# Pedale-AI Landing Page — Design Spec
**Data:** 2026-04-09  
**Status:** Aprovado  

---

## Objetivo

Landing page de pré-lançamento do app **Pedale-AI** (Pedal — Treinador de Bolso) com foco em:
- Educar o usuário sobre o problema e a solução
- Gerar funil de vendas com senso de urgência (50 vagas, R$14,90/mês)
- Capturar leads (nome + e-mail) via formulário de pré-lançamento

---

## Stack

- **HTML5** semântico, arquivo único `index.html`
- **CSS3** com custom properties (variáveis), Mobile First, arquivos separados
- **JavaScript** vanilla puro, sem frameworks
- **Fontes:** Inter via Google Fonts (400, 600, 700)
- **Imagens:** Unsplash (placeholders) — ciclismo MTB, Gravel, Speed + screenshots do app
- **Backend:** nenhum por enquanto — formulário com placeholder `action="#"`

### Estrutura de arquivos
```
landing-page/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── assets/
    ├── images/
    └── icons/
```

---

## Identidade Visual

Espelha o design system do app (`Colors.ts` + `PROJECT_STYLE.MD`).

### Tokens CSS
```css
--bg: #050508;
--surface: #11101A;
--surface-elevated: #1A1925;
--border: #1C1C28;
--border-light: #2A2A3A;
--primary: #6AB40B;
--primary-light: #7ECC12;
--primary-dark: #4E8A00;
--primary-muted: rgba(106,180,11,0.12);
--primary-glow: rgba(106,180,11,0.25);
--text-bright: #F5F0FF;
--text-primary: #F0F0F5;
--text-secondary: #7878A0;
--text-muted: #4A4A68;
--cta-bg: #EFFFED;
--cta-text: #3D7A00;
```

### Tipografia
| Nível | Tamanho mobile | Tamanho desktop | Weight | Cor |
|-------|---------------|-----------------|--------|-----|
| Hero headline | 36px | 64px | 700 | `--text-bright` |
| Subheadline seção | 26px | 40px | 700 | `--text-bright` |
| Body | 16px | 18px | 400 | `--text-primary` |
| Label uppercase | 11px | 11px | 700 | `--text-secondary` |
| Preço destaque | 40px | 56px | 700 | `--primary` |

### CTAs
- **Primário:** fundo `#EFFFED`, texto `#3D7A00`, border-radius 14px, hover: scale(1.02) + box-shadow verde
- **Secundário:** transparente, borda `--border-light`, texto `--text-primary`

---

## Mobile First

- Breakpoints: base (< 768px) → tablet (≥ 768px) → desktop (≥ 1024px)
- Navbar: hamburguer em mobile, links horizontais em desktop
- Grids: 1 coluna → 2 colunas → 3 colunas conforme breakpoint
- Hero: coluna única, imagem abaixo do texto em mobile
- Carrossel de screenshots: scroll horizontal com scroll-snap

---

## Animações

### Hero — Partículas de velocidade (Canvas API)
- Canvas full-width atrás do conteúdo
- ~30 linhas horizontais em velocidades variadas, cor `--primary` com 10–20% opacidade
- Loop contínuo via `requestAnimationFrame`
- Desativado se `prefers-reduced-motion`

### Parallax
- Imagem de fundo do Hero se move a 40% da velocidade do scroll (`translateY`)
- Implementado via `scroll` event listener + `requestAnimationFrame` para throttle
- Desativado em mobile (performance) e `prefers-reduced-motion`

### Smooth Scroll
- `scroll-behavior: smooth` no CSS
- Scroll programático via JS para compatibilidade cross-browser

### Intersection Observer — Animações de entrada
- Todos os cards, títulos e imagens entram com `fadeInUp` ao atingir viewport
- Delay staggerado (60ms entre elementos no mesmo grupo)
- Classe `.is-visible` adicionada via JS, animação definida em CSS

### Contador animado
- Número de ciclistas na lista (ex: 32) conta de 0 até o valor ao entrar na viewport
- Duração: 1200ms, easing `ease-out`

---

## Seções

### 1. Navbar
- Fixa no topo, `backdrop-filter: blur(12px)`, fundo `rgba(5,5,8,0.85)`
- Logo à esquerda + links âncoras à direita
- Hamburguer menu em mobile com slide-down animado
- Active state por seção via Intersection Observer

### 2. Hero
- Fundo: foto Unsplash ciclismo com overlay `rgba(5,5,8,0.75)` + canvas de partículas
- Badge: `50 VAGAS · PRÉ-LANÇAMENTO · R$14,90/mês` — uppercase, fundo `--primary-muted`, texto `--primary`, border-radius 20px
- Headline: *"Chega de pedalar sem saber o que está fazendo."*
- Subtítulo: *"Pedale-AI é o treinador de ciclismo com IA que monta seu plano, analisa seu esforço e evolui com você — direto no seu bolso."*
- CTA primário: `"Quero ser avisado"` → âncora `#prelancamento`
- CTA secundário: `"Ver funcionalidades"` → âncora `#funcionalidades`

### 3. Problema
- Headline: *"Você pedala. Mas está evoluindo?"*
- 3 cards: *"Treina no feeling"* / *"Não conhece suas zonas de FC"* / *"Plano genérico do YouTube"*
- Cada card: ícone SVG, título bold, descrição curta
- Fundo `--surface`, borda `--border`

### 4. Solução — 3 Pilares
- Headline: *"Pedale-AI resolve isso."*
- Grid 3 colunas (1 em mobile)
- Pilares: **Plano Personalizado por IA** / **Zonas de Treino Inteligentes** / **Evolução Contínua**
- Ícone grande SVG em `--primary`, título, descrição
- Fundo `--bg`

### 5. Funcionalidades
- Headline: *"Tudo que você precisa. Nada que você não usa."*
- 4 features em cards alternados (imagem + texto): empilhados em mobile
  1. Plano semanal adaptativo
  2. Check-in de prontidão diário
  3. Registro de treino simplificado
  4. Análise de zonas de frequência cardíaca
- Imagens: placeholder Unsplash ciclismo com border-radius 16px

### 6. App em Ação
- Headline: *"Veja o app na prática."*
- Carrossel horizontal com scroll-snap, 4–5 screenshots placeholder
- Moldura de smartphone em CSS puro ao redor de cada imagem
- Fundo `--surface` com radial-gradient verde sutil atrás
- Legenda curta sob cada tela

### 7. Modalidades
- Headline: *"Para o seu estilo de pedal."*
- 3 cards com imagem Unsplash de fundo + overlay escuro
- MTB / Gravel / Speed
- Badge de modalidade, título, descrição 2 linhas
- Hover desktop: zoom na imagem + borda `--primary`

### 8. Social Proof
- Contador animado: `"32 ciclistas já garantiram sua vaga"`
- Barra de progresso verde: 32/50 vagas preenchidas (64%)
- 2 depoimentos placeholder com avatar, nome, modalidade e frase

### 9. Pré-lançamento (Formulário)
- Fundo `--surface`, borda superior 2px `--primary`
- Headline: *"Entre na lista. Seja o primeiro a pedalar com IA."*
- Preço em destaque:
  - Riscado: `~~R$39,90/mês~~` em `--text-muted`
  - Destaque: `R$14,90/mês` grande, cor `--primary`
  - Badge: `PREÇO DE FUNDADOR`
- Urgência: *"Apenas 50 vagas neste preço. Depois do lançamento, o valor sobe."*
- Barra de progresso: `"32 de 50 vagas preenchidas"`
- Campos: Nome (text) + E-mail (email)
- CTA: `"Garantir minha vaga por R$14,90/mês"` — estilo S3
- Estado de sucesso: mensagem inline sem reload

### 10. Footer
- Logo + tagline: *"Seu treinador de ciclismo no bolso."*
- Links âncoras para seções
- Ícones redes sociais (SVG placeholder)
- `© 2026 Pedale-AI. Todos os direitos reservados.`

---

## JavaScript — main.js

| Módulo | Responsabilidade |
|--------|-----------------|
| `initCanvas()` | Partículas de velocidade no Hero |
| `initParallax()` | Parallax da imagem Hero no scroll |
| `initNavbar()` | Hamburguer menu + active state por seção |
| `initIntersectionObserver()` | Fade-in de elementos ao entrar na viewport |
| `initCounter()` | Contador animado de ciclistas |
| `initCarousel()` | Scroll snap do carrossel de screenshots |
| `initForm()` | Validação e estado de sucesso do formulário |

---

## Imagens Unsplash (placeholders)

| Seção | Tema | Query sugerida |
|-------|------|----------------|
| Hero background | Ciclista speed em estrada | `road cycling athlete` |
| Funcionalidade 1 | Ciclista com celular | `cyclist phone training` |
| Funcionalidade 2 | Check-in / descanso | `cyclist rest recovery` |
| Funcionalidade 3 | Registro de treino | `cycling training data` |
| Funcionalidade 4 | Frequência cardíaca | `heart rate monitor cycling` |
| Modalidade MTB | Mountain bike trilha | `mountain bike trail` |
| Modalidade Gravel | Gravel estrada de terra | `gravel cycling adventure` |
| Modalidade Speed | Ciclista speed aerotuck | `road cycling speed` |

Formato URL direto: `https://images.unsplash.com/photo-{ID}?w=800&q=80`

---

## Acessibilidade e Performance

- `alt` descritivo em todas as imagens
- Contraste mínimo 4.5:1 verificado
- `prefers-reduced-motion` desativa canvas e parallax
- Imagens com `loading="lazy"` exceto hero
- Sem dependências externas JS (zero npm, zero CDN de framework)
- CSS crítico inline no `<head>` para LCP rápido no mobile
