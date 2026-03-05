'use client';

import { motion } from 'motion/react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const links = [
  { href: '#services', label: 'サービス' },
  { href: '#about', label: '会社概要' },
  { href: '#contact', label: 'お問い合わせ' },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* ブランド */}
          <div>
            <div className="text-xl font-bold text-white mb-2">NEXIA</div>
            <p className="text-sm text-white/30 max-w-xs">
              テクノロジーの力で、企業のデジタル化を加速させます。
            </p>
          </div>

          {/* リンク */}
          <nav className="flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-white/20 text-xs">
            &copy; {new Date().getFullYear()} NEXIA
          </p>
        </div>
      </div>
    </footer>
  );
}
