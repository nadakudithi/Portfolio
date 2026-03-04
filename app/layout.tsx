import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sri Harsha NMRS — UX Designer Portfolio',
  description: 'Minimal UX Designer portfolio focused on resilient product systems and AI-driven interaction design.'
};

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Explorations', href: '#explorations' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '#', accent: true }
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm"
        >
          Skip to content
        </a>
        <header className="sticky top-0 z-40 border-b border-divider bg-background/95">
          <nav className="mx-auto flex max-w-container items-center justify-between gap-6 px-6 py-4" aria-label="Primary">
            <a href="#hero" className="shrink-0 text-sm font-semibold tracking-tight">
              Sri Harsha NMRS
            </a>
            <ul className="flex min-w-0 items-center gap-5 overflow-x-auto text-sm text-secondary">
              {navItems.map((item) => (
                <li key={item.label} className="shrink-0">
                  <a
                    className={`transition-colors hover:text-primary ${item.accent ? 'font-medium text-primary hover:text-accent' : ''}`}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
