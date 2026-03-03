import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const categories = [
  {
    title: 'Web制作・開発',
    description:
      'コーポレートサイトからWebアプリまで。デザイン・実装・公開後の運用まで一貫して対応します。',
    items: [
      'コーポレートサイト制作',
      'ランディングページ（LP）制作',
      'ECサイト構築',
      'Webアプリケーション開発',
      'CMS導入・カスタマイズ',
      'サイトリニューアル・改善',
      'SEO対策・アクセス解析',
      'サーバー・ドメイン管理、保守運用',
    ],
  },
  {
    title: 'AI・自動化ツール開発',
    description:
      '手作業で時間がかかっている業務を、ツールで自動化。既存の業務フローに合わせたオーダーメイド開発を行います。',
    items: [
      '業務自動化ツール（RPA・スクレイピング・データ処理）',
      'AIチャットボット開発・導入',
      'データ分析・可視化ダッシュボード',
      '社内ナレッジ検索・FAQ自動応答システム',
      'ドキュメント・レポート自動生成',
      'API開発・外部サービス連携',
      'AI搭載Webアプリケーション開発',
      'スプレッドシート・Notion連携ツール',
    ],
  },
  {
    title: 'マーケティング・営業支援',
    description:
      '集客からリード獲得、顧客管理まで。テクノロジーを活用したマーケティングの仕組みづくりを支援します。',
    items: [
      'SNS運用自動化・投稿管理',
      'コンテンツ生成支援（記事・メルマガ・LP）',
      'リード獲得・営業リスト作成ツール',
      'メール配信・ステップメール自動化',
      'CRM・顧客管理システム構築',
      '市場調査・競合分析の自動化',
      '広告運用レポートの自動生成',
    ],
  },
  {
    title: 'AI研修・コンサルティング',
    description:
      '「AIを導入したいけど、何から始めればいいかわからない」という企業向けに、実践的な研修と導入支援を行います。',
    items: [
      'ChatGPT / Claude 業務活用研修',
      'プロンプトエンジニアリング講座',
      '部署別AI活用ワークショップ',
      'AI導入戦略のコンサルティング',
      '業務フロー分析・自動化提案',
      'ツール選定・PoC（概念実証）支援',
      'DX推進の伴走サポート',
    ],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFadeIn>
          <p className="font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] text-ink-muted">
            SERVICES
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            対応できること
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 max-w-xl text-base leading-[2] text-ink-muted">
            「こういうの作れますか？」と聞いていただければ、
            大抵のことは対応できます。以下は一例です。
          </p>
        </ScrollFadeIn>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {categories.map((cat, i) => (
            <ScrollFadeIn key={cat.title} delay={i * 100}>
              <div className="h-full rounded-sm border border-border bg-card p-8 transition-colors hover:border-border-hover">
                <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-lg font-medium text-ink">
                  {cat.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {cat.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {cat.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-ink-light"
                    >
                      <span className="mt-2 block h-px w-3 shrink-0 bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
