'use client';

import { useRef } from 'react';
import {
  Globe,
  Cpu,
  TrendingUp,
  GraduationCap,
  Sparkles,
} from 'lucide-react';
import { motion } from 'motion/react';
import { gsap, useGSAP, EASE_DEFAULT, EASE_DRAMATIC } from '@/lib/gsap-init';

const services = [
  {
    icon: Globe,
    title: 'ホームページ制作',
    description:
      'コーポレートサイト・LP・ECサイトなど、目的に合わせたデザインと実装。SEO対策・スマホ対応・CMS導入まで一貫対応します。',
    features: ['レスポンシブ対応', 'SEO内部対策', 'WordPress / Next.js'],
  },
  {
    icon: Cpu,
    title: 'AI・自動化ツール開発',
    description:
      '日報の自動生成、問い合わせの自動分類、データ入力の自動化など。「毎日やっている手作業」をAIで解消します。',
    features: ['ChatGPT / Claude 連携', '業務フロー自動化', 'カスタムAI開発'],
  },
  {
    icon: TrendingUp,
    title: 'AIマーケティング支援',
    description:
      'AIを活用したコンテンツ生成・広告最適化・レポート自動化で、少人数でも成果の出るマーケティング体制を構築します。問い合わせ対応のチャットボット導入で、対応コストを削減しながらリード獲得を強化。',
    features: ['AI記事・SNS投稿生成', 'チャットボット導入', 'レポート自動化'],
  },
  {
    icon: GraduationCap,
    title: 'AI研修・導入支援',
    description:
      '「AIって何ができるの？」から始める企業研修。御社の業務に合わせた活用法を、ハンズオン形式でお伝えします。',
    features: ['カスタマイズ研修', '導入ロードマップ策定', '社内AI活用支援'],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // タイトル
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-services="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-services="badge"]', {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          '[data-services="title"]',
          { autoAlpha: 1, y: 0, duration: 0.7 },
          '-=0.2'
        )
        .to(
          '[data-services="desc"]',
          { autoAlpha: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );

      // カード
      gsap.to('[data-services="card"]', {
        scrollTrigger: {
          trigger: '[data-services="grid"]',
          start: 'top 80%',
          once: true,
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: EASE_DRAMATIC,
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* ヘッダー */}
        <div data-services="header" className="text-center mb-20">
          <div
            data-services="badge"
            className="gsap-hidden section-badge mx-auto mb-6"
            style={{ transform: 'translateY(20px)' }}
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span>SERVICES</span>
          </div>
          <h2
            data-services="title"
            className="gsap-hidden text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ transform: 'translateY(40px)' }}
          >
            事業の成長に必要なことを、
            <br className="hidden sm:block" />
            まるごとお任せください
          </h2>
          <p
            data-services="desc"
            className="gsap-hidden text-base sm:text-lg text-white/40 max-w-xl mx-auto"
            style={{ transform: 'translateY(20px)' }}
          >
            「何から始めればいいか分からない」でも大丈夫。
            <br className="hidden sm:block" />
            課題のヒアリングから一緒に考えます。
          </p>
        </div>

        {/* カードグリッド — Strat Studio風: ドットパターン装飾 + グラスカード */}
        <div
          data-services="grid"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((s) => (
            <motion.div
              key={s.title}
              data-services="card"
              className="gsap-hidden glass-card overflow-hidden"
              style={{ transform: 'translateY(50px)' }}
              whileHover={{
                borderColor: 'rgba(91, 123, 255, 0.25)',
                transition: { duration: 0.3 },
              }}
            >
              {/* ドットパターン装飾（上部） */}
              <div className="dot-pattern h-24 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)]" />
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-white/[0.06] border border-white/10 flex items-center justify-center">
                  <s.icon className="w-5 h-5 text-white/60" />
                </div>
              </div>

              {/* コンテンツ */}
              <div className="px-6 pb-6 pt-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed mb-4">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06] text-white/40"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
