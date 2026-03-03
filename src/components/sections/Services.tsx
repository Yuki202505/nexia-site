import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const services = [
  {
    icon: '🌐',
    title: 'HP制作',
    description:
      'AIを活用した高速・高品質なWebサイト制作。集客に強いデザインとSEO対策で、ビジネスの成長を支援します。',
    features: ['レスポンシブデザイン', 'SEO最適化', '高速表示', '保守・運用サポート'],
  },
  {
    icon: '⚡',
    title: 'AIツール開発',
    description:
      '業務効率化のためのAIツールをオーダーメイドで開発。データ分析、自動化、チャットボットなど、あらゆるニーズに対応します。',
    features: ['業務自動化', 'データ分析ツール', 'チャットボット', 'API連携'],
  },
  {
    icon: '📚',
    title: 'AI研修',
    description:
      '社員のAIリテラシー向上を支援。ChatGPTの活用法から、プロンプトエンジニアリングまで、実践的な研修を提供します。',
    features: ['ChatGPT活用研修', 'プロンプト設計', '業務活用ワークショップ', 'カスタム研修'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              3つの<span className="gradient-text">サービス</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              AI技術を軸に、Webサイト制作からツール開発、人材育成まで
              ワンストップでサポートします。
            </p>
          </div>
        </ScrollFadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, i) => (
            <ScrollFadeIn key={service.title} delay={i * 150}>
              <div className="glass-card glow rounded-2xl p-8 h-full">
                <div className="text-4xl">{service.icon}</div>
                <h3 className="mt-4 text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span className="text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
