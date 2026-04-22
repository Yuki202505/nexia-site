'use client';

import { useRef } from 'react';
import { MessageCircle, FileText, Code2, Headphones } from 'lucide-react';
import { gsap, useGSAP, EASE_DEFAULT, EASE_DRAMATIC } from '@/lib/gsap-init';
import { SectionHeader } from '@/components/ui/SectionHeader';

const steps = [
  {
    icon: MessageCircle,
    number: '01',
    title: 'ヒアリング',
    description: 'お話を聞いて課題を整理。「何が必要か」を一緒に考えます。',
  },
  {
    icon: FileText,
    number: '02',
    title: 'ご提案・お見積り',
    description: '最適なプランと料金を明確にご提示。',
  },
  {
    icon: Code2,
    number: '03',
    title: '制作・開発',
    description: '進捗を共有しながら、丁寧に制作を進めます。',
  },
  {
    icon: Headphones,
    number: '04',
    title: '納品・運用サポート',
    description: '納品後も安心。更新方法のレクチャーや保守も対応。',
  },
];

export function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-process="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-process="badge"]', { autoAlpha: 1, y: 0, duration: 0.5 })
        .to('[data-process="title"]', { autoAlpha: 1, y: 0, duration: 0.7 }, '-=0.2')
        .to('[data-process="desc"]', { autoAlpha: 1, y: 0, duration: 0.6 }, '-=0.3');

      gsap.to('[data-process="step"]', {
        scrollTrigger: {
          trigger: '[data-process="timeline"]',
          start: 'top 80%',
          once: true,
        },
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: EASE_DRAMATIC,
      });
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="process"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#F9FAFB]"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="PROCESS"
          title="制作の流れ"
          description="ご相談から納品後のサポートまで、安心の4ステップ。"
          dataPrefix="process"
        />

        {/* デスクトップ: 横型タイムライン / モバイル: 縦型 */}
        <div data-process="timeline">
          {/* デスクトップ */}
          <div className="hidden md:grid md:grid-cols-4 gap-0 relative">
            {/* 接続線 */}
            <div className="absolute top-8 left-[calc(12.5%+24px)] right-[calc(12.5%+24px)] h-[2px] bg-gray-200" />

            {steps.map((step) => (
              <div
                key={step.number}
                data-process="step"
                className="gsap-hidden flex flex-col items-center text-center relative"
                style={{ transform: 'translateY(40px)' }}
              >
                {/* 番号付き円 */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-sm font-bold text-blue-600" style={{ fontFamily: 'var(--font-inter)' }}>
                    {step.number}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-base font-bold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed max-w-[200px]">{step.description}</p>
              </div>
            ))}
          </div>

          {/* モバイル: 縦型タイムライン */}
          <div className="md:hidden space-y-0 relative">
            {/* 縦線 */}
            <div className="absolute top-8 bottom-8 left-8 w-[2px] bg-gray-200" />

            {steps.map((step) => (
              <div
                key={step.number}
                data-process="step"
                className="gsap-hidden flex items-start gap-6 relative py-6"
                style={{ transform: 'translateY(30px)' }}
              >
                {/* 番号付き円 */}
                <div className="shrink-0 w-16 h-16 rounded-full bg-white border-2 border-blue-600 flex items-center justify-center relative z-10">
                  <span className="text-sm font-bold text-blue-600" style={{ fontFamily: 'var(--font-inter)' }}>
                    {step.number}
                  </span>
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
                      <step.icon className="w-4 h-4 text-blue-600" />
                    </div>
                    <h3 className="text-base font-bold text-gray-800">{step.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
