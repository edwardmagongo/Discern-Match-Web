export const metadata = { title: 'Contact' };

const CHANNELS = [
  {
    label: 'General inquiries',
    email: 'hello@discernmatch.com',
    body: 'For media, partnership, or speaking requests. Replies typically arrive within two business days.',
  },
  {
    label: 'Member support',
    email: 'support@discernmatch.com',
    body: 'Account access, billing questions, or trouble with the app. Members can also reach support inside the app via Settings → Contact Support.',
  },
  {
    label: 'Trust & safety',
    email: 'safety@discernmatch.com',
    body: 'Urgent reports of harassment, impersonation, or unsafe behavior. Reviewed within 4 hours. If you are in immediate danger, contact local emergency services first.',
  },
  {
    label: 'Legal & privacy',
    email: 'privacy@discernmatch.com',
    body: 'Data subject requests (access, correction, deletion under GDPR / UK GDPR / CCPA), legal notices, and law enforcement inquiries.',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Get in Touch</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            A quiet <em className="italic text-gold">inbox.</em>
          </h1>
          <p className="font-serif italic text-lg text-ink-soft mt-8 max-w-2xl mx-auto leading-relaxed">
            We read every message. Replies typically arrive within two business days. Time-sensitive matters use the addresses below; they're monitored more closely.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <dl className="space-y-12">
            {CHANNELS.map((c, i) => (
              <div key={i} className="border-t border-line pt-10">
                <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-3">
                  {c.label}
                </dt>
                <a
                  href={`mailto:${c.email}`}
                  className="font-serif italic text-lg text-gold hover:text-gold-warm border-b border-gold pb-0.5 transition-colors duration-slow"
                >
                  {c.email}
                </a>
                <dd className="text-base text-ink-soft leading-loose mt-5">{c.body}</dd>
              </div>
            ))}

            <div className="border-t border-line pt-10">
              <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                Postal
              </dt>
              <dd className="text-base text-ink-soft leading-loose">
                Discern·Match<br />
                [Mailing address]<br />
                [City, State, Zip]<br />
                United States
              </dd>
            </div>

            <div className="border-t border-line pt-10">
              <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                What we don't do here
              </dt>
              <dd className="text-base text-ink-soft leading-loose">
                We don't send unsolicited marketing, share inquiry contents with third parties, or use this inbox to push promotions. Your message is read by a person and answered as such.
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </>
  );
}
