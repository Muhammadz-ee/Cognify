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
    <section className="relative md:pt-15 pb-1 overflow-hidden bg-black">
      <Container>
        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-1 sm:mb-4"
          >
            <h1
              className="text-[40px] sm:text-[64px] md:text-[100px] lg:text-[144.048px] font-black tracking-wider text-white mb-2 sm:mb-4 uppercase leading-[1.04] font-monument"
            >
              PODCAST <br /> LISTENING <br /> UPGRADED
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12px] sm:text-[clamp(22px,1.8vw,48px)] leading-[1.2] sm:leading-[1.03] text-[#ad9ad6] font-bold mb-4 sm:mb-10 mx-auto text-center px-4"
          >
            Turn Long Podcasts into Smart Takeaways. Instantly.
            <br />
            <span className="text-[12px] sm:text-[clamp(22px,1.8vw,48px)] text-white block mt-0.5 sm:mt-2">+smart notes and study tools.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row justify-center w-full gap-2 sm:gap-6 mt-0 mb-[-12px] sm:-mb-70 z-30 px-2 sm:px-4"
          >
            {/* App Store */}
            <Button
              size="lg"
              asChild
              className="h-auto py-1.5 sm:py-0 sm:h-22 
    w-auto px-2 sm:px-6 
    rounded-[10px] sm:rounded-2xl 
    flex items-center justify-center sm:justify-start 
    gap-2 sm:gap-4 
    transition-all hover:scale-105 active:scale-95
    bg-[#5b4a7a] hover:bg-[#4a3a67] 
    text-white cursor-pointer 
    focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
            >
              <a
                href="https://apps.apple.com/in/app/cognify-podcast-notes-ai/id6750173261"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
              >
                <Image
                  src="/images/app-store.svg"
                  alt="App Store"
                  width={52}
                  height={52}
                  className="w-4 h-4 sm:w-12 sm:h-12"
                />
                <div className="text-left">
                  <div className="text-[6px] sm:text-[18px] font-bold uppercase tracking-wider opacity-90 leading-tight">
                    Download for free
                  </div>
                  <div className="text-[8px] sm:text-[30px] font-bold leading-none mt-0.5">
                    App Store
                  </div>
                </div>
              </a>
            </Button>

            {/* Play Store */}
            <Button
              size="lg"
              asChild
              className="h-auto py-1.5 sm:py-0 sm:h-22 
    w-auto px-2 sm:px-6 
    rounded-[10px] sm:rounded-2xl 
    flex items-center justify-center sm:justify-start 
    gap-2 sm:gap-4 
    transition-all hover:scale-105 active:scale-95
    bg-[#5b4a7a] hover:bg-[#4a3a67] 
    text-white cursor-pointer 
    focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
            >
              <a
                href="https://play.google.com/store/apps/details?id=YOUR_PACKAGE_NAME"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the Play Store"
              >
                <Image
                  src="/images/play-store.svg"
                  alt="Play Store"
                  width={52}
                  height={52}
                  className="w-4 h-4 sm:w-12 sm:h-12"
                />
                <div className="text-left">
                  <div className="text-[6px] sm:text-[18px] font-bold uppercase tracking-wider opacity-90 leading-tight">
                    Download for free
                  </div>
                  <div className="text-[8px] sm:text-[30px] font-bold leading-none mt-0.5">
                    Play Store
                  </div>
                </div>
              </a>
            </Button>
          </motion.div>

          {/* Video Replacement for Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-[105%] -ml-[2.5%] sm:w-full sm:ml-0 -mt-18 sm:mt-0 max-w-[1320px] mx-auto mb-6 sm:mb-12 z-10 px-0 sm:px-4"
          >
            {/* Decorative background thumbnails behind the phone mockup */}
            <div className="absolute inset-x-0 top-[26%] sm:top-[25%] md:top-50 lg:top-110 flex justify-center z-0 pointer-events-none">
              <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center opacity-30 brightness-75 md:opacity-60 md:brightness-100 transform -translate-y-6">
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-1.webp"
                    alt="Mel Robbins"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[38px] h-[38px] sm:w-[75px] sm:h-[75px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left w-[38px] sm:w-[75px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      The Mel Robbins Podcast
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Mel Robbins
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-2.webp"
                    alt="Huberman Lab"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover -mr-1"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      Huberman Lab
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Andrew Huberman
                    </span>
                  </div>
                </div>

                {/* Spacer for the center video to shine through */}
                <div className="w-[155px] sm:w-[220px] md:w-[280px] lg:w-[620px]"></div>

                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-4.webp"
                    alt="Lex Fridman"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover -ml-1"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      Lex Fridman Podcast
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Lex Fridman
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-5.webp"
                    alt="DOAC"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-2xl border border-gray-900 md:border-2 w-[38px] h-[38px] sm:w-[75px] sm:h-[75px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left w-[38px] sm:w-[75px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      The Diary Of A CEO
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Steven Bartlett
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*
              NOTE: Replace the `src` below with the actual hero video file placed under `public/videos/`.
            */}
            <div className="relative overflow-hidden border-b border-white/25 shadow-2xl shadow-purple-900/30 h-[600px] sm:h-[650px] md:h-[820px] lg:h-[1900px] w-full mx-auto">
              <video
                src="/videos/main-asset.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Overlay: Try For Free + Testimonial bottom-center on video */}
              <div className="absolute bottom-0 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 flex flex-col items-center gap-3 sm:gap-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-6 sm:bg-none sm:pt-0 sm:pb-0">
                <div className="text-center">
                  <h3 className="text-[20px] sm:text-4xl md:text-[3rem] font-bold tracking-tight mb-1 text-white">
                    Try For <span className="text-purple-300 relative inline-block"><span className="relative z-10">Free</span></span>
                  </h3>
                  <p className="mt-1 text-[8px] sm:text-sm md:text-base font-bold tracking-[0.12em] uppercase text-gray-200 leading-[1.03]">
                    7 DAY FREE TRIAL - CANCEL ANY TIME
                  </p>
                </div>

                <div className="mt-2 sm:mt-12 relative z-10 max-w-4xl mx-auto flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex bg-white rounded-full p-1.5 pr-3 sm:p-3 sm:pr-8 items-center gap-1.5 sm:gap-4 shadow-2xl scale-100">
                      <div className="w-[36px] h-[24px] sm:w-[104px] sm:h-[64px] rounded-full bg-gray-200 overflow-hidden relative border border-purple-500/60 flex-shrink-0">
                        <Image
                          src="/images/testimonial.webp"
                          alt="Sam"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex gap-0.5 sm:gap-1 text-[#ad9ad6] sm:text-purple-300">
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                      </div>
                    </div>

                    <div className="mt-1 sm:mt-2 text-[8px] sm:text-xs md:text-sm font-extrabold text-[#ad9ad6] sm:text-purple-300 tracking-widest">
                      SAM D.
                    </div>
                  </div>

                  <p className="text-[9px] sm:text-sm md:text-lg lg:text-xl font-extrabold italic text-white text-left max-w-[130px] sm:max-w-2xl leading-[1.3] drop-shadow-md lg:drop-shadow-none">
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
