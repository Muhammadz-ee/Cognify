"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Star,
  ArrowLeft,
  Bookmark,
  Share2,
  MoreHorizontal,
} from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-black">
      <Container>
        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h1
              className="text-6xl sm:text-8xl md:text-9xl font-black tracking-wider text-white mb-4 uppercase leading-[0.95]"
              style={{ fontFamily: "'Monument Extended', sans-serif" }}
            >
              PODCAST <br /> LISTENING <br /> UPGRADED
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl md:text-4xl text-[#ad9ad6] font-semibold mb-10 mx-auto text-center sm:whitespace-nowrap px-4"
          >
            Turn Long Podcasts into Smart Takeaways. Instantly.
            <br />
            <span className="text-white block">
              +smart notes and study tools.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 mb-20"
          >
            <a
              href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="lg"
                className="h-24 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/app-store.svg"
                  alt="App Store"
                  width={40}
                  height={40}
                  className="w-10 h-12"
                />
                <div className="text-left">
                  <div className="text-[16px] font-bold uppercase tracking-wider opacity-90">
                    Download for free
                  </div>
                  <div className="text-[28px] font-bold leading-none">
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
                className="h-24 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
                aria-label="Get it on Google Play"
              >
                <Image
                  src="/images/play-store.svg"
                  alt="Google Play"
                  width={40}
                  height={40}
                  className="w-12 h-12"
                />
                <div className="text-left">
                  <div className="text-[16px] font-bold uppercase tracking-wider opacity-90">
                    Download for free
                  </div>
                  <div className="text-[28px] font-bold leading-none">
                    Google Play
                  </div>
                </div>
              </Button>
            </a>
          </motion.div>

          {/* Video Replacement for Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-full -top-60 max-w-[420px] md:max-w-[1020px] mx-auto mb-20 z-10"
          >
            {/* Decorative background thumbnails behind the phone mockup */}
            <div className="absolute inset-x-0 top-70 flex justify-center z-0 pointer-events-none">
              <div className="flex gap-12 items-center opacity-30 transform -translate-y-6">
                <Image
                  src="/images/album-1.webp"
                  alt="thumb1"
                  width={220}
                  height={220}
                  className="rounded-2xl shadow-xl"
                />
                <Image
                  src="/images/album-2.webp"
                  alt="thumb2"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl -rotate-3"
                />
                <Image
                  src="/images/album-3.webp"
                  alt="thumb3"
                  width={240}
                  height={240}
                  className="rounded-2xl shadow-2xl"
                />
                <Image
                  src="/images/album-4.webp"
                  alt="thumb4"
                  width={200}
                  height={200}
                  className="rounded-2xl shadow-xl rotate-3"
                />
                <Image
                  src="/images/album-5.webp"
                  alt="thumb5"
                  width={180}
                  height={180}
                  className="rounded-2xl shadow-lg"
                />
              </div>
            </div>

            {/*
              NOTE: Replace the `src` below with the actual hero video file placed under `public/videos/`.
            */}
            <div className="relative overflow-hidden shadow-2xl shadow-purple-900/30 h-[1800px] md:h-[1600px] w-[1000px]">
              <video
                src="/videos/main-asset.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Try For Free Section */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-bold mb-3">
              Try For <span className="text-purple-500">Free</span>
            </h3>
            <p className="text-sm font-bold tracking-[0.2em] uppercase text-gray-400">
              7 Day Free Trial - Cancel Any Time
            </p>
          </div>

          {/* Testimonial */}
          <div className="inline-flex bg-white/5 border border-white/10 rounded-full p-2 pr-8 items-center gap-4 max-w-2xl mx-auto backdrop-blur-sm">
            <div className="w-12 h-12 rounded-full bg-gray-700 overflow-hidden relative border-2 border-purple-500/50">
              <Image
                src="https://picsum.photos/seed/sam/100/100"
                alt="Sam"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-left">
              <div className="flex gap-1 text-purple-400 mb-1">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <p className="text-xs md:text-sm font-bold italic text-white">
                "FINALLY, AN APP THAT HELPS ME ACTUALLY REMEMBER WHAT I WATCH."
              </p>
            </div>
            <div className="text-xs font-bold text-gray-500 border-l border-white/10 pl-4 ml-2">
              SAM D.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
