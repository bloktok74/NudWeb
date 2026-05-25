const cols = [
  {
    title: 'Shop',
    links: ['Nudora Green', 'Nudora Orange 2.0', 'Nudora Purple', 'The 3-Step System'],
  },
  {
    title: 'Learn',
    links: ['Why Nudora', 'The Science', 'HSA / FSA', 'Blog'],
  },
  {
    title: 'Support',
    links: ['Contact', 'Shipping', 'Returns', 'Subscriptions'],
  },
  {
    title: 'Partners',
    links: ['Affiliate Program', 'Wholesale', 'Store Locator'],
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-cream border-t border-charcoal/10 overflow-hidden">
      {/* Final CTA */}
      <div className="relative px-6 lg:px-10 py-28 lg:py-44 border-b border-charcoal/10 overflow-hidden">
        {/* soft color blooms */}
        <div className="absolute -top-32 left-1/4 w-[420px] h-[420px] rounded-full bg-citrus-soft opacity-50 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-[420px] h-[420px] rounded-full bg-lavender-soft opacity-50 blur-3xl" />
        <div className="absolute top-1/3 right-1/3 w-[320px] h-[320px] rounded-full bg-sage-soft opacity-50 blur-3xl" />

        <div className="relative max-w-content mx-auto text-center">
          <span className="reveal eyebrow inline-flex items-center gap-3 mb-10">
            <span className="dot dot-champagne" aria-hidden /> 08 — Begin
          </span>
          <h2
            className="reveal reveal-delay-1 font-display text-ink leading-[0.95] tracking-[-0.03em]"
            style={{ fontSize: 'clamp(60px, 12vw, 200px)', fontWeight: 400 }}
          >
            Trust
            <br />
            your <span className="italic text-champagne">gut.</span>
          </h2>
          <p className="reveal reveal-delay-2 mt-8 max-w-xl mx-auto text-base lg:text-lg text-charcoal/70 leading-[1.7]">
            One simple system. Three colors. Daily support for the way your
            body actually works.
          </p>
          <div className="reveal reveal-delay-3 mt-12 flex flex-wrap items-center justify-center gap-4">
            <a href="#shop" className="btn btn-primary">
              Start Your System
              <span aria-hidden>→</span>
            </a>
            <a href="#why" className="btn btn-ghost">
              Explore Nudora
            </a>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-content mx-auto grid grid-cols-12 gap-y-14 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <a
              href="#top"
              aria-label="Nudora — home"
              className="logo-mark text-ink h-12 lg:h-[58px] w-[264px] lg:w-[312px]"
            />

            <p className="mt-6 text-sm text-charcoal/65 leading-[1.8] max-w-sm">
              A clean, color-coded wellness system designed to support gut
              health, metabolism, sleep, and mood — without supplement
              overload.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex items-center border-b border-charcoal/25 max-w-sm focus-within:border-champagne transition-colors duration-500"
            >
              <input
                type="email"
                aria-label="Email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent py-3 text-sm text-ink placeholder:text-ash focus:outline-none"
              />
              <button
                type="submit"
                className="eyebrow py-3 text-ink hover:text-champagne transition-colors duration-500"
              >
                Subscribe →
              </button>
            </form>
            <p className="mt-3 text-[11px] text-ash">
              Get the rhythm — early access, ingredient drops, no spam.
            </p>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 lg:col-span-2">
              <h4 className="eyebrow mb-6">{c.title}</h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="nav-link text-sm text-charcoal/85 hover:text-ink">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Fine print */}
      <div className="px-6 lg:px-10 py-8 border-t border-charcoal/10">
        <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4 eyebrow !text-charcoal/60">
          <span>© {new Date().getFullYear()} Nudora · Support Your Whole Body From Within</span>
          <span className="flex items-center gap-6">
            <a href="#" className="nav-link">Privacy</a>
            <a href="#" className="nav-link">Terms</a>
            <a href="#" className="nav-link">Accessibility</a>
          </span>
          <span className="flex items-center gap-3">
            <span className="dot dot-champagne" aria-hidden />
            Canadian NPN · Made in USA
          </span>
        </div>
      </div>
    </footer>
  );
}
