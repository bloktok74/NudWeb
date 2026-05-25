import { useEffect, useRef, useState } from 'react';

type Slide = {
  label: string;
  color: 'sage' | 'citrus' | 'lavender';
  dot: string;
  tint: string;
  headline: string;
  body: string;
  ingredients: string[];
  cta: string;
  img: string;
  tagline: string;
};

const slides: Slide[] = [
  {
    label: 'Green',
    color: 'sage',
    dot: 'dot-sage',
    tint: 'tint-sage',
    headline: 'Feel lighter from the inside out.',
    body: 'Gentle digestive harmony — magnesium citrate, aloe vera, and gut-motility probiotics restore your natural rhythm. No harsh laxatives.',
    ingredients: ['Magnesium Citrate', 'Aloe Vera', 'Gut-Motility Probiotics'],
    cta: 'Try Nudora Green',
    img: '/products/hero-green.png',
    tagline: 'Less bloat. More balance.',
  },
  {
    label: 'Orange',
    color: 'citrus',
    dot: 'dot-citrus',
    tint: 'tint-citrus',
    headline: 'Fuel your daily rhythm.',
    body: 'Metabolism, energy & GLP-1 pathway support — Akkermansia muciniphila, dihydroberberine, green tea, and ginger working in concert.',
    ingredients: ['Akkermansia muciniphila', 'Dihydroberberine (DHB)', 'Green Tea · Ginger'],
    cta: 'Try Nudora Orange',
    img: '/products/hero-orange.png',
    tagline: 'Energy without the crash.',
  },
  {
    label: 'Purple',
    color: 'lavender',
    dot: 'dot-lavender',
    tint: 'tint-lavender',
    headline: 'Rest deeper. Reset better.',
    body: 'Calm without sedation — ashwagandha, valerian root, magnesium, and gut-brain axis probiotics for mood, sleep, and recovery.',
    ingredients: ['Ashwagandha', 'Valerian Root', 'Magnesium · Gut-Brain Probiotics'],
    cta: 'Try Nudora Purple',
    img: '/products/hero-purple.png',
    tagline: 'Your nightly reset, simplified.',
  },
];

export default function ProductSelector() {
  const [index, setIndex] = useState(1); // start on Orange (most striking)
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 7000);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  const slide = slides[index];

  return (
    <section id="system" className="relative bg-limestone py-24 lg:py-36 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-16">
          <div>
            <span className="reveal eyebrow flex items-center gap-3 mb-6">
              <span className="dot dot-champagne" aria-hidden /> 05 — The System
            </span>
            <h2
              className="reveal reveal-delay-1 font-display text-ink leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(40px, 6vw, 96px)', fontWeight: 400 }}
            >
              Three steps.
              <br />
              <span className="italic text-champagne">One daily rhythm.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-2 flex items-center gap-2 p-1.5 rounded-full bg-cream border border-charcoal/10">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setIndex(i)}
                className={`px-5 py-2.5 rounded-full text-[11px] uppercase tracking-[0.28em] flex items-center gap-2.5 transition-all duration-500 ${
                  i === index ? 'bg-ink text-cream' : 'text-charcoal/65 hover:text-ink'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                aria-label={`Show ${s.label}`}
              >
                <span className={`dot ${s.dot}`} />
                {s.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10 items-stretch">
          {/* Image */}
          <div className={`col-span-12 lg:col-span-7 relative aspect-[16/11] rounded-[32px] overflow-hidden border border-charcoal/10 ${slide.tint} transition-colors duration-1000`}>
            {slides.map((s, i) => (
              <img
                key={s.label}
                src={s.img}
                alt={s.headline}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1400ms] ${
                  i === index ? 'opacity-100 ken-burns' : 'opacity-0'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 flex items-center gap-3">
              <span className={`dot ${slide.dot}`} />
              <span className="eyebrow !text-cream bg-ink/30 backdrop-blur px-3 py-1 rounded-full">
                {slide.label} · Step 0{index + 1}
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <span className="font-display italic text-cream text-2xl lg:text-3xl">
                {slide.tagline}
              </span>
              <span className="eyebrow !text-cream/85 tabular-nums">
                0{index + 1} / 0{slides.length}
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div key={index} className="reveal in">
              <h3
                className="font-display text-ink leading-[1.05] tracking-[-0.02em]"
                style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 400 }}
              >
                {slide.headline}
              </h3>
              <p className="mt-6 lg:mt-8 text-base lg:text-lg text-charcoal/75 leading-[1.7] max-w-md">
                {slide.body}
              </p>

              <ul className="mt-8 space-y-3 max-w-md">
                {slide.ingredients.map((ing) => (
                  <li key={ing} className="flex items-center gap-3 text-sm text-charcoal/85">
                    <span className={`dot ${slide.dot}`} aria-hidden />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="#shop" className="btn btn-primary">
                {slide.cta}
                <span aria-hidden>→</span>
              </a>
              <a href="#why" className="btn btn-ghost">
                Why It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
