import sec from './section.module.css';
import styles from './CompanyInfo.module.css';

type Row = { k: string; v: React.ReactNode; sub?: string };

const COMPANY_ROWS: Row[] = [
  { k: '法人名', v: '株式会社NEXIA' },
  { k: '所在地', v: '大阪府', sub: '※ 詳細は契約時にご案内' },
  { k: '事業内容', v: 'AI研修 / ホームページ制作 / AIツール開発 / AIマーケティング' },
];

const PRINCIPLES = [
  {
    num: '01',
    title: '基礎から丁寧に',
    body: '流行り廃りで使い方を追わず、仕組みから理解できるように設計します。',
  },
  {
    num: '02',
    title: '実装まで伴走',
    body: '研修で終わらず、Web制作・ツール開発・マーケまで内製で引き取れます。',
  },
  {
    num: '03',
    title: '小さく・素早く',
    body: '最短1日から始められる設計。意思決定と実装のサイクルを短く保ちます。',
  },
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
          <div className={styles.left}>
            <div className={styles.markRow}>
              <span className={styles.mark} aria-hidden="true" />
              <span className={styles.markLabel}>NEXIA / Principles</span>
            </div>
            <h3 className={styles.leftTitle}>
              AIを現場で動かす、<br />
              小さくて速い会社。
            </h3>
            <p className={styles.leadPara}>
              研修だけを売る会社ではなく、Web制作・AIツール・マーケを自分たちで手を動かしながら続けています。現場で動いているからこそ、研修で話せるネタが増える。その循環を大事にしています。
            </p>

            <ul className={styles.principles}>
              {PRINCIPLES.map((p) => (
                <li key={p.num}>
                  <span className={styles.pNum}>{p.num}</span>
                  <div>
                    <div className={styles.pTitle}>{p.title}</div>
                    <div className={styles.pBody}>{p.body}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

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
