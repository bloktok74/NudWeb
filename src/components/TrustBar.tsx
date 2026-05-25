export default function TrustBar() {
  return (
    <section className="relative bg-ink py-24 lg:py-44 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-3">
            <span className="reveal text-[11px] uppercase tracking-[0.32em] text-ash">
              02 — Foundation
            </span>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <p
              className="reveal font-display uppercase leading-[0.92] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(32px, 4.6vw, 76px)' }}
            >
              Gut health is the foundation of everything — your{' '}
              <span className="text-bone/40">energy,</span> your{' '}
              <span className="text-bone/40">skin,</span> your{' '}
              <span className="text-bone/40">mood,</span> your{' '}
              <span className="text-bone/40">digestion,</span> and even your{' '}
              <span className="text-sand">hormones.</span>{' '}
              <span className="text-bone">When your gut thrives, you thrive.</span>
            </p>

            <div className="reveal reveal-delay-2 mt-16 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-bone/12 pt-10">
              <div className="flex items-center gap-3">
                <span className="inline-block w-2 h-2 rounded-full bg-sand" aria-hidden />
                <span className="text-[11px] uppercase tracking-[0.32em] text-bone/70">
                  Clinically Proven
                </span>
              </div>
              <span className="text-bone/30 hidden sm:inline">·</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-ash">
                Real Science. Real Results.
              </span>
              <span className="text-bone/30 hidden sm:inline">·</span>
              <span className="text-[11px] uppercase tracking-[0.32em] text-ash">
                Canadian NPN Certified
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
