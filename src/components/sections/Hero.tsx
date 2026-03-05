'use client';

import { useRef } from 'react';
import { ArrowRight, Globe, Monitor, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { gsap, SplitText, useGSAP, EASE_DRAMATIC } from '@/lib/gsap-init';

const trustBadges = [
  { icon: Globe, label: '全国対応' },
  { icon: Monitor, label: '関西は対面対応可' },
  { icon: Shield, label: 'NDA対応可' },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      const heading = headingRef.current;
      if (!section || !heading) return;

      const split = new SplitText(heading, {
        type: 'chars',
        charsClass: 'gsap-char',
      });

      gsap.set(split.chars, {
        autoAlpha: 0,
        y: 80,
        rotationX: -90,
        transformPerspective: 800,
      });

      const tl = gsap.timeline({ defaults: { ease: EASE_DRAMATIC } });

      tl.to('[data-hero="badge"]', {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
      })
        .to(
          split.chars,
          {
            autoAlpha: 1,
            y: 0,
            rotationX: 0,
            duration: 0.8,
            stagger: 0.02,
          },
          '-=0.3'
        )
        .to(
          '[data-hero="sub"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .to(
          '[data-hero="cta"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.3'
        )
        .to(
          '[data-hero="stats"]',
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.6,
          },
          '-=0.2'
        );

      // スクロールパララックス
      gsap.to(section, {
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: 0.5,
        },
        y: -100,
        opacity: 0.3,
        ease: 'none',
      });

      return () => split.revert();
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      className="relative pt-40 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[100vh] flex items-center justify-center"
    >
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center">
        {/* バッジ — Strat Studio風 */}
        <div
          data-hero="badge"
          className="gsap-hidden section-badge mx-auto mb-8"
          style={{ transform: 'translateY(30px)' }}
        >
          <Sparkles className="w-4 h-4 text-white/50" />
          <span>Web制作・AI開発・マーケティング支援</span>
        </div>

        {/* メイン見出し */}
        <h1
          ref={headingRef}
          className="text-5xl sm:text-6xl lg:text-[5rem] font-bold leading-[1.1] tracking-tight mb-8"
          style={{ perspective: '800px' }}
        >
          御社の「作りたい」を
          <br />
          カタチにする。
        </h1>

        {/* サブテキスト */}
        <p
          data-hero="sub"
          className="gsap-hidden text-base sm:text-lg text-white/50 mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ transform: 'translateY(20px)' }}
        >
          ホームページ制作・AIツール開発・業務自動化。
          <br className="hidden sm:block" />
          企画から運用まで、ワンストップで御社のDXを支援します。
        </p>

        {/* CTAボタン — Strat Studio風の大きなpill */}
        <div
          data-hero="cta"
          className="gsap-hidden mb-20"
          style={{ transform: 'translateY(30px)' }}
        >
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-white text-black rounded-full text-base font-semibold transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 8px 40px rgba(255,255,255,0.2)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            まずは無料で相談する
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        {/* 信頼バッジ */}
        <div
          data-hero="stats"
          className="gsap-hidden inline-flex flex-wrap justify-center gap-3"
          style={{ transform: 'translateY(20px)' }}
        >
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-sm"
            >
              <badge.icon className="w-4 h-4 text-white/40" />
              <span className="text-sm text-white/50">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
