import type { Metadata } from 'next';
import styles from '../../privacy/legal.module.css';

export const metadata: Metadata = {
  title: '利用規約 · NEXIA',
  description: 'NEXIAのサービス利用規約',
};

export default function TermsPage() {
  return (
    <article className={styles.page}>
      <div className="wrap">
        <div className={styles.header}>
          <div className={styles.tag}>LEGAL · 法令表記</div>
          <h1>利用規約</h1>
          <p className={styles.lead}>
            本利用規約（以下「本規約」といいます）は、株式会社NEXIA（以下「当社」といいます）が提供するすべてのサービス（以下「本サービス」といいます）の利用条件を定めるものです。
          </p>
        </div>

        <section className={styles.section}>
          <h2>第1条（適用）</h2>
          <p>本規約は、お客さまと当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第2条（サービス内容）</h2>
          <p>当社は、AI研修・ホームページ制作・AIツール開発・AIマーケティングに関するサービスを提供します。サービスの詳細は個別の契約書または提案書にて定めます。</p>
        </section>

        <section className={styles.section}>
          <h2>第3条（契約の成立）</h2>
          <p>本サービスの利用契約は、お客さまが当社の提案内容に同意し、当社が承諾した時点で成立するものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第4条（料金および支払い）</h2>
          <p>本サービスの料金は、個別の見積書または契約書に定めるものとします。お客さまは、当社が定める期日までに所定の方法で支払いを行うものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第5条（知的財産権）</h2>
          <p>本サービスにおいて当社が提供する教材・資料・ソフトウェア等の知的財産権は、別段の定めがない限り当社に帰属します。お客さまは、契約の範囲内で利用できるものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第6条（禁止事項）</h2>
          <ul>
            <li>当社の教材・資料を無断で第三者に提供・公開する行為</li>
            <li>当社または第三者の権利を侵害する行為</li>
            <li>法令または公序良俗に反する行為</li>
            <li>その他、当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>第7条（免責事項）</h2>
          <p>当社は、本サービスの利用により生じたお客さまの損害について、当社の故意または重大な過失による場合を除き、一切の責任を負わないものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第8条（秘密保持）</h2>
          <p>当社およびお客さまは、本サービスの遂行にあたり知り得た相手方の秘密情報を、相手方の事前の書面による承諾なく第三者に開示・漏洩しないものとします。</p>
        </section>

        <section className={styles.section}>
          <h2>第9条（規約の変更）</h2>
          <p>当社は、必要と判断した場合には、お客さまに通知することなく本規約を変更することがあります。変更後の規約は、本ページに掲載した時点から効力を生じます。</p>
        </section>

        <section className={styles.section}>
          <h2>第10条（準拠法・管轄裁判所）</h2>
          <p>本規約の解釈にあたっては日本法を準拠法とし、紛争が生じた場合は大阪地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
        </section>

        <div className={styles.meta}>
          制定日: 2026年4月21日
        </div>

        <a className={styles.back} href="/#company">
          ← 会社概要に戻る
        </a>
      </div>
    </article>
  );
}
