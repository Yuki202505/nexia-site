import styles from './NexiaNav.module.css';

const LINKS = [
  { href: '#services', label: '事業領域' },
  { href: '#features', label: 'AI研修' },
  { href: '#flow', label: '導入の流れ' },
  { href: '#faq', label: 'よくある質問' },
  { href: '#company', label: '会社概要' },
  { href: '#contact', label: 'お問い合わせ' },
];

export function NexiaNav() {
  return (
    <nav className={styles.nav}>
      <a className={styles.logo} href="#top">
        <span className={styles.mark} aria-hidden="true" />
        <span className={styles.logoText}>
          NEXIA
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
