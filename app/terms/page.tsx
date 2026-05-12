export const metadata = { title: 'Terms of Service' };

const SECTIONS = [
  {
    heading: '1. Eligibility',
    body: 'You must be at least 18 years old, single (not married and not in a committed exclusive relationship), and legally able to enter a contract in your jurisdiction. By registering, you confirm that all of these are true.',
  },
  {
    heading: '2. Your account',
    body: 'You are responsible for the accuracy of the information you provide and for keeping your account credentials secure. One person, one account. Do not share, sell, or transfer your account. We may suspend or terminate accounts that violate these Terms.',
  },
  {
    heading: '3. Subscriptions, billing, and refunds',
    body: 'Pricing: men $30 USD/month after a 14-day free trial; women free. We may change pricing for new members; existing members will be notified at least thirty days before any change to their plan. The 14-day trial is free, with a reminder three days before it ends. Subscriptions are billed monthly via Stripe; cancellation takes effect at the end of the current billing period. We do not provide pro-rated refunds for partial months. We may, at our discretion, refund a charge if you contact support@discernmatch.com with a documented billing error.',
  },
  {
    heading: '4. The service is provided as-is',
    body: 'Discern·Match is an introduction and community platform. We do not guarantee that you will find a relationship, that any match will be successful, or that any specific person you meet here is who they say they are. We use reasonable efforts to keep the platform safe, but we are not a substitute for your own judgment. To the maximum extent permitted by law, the service is provided "as is" and "as available," without warranties of any kind, express or implied.',
  },
  {
    heading: '5. Your conduct',
    body: 'You agree to follow the Community Guidelines. Specifically, you will not: misrepresent yourself or use another person\'s identity or photos; send sexual content, harassment, threats, or hate speech; use the service to recruit, sell, evangelize a specific church, or solicit donations; attempt to scrape, reverse-engineer, or otherwise circumvent the technical protections of the service; use automated systems (bots, scripts) to access the service; share content that infringes another person\'s copyright, trademark, or privacy rights; use the service in violation of any applicable law.',
  },
  {
    heading: '6. Content you provide',
    body: 'You retain ownership of the content you provide (profile, reflections, photos, messages). You grant us a non-exclusive, worldwide, royalty-free license to host, store, and display your content solely for the purpose of operating the service. We will not use your content for advertising, training third-party AI models, or commercial purposes outside the service. We may remove content that violates these Terms or the Community Guidelines.',
  },
  {
    heading: '7. Suspension and termination',
    body: 'We may suspend or terminate your account if you violate these Terms, the Community Guidelines, or applicable law, or if continued service would create unreasonable risk to other members or to us. Where possible we will notify you and explain the reason. Severe violations result in immediate termination. You may terminate your account at any time from Settings → Account → Delete My Account.',
  },
  {
    heading: '8. Limitation of liability',
    body: 'To the maximum extent permitted by law, our total liability to you for all claims arising out of or relating to the service will not exceed the greater of (a) the amount you paid us in the twelve months before the claim, or (b) one hundred US dollars ($100). We are not liable for indirect, incidental, special, consequential, or punitive damages. Some jurisdictions don\'t allow these limitations; in those jurisdictions our liability is limited to the smallest extent permitted by law.',
  },
  {
    heading: '9. Indemnification',
    body: 'You agree to indemnify and hold us harmless from claims, damages, or expenses (including reasonable attorneys\' fees) arising out of your violation of these Terms, your content, or your interactions with other members.',
  },
  {
    heading: '10. Changes to these Terms',
    body: 'We may update these Terms from time to time. For material changes, we will notify you at least thirty days before they take effect, by email or in-app notice. Continued use after the effective date means you accept the changes. If you don\'t accept, you may terminate your account.',
  },
  {
    heading: '11. Governing law and disputes',
    body: 'These Terms are governed by the laws of the State of [State], United States, without regard to conflict-of-laws principles. Any dispute arising out of these Terms or the service will be resolved in the state or federal courts located in [County], [State], and you consent to the personal jurisdiction of those courts. For members in the European Union or United Kingdom, mandatory consumer protection laws of your country of residence still apply where they are more favorable.',
  },
  {
    heading: '12. Miscellaneous',
    body: 'These Terms (together with the Privacy Policy, Cookie Policy, and Community Guidelines) are the entire agreement between us. If any provision is found unenforceable, the rest remains in effect. Our failure to enforce a provision is not a waiver of our right to enforce it later.',
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Terms</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            The agreement <em className="italic text-gold">we share.</em>
          </h1>
          <p className="text-[10px] tracking-[0.25em] uppercase text-ink-mute mt-10">
            Effective January 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-base text-ink-soft leading-loose mb-6">
            These Terms govern your use of Discern·Match. They are a contract between you and [Legal Entity Name] ("we," "us"). By creating an account or using the service, you agree to these Terms. If you don't agree, please don't use the service.
          </p>
          <p className="font-serif italic text-base text-ink-soft leading-loose mb-12">
            This is not legal advice. If you have legal questions about how these Terms apply to your situation, consult a qualified attorney.
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
              Legal notices:{' '}
              <a href="mailto:legal@discernmatch.com" className="text-gold hover:text-gold-warm border-b border-gold">
                legal@discernmatch.com
              </a>
              <br />
              General questions:{' '}
              <a href="mailto:support@discernmatch.com" className="text-gold hover:text-gold-warm border-b border-gold">
                support@discernmatch.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
