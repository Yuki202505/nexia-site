'use client';

import { useState } from 'react';
import { ScrollFadeIn } from '@/components/ui/ScrollFadeIn';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="relative py-24 md:py-32">
      {/* 背景アクセント */}
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-3xl px-6">
        <ScrollFadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              <span className="gradient-text">お問い合わせ</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-gray-400">
              「こんなこと頼める？」くらいのご相談で大丈夫です。
              <br />
              通常1営業日以内にご返信します。
            </p>
          </div>
        </ScrollFadeIn>

        <ScrollFadeIn delay={200}>
          {submitted ? (
            <div className="mt-12 glass-card rounded-2xl p-12 text-center">
              <div className="text-4xl">&#9993;</div>
              <h3 className="mt-4 text-xl font-bold">
                お問い合わせありがとうございます
              </h3>
              <p className="mt-2 text-gray-400">
                内容を確認の上、1営業日以内にご返信いたします。
              </p>
            </div>
          ) : (
            <form
              action="https://formspree.io/f/xpwzgkvl"
              method="POST"
              onSubmit={() => setSubmitted(true)}
              className="mt-12 glass-card rounded-2xl p-8 md:p-12"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300"
                  >
                    お名前 <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="山田 太郎"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-gray-300"
                  >
                    会社名
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                    placeholder="株式会社○○"
                  />
                </div>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="taro@example.com"
                />
              </div>
              <div className="mt-6">
                <label
                  htmlFor="service"
                  className="block text-sm font-medium text-gray-300"
                >
                  ご興味のあるサービス
                </label>
                <select
                  id="service"
                  name="service"
                  className="mt-2 w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                >
                  <option value="" className="bg-navy-900">選択してください</option>
                  <option value="web" className="bg-navy-900">Web制作・開発</option>
                  <option value="ai-tool" className="bg-navy-900">AI・自動化ツール開発</option>
                  <option value="marketing" className="bg-navy-900">マーケティング・営業支援</option>
                  <option value="training" className="bg-navy-900">AI研修・コンサルティング</option>
                  <option value="other" className="bg-navy-900">その他・よくわからないけど相談したい</option>
                </select>
              </div>
              <div className="mt-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 outline-none transition-colors focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="ご相談内容をお気軽にご記入ください"
                />
              </div>
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
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
