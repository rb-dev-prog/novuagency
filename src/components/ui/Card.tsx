'use client';

import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/config';

interface CardProps {
  className?: string;
  children: ReactNode;
  interactive?: boolean;
  onClick?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, interactive = false, onClick }, ref) => {
    return (
      <div
        ref={ref}
        onClick={onClick}
        className={cn(
          'bg-surface rounded-xl border border-border p-6 transition-all duration-300',
          interactive && 'hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 cursor-pointer',
          className
        )}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';