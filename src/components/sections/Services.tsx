import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const services = [
  {
    num: '01',
    title: 'Web制作・開発',
    description:
      'モダンな技術スタックで、ビジネスの成長を支えるWebサイト・アプリケーションを開発します。',
  },
  {
    num: '02',
    title: 'AI・自動化ツール開発',
    description:
      '業務プロセスを効率化し、生産性を向上させるAIソリューションを提供します。',
  },
  {
    num: '03',
    title: 'マーケティング・営業支援',
    description:
      'データ駆動型のマーケティング戦略で、売上向上と顧客獲得を実現します。',
  },
  {
    num: '04',
    title: 'AI研修・コンサルティング',
    description:
      '組織のAI活用を加速させる、実践的な研修とコンサルティングを提供します。',
  },
];

export function Services() {
  return (
    <section id="services" className="bg-cream px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollFadeIn>
          <div className="mb-16">
            <h2
              className="text-4xl font-bold text-ink md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Services
            </h2>
            <p className="mt-4 text-base text-ink-muted md:text-lg">
              テクノロジーで事業課題を解決
            </p>
          </div>
        </ScrollFadeIn>

        <div className="divide-y divide-border">
          {services.map((s, i) => (
            <ScrollFadeIn key={s.title} delay={i * 80}>
              <div className="service-item grid gap-4 rounded-lg py-10 md:grid-cols-12 md:gap-8 md:py-12">
                <div className="md:col-span-1">
                  <span className="text-lg font-bold tabular-nums text-accent">
                    {s.num}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <h3 className="text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-[15px] leading-[1.9] text-ink-muted">
                    {s.description}
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
