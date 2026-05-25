type Product = {
  num: string;
  name: string;
  blurb: string;
  price: string;
  img: string;
  span?: string; // tailwind col-span override
};

const products: Product[] = [
  {
    num: '01',
    name: 'The 3-Step Daily Wellness System',
    blurb: 'Complete gut, metabolism & mood reset with GLP-1 support.',
    price: 'From $194.97',
    img: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1400&q=80&sat=-100',
    span: 'lg:col-span-6',
  },
  {
    num: '02',
    name: 'Mind & Metabolism',
    blurb: 'Feel lighter, think brighter, sleep better — Orange + Purple.',
    price: 'From $129.98',
    img: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-3',
  },
  {
    num: '03',
    name: 'Weight Loss + Detox',
    blurb: 'Unified wellness — Orange + Green.',
    price: 'From $129.98',
    img: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-3',
  },
  {
    num: '04',
    name: 'Reset from Within',
    blurb: 'Mind & detox in harmony — Purple + Green.',
    price: 'From $129.98',
    img: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-4',
  },
  {
    num: '05',
    name: 'Nudora Orange 2.0',
    blurb: 'Metabolism, energy, GLP-1 pathway support.',
    price: 'From $64.99',
    img: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-4',
  },
  {
    num: '06',
    name: 'Nudora Green',
    blurb: 'Digestion, detox, immune support.',
    price: 'From $64.99',
    img: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-2',
  },
  {
    num: '07',
    name: 'Nudora Purple',
    blurb: 'Mood, stress, sleep — gut-brain axis.',
    price: 'From $64.99',
    img: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?auto=format&fit=crop&w=1200&q=80&sat=-100',
    span: 'lg:col-span-2',
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="relative bg-charcoal py-24 lg:py-44 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-16 lg:mb-24">
          <div>
            <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash mb-6">
              03 — The Collection
            </span>
            <h2
              className="reveal reveal-delay-1 font-display uppercase leading-[0.86] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(40px, 6.5vw, 112px)' }}
            >
              Seven Products.
              <br />
              <span className="text-bone/40">One System.</span>
            </h2>
          </div>
          <a href="#shop-all" className="reveal reveal-delay-2 btn-cinema self-end">
            View All
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-px bg-bone/10">
          {products.map((p, i) => (
            <a
              key={p.num}
              href={`#product-${p.num}`}
              className={`svc-card reveal ${p.span ?? 'lg:col-span-2'} group block`}
              style={{ transitionDelay: `${(i % 4) * 0.12}s` }}
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover mono transition-transform duration-[1200ms] ease-cinema group-hover:scale-[1.04]"
                  style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
                />
              </div>
              <div className="p-6 lg:p-8 flex flex-col gap-4">
                <span className="svc-eyebrow text-[10px] uppercase tracking-[0.32em] text-ash">
                  {p.num}
                </span>
                <h3 className="svc-title font-display uppercase leading-[0.92] text-xl lg:text-2xl tracking-tight text-bone">
                  {p.name}
                </h3>
                <p className="svc-text text-sm text-bone/65 leading-[1.7]">{p.blurb}</p>
                <div className="svc-text mt-4 flex items-center justify-between border-t border-bone/15 pt-4">
                  <span className="text-[11px] uppercase tracking-[0.32em] text-bone/70">
                    {p.price}
                  </span>
                  <span aria-hidden className="text-bone/70">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
