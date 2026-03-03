import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const stats = [
  { value: 'AI×Web', label: '専門領域' },
  { value: '最短3日', label: '納品スピード' },
  { value: '100%', label: 'リモート対応' },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 md:grid-cols-2">
          {/* 左: テキスト */}
          <ScrollFadeIn>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                About
              </p>
              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                <span className="gradient-text">NEXIA</span>について
              </h2>
              <p className="mt-6 leading-relaxed text-gray-400">
                NEXIAは、最新のAI技術を活用し、企業のデジタルトランスフォーメーションを支援するテクノロジーカンパニーです。
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                「テクノロジーの力で、すべてのビジネスを進化させる」をミッションに、
                HP制作からAIツール開発、社員研修まで、お客様のニーズに合わせた最適なソリューションを提供します。
              </p>
              <p className="mt-4 leading-relaxed text-gray-400">
                大手テック企業と同等のAI技術を、中小企業にも手の届く価格でお届けします。
              </p>
            </div>
          </ScrollFadeIn>

          {/* 右: 数値カード */}
          <ScrollFadeIn delay={200}>
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-1 lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
