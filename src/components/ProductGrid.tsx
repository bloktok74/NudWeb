type Product = {
  num: string;
  name: string;
  blurb: string;
  price: string;
  img: string;
  tint: 'sage' | 'citrus' | 'lavender' | 'champagne';
  dot: string;
  span?: string;
  featured?: boolean;
};

const products: Product[] = [
  {
    num: '01',
    name: 'The 3-Step Daily System',
    blurb: 'Complete daily rhythm — gut, metabolism, sleep & mood. Built around GLP-1 support.',
    price: 'From $194.97',
    img: '/products/hero-orange.png',
    tint: 'champagne',
    dot: 'dot-champagne',
    span: 'lg:col-span-6',
    featured: true,
  },
  {
    num: '02',
    name: 'Mind & Metabolism',
    blurb: 'Feel lighter, think brighter — Orange + Purple.',
    price: 'From $129.98',
    img: '/products/purple-2.png',
    tint: 'lavender',
    dot: 'dot-lavender',
    span: 'lg:col-span-3',
  },
  {
    num: '03',
    name: 'Weight Loss + Detox',
    blurb: 'Unified wellness — Orange + Green.',
    price: 'From $129.98',
    img: '/products/orange-3.png',
    tint: 'citrus',
    dot: 'dot-citrus',
    span: 'lg:col-span-3',
  },
  {
    num: '04',
    name: 'Reset from Within',
    blurb: 'Mind & detox in harmony — Purple + Green.',
    price: 'From $129.98',
    img: '/products/lifestyle-purple.png',
    tint: 'lavender',
    dot: 'dot-lavender',
    span: 'lg:col-span-4',
  },
  {
    num: '05',
    name: 'Nudora Orange 2.0',
    blurb: 'Metabolism, energy, GLP-1 pathway support.',
    price: 'From $64.99',
    img: '/products/lifestyle-orange.png',
    tint: 'citrus',
    dot: 'dot-citrus',
    span: 'lg:col-span-4',
  },
  {
    num: '06',
    name: 'Nudora Green',
    blurb: 'Digestive harmony, gentle detox, immune support.',
    price: 'From $64.99',
    img: '/products/hero-green.png',
    tint: 'sage',
    dot: 'dot-sage',
    span: 'lg:col-span-2',
  },
  {
    num: '07',
    name: 'Nudora Purple',
    blurb: 'Calm, mood, sleep — gut-brain axis.',
    price: 'From $64.99',
    img: '/products/hero-purple.png',
    tint: 'lavender',
    dot: 'dot-lavender',
    span: 'lg:col-span-2',
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
              Seven products.
              <br />
              <span className="italic text-champagne">One simple system.</span>
            </h2>
          </div>
          <a href="#shop-all" className="reveal reveal-delay-2 btn btn-ghost self-end">
            View All
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
          {products.map((p, i) => (
            <a
              key={p.num}
              href={`#product-${p.num}`}
              className={`card reveal ${p.span ?? 'lg:col-span-2'} group block`}
              style={{ transitionDelay: `${(i % 4) * 0.10}s` }}
            >
              <div className={`relative ${p.featured ? 'aspect-[16/11]' : 'aspect-[4/5]'} overflow-hidden tint-${p.tint}`}>
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className={`dot ${p.dot}`} aria-hidden />
                  <span className="eyebrow !text-[10px] !text-ink/80 bg-cream/85 px-3 py-1 rounded-full">
                    {p.num}
                  </span>
                </div>
              </div>
              <div className="p-6 lg:p-7 flex flex-col gap-3">
                <h3 className="font-display text-xl lg:text-2xl text-ink leading-tight tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm text-charcoal/70 leading-[1.65]">{p.blurb}</p>
                <div className="mt-3 flex items-center justify-between border-t border-charcoal/10 pt-4">
                  <span className="eyebrow">{p.price}</span>
                  <span aria-hidden className="text-ink/70 group-hover:text-champagne transition-colors duration-500">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
