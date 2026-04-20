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

// TODO(nexia): F.02 の本文は variant-b 原稿の「短くで08日から。」が破綻していたため暫定修正。
// 期間は実コースに合わせて要調整。
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
    title: '短期間で完了',
    body: '最短8日から。忙しい業務を止めずに、最短距離で身につくカリキュラム。',
    variant: 'circ',
    todo: 'F.02: 最短日数の実値を要確認',
  },
  {
    num: 'F.03',
    title: '業界最安水準の価格',
    body: '同等品質の研修の約1/2価格。中小企業・個人受講も無理なく。',
    variant: 'diag',
  },
  {
    num: 'F.04',
    title: 'AIメンター同伴',
    body: '24/7即応＋人間講師1on1。',
    variant: 'line',
  },
  {
    num: 'F.05',
    title: '社内展開キット',
    body: '修了後、社内勉強会を主催できる教材一式をお渡しします。',
    variant: 'diag',
    wide: true,
  },
  {
    num: 'F.06',
    title: 'セキュアな演習環境',
    body: 'SSO・監査ログ・閉域VPN。',
    variant: 'b',
  },
  {
    num: 'F.07',
    title: '業界特化トラック',
    body: '職種別ユースケースから逆算。',
    variant: 'circ',
  },
  {
    num: 'F.08',
    title: '助成金申請サポート',
    body: '人材開発支援助成金対応。',
    variant: 'line',
  },
];

export function Features() {
  return (
    <section id="features" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>01</span>
            <span>Why Nexia</span>
            <span className={sec.jaSub}>NEXIAが選ばれる理由</span>
          </div>
          <h2>
            AIを道具から<span className="accent" style={{ color: 'var(--color-accent)' }}>同僚</span>にするための、
            <br />
            基礎からの学び方。
          </h2>
          <div className={sec.metaRight}>
            基礎を丁寧に、その上で実務へ。
            <br />
            短期間・低価格で、趣旨に絞ったカリキュラム。
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
