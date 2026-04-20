import sec from './section.module.css';
import styles from './CompanyInfo.module.css';

type Row = { k: string; v: React.ReactNode; sub?: string };

// TODO(nexia): 実値の最終確認。登記情報・代表者・資本金は必ず自社確認。
const COMPANY_ROWS: Row[] = [
  { k: '法人名', v: '株式会社NEXIA' },
  { k: '代表者', v: '朝川 祐樹', sub: '代表取締役' },
  { k: '所在地', v: '大阪府', sub: '※ 詳細は契約時にご案内' },
  { k: '事業内容', v: 'AI研修 / ホームページ制作 / AIツール開発 / AIマーケティング' },
  { k: '設立', v: '2024年' },
  { k: 'お問い合わせ', v: 'info@nexia-ai.jp' },
];

const LEGAL_LINKS = [
  { label: 'プライバシーポリシー', href: '/privacy', note: '個人情報の取扱いについて' },
  { label: '特定商取引法に基づく表記', href: '/legal/commerce', note: '販売条件・返品等について' },
];

export function CompanyInfo() {
  return (
    <section id="company" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>06</span>
            <span>Company</span>
            <span className={sec.jaSub}>会社概要</span>
          </div>
          <h2>
            NEXIAについて。
          </h2>
          <div className={sec.metaRight}>
            小さく・素早く・真面目に。AIの実装現場を、会社として支えます。
          </div>
        </div>

        <div className={styles.block}>
          <table className={styles.table}>
            <tbody>
              {COMPANY_ROWS.map((r) => (
                <tr key={r.k}>
                  <th>{r.k}</th>
                  <td>
                    <div className={styles.value}>{r.v}</div>
                    {r.sub && <div className={styles.sub}>{r.sub}</div>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.legal}>
            <div className={styles.legalHead}>法令表記</div>
            <ul>
              {LEGAL_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>
                    <span className={styles.legalLabel}>{l.label} →</span>
                    <span className={styles.legalNote}>{l.note}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
