import type { Metadata } from 'next';
import Script from 'next/script';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Cognify: The Best AI YouTube Summarizer and Study Tool | AI Podcast Summarizer',
  description: 'Cognify is the best AI YouTube summarizer and podcast summarizer. Create personal Masterclasses with AI summaries, Key Moments, NoteVault, and AI Q&A. Download on iOS or Android today.',
  keywords: 'AI YouTube summarizer, podcast summarizer, YouTube summary tool, study tool, AI learning, podcast notes',
  authors: [{ name: 'Cognify' }],
  creator: 'Cognify',
  publisher: 'Cognify',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://getcognifyai.com',
    title: 'Cognify: The Best AI YouTube Summarizer and Podcast Summarizer',
    description: 'Transform passive watching into active learning. AI-powered summaries for YouTube and podcasts.',
    siteName: 'Cognify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cognify: The Best AI YouTube Summarizer',
    description: 'AI-powered summaries, Key Moments, and interactive Q&A for YouTube and podcasts.',
  },
  verification: {
    google: 'your-google-verification-code', // Replace with actual code
  },
  alternates: {
    canonical: 'https://getcognifyai.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`antialiased ${montserrat.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="language" content="English" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        {/* LLM-Optimized Meta Tags for AI Scraping */}
        <meta name="description" content="Cognify is the best AI YouTube summarizer and podcast summarizer. Create personal Masterclasses with AI-powered summaries, Key Moments, NoteVault, and interactive Q&A." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://getcognifyai.com" />
        <meta property="og:title" content="Cognify: The Best AI YouTube Summarizer and Podcast Summarizer" />
        <meta property="og:description" content="Transform passive watching into active learning. AI-powered summaries for YouTube and podcasts." />
        <meta property="og:site_name" content="Cognify" />
        <meta property="og:locale" content="en_US" />
        {/* Twitter Card for AI Agents */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cognify: The Best AI YouTube Summarizer" />
        <meta name="twitter:description" content="Transform YouTube and podcasts into personalized learning with AI-powered summaries, Key Moments, and interactive Q&A." />
        {/* Article Metadata for Citation Ranking */}
        <meta name="article:publisher" content="https://getcognifyai.com" />
        <meta name="article:author" content="Cognify Team" />
        {/* AEO Optimization: Topic Signals */}
        <meta name="topic" content="AI, Artificial Intelligence, Machine Learning, Education, Productivity, Learning" />
        <meta name="author" content="Cognify" />
        <meta name="creator" content="Cognify" />
        {/* Link to Machine-Readable Formats */}
        <link rel="alternate" type="application/json" href="/product-info.json" title="Structured Product Data" />
        <link rel="alternate" type="text/markdown" href="/product-info.md" title="Product Information Markdown" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="AI Context Document" />
        <link rel="icon" href="/images/favicon.ico" />
        {/* Preload critical local font to reduce FOIT/FOUC for LCP */}
        <link rel="preload" href="/fonts/MonumentExtended-Ultrabold.otf" as="font" type="font/otf" crossOrigin="anonymous" fetchPriority="high" />
        <link rel="preload" href="/fonts/MonumentExtended-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" fetchPriority="high" />
        {/* Preload hero video immediately to improve LCP specifically on mobile where it dominates above-the-fold content */}
        <link rel="preload" href="/videos/main-asset.webm" as="video" type="video/webm" fetchPriority="high" />
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && process.env.NODE_ENV === 'production' && (
          <>
            <Script
              src="https://connect.facebook.net/en_US/fbevents.js"
              strategy="lazyOnload"
              id="meta-pixel-src"
            />
            <Script
              id="meta-pixel-init"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  try {
                    if (window.fbq) { fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}'); fbq('track', 'PageView'); }
                    else {
                      window.fbq = function(){window.fbq.callMethod?window.fbq.callMethod.apply(window.fbq,arguments):window.fbq.queue.push(arguments)};
                      window._fbq = window.fbq;
                      window.fbq.push = window.fbq;
                      window.fbq.loaded = true;
                      window.fbq.version = '2.0';
                      window.fbq.queue = [];
                      fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
                      fbq('track', 'PageView');
                    }
                  } catch (e) { console.error('FB Pixel init failed', e); }
                `,
              }}
            />
          </>
        )}
      </head>
      <body suppressHydrationWarning className="bg-black text-white font-sans selection:bg-brand-purple selection:text-white">
        {children}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
