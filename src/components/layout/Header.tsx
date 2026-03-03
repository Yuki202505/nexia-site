'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'border-b border-border bg-cream/90 backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a
          href="#"
          className="font-[family-name:var(--font-noto-serif-jp)] text-xl font-semibold tracking-wide text-ink"
        >
          NEXIA
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-[family-name:var(--font-inter)] text-[13px] tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-sm bg-ink px-5 py-2.5 font-[family-name:var(--font-inter)] text-[13px] tracking-wide text-cream transition-colors hover:bg-ink-light"
          >
            Contact
          </a>
        </nav>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="メニュー"
        >
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              isMobileOpen ? 'translate-y-[7px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              isMobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-px w-6 bg-ink transition-all duration-300 ${
              isMobileOpen ? '-translate-y-[7px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-t border-border bg-cream/98 backdrop-blur-sm transition-all duration-300 md:hidden ${
          isMobileOpen ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="font-[family-name:var(--font-inter)] text-sm tracking-widest text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
