export const metadata = { title: 'Community Guidelines' };

const COMMITMENTS = [
  {
    heading: 'Be honest',
    body: 'Your profile should be true. The season you name, the work you describe, the verse you choose — these are how you arrive. Photographs should be recent and of you. Embellishment, in any form, is a violation.',
  },
  {
    heading: 'Be patient',
    body: 'Not every introduction will resonate. Decline gently or set the introduction aside; you do not owe anyone an explanation. When someone declines you, they are not obligated to explain. We don\'t show you the reason.',
  },
  {
    heading: 'Be honoring',
    body: 'Speak about and to others as you would want spoken about. This applies to messages, to Faith Circle responses, and to how you remember a connection that didn\'t continue. We hold each other in high regard whether or not we choose to walk forward together.',
  },
  {
    heading: 'Be in your own season',
    body: 'The season you name on your profile sets expectations. If your season changes, update your profile. Don\'t perform a season you\'re not in to attract a match.',
  },
];

const NOT_WELCOME = [
  {
    heading: 'Sexual content or solicitation',
    body: 'Discern·Match exists for relationships oriented toward marriage. Sexual content, solicitation, or pressure of any kind is grounds for suspension. This applies in messages and in Faith Circles equally.',
  },
  {
    heading: 'Harassment, demeaning language, or contempt',
    body: 'Disagreement is welcome. Mockery, contempt, and the kind of speech that degrades a person\'s worth are not.',
  },
  {
    heading: 'Impersonation or catfishing',
    body: 'Pretending to be someone else — including using another person\'s photos — is grounds for permanent removal.',
  },
  {
    heading: 'Promotion, recruitment, or solicitation',
    body: 'Discern·Match is not a platform for selling, recruiting into a business, evangelizing into a specific church, or promoting external products. Members joining the platform have come for connection.',
  },
  {
    heading: 'Off-platform requests early',
    body: 'Asking for phone numbers, photos, or to move to another platform within the first few exchanges is a red flag. Early conversation belongs here, where moderation can protect both parties.',
  },
  {
    heading: 'Doctrinal warfare',
    body: 'Members come from many traditions. Faith Circles are spaces for practiced reflection, not for winning denominational arguments. Disagreement is fine; converting your circle is not.',
  },
];

export default function CommunityPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Community</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            How we are <em className="italic text-gold">with each other.</em>
          </h1>
          <p className="font-serif italic text-lg text-ink-soft mt-8 max-w-2xl mx-auto leading-relaxed">
            Our community guidlines that we cherish.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <div className="uppercase-label text-gold mb-10 text-center">Our commitments</div>
          <dl className="space-y-12">
            {COMMITMENTS.map((c, i) => (
              <div key={i} className="border-t border-line pt-10">
                <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                  {c.heading}
                </dt>
                <dd className="text-base text-ink-soft leading-loose">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-cream-warm border-t border-line">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <div className="uppercase-label text-gold mb-10 text-center">What is not welcome</div>
          <dl className="space-y-12">
            {NOT_WELCOME.map((c, i) => (
              <div key={i} className="border-t border-line pt-10">
                <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                  {c.heading}
                </dt>
                <dd className="text-base text-ink-soft leading-loose">{c.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <div className="border-t border-line pt-10">
            <h2 className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
              Faith Circles, specifically
            </h2>
            <p className="text-base text-ink-soft leading-loose mb-5">
              A circle is eight to sixteen people for four weeks. The weekly prompt is the through-line. Responses should be your own; refrain from quoting at length or copy-pasting devotional material as your reflection.
            </p>
            <p className="text-base text-ink-soft leading-loose">
              One-to-one introductions inside a circle unlock on day fourteen. Until then, conversation stays in the group. After fourteen days, you may request a private one-to-one with another member you've come to appreciate. It is always optional for them to accept.
            </p>
          </div>

          <div className="border-t border-line pt-10 mt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
              When a line is crossed
            </h2>
            <p className="text-base text-ink-soft leading-loose">
              The system or another member flags the behavior. A human moderator reviews within 24 hours (1 hour for severe). Outcomes range from a private note, to a redacted message, to a temporary pause, to suspension. Three confirmed reports in a rolling twelve-month window auto-suspends the account. Permanent removal is a senior-staff decision and is rare. We aim for restoration first where possible.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-deep text-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 text-center">
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed">
            Discern·Match is a quieter place than most of the internet. The way it stays that way is by each of us choosing, again and again, to show up as the kind of person we hope to meet.
          </p>
        </div>
      </section>
    </>
  );
}
