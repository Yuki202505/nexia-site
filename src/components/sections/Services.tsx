import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const categories = [
  {
    title: 'Web制作・開発',
    description:
      'コーポレートサイト、LP、ECサイトなどの制作から、CMS導入、SEO対策、公開後の保守運用まで。ビジネスの目的に合わせた設計で、成果につながるWebサイトを構築します。',
  },
  {
    title: 'AI・自動化ツール開発',
    description:
      'データ入力、レポート作成、情報収集など、手作業で時間がかかっている業務をツールで自動化。既存の業務フローに合わせたオーダーメイド開発で、すぐに効果を実感できる仕組みをつくります。',
  },
  {
    title: 'マーケティング・営業支援',
    description:
      '集客からリード獲得、顧客管理まで。SNS運用やメール配信の自動化、営業リスト作成など、テクノロジーを活用したマーケティングの仕組みづくりを支援します。',
  },
  {
    title: 'AI研修・コンサルティング',
    description:
      '「AIを導入したいけど、何から始めればいいかわからない」という企業向けに、ChatGPT・Claudeの業務活用研修やAI導入戦略のコンサルティングなど、実践的な支援を行います。',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFadeIn>
          <p className="font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] text-ink-muted">
            SERVICES
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            対応できること
          </h2>
          <div className="section-divider mt-6" />
        </ScrollFadeIn>

        <div className="mt-16 grid gap-px bg-border md:grid-cols-2">
          {categories.map((cat, i) => (
            <ScrollFadeIn key={cat.title} delay={i * 100}>
              <div className="h-full bg-cream p-8 md:p-10">
                <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-medium text-ink">
                  {cat.title}
                </h3>
                <p className="mt-4 text-sm leading-[2] text-ink-muted">
                  {cat.description}
                </p>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
