import { useEffect, useRef, useState } from 'react';

const marqueeItems = [
  'Pharmacist Developed',
  'Plant-Based',
  'Canadian NPN Certified',
  'Clinically Studied Strains',
  'Dairy · Gluten · Soy Free',
  'No Sweeteners · No Additives',
  'Made in the USA',
];

type HeroProduct = {
  key: 'orange' | 'purple' | 'green';
  label: string;          // card top eyebrow
  shortLabel: string;     // mini-pill title
  step: string;           // 'Metabolism' | 'Sleep · Mood' | 'Gut'
  dot: string;
  tagline: string;        // card bottom italic
  benefit: string;        // mini-pill bottom sub
  benefitAlt: string;     // secondary mini-pill sub
  img: string;
  alt: string;
};

const heroProducts: HeroProduct[] = [
  {
    key: 'orange',
    label: 'Orange · Metabolism',
    shortLabel: 'Orange',
    step: 'Metabolism',
    dot: 'dot-citrus',
    tagline: 'Fuel your rhythm.',
    benefit: 'Burn cleaner',
    benefitAlt: 'Energy without the crash',
    img: '/products/hero-orange.png',
    alt: 'Nudora Orange 2.0 — Metabolism & Energy',
  },
  {
    key: 'purple',
    label: 'Purple · Sleep · Mood',
    shortLabel: 'Purple',
    step: 'Sleep · Mood',
    dot: 'dot-lavender',
    tagline: 'Rest deeper. Reset better.',
    benefit: 'Sleep deeper',
    benefitAlt: 'Calm without sedation',
    img: '/products/hero-purple.png',
    alt: 'Nudora Purple — Sleep & Mood Support',
  },
  {
    key: 'green',
    label: 'Green · Gut',
    shortLabel: 'Green',
    step: 'Gut',
    dot: 'dot-sage',
    tagline: 'Feel lighter from within.',
    benefit: 'Less bloat',
    benefitAlt: 'Gentle daily rhythm',
    img: '/products/hero-green.png',
    alt: 'Nudora Green — Daily Gut Support',
  },
];

const ROTATE_MS = 5500;
const FADE_MS = 1400;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % heroProducts.length);
    }, ROTATE_MS);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  const fadeStyle = { transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' };

  return (
    <section
      id="top"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-10 overflow-hidden"
    >
      {/* Soft layered background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-cream via-cream to-limestone" />
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] rounded-full bg-citrus-soft opacity-60 blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[600px] h-[600px] rounded-full bg-lavender-soft opacity-50 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-[480px] h-[480px] rounded-full bg-sage-soft opacity-50 blur-3xl" />
      </div>

      <div className="max-w-content mx-auto">
        {/* Eyebrow row */}
        <div className="flex items-center justify-between flex-wrap gap-4 mb-10 lg:mb-16">
          <span className="reveal eyebrow flex items-center gap-3">
            <span className="dot dot-champagne" aria-hidden /> 01 — Trust Your Gut
          </span>
          <span className="reveal reveal-delay-1 eyebrow hidden md:inline">
            Pharmacist · Family Owned · Since Day One
          </span>
        </div>

        <div className="grid grid-cols-12 gap-y-14 lg:gap-x-10 items-center">
          {/* Left — headline + copy */}
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="reveal font-display text-ink leading-[0.95] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(52px, 9.5vw, 156px)', fontWeight: 400 }}
            >
              Support your
              <br />
              whole body
              <br />
              <span className="italic text-champagne">from within.</span>
            </h1>

            <p className="reveal reveal-delay-2 mt-8 lg:mt-10 max-w-xl text-base lg:text-lg text-charcoal/75 leading-[1.7]">
              A simpler daily system for gut, metabolism, sleep & mood —
              pharmacist-developed, plant-based, color-coded so it's clear
              what each one does.
            </p>

            <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
              <a href="#shop" className="btn btn-primary">
                Start Your System
                <span aria-hidden>→</span>
              </a>
              <a href="#system" className="btn btn-ghost">
                See How It Works
              </a>
            </div>

            {/* 3-step legend — clickable, active highlighted */}
            <div className="reveal reveal-delay-4 mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-6 max-w-lg">
              {heroProducts.map((p, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${p.shortLabel}`}
                    className="text-left flex flex-col gap-2 group"
                  >
                    <span className={`dot ${p.dot}`} aria-hidden />
                    <span
                      className={`font-display text-lg leading-tight transition-colors duration-500 ${
                        isActive ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                      }`}
                    >
                      {p.shortLabel}
                    </span>
                    <span className="eyebrow !text-[10px]">{p.step}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right — rotating product hero card */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Glow disc */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-champagne/30 via-cream to-citrus-soft blur-2xl opacity-80" />

              {/* Product card — each product is a full-bleed layer that crossfades together */}
              <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-charcoal/10 bg-cream shadow-[0_40px_80px_-40px_rgba(26,22,18,0.28)]">
                {heroProducts.map((p, i) => {
                  const isActive = i === index;
                  return (
                    <div
                      key={p.key}
                      className={`absolute inset-0 transition-opacity ${
                        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{ ...fadeStyle, transitionDuration: `${FADE_MS}ms` }}
                      aria-hidden={!isActive}
                    >
                      <img
                        src={p.img}
                        alt={isActive ? p.alt : ''}
                        loading={i === 0 ? 'eager' : 'lazy'}
                        decoding="async"
                        className={`absolute inset-0 w-full h-full object-cover ${isActive ? 'ken-burns' : ''}`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />

                      {/* Top label */}
                      <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                        <span className="eyebrow !text-cream/95 flex items-center gap-2">
                          <span className={`dot ${p.dot}`} aria-hidden />
                          {p.label}
                        </span>
                        <span className="eyebrow !text-cream/85 tabular-nums">
                          0{i + 1} / 0{heroProducts.length}
                        </span>
                      </div>

                      {/* Bottom tagline + price */}
                      <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between gap-4">
                        <span className="font-display italic text-cream text-2xl leading-tight">
                          {p.tagline}
                        </span>
                        <span className="eyebrow !text-cream/90 whitespace-nowrap">
                          From $64.99
                        </span>
                      </div>
                    </div>
                  );
                })}

                {/* Progress bar — restarts each rotation */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cream/20 overflow-hidden">
                  <div
                    key={`bar-${index}`}
                    className="h-full bg-champagne origin-left"
                    style={{ animation: `hero-bar ${ROTATE_MS}ms linear forwards` }}
                  />
                </div>
              </div>

              {/* Floating mini-pills — each is a stack of 3 product states; active one fades in.
                  Both pills now follow the CURRENT product, with different facets. */}
              <div className="hidden md:block absolute -left-10 top-1/4 w-[200px] h-[64px]">
                {heroProducts.map((p, i) => {
                  const isActive = i === index;
                  return (
                    <div
                      key={p.key}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 card px-4 py-3 flex items-center gap-3 transition-opacity ${
                        isActive ? 'opacity-100 float-soft' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        ...fadeStyle,
                        transitionDuration: `${FADE_MS}ms`,
                        animationDelay: '-2s',
                      }}
                    >
                      <span className={`dot ${p.dot}`} />
                      <div className="leading-tight">
                        <div className="font-display text-base text-ink">{p.shortLabel}</div>
                        <div className="eyebrow !text-[9px]">{p.step}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="hidden md:block absolute -right-6 bottom-1/4 w-[210px] h-[64px]">
                {heroProducts.map((p, i) => {
                  const isActive = i === index;
                  return (
                    <div
                      key={p.key}
                      aria-hidden={!isActive}
                      className={`absolute inset-0 card px-4 py-3 flex items-center gap-3 transition-opacity ${
                        isActive ? 'opacity-100 float-soft' : 'opacity-0 pointer-events-none'
                      }`}
                      style={{
                        ...fadeStyle,
                        transitionDuration: `${FADE_MS}ms`,
                        animationDelay: '-4s',
                      }}
                    >
                      <span className={`dot ${p.dot}`} />
                      <div className="leading-tight">
                        <div className="font-display text-base text-ink">{p.shortLabel}</div>
                        <div className="eyebrow !text-[9px]">{p.benefit}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee bar */}
      <div className="relative mt-20 lg:mt-28 -mx-6 lg:-mx-10 border-y border-charcoal/10 bg-cream/70 backdrop-blur-sm overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-5 gap-16">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="eyebrow flex items-center gap-16">
              {item}
              <span className="dot dot-champagne" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes hero-bar {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
}
