import styles from './NexiaFooter.module.css';

const COLS = [
  {
    title: 'PROGRAMS プログラム',
    items: ['Foundation 入門', 'Applied 実務', 'Leader 幹部', 'Enterprise 法人'],
  },
  {
    title: 'COMPANY 会社情報',
    items: ['会社概要', 'チーム', 'ニュース', '採用情報'],
  },
  {
    title: 'RESOURCES 資料',
    items: ['導入事例', 'ブログ', 'ホワイトペーパー', '用語集'],
  },
];

export function NexiaFooter() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.foot}>
          <div className={styles.colBrand}>
            <a className={styles.logo} href="#top">
              <span className={styles.mark} aria-hidden="true" />
              <span>NEXIA AI TRAINING</span>
            </a>
            <p className={styles.tagline}>
              AIと人間の協働を設計する、
              <br />
              次世代の企業研修プログラム。
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className={styles.col}>
              <h4>{col.title}</h4>
              <ul>
                {col.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.footBar}>
          <span>© {new Date().getFullYear()} NEXIA, INC.</span>
          <span>PRIVACY · TERMS · SECURITY</span>
        </div>
      </div>
    </footer>
  );
}
