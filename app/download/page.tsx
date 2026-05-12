import { AppStoreButtons } from '@/components/ui/AppStoreButtons';

export const metadata = { title: 'Download' };

export default function DownloadPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full opacity-15 blur-3xl"
             style={{ background: 'radial-gradient(circle, #B8924A, transparent 60%)' }} />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 lg:px-12 py-24 md:py-44 text-center">
        <div className="uppercase-label text-gold mb-8">Begin</div>

        <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[88px] text-navy-deep tracking-tight leading-[1.05]">
          Be still and <em className="italic text-gold">know.</em>
        </h1>

        <p className="font-serif italic text-lg md:text-xl text-ink-soft mt-10 leading-relaxed max-w-xl mx-auto">
          Download the app to begin reflection. The first six questions take about ten minutes. There is no clock.
        </p>

        <div className="mt-14 flex justify-center">
          <AppStoreButtons />
        </div>

        <div className="mt-16 pt-12 border-t border-line max-w-md mx-auto">
          <h2 className="uppercase-label text-gold mb-4">What to expect</h2>
          <ul className="space-y-4 text-left text-sm text-ink-soft leading-relaxed">
            <li className="flex gap-4">
              <span className="font-serif italic text-gold flex-shrink-0">i.</span>
              <span>15-step reflection-based onboarding. Save and resume any time.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-serif italic text-gold flex-shrink-0">ii.</span>
              <span>14-day free trial for all members.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-serif italic text-gold flex-shrink-0">iii.</span>
              <span>$30/month for men after trial. Free always for women.</span>
            </li>
            <li className="flex gap-4">
              <span className="font-serif italic text-gold flex-shrink-0">iv.</span>
              <span>Cancel anytime from settings. No retention dark patterns.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
