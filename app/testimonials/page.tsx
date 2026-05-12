export const metadata = { title: 'Stories' };

const STORIES = [
  {
    name: 'Hannah & Daniel',
    location: 'Toronto, Ontario',
    season: 'Growing → Married',
    quote: 'The first thing he wrote about was being patient with himself. I knew immediately he wasn\'t performing. Eleven months later, we married.',
  },
  {
    name: 'Maren',
    location: 'Buffalo, New York',
    season: 'Regrounding',
    quote: 'I haven\'t met someone yet, and that\'s okay. The Circle gave me eight friends I would not have otherwise. That alone was worth it.',
  },
  {
    name: 'Adaeze',
    location: 'Lagos, Nigeria',
    season: 'Intentional',
    quote: 'I had been on every other app. This is the first one that doesn\'t make me feel like a product.',
  },
  {
    name: 'James & Priya',
    location: 'London, UK',
    season: 'Transition',
    quote: 'We met in a Faith Circle. After two weeks I sent the one-to-one request. We\'ve been engaged since spring.',
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Stories</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            What members <em className="italic text-gold">say.</em>
          </h1>
          <p className="font-serif italic text-sm text-ink-mute mt-8">
            Names changed where requested. Photographs withheld for privacy.
          </p>
        </div>
      </section>

      <section className="bg-cream-warm">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {STORIES.map((story, i) => (
              <article key={i} className="relative">
                <div className="absolute top-0 left-0 -translate-y-full font-serif text-7xl text-gold/40 leading-none">"</div>
                <blockquote className="font-serif italic text-2xl text-navy-deep leading-snug mb-8">
                  {story.quote}
                </blockquote>
                <div className="border-t border-gold pt-5">
                  <div className="font-serif text-lg text-navy-deep">{story.name}</div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-ink-mute mt-1">
                    {story.location} · {story.season}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
