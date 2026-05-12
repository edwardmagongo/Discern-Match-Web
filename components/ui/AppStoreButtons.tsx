import Link from 'next/link';

export function AppStoreButtons({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <Link
        href="#"
        aria-label="Download on the App Store"
        className="inline-flex items-center gap-3 bg-navy-deep text-cream px-6 py-3.5 transition-opacity duration-slow ease-editorial hover:opacity-90"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
        <div className="text-left">
          <div className="text-[9px] tracking-[0.2em] opacity-75 uppercase">Download on the</div>
          <div className="text-base font-semibold leading-tight">App Store</div>
        </div>
      </Link>

      <Link
        href="#"
        aria-label="Get it on Google Play"
        className="inline-flex items-center gap-3 bg-navy-deep text-cream px-6 py-3.5 transition-opacity duration-slow ease-editorial hover:opacity-90"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M3.609 1.814L13.792 12 3.61 22.186A1.99 1.99 0 0 1 3 20.793V3.207c0-.535.226-1.018.609-1.393zm10.89 10.89L17.34 15.5l-4.054 2.31L3.93 22.66l10.57-9.957zm5.626-3.226L17.84 11l-3.341-3.34 2.281-1.302a1.972 1.972 0 0 1 1.998-.001l1.347.766c1.108.633 1.108 2.244 0 2.877zM3.93 1.34L13.286 6.19l4.054 2.31-2.841 2.794L3.93 1.34z"/>
        </svg>
        <div className="text-left">
          <div className="text-[9px] tracking-[0.2em] opacity-75 uppercase">Get it on</div>
          <div className="text-base font-semibold leading-tight">Google Play</div>
        </div>
      </Link>
    </div>
  );
}
