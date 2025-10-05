import { type PropsWithChildren } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends PropsWithChildren {
  id: string;
  title?: string;
  description?: string;
  className?: string;
}

export function Section({ id, title, description, className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={title ? `${id}-title` : undefined}
      className={cn('py-20 sm:py-28', className)}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        {title ? (
          <div className="max-w-3xl space-y-3">
            <h2 id={`${id}-title`} className="font-display text-3xl font-semibold text-text sm:text-4xl">
              {title}
            </h2>
            {description ? (
              <p className="text-lg text-muted">
                {description}
              </p>
            ) : null}
          </div>
        ) : null}
        <div>{children}</div>
      </div>
    </section>
  );
}
