'use client';

import { useState } from 'react';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <ScrollFadeIn>
          <p className="font-[family-name:var(--font-inter)] text-[13px] tracking-[0.2em] text-ink-muted">
            CONTACT
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-noto-serif-jp)] text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            お問い合わせ
          </h2>
          <div className="section-divider mt-6" />
          <p className="mt-6 max-w-xl text-base leading-[2] text-ink-muted">
            「こんなこと頼める？」くらいのご相談で大丈夫です。
            <br />
            通常1営業日以内にご返信します。
          </p>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          {submitted ? (
            <div className="mt-12 rounded-sm border border-border bg-card p-12 text-center">
              <h3 className="font-[family-name:var(--font-noto-serif-jp)] text-xl font-medium text-ink">
                お問い合わせありがとうございます
              </h3>
              <p className="mt-3 text-sm text-ink-muted">
                内容を確認の上、1営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xpwzgkvl"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="mt-12 max-w-2xl"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm text-ink-muted"
                  >
                    お名前 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-accent"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm text-ink-muted"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-accent"
                    placeholder="株式会社○○"
                  />
                </div>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="email"
                  className="block text-sm text-ink-muted"
                >
                  メールアドレス <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="taro@example.com"
                />
              </div>
              <div className="mt-8">
                <label
                  htmlFor="service"
                  className="block text-sm text-ink-muted"
                >
                  ご興味のあるサービス
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full border-b border-border bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-accent"
                >
                  <option value="">選択してください</option>
                  <option value="web">Web制作・開発</option>
                  <option value="ai-tool">AI・自動化ツール開発</option>
                  <option value="marketing">マーケティング・営業支援</option>
                  <option value="training">AI研修・コンサルティング</option>
                  <option value="other">その他・よくわからないけど相談したい</option>
                </select>
              </div>
              <div className="mt-8">
                <label
                  htmlFor="message"
                  className="block text-sm text-ink-muted"
                >
                  お問い合わせ内容 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none border-b border-border bg-transparent px-0 py-3 text-ink outline-none transition-colors focus:border-accent"
                  placeholder="ご相談内容をお気軽にご記入ください"
                />
              </div>
              <div className="mt-10">
                <button
                  type="submit"
                  className="rounded-sm bg-ink px-10 py-4 text-sm tracking-wide text-cream transition-colors hover:bg-ink-light"
                >
                  送信する
                </button>
              </div>
            </form>
          )}
        </ScrollFadeIn>
      </div>
    </section>
  );
}
