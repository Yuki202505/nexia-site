import styles from './NexiaNav.module.css';

const LINKS = [
  { href: '#features', label: '特徴' },
  { href: '#programs', label: 'プログラム' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#contact', label: 'お問い合わせ' },
];

export function NexiaNav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="#top">
        <span className={styles.mark} aria-hidden="true" />
        <span className={styles.logoText}>
          NEXIA <span className={styles.logoSub}>AI TRAINING</span>
        </span>
      </a>
      <ul className={styles.links}>
        {LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href}>{l.label}</a>
          </li>
        ))}
      </ul>
      <a className={styles.cta} href="#contact">
        無料相談を予約 →
      </a>
    </nav>
  );
}
