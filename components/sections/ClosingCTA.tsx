import { AppStoreButtons } from '@/components/ui/AppStoreButtons';

export function ClosingCTA() {
  return (
    <section className="bg-paper">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 py-28 md:py-36 text-center">
        <div className="uppercase-label text-gold mb-8">Begin When You're Ready</div>
        <h2 className="font-serif text-4xl md:text-6xl font-light text-navy-deep tracking-tight leading-[1.1]">
          Be still and <em className="italic text-gold">know.</em>
        </h2>
        <p className="font-serif italic text-lg text-ink-soft mt-8 leading-relaxed max-w-xl mx-auto">
          A 14-day trial gives you time to sit with the experience before deciding. Free for women, always.
        </p>
        <div className="mt-12 flex justify-center">
          <AppStoreButtons />
        </div>
      </div>
    </section>
  );
}
