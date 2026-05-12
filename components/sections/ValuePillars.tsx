import { SectionHeading } from '@/components/ui/SectionHeading';

const PILLARS = [
  {
    eyebrow: 'i.',
    title: 'Curated, never browsed',
    body: 'A small number of thoughtfully chosen introductions arrive each week — not an endless feed. Read deeply, choose slowly. There is no clock here.',
  },
  {
    eyebrow: 'ii.',
    title: 'Faith-centered, in practice',
    body: 'Profiles include the season you’re walking through, the verse you live by, and what faith actually looks like in your life — not just church affiliation.',
  },
  {
    eyebrow: 'iii.',
    title: 'Community before chemistry',
    body: 'Faith Circles bring 8–16 people together for four weeks of moderated conversation. Authentic personlities are discovered over time in a group setting, not in a single profile.',
  },
];

export function ValuePillars() {
  return (
    <section className="bg-cream-warm border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
        <SectionHeading
          eyebrow="The Difference"
          title="Three things this is not."
          italicWord="not."
        />

        <div className="mt-20 grid md:grid-cols-3 gap-12 md:gap-16">
          {PILLARS.map((p) => (
            <article key={p.title} className="relative pt-10 border-t border-gold">
              <div className="absolute -top-px left-0 w-12 h-px bg-gold" aria-hidden="true" />
              <div className="font-serif italic text-gold text-sm tracking-[0.15em] mb-3">
                {p.eyebrow}
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-navy-deep mb-5 leading-snug">
                {p.title}
              </h3>
              <p className="text-base text-ink-soft leading-relaxed">{p.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
