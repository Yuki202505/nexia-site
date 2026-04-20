import sec from './section.module.css';
import styles from './FAQ.module.css';

type QA = {
  q: string;
  a: string;
  open?: boolean;
  todo?: string;
};

const FAQS: QA[] = [
  {
    q: 'エンジニアでなくても受講できますか？',
    a: '受講者の約78%が非エンジニア職（営業・企画・バックオフィス）です。プログラミング知識は不要で、ビジネス文脈からAIに入れる教材設計になっています。',
    open: true,
  },
  {
    q: '社内の機密情報を扱いながら演習できますか？',
    a: '法人契約の場合、閉域環境・SSO連携・監査ログを標準装備した専用インスタンスを提供します。データ持ち出しと学習利用の遮断は契約で明示します。',
  },
  {
    q: '助成金の対象になりますか？',
    a: '「人材開発支援助成金」等の対象になるケースが多く、申請サポートも提携社労士経由で無償提供しています。業種・従業員数で条件が異なるため個別にご確認ください。',
  },
  {
    q: '1人からでも参加できますか？',
    a: '個人受講プランをご用意しています。T.04は5名以上からですが、T.01〜T.03はお1人から参加いただけます。',
  },
  {
    q: '仕事をしながらついていけますか？',
    a: '週3〜5時間の稼働を想定した設計です。動画視聴はすべて非同期、ライブセッションは複数時間帯から選択でき録画も可。高い完走率を維持しています。',
  },
  {
    q: '修了後のフォローはありますか？',
    a: '修了後は、学んだ内容をそのまま業務で回せる状態でお戻しする設計です。コミュニティ運営や最新モデル追従といった継続課金サービスは付けず、その分を受講料の低価格化に還元しています。教材・演習環境は修了後も参照いただけます。',
  },
];

export function FAQ() {
  return (
    <section id="faq" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>04</span>
            <span>FAQ</span>
            <span className={sec.jaSub}>よくある質問</span>
          </div>
          <h2>よくあるご質問。</h2>
          <div className={sec.metaRight}>
            記載のない内容は、無料相談でお気軽にご確認ください。
          </div>
        </div>

        <div className={styles.term}>
          <div className={styles.termHead}>
            <span className={styles.dots} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
            nexia@faq:~ $ cat questions.md
          </div>
          {FAQS.map((item, i) => (
            <div key={i} className={styles.q}>
              <details {...(item.open ? { open: true } : {})}>
                <summary>
                  <span className={styles.prompt}>
                    Q{String(i + 1).padStart(2, '0')} &gt;
                  </span>
                  <span className={styles.qtext}>{item.q}</span>
                  <span className={styles.plus}>+</span>
                </summary>
                <div className={styles.body}>{item.a}</div>
              </details>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
