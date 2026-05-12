import Link from 'next/link';
import { BrandMark } from '@/components/ui/BrandMark';

export function Footer() {
  return (
    <footer className="border-t border-line bg-cream-warm mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BrandMark size={24} />
              <span className="font-serif text-base tracking-[0.3em] text-navy-deep uppercase">
                Discern<span className="text-gold mx-0.5">·</span>Match
              </span>
            </div>
            <p className="font-serif italic text-ink-soft text-sm leading-relaxed max-w-xs">
              A faith-centered, intentional introduction and community platform for Christian singles.
            </p>
          </div>

          <div>
            <h4 className="uppercase-label mb-6">Discover</h4>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><Link href="/" className="hover:text-navy-deep">Home</Link></li>
              <li><Link href="/features" className="hover:text-navy-deep">Features</Link></li>
              <li><Link href="/beliefs" className="hover:text-navy-deep">Core Beliefs</Link></li>
              <li><Link href="/testimonials" className="hover:text-navy-deep">Stories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-label mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><Link href="/faq" className="hover:text-navy-deep">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-navy-deep">Contact</Link></li>
              <li><Link href="/safety" className="hover:text-navy-deep">Trust &amp; Safety</Link></li>
              <li><Link href="/community" className="hover:text-navy-deep">Community Guidelines</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="uppercase-label mb-6">Legal</h4>
            <ul className="space-y-3 text-sm text-ink-soft">
              <li><Link href="/privacy" className="hover:text-navy-deep">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-navy-deep">Terms</Link></li>
              <li><Link href="/cookies" className="hover:text-navy-deep">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-line pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-ink-mute">
            © {new Date().getFullYear()} Discern·Match. All rights reserved.
          </p>
          <p className="font-serif italic text-sm text-ink-mute">
            "Whatever is true, whatever is noble, whatever is right…"
          </p>
        </div>
      </div>
    </footer>
  );
}