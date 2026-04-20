'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { gsap } from '@/lib/gsap-init';

const navLinks = [
  { href: '#services', label: 'サービス' },
  { href: '#process', label: '制作の流れ' },
  { href: '#about', label: '会社概要' },
  { href: '#faq', label: 'FAQ' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleAnchorClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      setIsMobileOpen(false);

      if (href === '#') {
        gsap.to(window, {
          scrollTo: { y: 0 },
          duration: 0.8,
          ease: 'power2.inOut',
        });
        return;
      }

      const target = document.querySelector(href);
      if (target) {
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 80 },
          duration: 0.8,
          ease: 'power2.inOut',
        });
      }
    },
    []
  );

  return (
    <>
      {/* プログレスバー */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-[#2563EB] z-[60] origin-left"
        style={{ scaleX }}
      />

      <motion.header
        className="fixed top-[2px] z-50 w-full"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="w-full"
          animate={{
            backgroundColor: isScrolled
              ? 'rgba(255,255,255,0.95)'
              : 'rgba(0,0,0,0)',
            boxShadow: isScrolled
              ? '0 1px 3px rgba(0,0,0,0.1)'
              : '0 0 0 rgba(0,0,0,0)',
            backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
            <motion.a
              href="#"
              onClick={(e) => handleAnchorClick(e, '#')}
              className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              NEXIA
            </motion.a>

            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className={`relative text-sm transition-colors ${isScrolled ? 'text-gray-500 hover:text-gray-800' : 'text-white/60 hover:text-white'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                  whileHover="hover"
                >
                  {link.label}
                  <motion.span
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 rounded-full ${isScrolled ? 'bg-gray-800' : 'bg-white'}`}
                    initial={{ scaleX: 0 }}
                    variants={{ hover: { scaleX: 1 } }}
                    transition={{ duration: 0.3 }}
                    style={{ originX: 0 }}
                  />
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={(e) => handleAnchorClick(e, '#contact')}
                className="px-6 py-2.5 bg-[#2563EB] text-white rounded-full text-sm font-semibold transition-colors hover:bg-[#1D4ED8]"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                お問い合わせ
              </motion.a>
            </nav>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="flex flex-col gap-1.5 md:hidden"
              aria-label="メニュー"
            >
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileOpen ? 'translate-y-[8px] rotate-45' : ''}`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`h-0.5 w-6 transition-all duration-300 ${isScrolled ? 'bg-gray-800' : 'bg-white'} ${isMobileOpen ? '-translate-y-[8px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </motion.div>

        <AnimatePresence>
          {isMobileOpen && (
            <motion.div
              className={`overflow-hidden border-t md:hidden ${isScrolled ? 'border-gray-200 bg-white/95 backdrop-blur-xl' : 'border-white/10 bg-[rgba(17,24,39,0.95)] backdrop-blur-xl'}`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                duration: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <nav className="flex flex-col gap-4 px-6 py-6">
                {[
                  ...navLinks.map((l) => ({ ...l, accent: false })),
                  { href: '#contact', label: 'お問い合わせ', accent: true },
                ].map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleAnchorClick(e, link.href)}
                    className={`text-sm transition-colors py-2 ${
                      link.accent
                        ? isScrolled
                          ? 'text-[#2563EB] font-semibold'
                          : 'text-white font-semibold'
                        : isScrolled
                          ? 'text-gray-500 hover:text-gray-800'
                          : 'text-white/50 hover:text-white'
                    }`}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.3 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
