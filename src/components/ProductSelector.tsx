import { useEffect, useRef, useState } from 'react';

type Slide = {
  label: string;
  dotClass: string;
  headline: string;
  body: string;
  cta: string;
  img: string;
};

const slides: Slide[] = [
  {
    label: 'Orange',
    dotClass: 'bg-[#E07A2C]',
    headline: 'Burn fat, boost energy & clear glossy skin.',
    body: 'Metabolism & GLP-1 pathway support — with Akkermansia muciniphila, dihydroberberine, green tea, and ginger.',
    cta: 'Try Nudora Orange',
    img: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&w=1800&q=80&sat=-100',
  },
  {
    label: 'Purple',
    dotClass: 'bg-[#7A5AA8]',
    headline: 'Mood boost, anxiety relief & deeper sleep.',
    body: 'Calm without sedation — ashwagandha, valerian root, magnesium, and gut-brain axis probiotics.',
    cta: 'Try Nudora Purple',
    img: 'https://images.unsplash.com/photo-1519810755548-39cd217da494?auto=format&fit=crop&w=1800&q=80&sat=-100',
  },
  {
    label: 'Green',
    dotClass: 'bg-[#5E8C5A]',
    headline: 'Constipation & bloating relief, gas, immune support.',
    body: 'Gentle digestive reset — magnesium citrate, aloe vera, and gut-motility probiotic strains.',
    cta: 'Try Nudora Green',
    img: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?auto=format&fit=crop&w=1800&q=80&sat=-100',
  },
];

export default function ProductSelector() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 6500);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [index]);

  const slide = slides[index];

  return (
    <section className="relative bg-charcoal py-24 lg:py-44 px-6 lg:px-10 overflow-hidden">
      <div className="max-w-content mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-12 lg:mb-20">
          <div>
            <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash mb-6">
              05 — The System
            </span>
            <h2
              className="reveal reveal-delay-1 font-display uppercase leading-[0.86] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(40px, 6.5vw, 112px)' }}
            >
              Pick Your <span className="text-sand">Color.</span>
              <br />
              Pick Your Result.
            </h2>
          </div>
          <div className="reveal reveal-delay-2 flex items-center gap-6">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setIndex(i)}
                className="group flex items-center gap-3 text-[11px] uppercase tracking-[0.32em]"
                aria-label={`Show ${s.label}`}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full transition-all duration-700 ${
                    i === index ? `${s.dotClass} scale-150` : 'bg-bone/30'
                  }`}
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                />
                <span className={i === index ? 'text-bone' : 'text-ash'}>{s.label}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10 items-stretch">
          {/* Image */}
          <div className="col-span-12 lg:col-span-7 relative aspect-[16/11] overflow-hidden bg-ink">
            {slides.map((s, i) => (
              <img
                key={s.label}
                src={s.img}
                alt={s.headline}
                loading="lazy"
                decoding="async"
                className={`absolute inset-0 w-full h-full object-cover mono transition-opacity duration-[1200ms] ${
                  i === index ? 'opacity-100 ken-burns' : 'opacity-0'
                }`}
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 flex items-center gap-3">
              <span className={`inline-block w-2 h-2 rounded-full ${slide.dotClass}`} />
              <span className="text-[11px] uppercase tracking-[0.32em] text-bone/80">
                {slide.label}
              </span>
            </div>
          </div>

          {/* Copy */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div key={index} className="reveal in">
              <h3
                className="font-display uppercase leading-[0.92] tracking-[-0.01em]"
                style={{ fontSize: 'clamp(32px, 4vw, 64px)' }}
              >
                {slide.headline}
              </h3>
              <p className="mt-8 text-base lg:text-lg text-bone/70 leading-[1.7] max-w-md">
                {slide.body}
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-5 items-center">
              <a href="#shop" className="btn-cinema btn-cinema--solid">
                {slide.cta}
                <span aria-hidden>→</span>
              </a>
              <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.32em] text-ash tabular-nums">
                <span className="text-bone">0{index + 1}</span>
                <span className="text-ash">/</span>
                <span>0{slides.length}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
