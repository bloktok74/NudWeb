const cols = [
  {
    title: 'Shop',
    links: ['The 3-Step System', 'Orange 2.0', 'Purple', 'Green', 'Bundles'],
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
    <footer className="relative bg-ink border-t border-bone/10">
      {/* Final CTA */}
      <div className="px-6 lg:px-10 py-24 lg:py-44 border-b border-bone/10">
        <div className="max-w-content mx-auto text-center">
          <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash mb-10">
            08 — Begin
          </span>
          <h2
            className="reveal reveal-delay-1 font-display uppercase leading-[0.86] tracking-[-0.02em]"
            style={{ fontSize: 'clamp(56px, 13vw, 220px)' }}
          >
            Trust
            <br />
            Your <span className="text-sand">Gut.</span>
          </h2>
          <div className="reveal reveal-delay-2 mt-16 flex flex-wrap items-center justify-center gap-5">
            <a href="#shop" className="btn-cinema btn-cinema--solid">
              Start Your System
              <span aria-hidden>→</span>
            </a>
            <a href="#why" className="btn-cinema">
              Explore Nudora
            </a>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="px-6 lg:px-10 py-20 lg:py-28">
        <div className="max-w-content mx-auto grid grid-cols-12 gap-y-14 lg:gap-x-10">
          <div className="col-span-12 lg:col-span-4">
            <a href="#top" className="font-display text-4xl lg:text-5xl uppercase tracking-tight">
              Nudora<span className="text-sand">.</span>
            </a>
            <p className="mt-6 text-sm text-bone/60 leading-[1.8] max-w-sm">
              Pharmacist-developed, plant-based gut health system. Replace
              10–15 supplements with one simple, condition-specific daily
              routine.
            </p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-10 flex items-center border-b border-bone/30 max-w-sm"
            >
              <input
                type="email"
                aria-label="Email"
                placeholder="Your email"
                className="flex-1 bg-transparent py-3 text-sm text-bone placeholder:text-ash focus:outline-none"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.32em] py-3 text-bone hover:text-sand transition-colors duration-700"
                style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
              >
                Subscribe →
              </button>
            </form>
          </div>

          {cols.map((c) => (
            <div key={c.title} className="col-span-6 lg:col-span-2">
              <h4 className="text-[11px] uppercase tracking-[0.32em] text-ash mb-6">
                {c.title}
              </h4>
              <ul className="space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="nav-link text-sm text-bone/80 hover:text-bone"
                    >
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
      <div className="px-6 lg:px-10 py-8 border-t border-bone/10">
        <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-4 text-[11px] uppercase tracking-[0.32em] text-ash">
          <span>© {new Date().getFullYear()} Nudora · Trust Your Gut</span>
          <span className="flex items-center gap-6">
            <a href="#" className="nav-link">Privacy</a>
            <a href="#" className="nav-link">Terms</a>
            <a href="#" className="nav-link">Accessibility</a>
          </span>
          <span className="flex items-center gap-3">
            <span className="inline-block w-1 h-1 rounded-full bg-sand" aria-hidden />
            Canadian NPN · Made in USA
          </span>
        </div>
      </div>
    </footer>
  );
}
