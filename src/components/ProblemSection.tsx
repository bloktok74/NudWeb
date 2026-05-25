import { useParallax } from '../hooks/useParallax';

const painPoints = [
  'Sick of waking up bloated and uncomfortable?',
  'Struggling with stubborn belly fat and low energy?',
  'Feeling anxious or having trouble sleeping?',
  'Dealing with constipation, gas, or unpredictable digestion?',
];

export default function ProblemSection() {
  const imgRef = useParallax<HTMLDivElement>(0.12);

  return (
    <section className="relative bg-ink py-24 lg:py-44 px-6 lg:px-10">
      <div className="max-w-content mx-auto grid grid-cols-12 gap-y-16 lg:gap-x-10 items-center">
        {/* Image side */}
        <div className="col-span-12 lg:col-span-5 relative overflow-hidden">
          <div ref={imgRef} className="relative aspect-[4/5] w-full">
            <img
              src="https://images.unsplash.com/photo-1483794344563-d27a8d18014e?auto=format&fit=crop&w=1400&q=80&sat=-100"
              alt="A grounded portrait — the calm of feeling well"
              className="absolute inset-0 w-full h-full object-cover mono ken-burns"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Copy side */}
        <div className="col-span-12 lg:col-span-7 lg:pl-10">
          <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash mb-6">
            04 — The Real Problem
          </span>
          <h2
            className="reveal reveal-delay-1 font-display uppercase leading-[0.86] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(40px, 6.5vw, 112px)' }}
          >
            The secret to feeling
            <br />
            amazing? It starts in
            <br />
            your <span className="text-sand">gut.</span>
          </h2>

          <p className="reveal reveal-delay-2 mt-10 max-w-xl text-base lg:text-lg text-bone/70 leading-[1.7]">
            Your gut is your second brain — it controls more than just digestion.
            It influences your energy, stress, weight, skin, and even your mood.
            If you're tired of feeling sluggish, stressed, or bloated, it's time
            to heal from the inside out.
          </p>

          <ul className="reveal reveal-delay-3 mt-12 max-w-xl space-y-0 border-t border-bone/12">
            {painPoints.map((pt, i) => (
              <li
                key={i}
                className="flex items-start gap-6 py-5 border-b border-bone/12 text-bone/85"
              >
                <span className="font-display text-bone/40 text-sm leading-7 tabular-nums">
                  0{i + 1}
                </span>
                <span className="text-base lg:text-lg leading-[1.6]">{pt}</span>
              </li>
            ))}
          </ul>

          <div className="reveal reveal-delay-4 mt-12">
            <a href="#shop" className="btn-cinema btn-cinema--solid">
              Get My Gut Right
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
