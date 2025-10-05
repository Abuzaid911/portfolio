import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/providers';
import { SiteHeader } from '@/components/site-header';
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
            <SiteHeader />
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
