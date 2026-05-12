export const metadata = { title: 'Features' };

const FEATURES = [
  { eyebrow: 'i.', title: 'Curated introductions', body: 'A weekly Friday delivery of one to three thoughtfully chosen matches. Each includes a "resonance line" — the matchmaker explaining, in one sentence, why we paired you.' },
  { eyebrow: 'ii.', title: 'Faith Circles', body: 'Moderated group conversations of 8–16 people, balanced by gender, clustered by season and region. Four-week cycles. Weekly prompts. Day-14 unlock for private one-to-one introductions.' },
  { eyebrow: 'iii.', title: 'Six core reflections', body: 'Fifty-word answers to questions about your season, your faith in practice, your week, conflict, being cared for, and what you wrestle with. A profile reads like an essay.' },
  { eyebrow: 'iv.', title: 'No swipe, no scroll', body: 'You cannot browse other users. You cannot see who viewed you. Lists are bounded. There is no infinite anything in the app.' },
  { eyebrow: 'v.', title: 'Sabbath Mode', body: 'Pause all notifications from Saturday sunset to Sunday sunset in your timezone. Quiet, automatically.' },
  { eyebrow: 'vi.', title: 'Identity verification', body: 'Optional ID and photo verification. A subtle gold check on profiles for verified members. We do not name-and-shame the unverified.' },
  { eyebrow: 'vii.', title: 'Read receipts off by default', body: 'Reduces anxious checking. Mutually opt-in if both want them.' },
  { eyebrow: 'viii.', title: 'Private decline', body: 'When you decline a match, the other person is never told the reason. They see neutral language only.' },
  { eyebrow: 'ix.', title: 'Profile refresh nudges', body: 'Every 90 days we gently invite you to revisit your reflections. Profiles read as living documents, not archives.' },
];

export default function FeaturesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">The System</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            What the app <em className="italic text-gold">actually</em> does.
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-5xl mx-auto px-6 lg:px-12 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {FEATURES.map((f) => (
              <article key={f.title} className="border-t border-gold pt-7">
                <div className="font-serif italic text-gold text-sm tracking-[0.15em] mb-4">{f.eyebrow}</div>
                <h2 className="font-serif text-2xl text-navy-deep mb-4 leading-snug">{f.title}</h2>
                <p className="text-sm text-ink-soft leading-relaxed">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
