'use client';

import { useState } from 'react';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

const inputClass =
  'w-full rounded-lg border border-border bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-accent';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="bg-cream px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        <ScrollFadeIn>
          <div className="mb-16">
            <h2
              className="text-4xl font-bold text-ink md:text-5xl"
              style={{ letterSpacing: '-0.02em' }}
            >
              Contact
            </h2>
            <p className="mt-4 text-base text-ink-muted md:text-lg">
              お問い合わせ
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          {submitted ? (
            <div className="max-w-2xl rounded-lg border border-border bg-white p-12 text-center">
              <h3 className="text-xl font-semibold text-ink">
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
              className="max-w-2xl space-y-6"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                    お名前 <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className={inputClass}
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                    メールアドレス <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={inputClass}
                    placeholder="example@company.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="mb-2 block text-sm font-medium text-ink">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className={inputClass}
                  placeholder="株式会社○○"
                />
              </div>
              <div>
                <label htmlFor="service" className="mb-2 block text-sm font-medium text-ink">
                  ご希望のサービス <span className="text-accent">*</span>
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className={inputClass + ' appearance-none'}
                >
                  <option value="">選択してください</option>
                  <option value="web">Web制作・開発</option>
                  <option value="ai-tool">AI・自動化ツール開発</option>
                  <option value="marketing">マーケティング・営業支援</option>
                  <option value="training">AI研修・コンサルティング</option>
                  <option value="other">その他</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  お問い合わせ内容 <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className={inputClass + ' resize-none'}
                  placeholder="お問い合わせ内容をご記入ください"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-full bg-ink px-8 py-4 text-sm font-medium text-cream transition-all duration-300 hover:bg-accent"
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
