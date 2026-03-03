import type { Metadata } from 'next';
import { Noto_Sans_JP, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXIA | AIで、ビジネスを次のステージへ。',
  description:
    'NEXIAはAI技術を活用したHP制作・AIツール開発・AI研修サービスを提供します。最新のAI技術で貴社のビジネスを加速させます。',
  openGraph: {
    title: 'NEXIA | AIで、ビジネスを次のステージへ。',
    description:
      'AI技術を活用したHP制作・AIツール開発・AI研修サービス。最新のAI技術で貴社のビジネスを加速させます。',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${notoSansJP.variable} ${inter.variable} font-[family-name:var(--font-noto-sans-jp)] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
