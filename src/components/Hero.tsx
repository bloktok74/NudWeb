const marqueeItems = [
  'Pharmacist Developed',
  'Plant-Based',
  'Canadian NPN Certified',
  'Clinically Studied Strains',
  'Dairy · Gluten · Soy Free',
  'No Sweeteners · No Additives',
  'Made in the USA',
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 px-6 lg:px-10 overflow-hidden"
    >
      {/* Soft layered background — cream → sand wash with color blooms */}
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

            {/* 3-step legend */}
            <div className="reveal reveal-delay-4 mt-12 lg:mt-16 grid grid-cols-3 gap-4 lg:gap-6 max-w-lg">
              {[
                { dot: 'dot-sage', label: 'Green', sub: 'Gut' },
                { dot: 'dot-citrus', label: 'Orange', sub: 'Metabolism' },
                { dot: 'dot-lavender', label: 'Purple', sub: 'Sleep · Mood' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-2">
                  <span className={`dot ${s.dot}`} aria-hidden />
                  <span className="font-display text-lg text-ink leading-tight">{s.label}</span>
                  <span className="eyebrow !text-[10px]">{s.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — product hero composition */}
          <div className="col-span-12 lg:col-span-5 relative">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto">
              {/* Glow disc */}
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-champagne/30 via-cream to-citrus-soft blur-2xl opacity-80" />
              {/* Product card */}
              <div className="relative h-full w-full rounded-[28px] overflow-hidden border border-charcoal/10 bg-cream shadow-[0_40px_80px_-40px_rgba(26,22,18,0.28)]">
                <img
                  src="/products/hero-orange.png"
                  alt="Nudora Orange 2.0 — Metabolism & Energy"
                  className="absolute inset-0 w-full h-full object-cover ken-burns"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                  <span className="eyebrow !text-cream/90 flex items-center gap-2">
                    <span className="dot dot-citrus" aria-hidden />
                    Orange · Metabolism
                  </span>
                  <span className="eyebrow !text-cream/80">01</span>
                </div>
                <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                  <span className="font-display text-cream text-2xl italic">Fuel your rhythm.</span>
                  <span className="eyebrow !text-cream/85">From $64.99</span>
                </div>
              </div>

              {/* Floating mini-cards */}
              <div className="hidden md:flex absolute -left-10 top-1/4 card px-4 py-3 items-center gap-3 float-soft" style={{ animationDelay: '-2s' }}>
                <span className="dot dot-sage" />
                <div className="leading-tight">
                  <div className="font-display text-base text-ink">Green</div>
                  <div className="eyebrow !text-[9px]">Less bloat</div>
                </div>
              </div>
              <div className="hidden md:flex absolute -right-6 bottom-1/4 card px-4 py-3 items-center gap-3 float-soft" style={{ animationDelay: '-4s' }}>
                <span className="dot dot-lavender" />
                <div className="leading-tight">
                  <div className="font-display text-base text-ink">Purple</div>
                  <div className="eyebrow !text-[9px]">Sleep deeper</div>
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
            <span
              key={i}
              className="eyebrow flex items-center gap-16"
            >
              {item}
              <span className="dot dot-champagne" aria-hidden />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
