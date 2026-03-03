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
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#"
          className={`text-lg font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? 'text-ink' : 'text-white'
          }`}
        >
          NEXIA
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] tracking-wide transition-colors ${
                isScrolled
                  ? 'text-ink-muted hover:text-ink'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="メニュー"
        >
          <span
            className={`h-px w-5 transition-all duration-300 ${
              isScrolled ? 'bg-ink' : 'bg-white'
            } ${isMobileOpen ? 'translate-y-[7px] rotate-45' : ''}`}
          />
          <span
            className={`h-px w-5 transition-all duration-300 ${
              isScrolled ? 'bg-ink' : 'bg-white'
            } ${isMobileOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-px w-5 transition-all duration-300 ${
              isScrolled ? 'bg-ink' : 'bg-white'
            } ${isMobileOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
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
              className="text-sm text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
