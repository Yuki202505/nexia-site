import sec from './section.module.css';
import styles from './Services.module.css';

type Service = {
  id: string;
  title: string;
  tag: string;
  body: string;
  href?: string;
  cta?: string;
};

const SERVICES: Service[] = [
  {
    id: 'S.01',
    title: 'AI研修',
    tag: '// training — 企業向けAI研修',
    body: '生成AIの仕組みから業務応用まで、基礎を飛ばさず段階的に。最短1日〜、助成金活用で最大75%OFF。AIメンターと人間講師の二重サポートで定着率を高めます。',
    href: '#features',
    cta: 'AI研修の詳細 →',
  },
  {
    id: 'S.02',
    title: 'ホームページ制作',
    tag: '// web — コーポレート・LP',
    body: 'ブランドの空気をコードに変換する。デザインと実装を一体で設計するモダンなサイト構築。',
  },
  {
    id: 'S.03',
    title: 'AIツール開発',
    tag: '// product — 自動化・業務効率化',
    body: '人がやらなくていい仕事を、AIエージェント・自動化で置き換える。業務プロセスに沿った開発。',
  },
  {
    id: 'S.04',
    title: 'AIマーケティング',
    tag: '// growth — 集客・広告最適化',
    body: '勘と経験をデータとAIに置き換える。広告運用・コンテンツ制作・効果測定までを一気通貫で。',
  },
];

export function Services() {
  return (
    <section id="services" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>01</span>
            <span>Services</span>
            <span className={sec.jaSub}>事業領域</span>
          </div>
          <h2>
            AIの導入から運用まで、
            <br />
            <span style={{ color: 'var(--color-accent)' }}>4つの領域</span>でご支援します。
          </h2>
          <div className={sec.metaRight}>
            研修・Web制作・ツール開発・マーケティング。すべて内製で、一気通貫で伴走できます。
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div key={s.id} className={styles.card}>
              <div className={styles.cardHead}>
                <span className={styles.cardId}>{s.id}</span>
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <div className={styles.cardTag}>{s.tag}</div>
              <p className={styles.cardBody}>{s.body}</p>
              {s.href && (
                <a className={styles.cardCta} href={s.href}>
                  {s.cta}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
