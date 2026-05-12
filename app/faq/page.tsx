export const metadata = { title: 'FAQ' };

const FAQ = [
  { q: 'How is this different from a dating app?', a: 'There is no swiping, no browsing, no infinite feed. You receive a small number of curated introductions each week. Faith Circles let community come before chemistry — eight to sixteen people in moderated conversation for four weeks. The product is built to slow you down on purpose.' },
  { q: 'Why do men pay and women don\'t?', a: 'For now, a 14-day free trial gives every man time to experience the platform; women have free access throughout. We may move to a unified "founding member" tier in the future.' },
  { q: 'What does it cost?', a: '$30/month for men after the 14-day free trial. Women never pay.' },
  { q: 'Who curates the introductions?', a: 'A weighted matching engine generates candidate pairs each Friday morning, scored on intention, season, values, faith practice, and the resonance of your written reflections. Sub-threshold matches go to a human matchmaker queue before being shipped to you.' },
  { q: 'How private is my profile?', a: 'There is no way to see who viewed your profile. Photos are stored behind signed URLs. We never display "who viewed you." Decline reasons are kept private. You can verify your ID and photo for a subtle visible gold check on your profile.' },
  { q: 'What happens when I accept an introduction?', a: 'Nothing, until the other person also accepts. Once both have accepted, a private one-to-one chat opens. There is no public message until then.' },
  { q: 'How long do introductions stay open?', a: '14 days. After that, they expire if not mutually accepted.' },
  { q: 'What is Sabbath Mode?', a: 'A toggle that pauses all notifications from Saturday sunset to Sunday sunset in your timezone. Faith-aware, automatic, and respected by every part of the system.' },
  { q: 'Are conversations moderated?', a: 'Yes. All messages — both 1-to-1 and Faith Circle — are scanned asynchronously. Flagged content is reviewed by human moderators. You can also report or block any user at any time.' },
  { q: 'Can I delete my account?', a: 'Yes, anytime, from Settings. Account deletion removes your profile from active matchmaking immediately and your personal data within 30 days, in line with our privacy policy.' },
];

export default function FaqPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-24 md:py-32 text-center">
          <div className="uppercase-label text-gold mb-6">Questions</div>
          <h1 className="font-serif font-light text-5xl md:text-7xl text-navy-deep tracking-tight leading-[1.05]">
            Things people <em className="italic text-gold">ask.</em>
          </h1>
        </div>
      </section>

      <section className="bg-paper">
        <div className="max-w-3xl mx-auto px-6 lg:px-12 py-20">
          <dl className="space-y-12">
            {FAQ.map((item, i) => (
              <div key={i} className="border-t border-line pt-10">
                <dt className="font-serif text-2xl md:text-3xl text-navy-deep leading-snug mb-5">
                  {item.q}
                </dt>
                <dd className="text-base text-ink-soft leading-loose">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
