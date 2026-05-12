export const metadata = { title: 'Privacy Policy' };

const SECTIONS = [
  {
    heading: 'Who we are',
    body: 'Discern·Match is operated by [Legal Entity Name], based in the United States. For privacy inquiries, write us at privacy@discernmatch.com.',
  },
  {
    heading: 'What we collect',
    body: 'Information you provide: account (email, optional phone, gender, timezone); profile (name, date of birth, city, country, work, living situation, denomination, faith involvement, season of life, intention, communication style, values, scripture, lifestyle); the six free-text reflections you write during onboarding; profile and (optional) verification photos; messages within matches and Faith Circles; reports you submit. Collected automatically: device and usage data (IP, model, OS, app version, crash logs); push notification tokens; rounded last-active timestamps. From third parties: subscription state and last four card digits from Stripe; yes/no confirmation from identity verification (we don\'t retain the underlying documents).',
  },
  {
    heading: 'What we do not collect',
    body: 'No third-party advertising trackers in the mobile app. No precise location ("live coordinates") — only city for circle clustering. No access to your contacts. No social media scraping.',
  },
  {
    heading: 'Why we use your information',
    body: 'To provide the service: matchmaking, Faith Circles, conversations, account access. For safety: moderating messages, processing reports, suspending bad actors. For billing: subscriptions and trial reminders. For improvement: aggregated analytics that don\'t identify individuals. For legal compliance: when required by law or valid legal process.',
  },
  {
    heading: 'How matchmaking uses your data',
    body: 'Your profile data feeds a weighted scoring algorithm that ranks potential matches. Your six reflections are converted to mathematical embeddings — numerical representations used to measure conceptual similarity between members. The original text remains private; embeddings cannot be reversed. Embeddings are deleted when your account is deleted. A short "resonance line" — one or two sentences explaining why two people were paired — is generated for each match using a third-party language model (OpenAI). Only summary information is sent; we never send full reflection text or photos.',
  },
  {
    heading: 'Who we share with',
    body: 'We share data only with vetted sub-processors under data processing agreements: AWS for cloud infrastructure; our managed Postgres provider; Stripe for payments; Postmark and Twilio for transactional email and SMS; OpenAI for content moderation and resonance generation; our identity verification partner if you opt in; Sentry for error tracking with personal data scrubbed. We do not sell, rent, or trade your personal information. We do not share data with advertisers.',
  },
  {
    heading: 'Other members',
    body: 'Information on your profile is shared with other members only when you accept an introduction or join a Faith Circle. Profiles are never publicly indexable.',
  },
  {
    heading: 'Retention',
    body: 'We retain your data while your account is active. When you delete your account, we soft-delete immediately and hard-delete within thirty days. Some categories are retained longer where required by law (financial records: seven years; audit logs: seven years). Anonymized aggregate metrics may be retained indefinitely.',
  },
  {
    heading: 'Your rights',
    body: 'Access and portability: export your data anytime via Settings → Privacy → Export My Data. We provide a JSON archive within 24 hours. Correction: edit most profile data directly in the app. Deletion: Settings → Account → Delete My Account; we acknowledge within 24 hours and complete within 30 days. Objection and restriction: pause your account to restrict matchmaking processing. Complaints: EU/UK members may lodge complaints with their local data protection authority.',
  },
  {
    heading: 'International transfers',
    body: 'Discern·Match is operated from the United States. If you access the service from outside the US, your data is transferred to the US under standard contractual clauses (or equivalent legal mechanism).',
  },
  {
    heading: 'Security',
    body: 'TLS for data in transit, encryption at rest for personal data. Tokens stored in OS-level secure storage on mobile (Keychain / Keystore). Admin passwords stored as Argon2id hashes. See our Trust & Safety page for the structural protections built into the product.',
  },
  {
    heading: 'Children',
    body: 'Discern·Match is for adults 18 and over. We do not knowingly collect data from anyone under 18. If we learn that we have, we will delete it. If you believe a minor has registered, please write to safety@discernmatch.com.',
  },
  {
    heading: 'California (CCPA / CPRA)',
    body: 'California residents have the rights described above (access, deletion, correction, opt-out of sale or sharing) under the CCPA and CPRA. We do not sell or share personal information for cross-context behavioral advertising.',
  },
  {
    heading: 'Changes to this policy',
    body: 'We will notify members of material changes via email or in-app message at least thirty days before they take effect. The current effective date is at the top of this page.',
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Privacy</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            What we collect, <em className="italic text-gold">why,</em> and your rights.
          </h1>
          <p className="text-[10px] tracking-[0.25em] uppercase text-ink-mute mt-10">
            Effective January 1, 2026
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <p className="text-base text-ink-soft leading-loose mb-12">
            This is the privacy policy for Discern·Match ("we," "us," "our"). It explains what data we collect, why, how we use it, and the rights you have over your information. The policy is written to be readable. The plain meaning is the operative one.
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
              Questions or requests:{' '}
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
