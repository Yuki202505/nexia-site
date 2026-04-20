import sec from './section.module.css';
import styles from './Programs.module.css';

type Program = {
  id: string;
  name: string;
  sub: string;
  desc: string;
};

const PROGRAMS: Program[] = [
  {
    id: 'T.01',
    name: 'AI基礎ブートキャンプ',
    sub: '// foundation — 入門',
    desc: '生成AIの仕組みと業務接続の基本。非エンジニアのための入門。',
  },
  {
    id: 'T.02',
    name: '業務適用・ワークフロー設計',
    sub: '// applied — 実務',
    desc: '自分の業務をAIワークフロー化。プロンプト・ツール連携・評価まで。',
  },
  {
    id: 'T.03',
    name: 'AIリーダーシップ養成',
    sub: '// leader — 幹部向け',
    desc: '投資判断・リスクマネジメント・組織設計を扱うエグゼクティブ向け。',
  },
  {
    id: 'T.04',
    name: '全社展開カスタム',
    sub: '// enterprise — 法人',
    desc: '診断〜階層別カリキュラム〜運用伴走〜効果測定を一気通貫で設計。',
  },
];

export function Programs() {
  return (
    <section id="programs" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>03</span>
            <span>Programs</span>
            <span className={sec.jaSub}>プログラム一覧</span>
          </div>
          <h2>
            役割と習熟度から逆算する、
            <br />
            4つの学習トラック。
          </h2>
          <div className={sec.metaRight}>
            初学者から部門リーダー、全社展開まで。適切な深度と期間でご提供します。
          </div>
        </div>

        <div className={styles.table}>
          <div className={[styles.row, styles.head].join(' ')}>
            <div>記号</div>
            <div>プログラム</div>
            <div>得られるもの</div>
            <div>申込</div>
          </div>
          {PROGRAMS.map((p) => (
            <div key={p.id} className={styles.row}>
              <div className={styles.id}>{p.id}</div>
              <div className={styles.name}>
                <b>{p.name}</b>
                <span>{p.sub}</span>
              </div>
              <div className={styles.desc}>{p.desc}</div>
              <div className={styles.apply}>
                <a href="#contact">申し込む →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
