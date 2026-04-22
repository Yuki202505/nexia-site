import styles from './Hero.module.css';

/*
 * Hero section — variant-b Data Grid.
 * 左カラム: eyebrow + h1 + lead + 2 CTA / 右カラム: AI.MARKET ライブパネル。
 */

// TODO(nexia): 公開統計。四半期ごとに最新値へ更新すること（出典は下部に併記）。
const MARKET_ROWS: {
  key: string;
  value: string;
  unit?: string;
  good?: boolean;
}[] = [
  { key: 'chatgpt_weekly_users', value: '9.0', unit: '億人' },
  { key: 'gemini_monthly_users', value: '7.5', unit: '億人', good: true },
  { key: 'claude_monthly_users', value: '2,628', unit: '万人' },
  { key: 'ai_search_share', value: '60.4%' },
  { key: 'global_ai_users', value: '10億+', good: true },
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
              NEXIA · AI × 実務支援
            </span>
            <h1 className={styles.h1}>
              AIを、<span className={styles.accent}>道具</span>から
              <br />
              <span className={styles.accent}>同僚</span>にする。
              <span className={styles.en}>Engineering Your Workflow With AI</span>
            </h1>
            <p className={styles.lead}>
              研修でAIを理解し、ツール開発で業務を自動化し、マーケティングで成果を上げ、Webで届ける。AIの導入から運用まで、4つの事業領域で一気通貫に伴走します。
            </p>
            <div className={styles.ctas}>
              <a className={styles.cta} href="#contact">
                無料相談を予約 →
              </a>
              <a className={styles.ctaGhost} href="#services">
                4つの事業を見る →
              </a>
            </div>
          </div>

          <aside className={styles.panel}>
            <div className={styles.panelHead}>
              <span>AI.GLOBAL ・ 世界のAI利用状況</span>
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
              ※ 出典：OpenAI (2026.02) / Google Gemini (2025末) / Anthropic / DataReportal Digital 2026
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
