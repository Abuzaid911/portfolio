'use client';

import * as React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const baseStyles =
  'inline-flex items-center justify-center whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition will-change-transform focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';

const variants = {
  primary:
    'bg-accent text-ink shadow-glow hover:shadow-[0_0_26px_rgba(44,230,149,0.45)] hover:-translate-y-0.5 focus-visible:outline-accent disabled:opacity-60 disabled:hover:translate-y-0',
  secondary:
    'border border-accent/60 bg-transparent text-text hover:bg-accent/10 hover:border-accent focus-visible:outline-accent disabled:opacity-60',
  ghost:
    'text-muted hover:text-text hover:bg-surface/60 focus-visible:outline-accent disabled:opacity-60',
} as const;

type Variant = keyof typeof variants;

type LinkProps = React.ComponentProps<typeof Link>;

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonProps = (LinkProps | NativeButtonProps) & {
  variant?: Variant;
  loading?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>((props, forwardedRef) => {
  const { variant = 'primary', loading = false, className, children, ...rest } = props;

  if ('href' in props && props.href) {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link
        ref={forwardedRef as React.ForwardedRef<HTMLAnchorElement>}
        href={href}
        className={cn(baseStyles, variants[variant], className)}
        {...linkProps}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = rest as NativeButtonProps;

  return (
    <button
      ref={forwardedRef as React.ForwardedRef<HTMLButtonElement>}
      className={cn(baseStyles, variants[variant], className)}
      disabled={loading || buttonProps.disabled}
      {...buttonProps}
    >
      <span className={loading ? 'opacity-80' : undefined}>{children}</span>
      {loading ? (
        <span className="ml-2 inline-flex h-3 w-3 animate-spin rounded-full border-2 border-ink border-t-transparent" aria-hidden />
      ) : null}
    </button>
  );
});
Button.displayName = 'Button';
