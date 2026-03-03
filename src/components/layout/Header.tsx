'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { href: '#services', label: 'できること' },
  { href: '#about', label: '会社概要' },
  { href: '#contact', label: 'お問い合わせ' },
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
          ? 'border-b border-white/10 bg-navy-950/80 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* ロゴ */}
        <a
          href="#"
          className="font-[family-name:var(--font-inter)] text-2xl font-bold tracking-tight"
        >
          <span className="gradient-text">NEXIA</span>
        </a>

        {/* デスクトップナビ */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-gray-400 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25"
          >
            お問い合わせ
          </a>
        </nav>

        {/* モバイルハンバーガー */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="メニュー"
        >
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-white transition-all duration-300 ${
              isMobileOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* モバイルメニュー */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-navy-950/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileOpen ? 'max-h-80' : 'max-h-0 border-t-0'
        }`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className="text-gray-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
