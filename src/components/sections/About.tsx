import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function About() {
  return (
    <section id="about" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFadeIn>
          <p className="font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] text-ink-muted">
            ABOUT
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            NEXIAについて
          </h2>
          <div className="section-divider mt-6" />
        </ScrollFadeIn>

        <div className="mt-16 grid items-start gap-16 md:grid-cols-5">
          <ScrollFadeIn>
            <div className="md:col-span-3">
              <div className="space-y-6 text-base leading-[2] text-ink-muted">
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
            </div>
          </ScrollFadeIn>

          <ScrollFadeIn delay={200}>
            <div className="md:col-span-2">
              <div className="rounded-sm border border-border bg-card p-8">
                <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-sm font-medium tracking-wide text-ink">
                  基本情報
                </h3>
                <dl className="mt-6 space-y-5 text-sm">
                  <div className="border-b border-border pb-4">
                    <dt className="text-ink-muted">屋号</dt>
                    <dd className="mt-1 text-ink">NEXIA</dd>
                  </div>
                  <div className="border-b border-border pb-4">
                    <dt className="text-ink-muted">事業内容</dt>
                    <dd className="mt-1 text-ink">
                      Web制作 / AIツール開発 / 業務自動化 / AI研修
                    </dd>
                  </div>
                  <div className="border-b border-border pb-4">
                    <dt className="text-ink-muted">対応エリア</dt>
                    <dd className="mt-1 text-ink">
                      全国対応（フルリモート）
                    </dd>
                  </div>
                  <div>
                    <dt className="text-ink-muted">連絡方法</dt>
                    <dd className="mt-1 text-ink">
                      メール / Zoom / Google Meet
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}
