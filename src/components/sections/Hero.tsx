import { GradientButton } from '@/components/ui/GradientButton';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Hero() {
  return (
    <section className="relative flex min-h-dvh items-center justify-center overflow-hidden bg-grid">
      {/* 背景グラデーションオーブ */}
      <div className="pointer-events-none absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 py-32 text-center">
        <ScrollFadeIn>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-400">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500 animate-pulse-dot" />
            AI-Powered Business Solutions
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={100}>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            AIで、ビジネスを
            <br />
            <span className="gradient-text">次のステージへ。</span>
          </h1>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
            HP制作・AIツール開発・AI研修。
            <br className="hidden sm:block" />
            最新のAI技術で、貴社のビジネスを加速させます。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={300}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <GradientButton href="#contact" size="lg">
              無料相談はこちら
            </GradientButton>
            <a
              href="#services"
              className="inline-block rounded-lg border border-white/20 px-8 py-4 text-lg font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
            >
              サービス詳細
            </a>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
