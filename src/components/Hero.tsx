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
  label: string;
  dot: string;
  tagline: string;
  img: string;
  alt: string;
  miniLabel: string;
  miniSub: string;
};

const heroProducts: HeroProduct[] = [
  {
    key: 'orange',
    label: 'Orange · Metabolism',
    dot: 'dot-citrus',
    tagline: 'Fuel your rhythm.',
    img: '/products/hero-orange.png',
    alt: 'Nudora Orange 2.0 — Metabolism & Energy',
    miniLabel: 'Orange',
    miniSub: 'Burn cleaner',
  },
  {
    key: 'purple',
    label: 'Purple · Sleep · Mood',
    dot: 'dot-lavender',
    tagline: 'Rest deeper. Reset better.',
    img: '/products/hero-purple.png',
    alt: 'Nudora Purple — Sleep & Mood Support',
    miniLabel: 'Purple',
    miniSub: 'Sleep deeper',
  },
  {
    key: 'green',
    label: 'Green · Gut',
    dot: 'dot-sage',
    tagline: 'Feel lighter from within.',
    img: '/products/hero-green.png',
    alt: 'Nudora Green — Daily Gut Support',
    miniLabel: 'Green',
    miniSub: 'Less bloat',
  },
];

const ROTATE_MS = 5500;

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

  const active = heroProducts[index];
  // floating cards: the other two products, in stable order
  const others = heroProducts.filter((_, i) => i !== index);

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

            {/* 3-step legend — current active highlighted */}
            <div className="reveal reveal-delay-4 mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-6 max-w-lg">
              {heroProducts.map((p, i) => {
                const isActive = i === index;
                return (
                  <button
                    key={p.key}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Show ${p.miniLabel}`}
                    className="text-left flex flex-col gap-2 group"
                  >
                    <span className={`dot ${p.dot}`} aria-hidden />
                    <span
                      className={`font-display text-lg leading-tight transition-colors duration-500 ${
                        isActive ? 'text-ink' : 'text-ink/55 group-hover:text-ink'
                      }`}
                    >
                      {p.miniLabel}
                    </span>
                    <span className="eyebrow !text-[10px]">
                      {p.key === 'orange' ? 'Metabolism' : p.key === 'purple' ? 'Sleep · Mood' : 'Gut'}
                    </span>
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

              {/* Product card */}
              <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-charcoal/10 bg-cream shadow-[0_40px_80px_-40px_rgba(26,22,18,0.28)]">
                {/* Layered images — crossfade */}
                {heroProducts.map((p, i) => (
                  <img
                    key={p.key}
                    src={p.img}
                    alt={i === index ? p.alt : ''}
                    aria-hidden={i !== index}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${
                      i === index ? 'opacity-100 ken-burns' : 'opacity-0'
                    }`}
                    style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/35 via-transparent to-transparent" />

                {/* Top label + step counter */}
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span
                    key={`label-${active.key}`}
                    className="eyebrow !text-cream/95 flex items-center gap-2 reveal in"
                  >
                    <span className={`dot ${active.dot}`} aria-hidden />
                    {active.label}
                  </span>
                  <span className="eyebrow !text-cream/85 tabular-nums">
                    0{index + 1} / 0{heroProducts.length}
                  </span>
                </div>

                {/* Bottom tagline + price */}
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                  <span
                    key={`tag-${active.key}`}
                    className="font-display italic text-cream text-2xl leading-tight reveal in"
                  >
                    {active.tagline}
                  </span>
                  <span className="eyebrow !text-cream/90 whitespace-nowrap">From $64.99</span>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cream/20">
                  <div
                    key={`bar-${index}`}
                    className="h-full bg-champagne"
                    style={{ animation: `hero-bar ${ROTATE_MS}ms linear forwards` }}
                  />
                </div>
              </div>

              {/* Floating mini-cards — show the two NOT in the hero */}
              <div
                key={`mini-top-${others[0].key}`}
                className="hidden md:flex absolute -left-10 top-1/4 card px-4 py-3 items-center gap-3 float-soft"
                style={{ animationDelay: '-2s' }}
              >
                <span className={`dot ${others[0].dot}`} />
                <div className="leading-tight">
                  <div className="font-display text-base text-ink">{others[0].miniLabel}</div>
                  <div className="eyebrow !text-[9px]">{others[0].miniSub}</div>
                </div>
              </div>
              <div
                key={`mini-bot-${others[1].key}`}
                className="hidden md:flex absolute -right-6 bottom-1/4 card px-4 py-3 items-center gap-3 float-soft"
                style={{ animationDelay: '-4s' }}
              >
                <span className={`dot ${others[1].dot}`} />
                <div className="leading-tight">
                  <div className="font-display text-base text-ink">{others[1].miniLabel}</div>
                  <div className="eyebrow !text-[9px]">{others[1].miniSub}</div>
                </div>
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
          from { transform: scaleX(0); transform-origin: left; }
          to { transform: scaleX(1); transform-origin: left; }
        }
      `}</style>
    </section>
  );
}
