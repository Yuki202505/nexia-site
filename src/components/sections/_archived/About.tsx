'use client';

import { useRef } from 'react';
import { Zap, Users, Shield } from 'lucide-react';
import { gsap, useGSAP, EASE_DEFAULT, EASE_DRAMATIC } from '@/lib/gsap-init';
import { SectionHeader } from '@/components/ui/SectionHeader';

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
  { label: '事業内容', value: 'Web制作 / AIツール開発 / AIマーケティング支援 / AI研修' },
  { label: '所在地', value: '大阪府' },
  { label: '対応エリア', value: '全国対応（オンライン / 関西は対面対応可）' },
];

export function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-about="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-about="badge"]', { autoAlpha: 1, y: 0, duration: 0.5 })
        .to('[data-about="title"]', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.2')
        .to('[data-about="desc"]', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3');

      // 強みカード
      const cards = gsap.utils.toArray<HTMLElement>('[data-about="strength"]');
      cards.forEach((card, i) => {
        gsap.to(card, {
          scrollTrigger: { trigger: card, start: 'top 85%', once: true },
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: EASE_DRAMATIC,
        });
      });

      // 会社概要
      gsap.to('[data-about="company"]', {
        scrollTrigger: { trigger: '[data-about="company"]', start: 'top 85%', once: true },
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        ease: EASE_DEFAULT,
      });

      gsap.to('[data-about="info-row"]', {
        scrollTrigger: { trigger: '[data-about="company"]', start: 'top 80%', once: true },
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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="WHY NEXIA"
          title="選ばれる理由"
          description="大手にはないスピード感と柔軟さで、お客様の課題に向き合います。"
          dataPrefix="about"
        />

        {/* 強み — 横型（アイコン左 + テキスト右） */}
        <div className="space-y-8 mb-20">
          {strengths.map((s, i) => (
            <div
              key={s.title}
              data-about="strength"
              className="gsap-hidden flex items-start gap-5"
              style={{ transform: `translateY(${30 + i * 10}px)` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <s.icon className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-800 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 会社概要テーブル */}
        <div
          data-about="company"
          className="gsap-hidden"
          style={{ transform: 'translateY(30px)' }}
        >
          <h3 className="text-lg font-bold text-gray-800 mb-6">会社概要</h3>
          <div className="space-y-0">
            {companyInfo.map((info) => (
              <div
                key={info.label}
                data-about="info-row"
                className="gsap-hidden flex flex-col sm:flex-row gap-1 sm:gap-0 border-b border-gray-200 py-5 last:border-0"
                style={{ transform: 'translateX(-30px)' }}
              >
                <div className="w-full sm:w-1/4 text-sm font-medium text-gray-500">
                  {info.label}
                </div>
                <div className="text-sm text-gray-800">{info.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
