import { useParallax } from '../hooks/useParallax';

const marqueeItems = [
  'Pharmacist Developed',
  'Plant-Based',
  'Canadian NPN Certified',
  'Clinically Studied Strains',
  'Dairy · Gluten · Soy Free',
  'Made in the USA',
];

export default function Hero() {
  const bgRef = useParallax<HTMLDivElement>(0.15);

  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden flex flex-col"
    >
      {/* Background */}
      <div ref={bgRef} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1542736667-069246bdbc6d?auto=format&fit=crop&w=2400&q=80&sat=-100"
          alt=""
          className="w-full h-full object-cover mono ken-burns"
          loading="eager"
          decoding="async"
        />
      </div>
      {/* Vignettes */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(120%_80%_at_50%_40%,transparent_30%,rgba(0,0,0,0.85)_85%)]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-ink/70 via-transparent to-ink" />

      {/* Eyebrow top-left */}
      <div className="max-w-content mx-auto w-full px-6 lg:px-10 pt-28 lg:pt-40 flex items-start justify-between">
        <span className="reveal text-[11px] uppercase tracking-[0.32em] text-ash">
          01 — Trust Your Gut
        </span>
        <span className="reveal reveal-delay-1 hidden md:inline text-[11px] uppercase tracking-[0.32em] text-ash">
          Est. By a Pharmacist Family
        </span>
      </div>

      {/* Headline */}
      <div className="flex-1 flex items-center">
        <div className="max-w-content mx-auto w-full px-6 lg:px-10 py-16 lg:py-24">
          <h1
            className="reveal font-display uppercase leading-[0.86] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(56px, 11.5vw, 200px)' }}
          >
            Replace 10–15
            <br />
            Supplements With
            <br />
            <span className="text-sand">One</span> Daily System
          </h1>

          <p className="reveal reveal-delay-2 mt-10 max-w-xl text-base lg:text-lg text-bone/75 leading-[1.7]">
            A simple 3-step system for gut, metabolism, and mood — pharmacist
            developed, plant-based, and clinically studied.
          </p>

          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center gap-5">
            <a href="#shop" className="btn-cinema btn-cinema--solid">
              Start Your System
              <span aria-hidden>→</span>
            </a>
            <a href="#why" className="btn-cinema">
              Why Nudora
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-24 lg:bottom-28 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-ash">
        <span className="text-[10px] uppercase tracking-[0.32em]">Scroll</span>
        <span className="block w-px h-12 bg-bone/30 origin-top animate-[scrollline_2.4s_cubic-bezier(0.22,1,0.36,1)_infinite]" />
      </div>

      {/* Marquee */}
      <div className="relative border-t border-bone/10 bg-ink/60 backdrop-blur-sm overflow-hidden">
        <div className="marquee-track flex whitespace-nowrap py-5 gap-16">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="text-[11px] uppercase tracking-[0.32em] text-bone/60 flex items-center gap-16"
            >
              {item}
              <span className="w-1 h-1 rounded-full bg-sand" aria-hidden />
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scrollline {
          0% { transform: scaleY(0); transform-origin: top; }
          50% { transform: scaleY(1); transform-origin: top; }
          51% { transform: scaleY(1); transform-origin: bottom; }
          100% { transform: scaleY(0); transform-origin: bottom; }
        }
      `}</style>
    </section>
  );
}
