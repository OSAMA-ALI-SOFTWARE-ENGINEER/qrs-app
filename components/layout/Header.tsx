import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { NAV_LINKS } from '@/lib/constants';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-ink-800 border-b border-teal-700">
      <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-display text-h4 text-white font-semibold">
          QRS
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body text-white hover:text-teal-500 transition-colors duration-base"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Button variant="primary">Request Demo</Button>
      </nav>
    </header>
  );
}
