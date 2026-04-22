'use client';

import { motion } from 'motion/react';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const navLinks = [
  { href: '#services', label: 'サービス' },
  { href: '#process', label: '制作の流れ' },
  { href: '#about', label: '会社概要' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'お問い合わせ' },
];

export function Footer() {
  return (
    <footer className="relative border-t border-white/[0.08] bg-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease }}
        >
          {/* ブランド */}
          <div>
            <div className="text-xl font-bold text-gray-50 mb-2">NEXIA</div>
            <p className="text-sm text-gray-400 max-w-xs leading-relaxed">
              テクノロジーの力で、企業のデジタル化を加速させます。
            </p>
          </div>

          {/* ナビリンク */}
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-gray-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* 空カラム（将来拡張用） */}
          <div />
        </motion.div>

        {/* コピーライト */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] text-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} NEXIA
          </p>
        </div>
      </div>
    </footer>
  );
}
