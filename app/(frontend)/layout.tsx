import type { Metadata } from 'next';
import { Outfit, Poppins, JetBrains_Mono } from 'next/font/google';
import { buildMetadata } from '@/lib/metadata';
import { SiteChrome } from '@/components/layout/SiteChrome';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weights: [400, 500, 600, 700],
  display: 'swap',
  variable: '--font-outfit',
});

const poppins = Poppins({
  subsets: ['latin'],
  weights: [400, 500, 600],
  display: 'swap',
  variable: '--font-poppins',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weights: [400, 500, 600],
  display: 'swap',
  variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = buildMetadata({
  title: 'QRS — Quantitative Risk Systems',
  description: 'Palantir-grade quantitative software for institutional risk assessment.',
  path: '/',
});

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${poppins.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-cream-50 text-text-strong">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
