export const metadata = { title: 'Core Beliefs' };

const BELIEFS = [
  {
    title: 'Discernment over urgency',
    body: 'A relationship-leading-to-marriage is one of the most consequential decisions of a life. We refuse to treat it as a game with high-frequency feedback loops. Slow is the design.',
  },
  {
    title: 'Character is revealed over time',
    body: 'A photograph and a tagline cannot show whether someone is patient, faithful, or kind. Our Faith Circles exist to give time and shared conversation a place to do their work.',
  },
  {
    title: 'Faith is practice, not affiliation',
    body: 'We do not ask "are you Christian?" We ask what your week looks like, what you wrestle with, where Scripture has met you. Affiliation is a starting point. Practice is a portrait.',
  },
  {
    title: 'Privacy is care',
    body: 'No public profiles. No likes. No "who viewed me." Decline reasons stay private. Your photos live behind signed URLs and verification gates. Care looks like restraint.',
  },
  {
    title: 'Sabbath is the rhythm',
    body: 'You can switch on Sabbath Mode and we will hold all notifications from sunset Saturday to sunset Sunday in your timezone. The product respects rest.',
  },
  {
    title: 'No gamification, ever',
    body: 'We will not introduce streaks, badges, leaderboards, scores, view counters, or like buttons. If a feature would create compulsive checking, it doesn\'t ship.',
  },
];

export default function BeliefsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">What We Believe</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            The product is the <em className="italic text-gold">conviction.</em>
          </h1>
          <p className="font-serif italic text-lg text-ink-soft mt-8 max-w-2xl mx-auto leading-relaxed">
            Six beliefs that shape every screen, every notification, every silence in the app.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24">
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-16">
            {BELIEFS.map((b, i) => (
              <article key={b.title} className="border-t border-gold pt-8">
                <div className="font-serif italic text-gold text-xs tracking-[0.2em] mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-navy-deep mb-4 leading-snug">
                  {b.title}
                </h2>
                <p className="text-base text-ink-soft leading-relaxed">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-deep text-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-24 text-center">
          <p className="font-serif italic text-2xl md:text-3xl leading-relaxed">
            "Whatever is true, whatever is noble, whatever is right, whatever is pure… think on these things."
          </p>
          <div className="mt-6 text-[10px] tracking-[0.3em] uppercase text-gold">
            — Philippians 4:8
          </div>
        </div>
      </section>
    </>
  );
}
