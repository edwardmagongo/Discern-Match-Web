import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Discern·Match — Faith-centered, intentional connection',
    template: '%s · Discern·Match',
  },
  description:
    'A quiet place for Christian singles to meet thoughtfully. Curated introductions and moderated Faith Circles.',
  metadataBase: new URL('https://discernmatch.com'),
  openGraph: {
    title: 'Discern·Match',
    description: 'A quiet place for Christian singles to meet thoughtfully.',
    type: 'website',
    siteName: 'Discern·Match',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
