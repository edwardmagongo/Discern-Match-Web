export const metadata = { title: 'Cookie Policy' };

const SECTIONS = [
  {
    heading: 'Strictly necessary',
    body: 'These are required for the site to function. They cannot be turned off. They do not store personally identifiable information. Session cookies (admin console only) keep you signed in during a session and are cleared when you close the browser or log out. CSRF tokens protect against cross-site request forgery on form submissions.',
  },
  {
    heading: 'Functional',
    body: 'These remember your preferences. They are first-party only — for example, remembering whether you\'ve dismissed a banner.',
  },
  {
    heading: 'What we don\'t use',
    body: 'The marketing website does not use advertising cookies of any kind, third-party trackers (no Facebook Pixel, no TikTok pixel, no Twitter/X tag), or analytics that follow you across sites. We may use privacy-respecting first-party analytics (such as Plausible or self-hosted) that do not set persistent cookies and do not identify individual visitors. If we add this, we will list it here.',
  },
  {
    heading: 'How long they last',
    body: 'Session cookies are deleted automatically when you close your browser. Persistent cookies remain for a defined period (typically 30 days for preferences). Each cookie\'s expiration is set to the minimum useful duration.',
  },
  {
    heading: 'Your choices',
    body: 'You can reject non-essential cookies via the cookie banner on first visit (where applicable), delete cookies through your browser\'s settings at any time, or use private/incognito browsing, which deletes cookies when you close the window. Note: blocking strictly necessary cookies will affect your ability to sign in to the admin console.',
  },
  {
    heading: 'Do Not Track',
    body: 'We honor the "Do Not Track" browser signal where applicable, and the Global Privacy Control (GPC) for users in jurisdictions where it is recognized.',
  },
  {
    heading: 'Updates',
    body: 'If we change the cookies we use, we will update this page. The current effective date is at the top.',
  },
];

export default function CookiesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Cookies</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            The smallest amount, only what's <em className="italic text-gold">needed.</em>
          </h1>
          <p className="text-[10px] tracking-[0.25em] uppercase text-ink-mute mt-10">
            Effective January 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-base text-ink-soft leading-loose mb-12">
            This page explains the cookies and similar technologies we use on the Discern·Match marketing website and the operations console. The mobile app does not use browser cookies; for the app, see the relevant section in our{' '}
            <a href="/privacy" className="text-gold hover:text-gold-warm border-b border-gold">privacy policy</a>.
          </p>

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

          <div className="border-t border-line pt-10 mt-12">
            <h2 className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
              Contact
            </h2>
            <p className="text-base text-ink-soft leading-loose">
              Questions:{' '}
              <a href="mailto:privacy@discernmatch.com" className="text-gold hover:text-gold-warm border-b border-gold">
                privacy@discernmatch.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
