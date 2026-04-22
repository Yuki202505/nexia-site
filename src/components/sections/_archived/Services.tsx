'use client';

import { useRef } from 'react';
import { Globe, Cpu, TrendingUp, GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { gsap, useGSAP, EASE_DEFAULT, EASE_DRAMATIC } from '@/lib/gsap-init';
import { SectionHeader } from '@/components/ui/SectionHeader';

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
      '「AIって何ができるの？」から始める企業研修。お客様の業務に合わせた活用法を、ハンズオン形式でお伝えします。',
    features: ['カスタマイズ研修', '導入ロードマップ策定', '社内AI活用支援'],
  },
];

export function Services() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-services="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-services="badge"]', { autoAlpha: 1, y: 0, duration: 0.5 })
        .to('[data-services="title"]', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.2')
        .to('[data-services="desc"]', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3');

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
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="SERVICES"
          title={`事業の成長に必要なことを、\nまるごとお任せください`}
          description={`「何から始めればいいか分からない」でも大丈夫。\n課題のヒアリングから一緒に考えます。`}
          dataPrefix="services"
        />

        <div data-services="grid" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <motion.div
              key={s.title}
              data-services="card"
              className="gsap-hidden bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 transition-shadow"
              style={{ transform: 'translateY(50px)' }}
              whileHover={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)', transition: { duration: 0.3 } }}
            >
              {/* アイコン */}
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                <s.icon className="w-6 h-6 text-blue-600" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">{s.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.features.map((f) => (
                  <span
                    key={f}
                    className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-700"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
