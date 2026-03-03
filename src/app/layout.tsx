import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

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
        className={`${inter.variable} font-[family-name:var(--font-inter)] antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
