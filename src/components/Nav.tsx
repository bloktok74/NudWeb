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
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-700 ease-cinema ${
        scrolled ? 'bg-ink/85 backdrop-blur-md border-b border-bone/10' : 'bg-transparent'
      }`}
      style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
    >
      <div className="max-w-content mx-auto px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <a href="#top" className="font-display text-2xl lg:text-3xl tracking-tight uppercase">
          Nudora<span className="text-sand">.</span>
        </a>
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
            <span className="inline-block w-1 h-1 rounded-full bg-sand" aria-hidden />
            <span className="tabular-nums">0</span>
          </a>
        </div>
      </div>
    </header>
  );
}
