import { useState } from 'react';

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: 'Who is Nudora for?',
    a: 'Anyone who wants to support their gut health, metabolism, mood, or digestion — but especially women and moms who are tired of juggling handfuls of supplements. Men can take it too.',
  },
  {
    q: 'How quickly will I feel a difference?',
    a: 'Most people notice improved digestion and energy within 1–2 days. Ongoing benefits like mood balance, immune support, and metabolism changes build over weeks of consistent use.',
  },
  {
    q: 'What can I expect when I start?',
    a: 'A gentler stomach, more even energy, and clearer thinking in the first few days. Over time, deeper sleep, mood balance, and metabolic shifts become more apparent.',
  },
  {
    q: 'Can Nudora help me lose belly fat?',
    a: 'Orange supports GLP-1 activation, healthy metabolism, and natural fat burning — without starving yourself. Pair with a sensible routine for best results.',
  },
  {
    q: 'Will this help my anxiety and sleep issues?',
    a: 'Purple targets the gut-brain axis with ashwagandha, valerian root, and magnesium — calm without sedation, and deeper, more restorative sleep.',
  },
  {
    q: 'What if I have IBS, constipation, or digestive issues?',
    a: 'Green is built for gentle relief — magnesium citrate, aloe vera, and gut-motility probiotics restore comfort and regularity without harsh laxatives.',
  },
  {
    q: 'Are there any side effects?',
    a: 'Nudora is formulated to be gentle. Some people notice mild changes in digestion in the first few days as the gut rebalances. As always, consult your healthcare provider.',
  },
  {
    q: 'Do I need to refrigerate Nudora?',
    a: 'No. Store in a cool, dry place away from direct sunlight.',
  },
  {
    q: 'Can men take Nudora?',
    a: 'Yes — the formulas support gut health, metabolism, and mood for everyone.',
  },
  {
    q: 'Is Nudora plant-based and allergen-free?',
    a: 'Yes. 100% plant-based, vegan, dairy-free, gluten-free, soy-free. No sweeteners or synthetic additives.',
  },
  {
    q: 'Is Nudora approved in Canada?',
    a: 'Yes. Nudora holds Canadian NPN (Natural Product Number) certification.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative bg-charcoal py-24 lg:py-44 px-6 lg:px-10">
      <div className="max-w-content mx-auto grid grid-cols-12 gap-y-12 lg:gap-x-10">
        <div className="col-span-12 lg:col-span-4">
          <span className="reveal block text-[11px] uppercase tracking-[0.32em] text-ash mb-6">
            07 — Questions
          </span>
          <h2
            className="reveal reveal-delay-1 font-display uppercase leading-[0.86] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(40px, 5.5vw, 96px)' }}
          >
            The
            <br />
            <span className="text-sand">Real</span>
            <br />
            Answers.
          </h2>
          <p className="reveal reveal-delay-2 mt-10 text-base text-bone/60 leading-[1.7] max-w-sm">
            Pharmacist-developed answers to the questions we hear most. Still
            stuck? Reach out — we're a small family team.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <div className="reveal">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="acc-item">
                  <button
                    type="button"
                    className="acc-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span className="flex items-baseline gap-6">
                      <span className="font-display text-bone/40 text-sm tabular-nums">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="text-lg lg:text-2xl font-display uppercase leading-snug tracking-tight">
                        {f.q}
                      </span>
                    </span>
                    <span
                      aria-hidden
                      className="text-bone/70 text-xl transition-transform duration-700"
                      style={{
                        transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                        transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)',
                      }}
                    >
                      +
                    </span>
                  </button>
                  <div className={`acc-panel ${isOpen ? 'open' : ''}`}>
                    <p className="pl-12 max-w-2xl text-base text-bone/70 leading-[1.8]">
                      {f.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
