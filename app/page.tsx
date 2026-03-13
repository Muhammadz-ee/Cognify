import { Navbar } from "@/components/layout/navbar";
import { Hero } from "@/components/landing/hero";
import { PodcastTicker } from "@/components/landing/podcast-ticker";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/layout/footer";
import { FooterDownloadButtons } from "@/components/landing/footer-download-buttons";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cognify: The Best AI YouTube Summarizer & Podcast Summarizer App | AI Learning Tool",
  description:
    "Cognify is the #1 AI YouTube summarizer and podcast summarizer for students, professionals, and learners. Real-time AI summaries, Key Moments extraction, NoteVault, and AI Q&A. Download free on iOS/Android.",
  keywords: "AI YouTube summarizer, podcast summarizer, best YouTube summary app, podcast notes app, AI learning tool, automatic video summaries, podcast summarization, study app, educational AI",
  authors: [{ name: "Cognify Team", url: "https://getcognifyai.com" }],
  creator: "Cognify Inc.",
  publisher: "Cognify Inc.",
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getcognifyai.com",
    title: "Cognify: The Best AI YouTube Summarizer and Podcast Summarizer",
    description: "Transform passive video and podcast watching into active learning. AI-powered summaries, Key Moments, NoteVault, and interactive Q&A.",
    siteName: "Cognify - AI Summarizer",
    images: [
      {
        url: "https://getcognifyai.com/images/cognify-og.png",
        width: 1200,
        height: 630,
        alt: "Cognify AI Summarizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cognify: AI YouTube & Podcast Summarizer",
    description: "Get instant AI summaries of YouTube videos and podcasts. Smart learning tool for students and professionals.",
  },
  verification: {
    google: "your-google-verification",
  },
  alternates: {
    canonical: "https://getcognifyai.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cognify",
    url: "https://getcognifyai.com",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "The best AI YouTube summarizer and podcast summarizer tool. Distill educational content into personal Masterclasses with AI-powered summaries, Key Moments, NoteVault, and Q&A.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1200",
    },
    featureList: ["AI Summarization", "Key Moments", "Insight Modes", "NoteVault", "AI Assistant", "Q&A Engine"],
    keywords:
      "AI YouTube summarizer, podcast summarizer, YouTube summary tool, AI learning, study tool, NoteVault, Masterclass, Huberman Lab, Mel Robbins, Neuroscience, Productivity, Health",
    about: [
      {
        "@type": "Thing",
        name: "Neuroscience",
      },
      {
        "@type": "Thing",
        name: "Productivity",
      },
      {
        "@type": "Thing",
        name: "Health",
      },
      {
        "@type": "Thing",
        name: "Education",
      },
    ],
    mentions: [
      {
        "@type": "Person",
        name: "Andrew Huberman",
      },
      {
        "@type": "Person",
        name: "Mel Robbins",
      },
      {
        "@type": "Person",
        name: "Tony Robbins",
      },
      {
        "@type": "Person",
        name: "Joe Rogan",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Cognify?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognify is the best AI YouTube summarizer and podcast summarizer tool. It transforms educational content from YouTube and podcasts into personalized learning materials with AI-powered summaries, key moments, insights, and interactive Q&A.",
        },
      },
      {
        "@type": "Question",
        name: "How does Cognify summarize videos and podcasts?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognify uses advanced language models to analyze audio and video content in real-time. It extracts key moments, identifies important concepts, and generates accurate summaries that capture 85-95% of essential information while removing filler content.",
        },
      },
      {
        "@type": "Question",
        name: "What podcasts does Cognify support?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognify supports 1000+ podcasts including Huberman Lab, Mel Robbins, Joe Rogan Experience, Tim Ferriss Show, Andrew Tate, Navy Seal Stories, and many more across all major platforms.",
        },
      },
      {
        "@type": "Question",
        name: "Is Cognify free or paid?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognify offers both free and premium versions. The free tier includes 5 summaries per month with basic features. Premium members get unlimited summaries, advanced AI insights, lifetime note storage, and priority support.",
        },
      },
      {
        "@type": "Question",
        name: "How accurate are the summaries?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cognify's AI summaries capture 85-95% of key information while removing fluff. The accuracy is continuously improved through machine learning and incorporates feedback from millions of users.",
        },
      },
      {
        "@type": "Question",
        name: "Is my data private?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cognify employs end-to-end encryption for all user data. Your notes are never sold or shared with third parties. We comply with GDPR and other privacy regulations.",
        },
      },
      {
        "@type": "Question",
        name: "Can I export my notes?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. All notes can be exported in multiple formats including text, PDF, and Markdown files. You have full control over your learning data.",
        },
      },
      {
        "@type": "Question",
        name: "How long does summarization take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Typically 30 seconds to 2 minutes depending on content length and complexity. Premium users receive priority processing for faster summaries.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-purple selection:text-white">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="afterInteractive"
      />
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        strategy="afterInteractive"
      />
      <Script
        id="advanced-schemas"
        src="/advanced-schema.json"
        type="application/ld+json"
        strategy="afterInteractive"
      />

      <Navbar />

      <Hero />

      <PodcastTicker />

      <Features />

      <section id="contact" className="py-10 -mt-16 md:mt-10 mb-14">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[34px] md:text-[66.6667px] font-bold mb-6 leading-[1.05] md:leading-[0.85]">
            Ready to Be Among <br /> the First?
          </h2>
          <div className="flex justify-center gap-4 mt-4">
            <FooterDownloadButtons />
          </div>
          <p className="mt-8 text-sm text-gray-200">
            🎧 Smarter listening starts today — Download now.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
