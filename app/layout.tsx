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
  title: 'Cognify | Podcasts, Distilled.',
  description: 'Cognify: The premium AI intelligence layer. Distill YouTube and podcasts into personal Masterclasses with custom Key Moments, AI Insights, NoteVault, and AI-powered Q&A',
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
        <link rel="icon" href="/images/favicon.ico" />
        {/* Preload critical local font to reduce FOIT/FOUC for LCP */}
        <link rel="preload" href="/fonts/MonumentExtended-Regular.otf" as="font" type="font/otf" crossOrigin="anonymous" />
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
