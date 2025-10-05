'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface BaseProps {
  label: string;
  name: string;
  description?: string;
  error?: string;
  className?: string;
  required?: boolean;
}

export type InputFieldProps = BaseProps & React.InputHTMLAttributes<HTMLInputElement>;

const baseInputStyles =
  'block w-full rounded-2xl border border-border/50 bg-surface/90 px-4 py-3 text-sm text-text placeholder:text-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/40 transition disabled:opacity-60 disabled:cursor-not-allowed backdrop-blur dark:bg-white dark:text-black dark:placeholder:text-slate-500';

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ label, name, description, error, className, required, type = 'text', ...props }, ref) => {
    const fieldId = props.id ?? name;
    const errorId = error ? `${fieldId}-error` : undefined;
    const descriptionId = description ? `${fieldId}-description` : undefined;

    return (
      <div className={cn('space-y-2', className)}>
        <label htmlFor={fieldId} className="flex items-center justify-between text-sm font-medium text-muted">
          <span>{label}</span>
          {required ? <span aria-hidden className="text-accent">*</span> : null}
        </label>
        <input
          ref={ref}
          id={fieldId}
          name={name}
          type={type}
          aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
          aria-invalid={Boolean(error)}
          required={required}
          className={baseInputStyles}
          {...props}
        />
        {description ? (
          <p id={descriptionId} className="text-xs text-muted/70">
            {description}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs font-medium text-red-400" role="alert" aria-live="assertive">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
InputField.displayName = 'InputField';

export type TextareaFieldProps = BaseProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, name, description, error, className, required, rows = 4, ...props }, ref) => {
    const fieldId = props.id ?? name;
    const errorId = error ? `${fieldId}-error` : undefined;
    const descriptionId = description ? `${fieldId}-description` : undefined;

    return (
      <div className={cn('space-y-2', className)}>
        <label htmlFor={fieldId} className="flex items-center justify-between text-sm font-medium text-muted">
          <span>{label}</span>
          {required ? <span aria-hidden className="text-accent">*</span> : null}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          name={name}
          rows={rows}
          aria-describedby={[descriptionId, errorId].filter(Boolean).join(' ') || undefined}
          aria-invalid={Boolean(error)}
          required={required}
          className={cn(baseInputStyles, 'min-h-[160px] resize-y')}
          {...props}
        />
        {description ? (
          <p id={descriptionId} className="text-xs text-muted/70">
            {description}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs font-medium text-red-400" role="alert" aria-live="assertive">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
TextareaField.displayName = 'TextareaField';
