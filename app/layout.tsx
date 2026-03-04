import type { Metadata } from 'next';
import './globals.css';
import { SiteNav } from '@/app/components/SiteNav';
import { ScrollProgress } from '@/app/components/ScrollProgress';
import { ScrollToTopButton } from '@/app/components/ScrollToTopButton';

export const metadata: Metadata = {
  title: 'Sri Harsha NMRS - UX Designer Portfolio',
  description: 'Portfolio focused on resilient product systems and AI-driven interaction design.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ScrollProgress />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-black focus:px-3 focus:py-2 focus:text-sm focus:text-white"
        >
          Skip to content
        </a>
        <SiteNav />
        {children}
        <ScrollToTopButton />
      </body>
    </html>
  );
}
