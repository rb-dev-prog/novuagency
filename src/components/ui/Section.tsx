'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/config';

interface SectionProps {
  id?: string;
  className?: string;
  children: ReactNode;
  background?: 'dark' | 'gradient' | 'transparent';
}

export function Section({ id, className, children, background = 'dark' }: SectionProps) {
  const backgrounds = {
    dark: 'bg-background',
    gradient: 'bg-gradient-to-b from-background via-surface to-background',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-20 md:py-28 lg:py-32 px-4 md:px-6 lg:px-8',
        backgrounds[background],
        className
      )}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}