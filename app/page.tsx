import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import {Hero} from "@/components/landing/hero";
import { PodcastTicker } from "@/components/landing/podcast-ticker";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cognify | Podcasts, Distilled.',
  description: 'Cognify: The premium AI intelligence layer. Distill YouTube and podcasts into personal Masterclasses with custom Key Moments, AI Insights, NoteVault, and AI-powered Q&A',
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Cognify",
    "applicationCategory": "ProductivityApplication",
    "operatingSystem": "iOS, Android",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "description": "The premium AI intelligence layer. Distill YouTube and podcasts into personal Masterclasses.",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1200"
    },
    "featureList": [
      "Key Moments",
      "Insight Modes",
      "NoteVault",
      "AI Assistant"
    ],
    "keywords": "AI, Podcast, Summary, NoteVault, Masterclass, Huberman Lab, Mel Robbins, Neuroscience, Productivity, Health",
    "about": [
      {
        "@type": "Thing",
        "name": "Neuroscience"
      },
      {
        "@type": "Thing",
        "name": "Productivity"
      },
      {
        "@type": "Thing",
        "name": "Health"
      }
    ],
    "mentions": [
      {
        "@type": "Person",
        "name": "Andrew Huberman"
      },
      {
        "@type": "Person",
        "name": "Mel Robbins"
      },
      {
        "@type": "Person",
        "name": "Tony Robbins"
      },
      {
        "@type": "Person",
        "name": "Joe Rogan"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-brand-purple selection:text-white">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Navbar />

      <Hero />

      <PodcastTicker />

      <Features />

      <section id="contact" className="py-24 bg-linear-to-b from-black to-gray-900 border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Be Among the First?</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the waitlist and get early access to the future of smarter listening.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="px-8 h-12 rounded-xl font-bold transition-transform hover:scale-105">
              Download for iOS
            </Button>
            <Button variant="outline" className="px-8 h-12 rounded-xl font-bold transition-transform hover:scale-105 border-white/20 hover:bg-white/10">
              Get it on Android
            </Button>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            Smarter listening starts today — Download now.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
