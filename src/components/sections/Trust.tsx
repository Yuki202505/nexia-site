import sec from './section.module.css';
import styles from './Trust.module.css';

const COMMITMENTS = [
  {
    num: '01',
    title: '初回ヒアリングは無料',
    body: '60分のヒアリングでAI活用の現状を把握し、最適なプログラムをご提案します。',
  },
  {
    num: '02',
    title: '助成金申請を代行',
    body: '人材開発支援助成金の要件確認から書類作成まで、提携社労士がサポート。研修コストを最大75%削減。',
  },
  {
    num: '03',
    title: '修了後30日間のサポート',
    body: '研修が終わっても、AIメンターへの質問とフォローアップセッションを提供します。',
  },
];

const TECH_STACK = ['ChatGPT', 'Claude', 'Gemini', 'Copilot', 'Manas'];

export function Trust() {
  return (
    <section id="trust" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>05</span>
            <span>Commitment</span>
            <span className={sec.jaSub}>NEXIAの約束</span>
          </div>
          <h2>
            研修を売って終わりに、
            <br />
            <span style={{ color: 'var(--color-accent)' }}>しません。</span>
          </h2>
          <div className={sec.metaRight}>
            私たちは研修会社ではなく、AIの実装現場で手を動かし続けている会社です。
          </div>
        </div>

        <div className={styles.grid}>
          {COMMITMENTS.map((c) => (
            <div key={c.num} className={styles.card}>
              <span className={styles.num}>{c.num}</span>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
            </div>
          ))}
        </div>

        <div className={styles.techBlock}>
          <div className={styles.techLabel}>SUPPORTED PLATFORMS</div>
          <div className={styles.techList}>
            {TECH_STACK.map((t) => (
              <span key={t} className={styles.techItem}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
