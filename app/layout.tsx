import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk', display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://ahmedali.dev'),
  title: {
    default: 'Ahmed Ali — Full-Stack Developer & AI Builder',
    template: '%s | Ahmed Ali',
  },
  description: 'Startup-minded full-stack engineer crafting AI-driven products, automation, and data-rich experiences.',
  openGraph: {
    title: 'Ahmed Ali — Full-Stack Developer & AI Builder',
    description: 'Startup-minded full-stack engineer crafting AI-driven products, automation, and data-rich experiences.',
    url: 'https://abuzaid.dev',
    siteName: 'Ahmed Ali',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ahmed Ali — Full-Stack Developer & AI Builder',
    description: 'Startup-minded full-stack engineer crafting AI-driven products, automation, and data-rich experiences.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Analytics script placeholder */}
      </head>
      <body className={cn('bg-ink text-text', inter.variable, spaceGrotesk.variable)}>
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <header className="sticky top-0 z-40 border-b border-border/40 bg-ink/70 backdrop-blur">
              <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 sm:px-10">
                <div className="flex flex-col">
                  <span className="font-display text-lg text-text">Ahmed Ali</span>
                  <span className="text-xs uppercase tracking-[0.4em] text-muted">Full-Stack & AI Builder</span>
                </div>
                <nav className="flex items-center gap-4 text-sm text-muted">
                  <a className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="#projects">
                    Projects
                  </a>
                  <a className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="#experience">
                    Experience
                  </a>
                  <a className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="#skills">
                    Skills
                  </a>
                  <a className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent" href="#contact">
                    Contact
                  </a>
                  <ThemeToggle />
                </nav>
              </div>
            </header>
            <main id="content" className="flex-1">
              {children}
            </main>
            <footer className="border-t border-border/40 bg-ink/80">
              <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-10">
                <p>© {new Date().getFullYear()} Ahmed Ali. Crafted with care.</p>
                <div className="flex items-center gap-4">
                  <a href="mailto:ahmedmohammedabuzaidali@gmail.com" className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    hello@ahmedali.dev
                  </a>
                  <a href="/cv/Ahmed_Ali_CV.pdf" className="hover:text-text focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
                    Download CV
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
