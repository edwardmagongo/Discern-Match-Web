import Link from 'next/link';
import { SectionHeading } from '@/components/ui/SectionHeading';

const STEPS = [
  {
    eyebrow: 'one',
    title: 'Reflect',
    body: 'Six short reflection questions, no filter sliders. Your season, your rhythm, what you wrestle with.',
  },
  {
    eyebrow: 'two',
    title: 'Be introduced',
    body: 'A human matchmaker reviews each pairing. A few each week, with a short note explaining why.',
  },
  {
    eyebrow: 'three',
    title: 'Begin',
    body: 'When both say yes, conversation opens. No timers, no streaks, no double-blue-tick anxiety.',
  },
  {
    eyebrow: 'four',
    title: 'Belong',
    body: 'Join a Faith Circle of 8–16 like-minded people. Four weeks of moderated conversation. Sometimes a one-to-one comes from it.',
  },
];

export function ProcessTeaser() {
  return (
    <section className="bg-paper border-t border-line">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-36">
        <SectionHeading
          eyebrow="The Process"
          title="Four steps. No swiping."
          italicWord="No swiping."
        />

        <ol className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STEPS.map((step) => (
            <li key={step.eyebrow}>
              <p className="text-xs tracking-[0.2em] uppercase text-gold mb-4 font-mono">
                {step.eyebrow}
              </p>
              <h3 className="font-serif text-2xl text-navy-deep mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-16 text-center">
          <Link href="/features" className="btn-outline">
            See what makes this different
          </Link>
        </div>
      </div>
    </section>
  );
}
