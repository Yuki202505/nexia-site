import sec from './section.module.css';
import styles from './CompanyInfo.module.css';

type Row = { k: string; v: React.ReactNode; sub?: string };

const COMPANY_ROWS: Row[] = [
  { k: '法人名', v: '株式会社NEXIA' },
  { k: '所在地', v: '大阪府', sub: '※ 詳細は契約時にご案内' },
  { k: '事業内容', v: 'AI研修 / ホームページ制作 / AIツール開発 / AIマーケティング' },
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
        </div>
      </div>
    </section>
  );
}
