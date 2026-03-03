import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-dark px-6 lg:px-12">
      {/* グリッドパターン背景 */}
      <div className="hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      {/* アニメーションするグラデーションオーブ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] py-32">
        <div className="max-w-4xl">
          <ScrollFadeIn delay={100}>
            <h1
              className="font-bold leading-[1.1] tracking-tight text-white"
              style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', letterSpacing: '-0.02em' }}
            >
              テクノロジーで、
              <br />
              事業を前に進める。
            </h1>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <p className="mt-6 text-lg font-medium tracking-[0.2em] text-ink-muted md:text-xl">
              AI × TECHNOLOGY PARTNER
            </p>
          </ScrollFadeIn>

          <ScrollFadeIn delay={300}>
            <div className="mt-12">
              <a
                href="#contact"
                className="inline-block rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-accent"
              >
                お問い合わせ
              </a>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
