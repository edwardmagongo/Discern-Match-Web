import { AppStoreButtons } from '@/components/ui/AppStoreButtons';

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full opacity-20 blur-3xl"
             style={{ background: 'radial-gradient(circle, #B8924A, transparent 60%)' }} />
        <div className="absolute bottom-0 -right-24 w-96 h-96 rounded-full opacity-15 blur-3xl"
             style={{ background: 'radial-gradient(circle, #1A2C42, transparent 60%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pt-24 pb-32 md:pt-32 md:pb-44 text-center">
        <div className="uppercase-label text-gold mb-8">A Quiet Place to Begin</div>

        <h1 className="font-serif font-light text-5xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-tight text-navy-deep">
          Loving.<br />
          <em className="italic text-gold">Intentional.</em><br />
          Faith Centered.
        </h1>

        <p className="font-serif italic text-lg md:text-2xl text-ink-soft mt-10 max-w-2xl mx-auto leading-relaxed">
          A platform for thoughtful Christian singles. Curated introductions and moderated Faith Circles — no feeds, no leaderboards, no dopamine loops.
        </p>

        <div className="mt-14 flex flex-col items-center gap-8">
          <AppStoreButtons />
          <p className="text-xs tracking-[0.25em] uppercase text-ink-mute">
            14-day free trial · Free for women always
          </p>
        </div>

        <div className="mt-20 max-w-md mx-auto">
          <div className="border-t border-line pt-8">
            <p className="font-serif italic text-base text-ink-soft leading-relaxed">
              "Above all else, guard your heart, for everything you do flows from it."
            </p>
            <div className="mt-3 text-[10px] tracking-[0.3em] uppercase text-gold">
              — Proverbs 4:23
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
