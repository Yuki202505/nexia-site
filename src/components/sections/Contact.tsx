'use client';

import { useState } from 'react';
import sec from './section.module.css';
import styles from './Contact.module.css';


const PROGRAM_OPTIONS = [
  'T.01 / AI基礎ブートキャンプ',
  'T.02 / 業務適用',
  'T.03 / AIリーダーシップ',
  'T.04 / 全社展開カスタム',
  'HP制作 / AIツール / AIマーケ',
  'まずは相談したい',
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className={sec.block}>
      <div className="wrap">
        <div className={sec.secHead}>
          <div className={sec.secTag}>
            <span>SECTION</span>
            <span className={sec.secTagNum}>07</span>
            <span>Contact</span>
            <span className={sec.jaSub}>お問い合わせ</span>
          </div>
          <h2>
            最初の60分は、
            <br />
            無料で伴走します。
          </h2>
          <div className={sec.metaRight}>
            現状のAI活用度をヒアリングし、最適なプログラムをご提案します。
          </div>
        </div>

        <div className={styles.block}>
          <div className={styles.left}>
            <h3>
              準備は、
              <br />
              <span className={styles.accent}>問いを立てる</span>ところから。
            </h3>
            <p>
              「何から始めれば」という問いこそ、最初の学習材料です。相談のみ・資料送付のみも歓迎します。
            </p>
          </div>

          <form
            className={styles.right}
            action="https://formspree.io/f/xpwzgkvl"
            method="POST"
            onSubmit={() => setSubmitted(true)}
          >
            <div className={styles.field}>
              <label htmlFor="name">name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="山田 太郎"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="company">company</label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="株式会社サンプル"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@company.co.jp"
              />
            </div>
            <div className={styles.field}>
              <label htmlFor="program">program</label>
              <select id="program" name="program">
                {PROGRAM_OPTIONS.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">message</label>
              <textarea
                id="message"
                name="message"
                placeholder="受講人数、導入時期、背景など"
              />
            </div>
            <button type="submit" className={styles.submit}>
              {submitted ? 'SENT ✓' : '送信する →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
