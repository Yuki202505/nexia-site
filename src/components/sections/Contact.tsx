'use client';

import { useRef, useState } from 'react';
import { CheckCircle, Send, Clock, MessageSquare, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { gsap, useGSAP, EASE_DEFAULT } from '@/lib/gsap-init';

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const inputClass =
  'w-full px-4 py-3 border border-white/10 rounded-lg text-sm text-white outline-none transition-all focus:border-accent focus:ring-2 focus:ring-accent/20 bg-white/[0.04] placeholder:text-white/25';

const fieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease } },
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useGSAP(
    () => {
      const headerTl = gsap.timeline({
        scrollTrigger: {
          trigger: '[data-contact="header"]',
          start: 'top 80%',
          once: true,
        },
        defaults: { ease: EASE_DEFAULT },
      });

      headerTl
        .to('[data-contact="badge"]', {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
        })
        .to(
          '[data-contact="title"]',
          { autoAlpha: 1, y: 0, duration: 0.7 },
          '-=0.2'
        )
        .to(
          '[data-contact="desc"]',
          { autoAlpha: 1, y: 0, duration: 0.6 },
          '-=0.3'
        );
    },
    { scope: sectionRef, dependencies: [] }
  );

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        {/* タイトル */}
        <div data-contact="header" className="text-center mb-16">
          <div
            data-contact="badge"
            className="gsap-hidden section-badge mx-auto mb-6"
            style={{ transform: 'translateY(20px)' }}
          >
            <Sparkles className="w-4 h-4 text-white/50" />
            <span>CONTACT</span>
          </div>
          <h2
            data-contact="title"
            className="gsap-hidden text-4xl sm:text-5xl font-bold text-white mb-5"
            style={{ transform: 'translateY(40px)' }}
          >
            まずはお気軽にご相談ください
          </h2>
          <p
            data-contact="desc"
            className="gsap-hidden text-base sm:text-lg text-white/40 max-w-xl mx-auto"
            style={{ transform: 'translateY(20px)' }}
          >
            「こんなこと頼めるの？」という段階でもOKです。
            <br className="hidden sm:block" />
            お話を聞いた上で、最適なご提案をいたします。
          </p>
        </div>

        {/* 安心ポイント */}
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease }}
        >
          {[
            { icon: Clock, text: '24時間以内に返信' },
            { icon: MessageSquare, text: '相談だけでもOK' },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-sm text-white/40"
            >
              <item.icon className="w-4 h-4 text-white/50" />
              <span>{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* フォーム */}
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              className="glass-card p-12 text-center"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.2,
                  type: 'spring',
                  stiffness: 200,
                  damping: 15,
                }}
              >
                <CheckCircle className="w-14 h-14 text-accent mx-auto mb-6" />
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3">
                お問い合わせありがとうございます
              </h3>
              <p className="text-sm text-white/40">
                内容を確認の上、24時間以内にご連絡いたします。
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              className="glass-card p-8 sm:p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
            >
              <motion.form
                action="https://formspree.io/f/xpwzgkvl"
                method="POST"
                onSubmit={() => setSubmitted(true)}
                className="space-y-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.08,
                      delayChildren: 0.1,
                    },
                  },
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white/60 mb-1.5"
                    >
                      お名前 <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className={inputClass}
                      placeholder="山田 太郎"
                    />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white/60 mb-1.5"
                    >
                      メールアドレス <span className="text-accent">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className={inputClass}
                      placeholder="example@company.co.jp"
                    />
                  </motion.div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-white/60 mb-1.5"
                    >
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className={inputClass}
                      placeholder="株式会社サンプル"
                    />
                  </motion.div>
                  <motion.div variants={fieldVariants}>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-white/60 mb-1.5"
                    >
                      ご興味のあるサービス{' '}
                      <span className="text-accent">*</span>
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      className={inputClass + ' appearance-none'}
                    >
                      <option value="">選択してください</option>
                      <option value="web">ホームページ制作</option>
                      <option value="ai-tool">AI・自動化ツール開発</option>
                      <option value="marketing">AIマーケティング支援</option>
                      <option value="training">AI研修・導入支援</option>
                      <option value="other">その他・相談したい</option>
                    </select>
                  </motion.div>
                </div>
                <motion.div variants={fieldVariants}>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/60 mb-1.5"
                  >
                    ご相談内容 <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className={inputClass + ' resize-none'}
                    placeholder="例：会社のホームページをリニューアルしたい / 社内の業務をAIで効率化したい"
                  />
                </motion.div>
                <motion.div variants={fieldVariants}>
                  <motion.button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-white text-black rounded-full text-sm font-semibold transition-all"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: '0 8px 30px rgba(255,255,255,0.15)',
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    送信する
                    <Send className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
