type Result = {
  label: string;
  headline: string;
  body: string;
  cta: string;
  icon: 'lighter' | 'calm' | 'rested' | 'glowing' | 'naturally' | 'strong';
};

const results: Result[] = [
  {
    label: 'Lighter',
    headline: 'Bloat Be Gone, Confidence Back',
    body: 'Wake up with a flat belly — no more tight jeans or sucking in. Feel light and free, every single day.',
    cta: 'Try Nudora Orange',
    icon: 'lighter',
  },
  {
    label: 'Calm',
    headline: 'Goodbye Anxiety, Hello Calm',
    body: 'Take back control. No racing thoughts — just calm, clarity, and confidence to handle anything life brings.',
    cta: 'Try Nudora Purple',
    icon: 'calm',
  },
  {
    label: 'Rested',
    headline: 'Finally, Deep Restful Sleep',
    body: 'No more tossing, turning, or waking up exhausted. Wake up energized, ready to crush your day.',
    cta: 'Try Nudora Purple',
    icon: 'rested',
  },
  {
    label: 'Glowing',
    headline: 'Clear Skin from the Inside Out',
    body: 'Say goodbye to breakouts and dull skin. Heal your gut, and your skin glows — naturally.',
    cta: 'Try Nudora Orange',
    icon: 'glowing',
  },
  {
    label: 'Naturally',
    headline: 'Digestion That Just Works',
    body: 'No more cramps, gas, or emergency bathroom runs. Eat what you love, feel good after.',
    cta: 'Try Nudora Green',
    icon: 'naturally',
  },
  {
    label: 'Strong',
    headline: 'Burn Fat, Feel Powerful',
    body: 'Fire up your metabolism. Ditch the sluggish feeling. Move, sweat, and feel unstoppable — without starving yourself.',
    cta: 'Try Nudora Orange',
    icon: 'strong',
  },
];

function Icon({ kind }: { kind: Result['icon'] }) {
  const common = {
    width: 44,
    height: 44,
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
    <section className="relative bg-ink py-24 lg:py-44 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-y-10 lg:gap-x-10 mb-16 lg:mb-24">
          <div className="col-span-12 lg:col-span-3">
            <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash">
              06 — Results
            </span>
          </div>
          <div className="col-span-12 lg:col-span-9">
            <h2
              className="reveal font-display uppercase leading-[0.86] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(40px, 6.5vw, 112px)' }}
            >
              The Way You're
              <br />
              <span className="text-bone/40">Meant</span> To Feel.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-bone/10">
          {results.map((r, i) => (
            <article
              key={r.label}
              className="svc-card reveal p-8 lg:p-10 flex flex-col gap-8 min-h-[420px]"
              style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
            >
              <div className="flex items-start justify-between">
                <span className="svc-text text-bone/80">
                  <Icon kind={r.icon} />
                </span>
                <span className="svc-eyebrow text-[10px] uppercase tracking-[0.32em] text-ash tabular-nums">
                  0{i + 1} / 06
                </span>
              </div>

              <span className="svc-eyebrow text-[11px] uppercase tracking-[0.32em] text-sand">
                {r.label}
              </span>

              <h3 className="svc-title font-display uppercase leading-[0.92] tracking-tight text-3xl lg:text-4xl">
                {r.headline}
              </h3>

              <p className="svc-text text-sm lg:text-base text-bone/65 leading-[1.7] flex-1">
                {r.body}
              </p>

              <a
                href="#shop"
                className="svc-text mt-auto inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.32em] text-bone"
              >
                {r.cta}
                <span aria-hidden>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
