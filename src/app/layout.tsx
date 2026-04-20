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
  title: 'NEXIA — AI研修・HP制作・AIツール・AIマーケティング',
  description:
    'AI研修・ホームページ制作・AIツール開発・AIマーケティング。AIを道具から同僚にする、NEXIAの4つの事業領域。',
  openGraph: {
    title: 'NEXIA — AI研修・HP制作・AIツール・AIマーケティング',
    description:
      'AI研修・ホームページ制作・AIツール開発・AIマーケティング。AIを道具から同僚にする、NEXIAの4つの事業領域。',
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
