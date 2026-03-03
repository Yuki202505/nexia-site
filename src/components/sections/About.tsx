import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const companyInfo = [
  { label: '屋号', value: 'NEXIA' },
  { label: '事業内容', value: 'AI技術コンサルティング、Web制作・開発、マーケティング支援、AI研修' },
  { label: '対応エリア', value: '全国（オンライン対応可）' },
  { label: '連絡方法', value: 'メール / Zoom / Google Meet' },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-dark px-6 py-24 lg:px-12 lg:py-32">
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-[1400px]">
        <ScrollFadeIn>
          <div className="mb-16">
            <h2
              className="text-4xl font-bold text-white md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              About
            </h2>
            <p className="mt-4 text-base text-ink-muted md:text-lg">
              会社情報
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={150}>
          <div className="grid max-w-5xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
            {companyInfo.map((info) => (
              <div key={info.label} className="space-y-3">
                <dt className="text-sm font-medium uppercase tracking-wider text-ink-muted">
                  {info.label}
                </dt>
                <dd className="text-lg text-white">
                  {info.value}
                </dd>
              </div>
            ))}
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
