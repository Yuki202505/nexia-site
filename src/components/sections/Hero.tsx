import { GradientButton } from '@/components/ui/GradientButton';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-grid">
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        <ScrollFadeIn delay={100}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            テクノロジーで、
            <br />
            <span className="gradient-text">事業を前に進める。</span>
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Web制作、業務自動化、AIツール開発、社員研修。
            <br className="hidden sm:block" />
            御社の「やりたいけど手が回らない」を、
            <br className="hidden sm:block" />
            技術の力で解決します。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="#contact" size="lg">
              まずは相談する
            </GradientButton>
            <a
              href="#services"
              className="inline-block rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              できること一覧
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
