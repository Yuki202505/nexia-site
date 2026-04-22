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
    a: 'はい。専門用語はかみくだいて解説し、基礎から段階的に学ぶカリキュラム設計です。営業・企画・バックオフィスなど非エンジニア職の方を中心に受講いただけます。',
    open: true,
  },
  {
    q: '社員のAIリテラシーにバラつきがありますが、対応できますか？',
    a: 'はい。事前にヒアリング・簡易診断を行い、入門／実務／リーダーの階層別にカリキュラムを組みます。同じ日程内で並行実施することも可能です。',
  },
  {
    q: '自社の業務に合わせてカスタマイズできますか？',
    a: 'はい。営業・バックオフィス・制作など職種ごとのユースケースを事前にヒアリングし、演習課題を御社業務に近い形へ調整します。',
  },
  {
    q: '社内の機密情報を扱いながら演習できますか？',
    a: '法人契約の場合、閉域環境・SSO連携・監査ログを標準装備した専用インスタンスを提供します。データ持ち出しと学習利用の遮断は契約で明示します。',
  },
  {
    q: '助成金の対象になりますか？',
    a: '「人材開発支援助成金」等の対象になるケースが多く、申請サポートも提携社労士経由でご案内しています。業種・従業員数で条件が異なるため個別にご確認ください。',
  },
  {
    q: '1人からでも参加できますか？',
    a: '個人受講プランをご用意しています。T.04（全社展開カスタム）は5名以上からですが、T.01〜T.03はお1人から参加いただけます。',
  },
  {
    q: '仕事をしながらついていけますか？',
    a: '最短1日から受講可能で、業務を止めずに最短距離で身につく設計です。長期コースは週数時間の稼働を想定しています。',
  },
  {
    q: '研修の費用はどれくらいですか？',
    a: 'プログラムと受講人数によって異なります。人材開発支援助成金の活用で、実質負担を最大75%削減できるケースもあります。詳細はお問い合わせフォームよりご確認ください。',
  },
  {
    q: 'オンラインでも受講できますか？',
    a: 'はい。全プログラムがオンライン・対面いずれも全国対応です。',
  },
  {
    q: '研修後のフォローアップはありますか？',
    a: 'はい。修了後30日間はAIメンターへの質問が可能で、フォローアップセッションも実施します。また、社内展開キットを納品し、研修効果を組織全体に広げるサポートを行います。',
  },
];

export function FAQ() {
  return (
    <section id="faq" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>06</span>
            <span>FAQ</span>
            <span className={sec.jaSub}>よくある質問</span>
          </div>
          <h2>よくあるご質問。</h2>
          <div className={sec.metaRight}>
            記載のない内容は、お気軽にお問い合わせください。
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
