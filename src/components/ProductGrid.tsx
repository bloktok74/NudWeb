type Product = {
  num: string;
  name: string;
  shortName: string;
  role: string;
  promise: string;
  ingredients: string[];
  benefits: string[];
  price: string;
  img: string;
  tint: 'sage' | 'citrus' | 'lavender';
  dot: string;
};

const products: Product[] = [
  {
    num: '01',
    name: 'Nudora Green',
    shortName: 'Green',
    role: 'Gut · Digestive Harmony',
    promise: 'Feel lighter from the inside out.',
    ingredients: ['Magnesium Citrate', 'Aloe Vera', 'Gut-Motility Probiotics'],
    benefits: ['Relieves bloating & gas', 'Supports regular rhythm', 'Gentle daily detox'],
    price: 'From $64.99',
    img: '/products/hero-green-frost.png',
    tint: 'sage',
    dot: 'dot-sage',
  },
  {
    num: '02',
    name: 'Nudora Orange 2.0',
    shortName: 'Orange',
    role: 'Metabolism · Energy · GLP-1',
    promise: 'Fuel your daily rhythm.',
    ingredients: ['Akkermansia muciniphila', 'Dihydroberberine (DHB)', 'Green Tea · Ginger'],
    benefits: ['Supports natural fat burn', 'Steady energy, no crash', 'GLP-1 pathway support'],
    price: 'From $64.99',
    img: '/products/hero-orange.png',
    tint: 'citrus',
    dot: 'dot-citrus',
  },
  {
    num: '03',
    name: 'Nudora Purple',
    shortName: 'Purple',
    role: 'Sleep · Mood · Recovery',
    promise: 'Rest deeper. Reset better.',
    ingredients: ['Ashwagandha', 'Valerian Root', 'Magnesium · Gut-Brain Probiotics'],
    benefits: ['Calm without sedation', 'Deeper, restful sleep', 'Mood & mental clarity'],
    price: 'From $64.99',
    img: '/products/hero-purple.png',
    tint: 'lavender',
    dot: 'dot-lavender',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative bg-cream py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14 lg:mb-20">
          <div>
            <span className="reveal eyebrow flex items-center gap-3 mb-6">
              <span className="dot dot-champagne" aria-hidden /> 03 — The Collection
            </span>
            <h2
              className="reveal reveal-delay-1 font-display text-ink leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(40px, 6vw, 96px)', fontWeight: 400 }}
            >
              Three formulas.
              <br />
              <span className="italic text-champagne">One simple system.</span>
            </h2>
          </div>
          <a href="#system" className="reveal reveal-delay-2 btn btn-ghost self-end">
            Compare Formulas
            <span aria-hidden>→</span>
          </a>
        </div>

        {/* Three core products — equal, prominent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {products.map((p, i) => (
            <a
              key={p.num}
              href={`#product-${p.num}`}
              className="card reveal group block flex flex-col"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className={`relative aspect-[4/5] overflow-hidden tint-${p.tint}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`dot ${p.dot}`} aria-hidden />
                  <span className="eyebrow !text-[10px] !text-ink/85 bg-cream/85 px-3 py-1 rounded-full">
                    {p.num} · {p.shortName}
                  </span>
                </div>
              </div>

              <div className="p-6 lg:p-8 flex flex-col gap-5 flex-1">
                <div>
                  <span className="eyebrow block mb-3">{p.role}</span>
                  <h3 className="font-display text-2xl lg:text-3xl text-ink leading-tight tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 font-display italic text-lg text-charcoal/80">
                    {p.promise}
                  </p>
                </div>

                <ul className="space-y-2.5 border-t border-charcoal/10 pt-5">
                  {p.benefits.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm text-charcoal/80">
                      <span className={`dot ${p.dot}`} aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-charcoal/10 pt-5">
                  <span className="eyebrow !text-[10px] block mb-2">Key Ingredients</span>
                  <p className="text-xs text-charcoal/70 leading-relaxed">
                    {p.ingredients.join(' · ')}
                  </p>
                </div>

                <div className="mt-auto flex items-center justify-between pt-4 border-t border-charcoal/10">
                  <span className="eyebrow">{p.price}</span>
                  <span
                    aria-hidden
                    className="text-ink/70 group-hover:text-champagne group-hover:translate-x-1 transition-all duration-500"
                  >
                    Shop →
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Complete system — bundle CTA */}
        <div className="reveal reveal-delay-3 mt-10 lg:mt-14">
          <div className="relative overflow-hidden rounded-[28px] border border-charcoal/10 bg-gradient-to-br from-sage-soft via-citrus-soft to-lavender-soft">
            <div className="relative grid grid-cols-12 gap-6 lg:gap-10 p-8 lg:p-12 items-center">
              <div className="col-span-12 lg:col-span-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="dot dot-sage" aria-hidden />
                  <span className="dot dot-citrus" aria-hidden />
                  <span className="dot dot-lavender" aria-hidden />
                  <span className="eyebrow">The 3-Step Daily System</span>
                </div>
                <h3
                  className="font-display text-ink leading-[1.05] tracking-[-0.02em]"
                  style={{ fontSize: 'clamp(28px, 3.6vw, 56px)', fontWeight: 400 }}
                >
                  Want all three?{' '}
                  <span className="italic text-ink/65">
                    Build the complete system and save.
                  </span>
                </h3>
                <p className="mt-4 text-base text-charcoal/75 leading-[1.7] max-w-xl">
                  Green for gut. Orange for metabolism. Purple for sleep & mood.
                  One simple daily rhythm — with subscription savings and bundle
                  pricing.
                </p>
              </div>
              <div className="col-span-12 lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
                <span className="eyebrow !text-ink">From $194.97</span>
                <span className="text-xs text-charcoal/60">
                  Save vs buying individually
                </span>
                <a href="#shop-system" className="btn btn-primary mt-2">
                  Start The System
                  <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
