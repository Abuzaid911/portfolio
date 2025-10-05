import { type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps extends PropsWithChildren {
  variant?: 'accent' | 'outline' | 'muted';
  className?: string;
}

export function Badge({ children, variant = 'accent', className }: BadgeProps) {
  const styles = {
    accent: 'bg-accent/20 text-accent border border-accent/40',
    outline: 'border border-accent/30 text-text/80',
    muted: 'bg-surface/70 text-muted border border-border/60',
  } as const;

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
