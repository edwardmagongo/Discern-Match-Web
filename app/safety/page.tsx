export const metadata = { title: 'Trust & Safety' };

const SECTIONS = [
  {
    heading: 'No one can find you unless you\'ve been introduced',
    body: 'Profiles are never public, never indexable, and never returned by search to anyone who isn\'t already in a match or shared circle with you. There is no "browse" feature, no "people you may know," and no leaderboard.',
  },
  {
    heading: 'You always control the introduction',
    body: 'Conversation cannot begin until both people have accepted the introduction. There is no inbox of unsolicited messages. Decline reasons are never revealed to the declined party.',
  },
  {
    heading: 'Photos are protected',
    body: 'Photos are stored behind signed URLs that expire in fifteen minutes and are stripped of EXIF metadata. There is no public CDN for member images.',
  },
  {
    heading: 'Verification, without shaming',
    body: 'Members can voluntarily verify their identity and a real-life photo. Verified members receive a small gold check on their profile. We do not name, list, or call out members who haven\'t verified — verification is an additive signal, not a public scarlet letter.',
  },
  {
    heading: 'Moderation, never absent',
    body: 'Every message — both one-to-one and Faith Circle — is screened by automated moderation before it is delivered. Severe content is held immediately for human review. Reports are reviewed within 24 hours, and severe flags within one hour. The team is small on purpose: every reviewer is trained in the platform\'s voice and the kinds of harm we are most attentive to.',
  },
  {
    heading: 'You can block, immediately',
    body: 'Blocking a user is bidirectional and instant. Any active match between you ends. You will not appear in their Faith Circle members list, and they will not appear in yours. They are not notified.',
  },
  {
    heading: 'You can report, anonymously',
    body: 'Reports are anonymous to the subject. We classify them into harassment, inappropriate content, spam, impersonation, or other. Each report is reviewed by a human. We notify you when the report is resolved, but never share identifying details about other reporters.',
  },
  {
    heading: 'You can pause, at any time',
    body: 'If you need a break, pause your account from Settings. You\'ll be hidden from new introductions and circle assembly. Your existing matches and circle membership are preserved. You can resume at any time.',
  },
  {
    heading: 'Auto-suspension protects the community',
    body: 'Three confirmed reports against a single user within a rolling twelve-month window automatically suspends that account. Their active matches end, their circle memberships are removed, and their conversations are locked. A human reviews the suspension; reversal requires senior staff.',
  },
  {
    heading: 'When you meet in person',
    body: 'We strongly encourage members to keep early conversation inside the app. When you do choose to meet: a public, well-lit place; let a friend or family member know where you\'ll be and when; your own transportation; and trust your instincts. There is no obligation to extend a meeting.',
  },
];

export default function SafetyPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Trust & Safety</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            Discern-Match <em className="italic text-gold">Cares.</em>
          </h1>
          <p className="font-serif italic text-lg text-ink-soft mt-8 max-w-2xl mx-auto leading-relaxed">
            We are here for you every step of the way.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <dl className="space-y-12">
            {SECTIONS.map((s, i) => (
              <div key={i} className="border-t border-line pt-10">
                <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                  {s.heading}
                </dt>
                <dd className="text-base text-ink-soft leading-loose">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-navy-deep text-cream">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="uppercase-label text-gold mb-6">§ If You Are in Danger</div>
          <p className="font-serif italic text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto">
            Contact local emergency services first. Then, when safe, write us at{' '}
            <a href="mailto:safety@discernmatch.com" className="text-gold hover:text-gold-warm border-b border-gold">
              safety@discernmatch.com
            </a>{' '}
            so we can act on the account in question.
          </p>
        </div>
      </section>
    </>
  );
}
