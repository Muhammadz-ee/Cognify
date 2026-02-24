import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/landing/hero";
import { PodcastTicker } from "@/components/landing/podcast-ticker";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/layout/footer";
import Script from "next/script";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cognify | Podcasts, Distilled.",
  description:
    "Cognify: The premium AI intelligence layer. Distill YouTube and podcasts into personal Masterclasses with custom Key Moments, AI Insights, NoteVault, and AI-powered Q&A",
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Cognify",
    applicationCategory: "ProductivityApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    description:
      "The premium AI intelligence layer. Distill YouTube and podcasts into personal Masterclasses.",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "1200",
    },
    featureList: ["Key Moments", "Insight Modes", "NoteVault", "AI Assistant"],
    keywords:
      "AI, Podcast, Summary, NoteVault, Masterclass, Huberman Lab, Mel Robbins, Neuroscience, Productivity, Health",
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

      <section id="contact" className="py-10  border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-[36px] md:text-[66.6667px] font-bold mb-6 leading-none">
            Ready to Be Among <br /> the First?
          </h2>
            <div className="flex justify-center gap-4 mt-4">
              <a
                href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="h-18 px-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={42}
                    height={42}
                    className="w-8 h-10"
                  />
                  <div className="text-left">
                    <div className="text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[22px] font-bold leading-none">
                      App Store
                    </div>
                  </div>
                </Button>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.cognifyai.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block"
              >
                <Button
                  size="lg"
                  className="h-18 px-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/play-store.svg"
                    alt="Google Play"
                    width={42}
                    height={42}
                    className="w-8 h-10"
                  />
                  <div className="text-left">
                    <div className="text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[22px] font-bold leading-none">
                      Google Play
                    </div>
                  </div>
                </Button>
              </a>
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
