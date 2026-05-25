import { useParallax } from '../hooks/useParallax';

const painPoints = [
  { tone: 'sage', text: 'Sick of waking up bloated and uncomfortable?' },
  { tone: 'citrus', text: 'Struggling with stubborn belly fat and low energy?' },
  { tone: 'lavender', text: 'Feeling anxious or having trouble sleeping?' },
  { tone: 'sage', text: 'Dealing with constipation, gas, or unpredictable digestion?' },
] as const;

const dotMap: Record<string, string> = {
  sage: 'dot-sage',
  citrus: 'dot-citrus',
  lavender: 'dot-lavender',
};

export default function ProblemSection() {
  const imgRef = useParallax<HTMLDivElement>(0.10);

  return (
    <section className="relative bg-cream py-24 lg:py-36 px-6 lg:px-10 overflow-hidden">
      {/* soft color blooms */}
      <div className="absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full bg-sage-soft opacity-50 blur-3xl -z-10" />
      <div className="absolute -right-24 bottom-0 w-[420px] h-[420px] rounded-full bg-lavender-soft opacity-50 blur-3xl -z-10" />

      <div className="max-w-content mx-auto grid grid-cols-12 gap-y-16 lg:gap-x-14 items-center">
        {/* Image side */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[28px] overflow-hidden border border-charcoal/10 shadow-[0_40px_80px_-40px_rgba(26,22,18,0.28)]">
            <div ref={imgRef} className="absolute inset-0">
              <img
                src="/products/lifestyle-green.png"
                alt="Nudora Green — gentle gut support"
                className="absolute inset-0 w-full h-full object-cover ken-burns"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
            <div className="absolute top-5 left-5 flex items-center gap-2">
              <span className="dot dot-sage" aria-hidden />
              <span className="eyebrow !text-cream/90 bg-ink/30 backdrop-blur px-3 py-1 rounded-full">
                Start with your gut
              </span>
            </div>
          </div>

          {/* floating quote */}
          <div className="hidden md:block absolute -bottom-8 -right-4 card max-w-[260px] p-5">
            <p className="font-display italic text-ink text-lg leading-snug">
              "When your gut thrives, you thrive."
            </p>
            <span className="eyebrow !text-[10px] mt-3 block">— PharmD Founder</span>
          </div>
        </div>

        {/* Copy side */}
        <div className="col-span-12 lg:col-span-7 lg:pl-6">
          <span className="reveal eyebrow flex items-center gap-3 mb-6">
            <span className="dot dot-champagne" aria-hidden /> 04 — The Real Problem
          </span>
          <h2
            className="reveal reveal-delay-1 font-display text-ink leading-[1.0] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(40px, 6vw, 96px)', fontWeight: 400 }}
          >
            The secret to feeling
            <br />
            amazing? It starts
            <br />
            in your <span className="italic text-champagne">gut.</span>
          </h2>

          <p className="reveal reveal-delay-2 mt-8 lg:mt-10 max-w-xl text-base lg:text-lg text-charcoal/75 leading-[1.7]">
            Your gut is your second brain — it shapes your energy, stress,
            weight, skin, and mood. If you're tired of feeling sluggish or
            uncomfortable, it's time to support yourself from the inside out.
          </p>

          <ul className="reveal reveal-delay-3 mt-10 max-w-xl space-y-0 border-t border-charcoal/12">
            {painPoints.map((pt, i) => (
              <li
                key={i}
                className="flex items-center gap-5 py-5 border-b border-charcoal/12 text-charcoal/90"
              >
                <span className={`dot ${dotMap[pt.tone]}`} aria-hidden />
                <span className="text-base lg:text-lg leading-[1.55]">{pt.text}</span>
              </li>
            ))}
          </ul>

          <div className="reveal reveal-delay-4 mt-10">
            <a href="#shop" className="btn btn-primary">
              Build My Daily Ritual
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
