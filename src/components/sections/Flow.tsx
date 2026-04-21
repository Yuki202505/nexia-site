import sec from './section.module.css';
import styles from './Flow.module.css';

type Step = {
  num: string;
  title: string;
  body: string;
  duration: string;
};

const STEPS: Step[] = [
  {
    num: '01',
    title: '無料相談・ヒアリング',
    body: '現在のAI活用状況・課題・研修の目的をヒアリング。最適なプログラムを一緒に設計します。',
    duration: '60分・無料',
  },
  {
    num: '02',
    title: 'ご提案・お見積り',
    body: 'ヒアリング内容をもとに、カリキュラム・期間・費用を明示したご提案書をお送りします。助成金の適用可否もこの段階で確認。',
    duration: '3営業日以内',
  },
  {
    num: '03',
    title: 'カリキュラム確定・環境準備',
    body: '演習環境のセットアップ、教材のカスタマイズ、受講者へのご案内を準備します。',
    duration: '1〜2週間',
  },
  {
    num: '04',
    title: '研修実施',
    body: 'AIメンター常駐 + 人間講師による研修を実施。進捗レポートをリアルタイムで共有します。',
    duration: 'プログラムに準拠',
  },
  {
    num: '05',
    title: 'フォローアップ・社内展開',
    body: '修了後30日間のAIメンターサポート、社内展開キットの納品、効果測定レポートを提供します。',
    duration: '修了後30日間',
  },
];

export function Flow() {
  return (
    <section id="flow" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>04</span>
            <span>Flow</span>
            <span className={sec.jaSub}>導入の流れ</span>
          </div>
          <h2>
            ご相談から研修開始まで、
            <br />
            <span style={{ color: 'var(--color-accent)' }}>5つのステップ</span>で。
          </h2>
          <div className={sec.metaRight}>
            初回のご相談は無料。最短2週間で研修を開始できます。
          </div>
        </div>

        <div className={styles.timeline}>
          {STEPS.map((step, i) => (
            <div key={step.num} className={styles.step}>
              <div className={styles.stepNum}>{step.num}</div>
              <div className={styles.stepLine} aria-hidden="true">
                <span className={styles.dot} />
                {i < STEPS.length - 1 && <span className={styles.connector} />}
              </div>
              <div className={styles.stepContent}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <span className={styles.stepDuration}>{step.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
