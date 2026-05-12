import Link from 'next/link';

export function CirclesTeaser() {
  return (
    <section className="bg-navy-deep text-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] -translate-y-1/2 rounded-full opacity-15 blur-3xl"
             style={{ background: 'radial-gradient(circle, #B8924A, transparent 60%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 md:py-44">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div>
            <div className="uppercase-label text-gold mb-6">Faith Circles</div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              Community is the <em className="italic text-gold-warm">first</em> circle.
            </h2>
            <p className="font-serif italic text-lg text-gold-pale mt-8 leading-relaxed max-w-lg">
              Eight to sixteen people, balanced by gender, clustered by season. Four weeks of moderated conversation around weekly prompts.
            </p>
            <p className="text-base text-cream/80 mt-6 leading-relaxed max-w-lg">
              Private one-to-one introductions only unlocked after two weeks of being known. Real character has time to show up.
            </p>
            <Link href="/features" className="inline-block mt-10 text-[11px] tracking-widest uppercase text-gold hover:text-gold-warm border-b border-gold pb-1 transition-colors duration-slow">
              Explore the Circle System →
            </Link>
          </div>

          <div className="relative">
            <div className="bg-navy border border-gold/30 p-10">
              <div className="text-[10px] tracking-[0.3em] uppercase text-gold mb-3 font-medium">
                This week's prompt
              </div>
              <p className="font-serif italic text-2xl text-cream leading-snug mb-8">
                "Where has your faith shown up unexpectedly this week?"
              </p>
              <div className="border-t border-gold/20 pt-6 space-y-5">
                {[
                  { name: 'Maren', season: 'Growing', text: 'In a long meeting yesterday, instead of the rebuttal I would usually craft, I stayed quiet. Maybe that\'s growth.' },
                  { name: 'Jonah', season: 'Regrounding', text: 'Walking my niece home from school. She asked what heaven smells like. I said cedar, probably.' },
                ].map((m, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gold/30 border border-gold flex items-center justify-center font-serif text-cream text-sm flex-shrink-0">
                      {m.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-baseline gap-3">
                        <span className="font-serif text-cream">{m.name}</span>
                        <span className="text-[9px] tracking-[0.2em] uppercase text-gold">{m.season}</span>
                      </div>
                      <p className="font-serif text-sm text-cream/85 mt-1 leading-relaxed">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
