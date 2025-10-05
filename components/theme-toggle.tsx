'use client';

import { useEffect, useState } from 'react';
import { MonitorSmartphone, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/button';

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = theme === 'system' ? systemTheme ?? 'light' : theme;

  const icon = current === 'dark' ? <Moon className="h-4 w-4" aria-hidden /> : <Sun className="h-4 w-4" aria-hidden />;

  return (
    <div className="inline-flex items-center gap-2">
      <Button
        variant="ghost"
        className="h-10 w-10 rounded-full border border-border/40 p-0"
        onClick={() => setTheme(current === 'dark' ? 'light' : 'dark')}
        aria-label="Toggle theme"
      >
        {mounted ? icon : <MonitorSmartphone className="h-4 w-4" aria-hidden />}
      </Button>
    </div>
  );
}
