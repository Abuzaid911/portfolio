'use client';

import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { ToastProvider } from '@/components/toast-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemeProvider attribute="class" defaultTheme="dark" enableSystem themes={['light', 'dark']}>
      <ToastProvider>{children}</ToastProvider>
    </NextThemeProvider>
  );
}
