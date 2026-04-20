import type { Metadata } from 'next';
import styles from '../../privacy/legal.module.css';

export const metadata: Metadata = {
  title: '特定商取引法に基づく表記 · NEXIA',
  description: 'NEXIAの販売条件、返品、お支払い方法等について',
};

// TODO(nexia): 販売価格・支払時期・返品条件は実サービス設計で確定後に差し替え
export default function CommercePage() {
  return (
    <article className={styles.page}>
      <div className="wrap">
        <div className={styles.header}>
          <div className={styles.tag}>LEGAL · 法令表記</div>
          <h1>特定商取引法に基づく表記</h1>
          <p className={styles.lead}>
            特定商取引に関する法律第11条に基づく表記です。
          </p>
        </div>

        <section className={styles.section}>
          <h2>販売事業者</h2>
          <p>株式会社NEXIA</p>
        </section>

        <section className={styles.section}>
          <h2>運営責任者</h2>
          <p>代表取締役 朝川 祐樹</p>
        </section>

        <section className={styles.section}>
          <h2>所在地</h2>
          <p>大阪府（契約時にご案内いたします）</p>
        </section>

        <section className={styles.section}>
          <h2>連絡先</h2>
          <p>
            メール: info@nexia-ai.jp
            <br />
            お問い合わせはメールにて受付しています。
          </p>
        </section>

        <section className={styles.section}>
          <h2>販売価格</h2>
          <p>各サービスの提案書・契約書に記載する金額（消費税別途）。受講人数・期間・カスタマイズ内容に応じて個別にお見積もりします。</p>
        </section>

        <section className={styles.section}>
          <h2>販売価格以外の必要料金</h2>
          <p>銀行振込の振込手数料（お客さまご負担）。</p>
        </section>

        <section className={styles.section}>
          <h2>代金の支払時期・方法</h2>
          <ul>
            <li>支払方法: 銀行振込</li>
            <li>支払時期: 契約書に定める期日（原則として請求書発行月の翌月末日）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>役務の提供時期</h2>
          <p>契約書で合意した開始日より提供します。研修は最短1日から受講可能です（助成金対象コースは10時間以上）。</p>
        </section>

        <section className={styles.section}>
          <h2>返品・キャンセルについて</h2>
          <p>役務提供開始前のキャンセルは個別契約に従います。提供開始後の返金は原則行いません。天災・疾病等のやむを得ない事情がある場合は個別にご相談ください。</p>
        </section>

        <section className={styles.section}>
          <h2>動作環境（オンライン研修）</h2>
          <ul>
            <li>ブラウザ: Google Chrome / Microsoft Edge / Safari 最新版</li>
            <li>通信環境: ビデオ会議に耐える安定した回線</li>
            <li>必要ツール: 受講時にご案内（Zoom等）</li>
          </ul>
        </section>

        <div className={styles.meta}>
          制定日: 2026年4月20日 / 最終改定日: 2026年4月20日
        </div>

        <a className={styles.back} href="/#company">
          ← 会社概要に戻る
        </a>
      </div>
    </article>
  );
}
