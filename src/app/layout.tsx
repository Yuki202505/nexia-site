import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter_Tight, JetBrains_Mono, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { NexiaNav } from '@/components/layout/NexiaNav';
import { NexiaFooter } from '@/components/layout/NexiaFooter';
import { NeuralBackground } from '@/components/layout/NeuralBackground';
import { ChromeLayers } from '@/components/layout/ChromeLayers';

const GA_MEASUREMENT_ID = 'G-8BJPSN9NGZ';

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
  metadataBase: new URL('https://nexia-ai.jp'),
  title: 'NEXIA — AI研修・HP制作・AIツール・AIマーケティング',
  description:
    'AI研修・ホームページ制作・AIツール開発・AIマーケティング。AIを道具から同僚にする、NEXIAの4つの事業領域。',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'NEXIA — AI研修・HP制作・AIツール・AIマーケティング',
    description:
      'AI研修・ホームページ制作・AIツール開発・AIマーケティング。AIを道具から同僚にする、NEXIAの4つの事業領域。',
    type: 'website',
    url: 'https://nexia-ai.jp/',
    siteName: 'NEXIA',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXIA — AI研修・HP制作・AIツール・AIマーケティング',
    description:
      'AI研修・ホームページ制作・AIツール開発・AIマーケティング。AIを道具から同僚にする、NEXIAの4つの事業領域。',
  },
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://nexia-ai.jp/#organization',
  name: 'NEXIA',
  legalName: 'NEXIA, INC.',
  alternateName: '株式会社NEXIA',
  url: 'https://nexia-ai.jp/',
  logo: 'https://nexia-ai.jp/icon.svg',
  description:
    'AI研修・ホームページ制作・AIツール開発・AIマーケティングの4領域を一気通貫で提供。AIを道具から同僚にする、NEXIA。',
  email: 'info@nexia-ai.jp',
  founder: {
    '@type': 'Person',
    name: '朝川 祐樹',
    jobTitle: 'CEO',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Japan',
  },
  knowsAbout: [
    'AI研修',
    'AI training',
    'ホームページ制作',
    'Website Development',
    'AIツール開発',
    'AI Tool Development',
    'AIマーケティング',
    'AI Marketing',
    'Generative AI',
    'ChatGPT',
    'Claude',
  ],
  sameAs: [],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://nexia-ai.jp/#website',
  url: 'https://nexia-ai.jp/',
  name: 'NEXIA',
  description:
    'AI研修・HP制作・AIツール・AIマーケティング — NEXIA',
  inLanguage: 'ja-JP',
  publisher: {
    '@id': 'https://nexia-ai.jp/#organization',
  },
};

const servicesJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Service',
      position: 1,
      name: 'AI研修',
      provider: { '@id': 'https://nexia-ai.jp/#organization' },
      description:
        '法人向けに生成AI（ChatGPT・Claude等）の業務活用を体系的に学べる研修。導入から運用定着まで伴走します。',
      areaServed: 'JP',
    },
    {
      '@type': 'Service',
      position: 2,
      name: 'ホームページ制作',
      provider: { '@id': 'https://nexia-ai.jp/#organization' },
      description:
        'AI×デザインで高品質なコーポレートサイト・LPを短納期・低コストで制作。SEO/GEO対応標準装備。',
      areaServed: 'JP',
    },
    {
      '@type': 'Service',
      position: 3,
      name: 'AIツール開発',
      provider: { '@id': 'https://nexia-ai.jp/#organization' },
      description:
        '業務効率化・自動化のための独自AIツール開発。社内ナレッジ活用・営業支援・データ抽出など。',
      areaServed: 'JP',
    },
    {
      '@type': 'Service',
      position: 4,
      name: 'AIマーケティング',
      provider: { '@id': 'https://nexia-ai.jp/#organization' },
      description:
        'リード獲得・コンテンツ生成・SEO/GEO対策をAIで加速。営業から運用まで一気通貫。',
      areaServed: 'JP',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
        />
      </head>
      <body
        className={`${interTight.variable} ${jetbrainsMono.variable} ${notoSansJP.variable}`}
      >
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <NeuralBackground />
        <ChromeLayers />
        <NexiaNav />
        <main id="top">{children}</main>
        <NexiaFooter />
      </body>
    </html>
  );
}
