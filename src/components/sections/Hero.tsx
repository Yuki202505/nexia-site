import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Hero() {
  return (
    <section className="flex min-h-dvh items-center">
      <div className="mx-auto max-w-5xl px-6 py-32">
        <ScrollFadeIn delay={100}>
          <h1 className="font-[family-name:var(--font-noto-serif-jp)] text-4xl font-medium leading-[1.4] tracking-tight text-ink sm:text-5xl md:text-6xl">
            テクノロジーで、
            <br />
            事業を前に進める。
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <p className="mt-8 max-w-xl text-base leading-[2] text-ink-muted md:text-lg">
            Web制作、業務自動化、AIツール開発、社員研修。
            <br className="hidden sm:block" />
            御社の「やりたいけど手が回らない」を、
            <br className="hidden sm:block" />
            技術の力で解決します。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300}>
          <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-block rounded-sm bg-ink px-8 py-4 text-center text-sm tracking-wide text-cream transition-colors hover:bg-ink-light"
            >
              お問い合わせ
            </a>
            <a
              href="#services"
              className="inline-block px-2 py-4 text-sm text-ink-muted underline underline-offset-4 decoration-border transition-colors hover:text-ink hover:decoration-ink"
            >
              サービス内容を見る
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
