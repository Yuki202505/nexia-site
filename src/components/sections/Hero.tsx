import styles from './Hero.module.css';

/*
 * Hero section — variant-b Data Grid.
 * 左カラム: eyebrow + h1 + lead + 2 CTA / 右カラム: AI.MARKET ライブパネル。
 */

// TODO(nexia): market-panel の数値（54.7% / 64.4% / 92% / 40-60 min）はリリース前に最新値で再確認。
// TODO(nexia): data-refresh — 四半期ごとに出典値を更新
const MARKET_ROWS: {
  key: string;
  value: string;
  unit?: string;
  good?: boolean;
}[] = [
  { key: 'chatgpt_weekly_users', value: '9.0', unit: '億人' },
  { key: 'jp_personal_usage', value: '54.7%', good: true },
  { key: 'jp_corp_adoption', value: '64.4%' },
  { key: 'fortune500_users', value: '92%' },
  { key: 'time_saved_per_day', value: '40-60 min', good: true },
];

const BAR_COUNT = 12;

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className="wrap">
        <div className={styles.grid}>
          <div>
            <span className={styles.eyebrow}>
              <span className={styles.dot} aria-hidden="true" />
              2026 SPRING COHORT · 受付中
            </span>
            <h1 className={styles.h1}>
              AIを、<span className={styles.accent}>道具</span>から
              <br />
              <span className={styles.accent}>同僚</span>にする。
              <span className={styles.en}>Engineering Your Workflow With AI</span>
            </h1>
            <p className={styles.lead}>
              生成AI・エージェント・機械学習を、ビジネスパーソンのための語彙で解体する。基礎から段階的に積み上げ、短期間で・低価格で提供する研修プログラム。
            </p>
            <div className={styles.ctas}>
              <a className={styles.cta} href="#contact">
                無料相談を予約 →
              </a>
              <a className={styles.ctaGhost} href="#programs">
                /programs
              </a>
            </div>
          </div>

          <aside className={styles.panel}>
            <div className={styles.panelHead}>
              <span>AI.MARKET ・ 市場データ</span>
              <span className={styles.live}>LIVE</span>
            </div>
            {MARKET_ROWS.map((row) => (
              <div key={row.key} className={styles.panelRow}>
                <span>{row.key}</span>
                <b className={row.good ? styles.good : undefined}>
                  {row.value}
                  {row.unit && (
                    <span className={styles.unit}>{row.unit}</span>
                  )}
                </b>
              </div>
            ))}
            <div className={styles.miniBars} aria-hidden="true">
              {Array.from({ length: BAR_COUNT }).map((_, i) => (
                <span
                  key={i}
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
            <div className={styles.source}>
              ※ 出典：OpenAI (2026.02) / ICT総研 / 総務省情報通信白書 / 日経BP調査
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
