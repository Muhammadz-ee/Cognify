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
    <section className="relative pt-15 pb-1 overflow-hidden bg-black">
      <Container>
        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h1
              className="text-[48px] md:text-[144.048px] font-black tracking-wider text-white mb-4 uppercase leading-[0.95]"
              style={{
                fontFamily: "'Monument Extended', sans-serif",
                lineHeight: "0.85",
              }}
            >
              PODCAST <br /> LISTENING <br /> UPGRADED
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[18px] md:text-[42.4318px] text-[#ad9ad6] font-bold mb-10 mx-auto text-center px-4"
          >
            Turn Long Podcasts into Smart Takeaways. Instantly.
            <br />
            {/* <span className="text-white block mt-2 text-[15px] md:text-[42.4318px]"> */}
            + smart notes and study tools.
            {/* </span> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row justify-center w-full gap-4 sm:gap-6 -mb-70 z-30 px-2"
          >
            <Button
              size="lg"
              className="h-22 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/app-store.svg"
                alt="App Store"
                width={52}
                height={52}
                className="w-12 h-12"
              />{" "}
              <div className="text-left">
                <div className="text-[18px] font-bold uppercase tracking-wider opacity-90">
                  Download for free
                </div>
                <div className="text-[30px] font-bold leading-none">
                  App Store
                </div>
              </div>
            </Button>
            <Button
              size="lg"
              className="h-22 px-6 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              aria-label="Download on the App Store"
            >
              <Image
                src="/images/play-store.svg"
                alt="App Store"
                width={52}
                height={52}
                className="w-12 h-12"
              />{" "}
              <div className="text-left">
                <div className="text-[18px] font-bold uppercase tracking-wider opacity-90">
                  Download for free
                </div>
                <div className="text-[30px] font-bold leading-none">
                  Play Store
                </div>
              </div>
            </Button>
          </motion.div>

          {/* Video Replacement for Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-full max-w-[1280px] mx-auto mb-12 z-10 px-4"
          >
            {/* Decorative background thumbnails behind the phone mockup */}
            <div className="absolute inset-x-0 md:top-50 lg:top-110 flex justify-center z-0 pointer-events-none">
              <div className="flex gap-4 md:gap-6 lg:gap-10 items-center opacity-40 lg:opacity-60 transform -translate-y-6">
                <div className="flex flex-col gap-3">
                  <Image
                    src="/images/album-1.webp"
                    alt="Mel Robbins"
                    width={220}
                    height={220}
                    className="rounded-3xl shadow-xl border-2 border-gray-900 w-24 h-24 md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left hidden lg:block max-w-[220px]">
                    <span className="text-[15px] font-bold text-white block truncate">
                      The Mel Robbins Podcast
                    </span>
                    <span className="text-[13px] text-gray-400 block mt-1">
                      Mel Robbins
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src="/images/album-2.webp"
                    alt="Huberman Lab"
                    width={220}
                    height={220}
                    className="rounded-3xl shadow-xl border-2 border-gray-900 w-24 h-24 md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left hidden lg:block max-w-[220px]">
                    <span className="text-[15px] font-bold text-white block truncate">
                      Huberman Lab
                    </span>
                    <span className="text-[13px] text-gray-400 block mt-1">
                      Andrew Huberman
                    </span>
                  </div>
                </div>

                {/* Spacer for the center video to shine through */}
                <div className="hidden lg:block w-[520px]"></div>

                <div className="flex flex-col gap-3">
                  <Image
                    src="/images/album-4.webp"
                    alt="Lex Fridman"
                    width={220}
                    height={220}
                    className="rounded-3xl shadow-xl border-2 border-gray-900 w-24 h-24 md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left hidden lg:block max-w-[220px]">
                    <span className="text-[15px] font-bold text-white block truncate">
                      Lex Fridman Podcast
                    </span>
                    <span className="text-[13px] text-gray-400 block mt-1">
                      Lex Fridman
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <Image
                    src="/images/album-5.webp"
                    alt="DOAC"
                    width={220}
                    height={220}
                    className="rounded-3xl shadow-2xl border-2 border-gray-900 w-24 h-24 md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left hidden lg:block max-w-[220px]">
                    <span className="text-[15px] font-bold text-white block truncate">
                      The Diary Of A CEO
                    </span>
                    <span className="text-[13px] text-gray-400 block mt-1">
                      Steven Bartlett
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*
              NOTE: Replace the `src` below with the actual hero video file placed under `public/videos/`.
            */}
            <div className="relative overflow-hidden shadow-2xl shadow-purple-900/30 h-[1220px] md:h-[2220px] lg:h-[1920px] w-full mx-auto">
              <video
                src="/videos/main-asset.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover pointer-events-none"
              />

              {/* Overlay: Try For Free + Testimonial bottom-center on video */}
              <div className="absolute bottom-22 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 flex flex-col items-center gap-6">
                <div className="text-center">
                  <h3 className="text-[36px] md:text-[59.358px] font-bold mb-1">
                    Try For Free
                  </h3>
                  <p className="mt-4 text-[14px] md:text-[22px] font-bold tracking-[0.12em] uppercase text-gray-200">
                    7 Day Free Trial - Cancel Any Time
                  </p>
                </div>

                <div className="mt-6 relative z-10 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex bg-white rounded-full p-3 pr-8 items-center gap-4 shadow-2xl">
                      <div className="w-20 h-16 rounded-full bg-gray-200 overflow-hidden relative border-2 border-purple-500/60">
                        <Image
                          src="/images/testimonial.webp"
                          alt="Sam"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex gap-1 text-purple-300">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                    </div>

                    <div className="mt-2 text-sm font-extrabold text-purple-300 tracking-widest">
                      SAM D.
                    </div>
                  </div>

                  <p className="text-sm md:text-lg lg:text-xl font-extrabold italic text-white text-center md:text-left max-w-2xl leading-snug">
                    “FINALLY, AN APP THAT HELPS ME ACTUALLY REMEMBER WHAT I
                    WATCH.”
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
