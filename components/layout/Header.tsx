'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandMark } from '@/components/ui/BrandMark';

const NAV = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/beliefs', label: 'Core Beliefs' },
  { href: '/testimonials', label: 'Stories' },
  { href: '/faq', label: 'FAQ' },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-paper/90 backdrop-blur-sm border-b border-line-soft">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Discern-Match home">
          <BrandMark size={28} />
          <span className="font-serif text-lg tracking-[0.3em] text-navy-deep uppercase">
            Discern<span className="text-gold mx-0.5">·</span>Match
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10" aria-label="Primary">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[11px] tracking-widest uppercase font-medium text-ink-soft hover:text-navy-deep transition-colors duration-slow ease-editorial"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/download" className="btn-dark py-2.5 px-6">
            Download
          </Link>
        </nav>

        <button
          type="button"
          className="md:hidden text-navy-deep"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((p) => !p)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-line-soft bg-paper" aria-label="Mobile">
          <ul className="px-6 py-6 space-y-5">
            {NAV.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-navy-deep block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/download" onClick={() => setOpen(false)} className="btn-dark inline-block">
                Download
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}