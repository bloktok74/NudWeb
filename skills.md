# Skills — Cinematic Premium Web Design Language

A portable design system for building **cinematic, minimal, premium** marketing
sites. Drop this file into any project's root so collaborators (and Claude Code)
build in a consistent, high-end editorial style.

Reference brands: Nike campaign pages, WHOOP, luxury wellness, modern
architecture studios. The target feeling: **elite but calm, intentional,
grounded, immersive.** Not corporate. Not flashy. Not templated.

> Rename this file to `CLAUDE.md` if you want Claude Code to auto-load it as
> project context on every session.

---

## 1. The Feeling (north star)

Every decision should push toward: **cinematic · minimal · masculine ·
intentional · editorial · spacious.** When in doubt, remove something, make the
type bigger, and add more black space.

- Type is the primary design element, not decoration around it.
- Negative space is a feature. Let sections breathe.
- Photography is large, grayscale, and contrasty — it sets mood, not detail.
- Motion is slow and restrained. Nothing bounces, nothing flashes.

---

## 2. Hard Rules

**DO**
- Keep strong negative space; let single ideas own a full viewport.
- Make headlines oversized (`clamp()` up to ~240px on hero).
- Use monochrome / grayscale imagery with subtle grain.
- Animate with long, eased, cinematic transitions (0.6s–1.2s).
- Use one accent color, very sparingly (a single dot, a single word).
- Maintain a tight, deliberate type hierarchy.

**DON'T**
- No bright/neon colors, no rainbow gradients, no heavy drop shadows.
- No generic gym/fitness/corporate stock-icon sets — use abstract line SVGs.
- No crowded grids of small cards; no dense feature lists.
- No bouncy, springy, or attention-grabbing animation.
- No more than 2 typefaces (one display, one body).
- No pure-white page backgrounds — the canvas is black.

---

## 3. Design Tokens

### Color
| Token      | Hex       | Use                                            |
|------------|-----------|------------------------------------------------|
| `ink`      | `#000000` | Page background, base canvas                   |
| `charcoal` | `#111111` | Alternating section background                 |
| `bone`     | `#F5F5F5` | Primary text, inverted button fills            |
| `ash`      | `#7A7A7A` | Secondary text, eyebrows, muted detail         |
| `sand`     | `#C9B89C` | Accent — use **very** sparingly (dots, 1 word) |

All photography is rendered grayscale: `filter: grayscale(100%) contrast(1.05)`.

### Type
- **Display:** a condensed, bold, uppercase face. `Anton` (free) or
  `Archivo Narrow` / a paid grotesque. Line-height `0.86–0.92`, tracking `-0.01em`.
- **Body:** a clean neutral sans. `Inter`, weights 300/400. Line-height `1.7–1.8`.
- **Eyebrow / label:** `Inter` 11px, uppercase, `letter-spacing: 0.32em`, color `ash`.

### Scale (fluid)
```
Hero headline   clamp(64px, 14.5vw, 240px)
Section title   clamp(40px, 6.5vw, 112px)
Body            15–17px
Eyebrow         11px
```

### Spacing rhythm
Sections: vertical padding `py-24` mobile → `py-44` desktop. Max content width
`~1500px`. Gutters `px-6` mobile → `px-10` desktop.

---

## 4. Tailwind Config

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        charcoal: '#111111',
        bone: '#F5F5F5',
        ash: '#7A7A7A',
        sand: '#C9B89C',
      },
      fontFamily: {
        display: ['Anton', '"Archivo Narrow"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { cinema: '0.18em', wider2: '0.32em' },
      transitionTimingFunction: { cinema: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
};
```

Load fonts in `index.html`:
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&display=swap" rel="stylesheet" />
```

---

## 5. CSS Primitives

Drop these into your global stylesheet. They are the recurring building blocks.

```css
/* Grain overlay — add class .grain to a relative parent, or .grain-fixed once globally */
.grain-fixed {
  position: fixed; inset: 0; pointer-events: none; z-index: 60;
  opacity: 0.07; mix-blend-mode: overlay;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.9 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
  background-size: 240px 240px;
  animation: grain-shift 8s steps(8) infinite;
}
@keyframes grain-shift {
  0%,100% { transform: translate(0,0); } 30% { transform: translate(2%,-4%); }
  60% { transform: translate(4%,0); } 90% { transform: translate(2%,2%); }
}

/* Scroll reveal — toggle .in via IntersectionObserver */
.reveal { opacity: 0; transform: translateY(28px);
  transition: opacity 1.1s cubic-bezier(0.22,1,0.36,1), transform 1.1s cubic-bezier(0.22,1,0.36,1); }
.reveal.in { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: .12s; } .reveal-delay-2 { transition-delay: .24s; }
.reveal-delay-3 { transition-delay: .36s; } .reveal-delay-4 { transition-delay: .48s; }

/* Ken-burns drift for hero/feature imagery */
@keyframes ken-burns {
  0% { transform: scale(1.08); } 50% { transform: scale(1.16) translate3d(-1.2%,-0.8%,0); }
  100% { transform: scale(1.08); }
}
.ken-burns { animation: ken-burns 26s ease-in-out infinite; }

/* Cinematic button: fill slides up, text inverts */
.btn-cinema {
  position: relative; display: inline-flex; align-items: center; gap: 14px;
  padding: 18px 28px; font: 500 11px/1 'Inter', sans-serif;
  letter-spacing: 0.32em; text-transform: uppercase; overflow: hidden; isolation: isolate;
  color: #F5F5F5; border: 1px solid rgba(245,245,245,.45); background: transparent; cursor: pointer;
  transition: color .6s cubic-bezier(0.22,1,0.36,1), border-color .6s cubic-bezier(0.22,1,0.36,1);
}
.btn-cinema::before { content:''; position:absolute; inset:0; background:#F5F5F5;
  transform: translateY(101%); transition: transform .7s cubic-bezier(0.22,1,0.36,1); z-index:-1; }
.btn-cinema:hover { color:#000; } .btn-cinema:hover::before { transform: translateY(0); }
.btn-cinema--solid { background:#F5F5F5; color:#000; } .btn-cinema--solid::before { background:#000; }
.btn-cinema--solid:hover { color:#F5F5F5; }

/* Card: white panel slides up on hover, content inverts to black */
.svc-card { position: relative; overflow: hidden; background:#000;
  border: 1px solid rgba(245,245,245,.12); transition: border-color .6s cubic-bezier(0.22,1,0.36,1); }
.svc-card::before { content:''; position:absolute; inset:0; background:#F5F5F5;
  transform: translateY(101%); transition: transform .8s cubic-bezier(0.22,1,0.36,1); z-index:0; }
.svc-card > * { position: relative; z-index: 1; transition: color .6s cubic-bezier(0.22,1,0.36,1); }
.svc-card:hover { border-color:#F5F5F5; } .svc-card:hover::before { transform: translateY(0); }
.svc-card:hover .svc-text, .svc-card:hover .svc-title { color:#000; }

/* Nav underline reveal (origin flips on hover) */
.nav-link { position: relative; color: rgba(245,245,245,.7);
  transition: color .6s cubic-bezier(0.22,1,0.36,1); }
.nav-link::after { content:''; position:absolute; left:0; bottom:0; height:1px; width:100%;
  background: currentColor; transform: scaleX(0); transform-origin: right;
  transition: transform .7s cubic-bezier(0.22,1,0.36,1); }
.nav-link:hover { color:#F5F5F5; }
.nav-link:hover::after { transform: scaleX(1); transform-origin: left; }

/* Marquee strip */
@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
.marquee-track { animation: marquee 38s linear infinite; }
```

---

## 6. Behavior Hooks (React)

```ts
// useScrollReveal.ts — adds .in to every .reveal as it enters the viewport
import { useEffect } from 'react';
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
```

```ts
// useParallax.ts — slow vertical drift on a background image (attach ref)
import { useEffect, useRef } from 'react';
export function useParallax(strength = 0.18) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const r = el.getBoundingClientRect(); const vh = window.innerHeight || 1;
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        el.style.transform = `translate3d(0, ${(-p * strength * 100).toFixed(2)}px, 0) scale(1.08)`;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); };
  }, [strength]);
  return ref;
}
```

---

## 7. Motion Principles

- **Easing:** always `cubic-bezier(0.22, 1, 0.36, 1)` ("ease-cinema"). No linear, no default ease.
- **Duration:** entrances 0.9–1.2s; hovers 0.6–0.8s; ambient loops 24–38s.
- **Reveal pattern:** fade-up + 28px translate, staggered with `reveal-delay-*`.
- **Imagery:** slow ken-burns scale and/or parallax drift — barely perceptible.
- **Hover:** fills slide in from an edge; colors invert; underlines wipe.
- Respect `prefers-reduced-motion` — gate ambient animation behind it.

---

## 8. Section Archetypes

Compose pages from these reusable blocks. Most premium sites are 6–8 of them.

1. **Hero** — fullscreen, oversized 1–3 word headline, eyebrow, two CTAs
   (`btn-cinema--solid` + `btn-cinema`), B/W image/video montage, scroll cue,
   optional bottom marquee. Dark radial + top/bottom gradient vignette.
2. **Editorial split** — large grayscale image one side, oversized statement +
   supporting paragraph + small stat row the other.
3. **Interactive cards** — thin-bordered grid (`gap-px` on a faint divider bg),
   `.svc-card` invert-on-hover, abstract line-SVG icons, numbered `01–0N`.
4. **Cinematic full-bleed** — parallax background image, headline pinned to the
   bottom, 3-column spec/detail strip.
5. **Story / bio** — portrait + grounded narrative copy + credential table.
6. **Editorial grid feed** — monochrome image grid, hover reveals caption/meta
   (good for Instagram/journal/press).
7. **Final CTA** — fullscreen dark, the largest headline on the page, one
   primary action, minimal contact details.
8. **Footer** — logo mark, link columns, optional newsletter input, fine print.

Layout discipline: max width ~1500px, generous gutters, `gap-px` dividers in
place of borders, section numbers as eyebrows.

---

## 9. Imagery Direction

- Grayscale, high contrast, natural light, candid movement/texture.
- Prefer wide cinematic crops; avoid posed, smiling, "stocky" shots.
- Apply grain overlay over photos for film texture.
- Use a dark vignette/gradient so text always stays legible.
- Placeholder source while sourcing real assets: Unsplash with `&sat=-100`.

---

## 10. Code Conventions

- Stack: Vite + React 18 + TypeScript + Tailwind. Single-page unless routing is needed.
- One component per section, named for the section (`Hero.tsx`, `Footer.tsx`).
- Keep design primitives in global CSS; keep layout in Tailwind utilities.
- Inline `clamp()` font sizes for oversized display type via `style={{}}`.
- Abstract icons: hand-author inline `<svg>` with `stroke="currentColor"`,
  `strokeWidth` ~1.25, thin geometric lines. No icon libraries.
- Accessibility: real `alt` text, focus-visible states, semantic landmarks,
  honor reduced-motion. Performance: `loading="lazy"` + `decoding="async"` on
  non-hero images; preconnect fonts.

---

## 11. Pre-ship Checklist

- [ ] Black canvas, max 2 typefaces, accent used ≤ a couple of times total.
- [ ] Every section has a clear single idea and room to breathe.
- [ ] Headlines are genuinely oversized and set the rhythm.
- [ ] All imagery grayscale + grain; text legible over every image.
- [ ] Motion is slow/eased; nothing bounces; reduced-motion respected.
- [ ] Hovers invert/wipe rather than glow or pop.
- [ ] No stock icons, no gradients beyond dark vignettes, no bright color.
- [ ] `npm run typecheck`, `npm run lint`, `npm run build` all pass.
- [ ] Looks intentional on a 375px phone and a 1920px display.
