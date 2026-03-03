import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center overflow-hidden bg-dark">
      <div className="mx-auto max-w-6xl px-6 py-32">
        <ScrollFadeIn delay={100}>
          <p className="text-[13px] tracking-widest text-dark-muted">
            AI × TECHNOLOGY PARTNER
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <h1 className="mt-6 text-4xl font-bold leading-[1.3] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            テクノロジーで、
            <br />
            事業を前に進める。
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300}>
          <p className="mt-8 max-w-lg text-[15px] leading-[1.9] text-dark-muted">
            Web制作、業務自動化、AIツール開発、社員研修。
            <br className="hidden sm:block" />
            御社の「やりたいけど手が回らない」を、
            <br className="hidden sm:block" />
            技術の力で解決します。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={400}>
          <div className="mt-10 flex items-center gap-6">
            <a
              href="#contact"
              className="rounded-full bg-white px-7 py-3.5 text-sm font-medium text-dark transition-opacity hover:opacity-80"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="text-sm text-dark-muted underline underline-offset-4 decoration-dark-muted/40 transition-colors hover:text-white hover:decoration-white/40"
            >
              サービス内容を見る
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
