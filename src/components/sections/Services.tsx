import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const categories = [
  {
    num: '01',
    title: 'Web制作・開発',
    description:
      'コーポレートサイト、LP、ECサイトなどの制作から、CMS導入、SEO対策、公開後の保守運用まで。ビジネスの目的に合わせた設計で、成果につながるWebサイトを構築します。',
  },
  {
    num: '02',
    title: 'AI・自動化ツール開発',
    description:
      'データ入力、レポート作成、情報収集など、手作業で時間がかかっている業務をツールで自動化。既存の業務フローに合わせたオーダーメイド開発で、すぐに効果を実感できる仕組みをつくります。',
  },
  {
    num: '03',
    title: 'マーケティング・営業支援',
    description:
      '集客からリード獲得、顧客管理まで。SNS運用やメール配信の自動化、営業リスト作成など、テクノロジーを活用したマーケティングの仕組みづくりを支援します。',
  },
  {
    num: '04',
    title: 'AI研修・コンサルティング',
    description:
      '「AIを導入したいけど、何から始めればいいかわからない」という企業向けに、ChatGPT・Claudeの業務活用研修やAI導入戦略のコンサルティングなど、実践的な支援を行います。',
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-widest text-ink-muted">
            SERVICES
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            対応できること
          </h2>
        </ScrollFadeIn>

        <div className="mt-16 space-y-0 divide-y divide-border">
          {categories.map((cat, i) => (
            <ScrollFadeIn key={cat.title} delay={i * 80}>
              <div className="grid gap-4 py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-1">
                  <span className="text-[13px] tabular-nums text-ink-muted">
                    {cat.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-ink">
                    {cat.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[15px] leading-[1.9] text-ink-muted">
                    {cat.description}
                  </p>
                </div>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
