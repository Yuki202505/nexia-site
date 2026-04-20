import styles from './NexiaFooter.module.css';

const COLS = [
  {
    title: 'SERVICES 事業領域',
    items: [
      { label: 'AI研修', href: '#features' },
      { label: 'ホームページ制作', href: '#services' },
      { label: 'AIツール開発', href: '#services' },
      { label: 'AIマーケティング', href: '#services' },
    ],
  },
  {
    title: 'COMPANY 会社情報',
    items: [
      { label: '会社概要', href: '#company' },
      { label: 'お問い合わせ', href: '#contact' },
    ],
  },
  {
    title: 'LEGAL 法令表記',
    items: [
      { label: 'プライバシーポリシー', href: '/privacy' },
      { label: '特定商取引法に基づく表記', href: '/legal/commerce' },
    ],
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
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
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
