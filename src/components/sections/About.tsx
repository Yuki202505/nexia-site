import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function About() {
  return (
    <section id="about" className="bg-dark py-24 text-white md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <ScrollFadeIn>
          <p className="text-[13px] tracking-widest text-dark-muted">
            ABOUT
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            NEXIAについて
          </h2>
        </ScrollFadeIn>

        <div className="mt-16 grid gap-16 md:grid-cols-2">
          <ScrollFadeIn delay={100}>
            <div className="space-y-6 text-[15px] leading-[1.9] text-dark-muted">
              <p>
                NEXIAは、Web制作とAI技術を軸に、企業の業務改善・デジタル化を支援しています。
              </p>
              <p>
                大手企業だけが使えるような技術を、中小企業や個人事業主にも届けたい。
                そんな想いで、ひとつひとつの案件に向き合っています。
              </p>
              <p>
                「こんなことできる？」というご相談から始まることがほとんどです。
                まずはお気軽にお問い合わせください。
              </p>
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <dl className="divide-y divide-white/10">
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-0">
                <dt className="w-32 shrink-0 text-sm text-dark-muted">屋号</dt>
                <dd className="text-sm text-white">NEXIA</dd>
              </div>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-0">
                <dt className="w-32 shrink-0 text-sm text-dark-muted">事業内容</dt>
                <dd className="text-sm text-white">
                  Web制作 / AIツール開発 / 業務自動化 / AI研修
                </dd>
              </div>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-0">
                <dt className="w-32 shrink-0 text-sm text-dark-muted">対応エリア</dt>
                <dd className="text-sm text-white">全国対応（フルリモート）</dd>
              </div>
              <div className="flex flex-col gap-1 py-5 sm:flex-row sm:gap-0">
                <dt className="w-32 shrink-0 text-sm text-dark-muted">連絡方法</dt>
                <dd className="text-sm text-white">メール / Zoom / Google Meet</dd>
              </div>
            </dl>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
