import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';
import { GradientButton } from '@/components/ui/GradientButton';

const plans = [
  {
    name: 'HP制作',
    price: '50,000',
    unit: '円〜',
    description: 'ビジネスに最適なWebサイトをAIで高速制作',
    features: [
      'レスポンシブ対応',
      'オリジナルデザイン',
      'SEO基本設定',
      'お問い合わせフォーム',
      '公開後の修正1回無料',
    ],
    highlight: true,
  },
  {
    name: '月額保守',
    price: '10,000',
    unit: '円/月',
    description: 'サイト公開後の安心運用サポート',
    features: [
      'サーバー・ドメイン管理',
      'セキュリティ更新',
      '月4回までのコンテンツ更新',
      'アクセス解析レポート',
      'メールサポート',
    ],
    highlight: false,
  },
  {
    name: 'AIツール開発・研修',
    price: '要相談',
    unit: '',
    description: 'お客様のニーズに合わせたカスタムプラン',
    features: [
      'ヒアリングから要件定義',
      'オーダーメイド開発',
      '導入サポート',
      '研修カリキュラム設計',
      '継続的な改善提案',
    ],
    highlight: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 md:py-32">
      {/* 背景アクセント */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Pricing
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              シンプルな<span className="gradient-text">料金体系</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-400">
              明確な料金設定で、安心してご依頼いただけます。
            </p>
          </div>
        </ScrollFadeIn>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <ScrollFadeIn key={plan.name} delay={i * 150}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col ${
                  plan.highlight
                    ? 'gradient-border glass-card glow'
                    : 'glass-card'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-1 text-xs font-semibold text-white">
                    人気
                  </div>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.unit}</span>
                </div>
                <p className="mt-3 text-sm text-gray-400">{plan.description}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-300"
                    >
                      <span className="mt-0.5 text-blue-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <GradientButton
                    href="#contact"
                    className="w-full text-center"
                    size="md"
                  >
                    お問い合わせ
                  </GradientButton>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
