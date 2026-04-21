import sec from './section.module.css';
import styles from './Features.module.css';

type GboxVariant = 'b' | 'circ' | 'diag' | 'line';

type Cell = {
  num: string;
  title: string;
  body: string;
  variant?: GboxVariant;
  wide?: boolean;
  // TODO markers
  todo?: string;
};

const FEATURES: Cell[] = [
  {
    num: 'F.01',
    title: '基礎から段階的に',
    body: '「何が起きているのか」を順に理解し、仕組みを納得してから業務応用へ。土台を飛ばさず、確実に積み上げます。',
    variant: 'b',
    wide: true,
  },
  {
    num: 'F.02',
    title: '業界最安値水準',
    body: '研修内容に見合った価格設計。助成金の併用で実質負担を最大75%軽減できるケースがあります。',
    variant: 'circ',
  },
  {
    num: 'F.03',
    title: 'AIメンター同伴',
    body: '受講期間中、AIチャットメンターが24時間即応。加えて人間講師との1on1レビューで理解を深めます。',
    variant: 'diag',
  },
  {
    num: 'F.04',
    title: '業界特化トラック',
    body: '営業・人事・経理・マーケなど、職種別のAI活用ユースケースをヒアリングし、すぐ使える演習を設計します。',
    variant: 'line',
    wide: true,
  },
  {
    num: 'F.05',
    title: '助成金申請サポート',
    body: '人材開発支援助成金の対象要件を確認し、提携社労士が申請書類の作成を代行します。',
    variant: 'b',
  },
];

export function Features() {
  return (
    <section id="features" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>02</span>
            <span>AI Training</span>
            <span className={sec.jaSub}>AI研修の特徴</span>
          </div>
          <h2>
            仕組みを理解して、
            <br />
            <span style={{ color: 'var(--color-accent)' }}>実務で使える</span>研修を。
          </h2>
          <div className={sec.metaRight}>
            基礎を丁寧に積み上げてから、実務に応用する。
            <br />
            短期間で完了する、実践重視のカリキュラム。
          </div>
        </div>

        <div className={styles.blueprint}>
          {FEATURES.map((f) => {
            const variantClass = f.variant ? styles[f.variant] : '';
            return (
              <div
                key={f.num}
                className={[
                  styles.cell,
                  styles.b,
                  variantClass,
                  f.wide ? styles.wide : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                <div className={styles.cellTop}>
                  <div className={styles.cNum}>{f.num}</div>
                  <div className={styles.gbox} aria-hidden="true" />
                </div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
