import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-5">
          <ScrollFadeIn>
            <div className="md:col-span-3">
              <h2 className="text-3xl font-bold sm:text-4xl">
                NEXIAについて
              </h2>
              <div className="mt-8 space-y-5 text-gray-400 leading-relaxed">
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
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-bold text-white">基本情報</h3>
                <dl className="mt-5 space-y-4 text-sm">
                  <div>
                    <dt className="text-gray-500">屋号</dt>
                    <dd className="mt-0.5 text-gray-200">NEXIA</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">事業内容</dt>
                    <dd className="mt-0.5 text-gray-200">
                      Web制作 / AIツール開発 / 業務自動化 / AI研修
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">対応エリア</dt>
                    <dd className="mt-0.5 text-gray-200">
                      全国対応（フルリモート）
                    </dd>
                  </div>
                  <div>
                    <dt className="text-gray-500">連絡方法</dt>
                    <dd className="mt-0.5 text-gray-200">
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
