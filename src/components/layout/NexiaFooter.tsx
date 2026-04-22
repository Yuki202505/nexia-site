import styles from './NexiaFooter.module.css';

const COLS = [
  {
    title: 'SERVICES 事業領域',
    items: [
      { label: 'AI研修', href: '#features' },
      { label: 'ホームページ制作', href: '#services' },
      { label: 'AIツール開発', href: '#services' },
      { label: 'AIマーケティング', href: '#services' },
      { label: '導入の流れ', href: '#flow' },
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
      { label: '利用規約', href: '/legal/terms' },
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
              <span>NEXIA</span>
            </a>
            <p className={styles.tagline}>
              AIの導入から運用まで、
              <br />
              研修・開発・マーケを一気通貫で。
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
          <span>
            <a href="/privacy">PRIVACY</a> · <a href="/legal/terms">TERMS</a> · <a href="/legal/commerce">COMMERCE</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
