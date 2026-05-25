import { useEffect, useState } from 'react';

const links = [
  { label: 'Shop', href: '#shop' },
  { label: 'HSA/FSA', href: '#hsa' },
  { label: 'Why Nudora', href: '#why' },
  { label: 'Store Locator', href: '#stores' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Affiliate', href: '#affiliate' },
  { label: 'Blog', href: '#blog' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-700 ${
        scrolled
          ? 'bg-cream/85 backdrop-blur-md border-b border-charcoal/10'
          : 'bg-transparent border-b border-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a
          href="#top"
          aria-label="Nudora — home"
          className="logo-mark text-ink h-7 lg:h-8 w-[140px] lg:w-[160px]"
        />

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="nav-link text-[11px] uppercase tracking-[0.32em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-6">
          <a href="#account" className="nav-link text-[11px] uppercase tracking-[0.32em] hidden sm:inline">
            Account
          </a>
          <a href="#cart" className="nav-link text-[11px] uppercase tracking-[0.32em] inline-flex items-center gap-2">
            Cart
            <span className="dot dot-champagne" aria-hidden />
            <span className="tabular-nums">0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
