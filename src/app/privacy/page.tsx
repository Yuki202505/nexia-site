import type { Metadata } from 'next';
import styles from './legal.module.css';

export const metadata: Metadata = {
  title: 'プライバシーポリシー · NEXIA',
  description: 'NEXIAにおける個人情報の取扱いについて',
};

export default function PrivacyPage() {
  return (
    <article className={styles.page}>
      <div className="wrap">
        <div className={styles.header}>
          <div className={styles.tag}>LEGAL · 法令表記</div>
          <h1>プライバシーポリシー</h1>
          <p className={styles.lead}>
            株式会社NEXIA（以下「当社」といいます）は、お客さまの個人情報の重要性を認識し、個人情報の保護に関する法律（以下「個人情報保護法」）を遵守するとともに、以下のプライバシーポリシーに従い、個人情報を適切に取扱います。
          </p>
        </div>

        <section className={styles.section}>
          <h2>1. 個人情報の取得</h2>
          <p>当社は、お問い合わせフォーム・研修申込・商談を通じて、氏名・会社名・メールアドレス・電話番号・ご相談内容などを取得することがあります。</p>
        </section>

        <section className={styles.section}>
          <h2>2. 利用目的</h2>
          <ul>
            <li>お問い合わせへの回答、資料送付</li>
            <li>研修・サービスのご案内および運営</li>
            <li>契約履行および請求・決済業務</li>
            <li>新サービス・改善に向けた統計的分析（個人を特定しない形に限る）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>3. 第三者提供</h2>
          <p>当社は、法令に基づく場合または以下のいずれかに該当する場合を除き、お客さまの同意なく個人情報を第三者に提供しません。</p>
          <ul>
            <li>お客さまの生命、身体または財産の保護のために必要がある場合</li>
            <li>業務委託先に必要な範囲で提供する場合（委託先には適切な監督を行います）</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>4. 安全管理措置</h2>
          <p>当社は、個人情報への不正アクセス、紛失、改ざん、漏洩などを防止するため、合理的な技術的・組織的安全管理措置を講じます。</p>
        </section>

        <section className={styles.section}>
          <h2>5. 開示・訂正・削除等の請求</h2>
          <p>ご自身の個人情報の開示・訂正・削除・利用停止をご希望の場合は、下記の窓口までご連絡ください。本人確認のうえ、合理的な範囲で対応いたします。</p>
        </section>

        <section className={styles.section}>
          <h2>6. Cookie等の利用</h2>
          <p>当社ウェブサイトでは、サービス改善とアクセス解析のためCookieを利用する場合があります。取得した情報は個人を特定しない統計情報として扱います。ブラウザ設定によりCookieを無効化できますが、一部機能がご利用いただけない場合があります。</p>
        </section>

        <section className={styles.section}>
          <h2>7. 改定</h2>
          <p>本ポリシーの内容は、法令改正や事業内容の変更に伴い、予告なく改定することがあります。改定後の内容は本ページに掲載した時点から効力を生じます。</p>
        </section>

        <section className={styles.section}>
          <h2>8. お問い合わせ窓口</h2>
          <p>
            株式会社NEXIA 個人情報保護担当
            <br />
            メール: info@nexia-ai.jp
          </p>
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
