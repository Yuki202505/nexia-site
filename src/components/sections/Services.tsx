import sec from './section.module.css';
import styles from './Services.module.css';

type Service = {
  id: string;
  title: string;
  tag: string;
  body: string;
  primary?: boolean;
};

const SERVICES: Service[] = [
  {
    id: 'S.01',
    title: 'AI研修',
    tag: '// flagship — 主力事業',
    body: '生成AIを道具から同僚にするための研修プログラム。基礎から段階的に、短期間・業界最安値水準でご提供します。',
    primary: true,
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
            4つの事業を柱に、
            <br />
            <span style={{ color: 'var(--color-accent)' }}>AI研修</span>を主軸にご提供します。
          </h2>
          <div className={sec.metaRight}>
            Web制作・AIツール・AIマーケを内製で抱え、研修後の実装まで一気通貫で伴走できます。
          </div>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((s) => (
            <div
              key={s.id}
              className={[styles.card, s.primary ? styles.primary : '']
                .filter(Boolean)
                .join(' ')}
            >
              <div className={styles.cardHead}>
                <span className={styles.cardId}>{s.id}</span>
                {s.primary && <span className={styles.badge}>FLAGSHIP</span>}
              </div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <div className={styles.cardTag}>{s.tag}</div>
              <p className={styles.cardBody}>{s.body}</p>
              {s.primary && (
                <a className={styles.cardCta} href="#features">
                  AI研修の詳細 →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
