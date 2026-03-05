'use client';

import { useRef } from 'react';
import { Zap, Users, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { gsap, useGSAP, EASE_DEFAULT, EASE_DRAMATIC } from '@/lib/gsap-init';

const strengths = [
  {
    icon: Zap,
    title: '対応スピード',
    description:
      'お問い合わせから24時間以内に初回ご連絡。小規模案件は最短1週間で納品。',
  },
  {
    icon: Users,
    title: 'ワンストップ対応',
    description:
      '企画・デザイン・実装・運用保守まで一貫対応。窓口を分ける必要がありません。',
  },
  {
    icon: Shield,
    title: '透明な料金体系',
    description:
      '見積もりは項目ごとに明記。追加費用が発生する場合は事前にご相談します。',
  },
];

const companyInfo = [
  { label: '名称', value: 'NEXIA（ネクシア）' },
  {
    label: '事業内容',
    value: 'Web制作 / AIツール開発 / AIマーケティング支援 / AI研修',
  },
  { label: '所在地', value: '大阪府' },
  { label: '対応エリア', value: '全国対応（オンライン / 関西は対面対応可）' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // タイトル
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-about="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-about="badge"]', {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          '[data-about="title"]',
          { autoAlpha: 1, y: 0, duration: 0.7 },
          '-=0.2'
        )
        .to(
          '[data-about="desc"]',
          { autoAlpha: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

      // 強みカード
      const cards = gsap.utils.toArray<HTMLElement>('[data-about="strength"]');
      cards.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            once: true,
          },
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: EASE_DRAMATIC,
        });
      });

      // 会社概要カード
      gsap.to('[data-about="company"]', {
        scrollTrigger: {
          trigger: '[data-about="company"]',
          start: 'top 85%',
          once: true,
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: EASE_DEFAULT,
      });

      // 各行
      gsap.to('[data-about="info-row"]', {
        scrollTrigger: {
          trigger: '[data-about="company"]',
          start: 'top 80%',
          once: true,
        },
        autoAlpha: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.3,
        ease: EASE_DEFAULT,
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        {/* ヘッダー */}
        <div data-about="header" className="text-center mb-20">
          <div
            data-about="badge"
            className="gsap-hidden section-badge mx-auto mb-6"
            style={{ transform: 'translateY(20px)' }}
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span>WHY NEXIA</span>
          </div>
          <h2
            data-about="title"
            className="gsap-hidden text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ transform: 'translateY(40px)' }}
          >
            選ばれる理由
          </h2>
          <p
            data-about="desc"
            className="gsap-hidden text-base sm:text-lg text-white/40 max-w-xl mx-auto"
            style={{ transform: 'translateY(20px)' }}
          >
            大手にはないスピード感と柔軟さで、御社の課題に向き合います。
          </p>
        </div>

        {/* 強み 3カード — Strat Studio風: ドットパターン + グラスカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {strengths.map((s, i) => (
            <motion.div
              key={s.title}
              data-about="strength"
              className="gsap-hidden glass-card overflow-hidden"
              style={{ transform: `translateY(${50 + i * 15}px)` }}
              whileHover={{
                borderColor: 'rgba(91,123,255,0.25)',
                transition: { duration: 0.3 },
              }}
            >
              {/* ドットパターン装飾（上部） */}
              <div className="dot-pattern h-20 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)]" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white/60" />
                </div>
              </div>

              <div className="px-6 pb-6">
                <h3 className="text-base font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 会社概要 — グラスカード */}
        <div
          data-about="company"
          className="gsap-hidden glass-card p-8 sm:p-10"
          style={{ transform: 'translateY(30px)' }}
        >
          <h3 className="text-lg font-bold text-white mb-6">会社概要</h3>
          <div className="space-y-5">
            {companyInfo.map((info) => (
              <div
                key={info.label}
                data-about="info-row"
                className="gsap-hidden flex flex-col sm:flex-row gap-1 sm:gap-0 border-b border-white/[0.06] pb-5 last:border-0 last:pb-0"
                style={{ transform: 'translateX(-30px)' }}
              >
                <div className="w-full sm:w-1/4 text-sm font-medium text-white/50">
                  {info.label}
                </div>
                <div className="text-sm text-white/80">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
