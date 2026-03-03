import type { Metadata } from 'next';
import { Noto_Sans_JP, Noto_Serif_JP, Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'NEXIA | テクノロジーで、事業を前に進める。',
  description:
    'NEXIAはWeb制作・AIツール開発・業務自動化・AI研修を通じて、企業のデジタル化を支援します。',
  openGraph: {
    title: 'NEXIA | テクノロジーで、事業を前に進める。',
    description:
      'Web制作・AIツール開発・業務自動化・AI研修。テクノロジーの力で御社の事業課題を解決します。',
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
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable} font-[family-name:var(--font-noto-sans-jp)] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
