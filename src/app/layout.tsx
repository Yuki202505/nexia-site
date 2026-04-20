import type { Metadata } from 'next';
import { Inter_Tight, JetBrains_Mono, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { NexiaNav } from '@/components/layout/NexiaNav';
import { NexiaFooter } from '@/components/layout/NexiaFooter';
import { NeuralBackground } from '@/components/layout/NeuralBackground';
import { ChromeLayers } from '@/components/layout/ChromeLayers';

const interTight = Inter_Tight({
  subsets: ['latin'],
  variable: '--font-inter-tight',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
  weight: ['400', '500'],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
  weight: ['300', '400', '500', '700', '900'],
});

export const metadata: Metadata = {
  title: 'NEXIA · AI Training',
  description:
    '生成AI・エージェント・機械学習を、ビジネスパーソンのための語彙で解体する。基礎から段階的に積み上げ、短期間・低価格で提供するAI研修プログラム。',
  openGraph: {
    title: 'NEXIA · AI Training',
    description:
      'AIを道具から同僚にする。NEXIAの企業向けAI研修プログラム。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${notoSansJP.variable}`}
      >
        <NeuralBackground />
        <ChromeLayers />
        <NexiaNav />
        <main id="top">{children}</main>
        <NexiaFooter />
      </body>
    </html>
  );
}
