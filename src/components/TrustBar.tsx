export default function TrustBar() {
  return (
    <section className="relative bg-limestone py-24 lg:py-36 px-6 lg:px-10">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-3">
            <span className="reveal eyebrow flex items-center gap-3">
              <span className="dot dot-champagne" aria-hidden /> 02 — Foundation
            </span>
          </div>

          <div className="col-span-12 lg:col-span-9">
            <p
              className="reveal font-display text-ink leading-[1.05] tracking-[-0.01em]"
              style={{ fontSize: 'clamp(28px, 3.8vw, 60px)', fontWeight: 400 }}
            >
              Gut health is the foundation of everything —{' '}
              <span className="text-charcoal/55">your energy, your skin, your mood, your digestion,</span>{' '}
              and even <span className="italic text-champagne">your hormones.</span>{' '}
              <span className="text-ink">When your gut thrives, you thrive.</span>
            </p>

            <div className="reveal reveal-delay-2 mt-14 flex flex-wrap items-center gap-x-10 gap-y-6 border-t border-charcoal/12 pt-10">
              <div className="flex items-center gap-3">
                <span className="dot dot-champagne" aria-hidden />
                <span className="eyebrow !text-charcoal/80">Clinically Studied</span>
              </div>
              <span className="text-charcoal/25 hidden sm:inline">·</span>
              <span className="eyebrow">Real Science. Real Results.</span>
              <span className="text-charcoal/25 hidden sm:inline">·</span>
              <span className="eyebrow">Canadian NPN Certified</span>
              <span className="text-charcoal/25 hidden sm:inline">·</span>
              <span className="eyebrow">PharmD Formulated</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
