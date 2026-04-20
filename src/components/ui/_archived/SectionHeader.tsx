'use client';

import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
  dataPrefix: string;
}

export function SectionHeader({
  label,
  title,
  description,
  dark = false,
  dataPrefix,
}: SectionHeaderProps) {
  return (
    <div {...{ [`data-${dataPrefix}`]: 'header' }} className="text-center mb-16">
      <p
        {...{ [`data-${dataPrefix}`]: 'badge' }}
        className={cn(
          'gsap-hidden inline-block text-xs font-semibold uppercase tracking-[0.08em] mb-4',
          dark ? 'text-gray-400' : 'text-gray-500'
        )}
        style={{ transform: 'translateY(20px)', fontFamily: 'var(--font-inter)' }}
      >
        {label}
      </p>
      <h2
        {...{ [`data-${dataPrefix}`]: 'title' }}
        className={cn(
          'gsap-hidden text-[2.5rem] sm:text-[3rem] font-bold leading-[1.3] tracking-[0.02em] mb-5',
          dark ? 'text-gray-50' : 'text-gray-800'
        )}
        style={{ transform: 'translateY(40px)' }}
      >
        {title.split('\n').map((line, i, arr) => (
          <span key={i}>
            {line}
            {i < arr.length - 1 && <br />}
          </span>
        ))}
      </h2>
      {description && (
        <p
          {...{ [`data-${dataPrefix}`]: 'desc' }}
          className={cn(
            'gsap-hidden text-base sm:text-lg max-w-xl mx-auto leading-relaxed',
            dark ? 'text-gray-400' : 'text-gray-500'
          )}
          style={{ transform: 'translateY(20px)' }}
        >
          {description.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      )}
    </div>
  );
}
