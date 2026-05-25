type Result = {
  label: string;
  headline: string;
  body: string;
  cta: string;
  tone: 'sage' | 'citrus' | 'lavender';
  icon: 'lighter' | 'calm' | 'rested' | 'glowing' | 'naturally' | 'strong';
};

const results: Result[] = [
  {
    label: 'Lighter',
    headline: 'Bloat be gone, confidence back.',
    body: 'Wake up with a flat belly — no more tight jeans or sucking in. Feel light and free, every day.',
    cta: 'Try Nudora Orange',
    tone: 'citrus',
    icon: 'lighter',
  },
  {
    label: 'Calm',
    headline: 'Goodbye anxiety, hello calm.',
    body: 'Take back control. No racing thoughts — just calm, clarity, and confidence to handle anything.',
    cta: 'Try Nudora Purple',
    tone: 'lavender',
    icon: 'calm',
  },
  {
    label: 'Rested',
    headline: 'Finally, deep restful sleep.',
    body: 'No more tossing or turning. Wake up energized, ready to take on the day.',
    cta: 'Try Nudora Purple',
    tone: 'lavender',
    icon: 'rested',
  },
  {
    label: 'Glowing',
    headline: 'Clear skin from the inside out.',
    body: 'Say goodbye to breakouts and dull skin. Heal your gut, and your skin glows — naturally.',
    cta: 'Try Nudora Orange',
    tone: 'citrus',
    icon: 'glowing',
  },
  {
    label: 'Naturally',
    headline: 'Digestion that just works.',
    body: 'No more cramps, gas, or emergency bathroom runs. Eat what you love, feel good after.',
    cta: 'Try Nudora Green',
    tone: 'sage',
    icon: 'naturally',
  },
  {
    label: 'Strong',
    headline: 'Burn fat, feel powerful.',
    body: 'Support a steady metabolism. Move, sweat, and feel unstoppable — without starving yourself.',
    cta: 'Try Nudora Orange',
    tone: 'citrus',
    icon: 'strong',
  },
];

const dotMap = { sage: 'dot-sage', citrus: 'dot-citrus', lavender: 'dot-lavender' };
const tintMap = { sage: 'tint-sage', citrus: 'tint-citrus', lavender: 'tint-lavender' };

function Icon({ kind }: { kind: Result['icon'] }) {
  const common = {
    width: 40,
    height: 40,
    viewBox: '0 0 44 44',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };
  switch (kind) {
    case 'lighter':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="14" />
          <path d="M22 8 v28" />
          <path d="M14 16 l8 -4 l8 4" />
        </svg>
      );
    case 'calm':
      return (
        <svg {...common}>
          <path d="M6 30 q8 -16 16 -8 t16 -8" />
          <path d="M6 36 q8 -16 16 -8 t16 -8" />
        </svg>
      );
    case 'rested':
      return (
        <svg {...common}>
          <path d="M28 8 a14 14 0 1 0 8 22 A12 12 0 0 1 28 8z" />
          <path d="M14 14 h6 l-6 6 h6" />
        </svg>
      );
    case 'glowing':
      return (
        <svg {...common}>
          <circle cx="22" cy="22" r="6" />
          <path d="M22 4 v6 M22 34 v6 M4 22 h6 M34 22 h6 M9 9 l4 4 M31 31 l4 4 M9 35 l4 -4 M31 13 l4 -4" />
        </svg>
      );
    case 'naturally':
      return (
        <svg {...common}>
          <path d="M22 38 C 10 30 10 18 22 6 C 34 18 34 30 22 38 z" />
          <path d="M22 14 v18" />
        </svg>
      );
    case 'strong':
      return (
        <svg {...common}>
          <path d="M8 22 h6 l4 -6 l6 12 l4 -8 h8" />
        </svg>
      );
  }
}

export default function ResultsCards() {
  return (
    <section className="relative bg-cream py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 mb-14 lg:mb-20">
          <div className="col-span-12 lg:col-span-4">
            <span className="reveal eyebrow flex items-center gap-3">
              <span className="dot dot-champagne" aria-hidden /> 06 — Results
            </span>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <h2
              className="reveal font-display text-ink leading-[1.0] tracking-[-0.02em]"
              style={{ fontSize: 'clamp(40px, 6vw, 96px)', fontWeight: 400 }}
            >
              The way you're
              <br />
              <span className="italic text-champagne">meant</span> to feel.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((r, i) => (
            <article
              key={r.label}
              className="card reveal flex flex-col"
              style={{ transitionDelay: `${(i % 3) * 0.10}s` }}
            >
              <div className={`${tintMap[r.tone]} p-8 lg:p-10 flex items-start justify-between`}>
                <span className="text-ink/85">
                  <Icon kind={r.icon} />
                </span>
                <span className="eyebrow !text-[10px] tabular-nums">0{i + 1} / 06</span>
              </div>

              <div className="p-8 lg:p-10 flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-3">
                  <span className={`dot ${dotMap[r.tone]}`} aria-hidden />
                  <span className="eyebrow">{r.label}</span>
                </div>

                <h3 className="font-display text-2xl lg:text-3xl text-ink leading-[1.1] tracking-tight">
                  {r.headline}
                </h3>

                <p className="text-sm lg:text-base text-charcoal/70 leading-[1.7] flex-1">
                  {r.body}
                </p>

                <a
                  href="#shop"
                  className="mt-auto inline-flex items-center gap-3 eyebrow !text-ink hover:!text-champagne transition-colors duration-500"
                >
                  {r.cta}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
