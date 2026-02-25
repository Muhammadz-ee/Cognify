"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";

import { Apple, Play } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-16 bg-black overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold mb-4 text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
            data-text="Turn Any Video Into a Masterclass"
          >
            Turn Any Video Into a Masterclass <br />
          </h2>
          <p className="text-white text-[clamp(20px,1.2vw,22px)] sm:text-[clamp(22px,1.3vw,26px)] max-w-2xl mx-auto mt-2 mb-8 leading-[1.05]">
            Summarize key points, take organized notes, and get AI-powered{" "}
            answers—so you don’t just watch, you truly learn.
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2"
            >
              {/* App Store */}
              <Button
                size="lg"
                asChild
                className="h-auto py-2 sm:py-0 sm:h-18 w-auto px-2 sm:px-4 
                rounded-xl sm:rounded-2xl flex items-center justify-center sm:justify-start 
                gap-2 sm:gap-4 transition-all hover:scale-105 active:scale-95 
                bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer 
                focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              >
                <a
                  href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={42}
                    height={42}
                    className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[8px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[12px] sm:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
                      App Store
                    </div>
                  </div>
                </a>
              </Button>

              {/* Google Play */}
              <Button
                size="lg"
                asChild
                className="h-auto py-2 sm:py-0 sm:h-18 w-auto px-2 sm:px-4 
                rounded-xl sm:rounded-2xl flex items-center justify-center sm:justify-start 
                gap-2 sm:gap-4 transition-all hover:scale-105 active:scale-95 
                bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer 
                focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
              >
                <a
                  href="https://play.google.com/store/apps/details?id=com.cognifyai.mobile"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                >
                  <Image
                    src="/images/play-store.svg"
                    alt="Google Play"
                    width={42}
                    height={42}
                    className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
                  />
                  <div className="text-left">
                    <div className="text-[8px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[12px] sm:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
                      Google Play
                    </div>
                  </div>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Feature 1: Three Phones Grid */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-2 mb-10">
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-full max-w-[1260px] overflow-hidden">
              <Image
                src="/images/sscreenshootss.webp"
                alt="App Store"
                width={2080}
                height={2080}
                className="w-full h-auto block"
              />
              <div className="absolute left-0 right-0 bottom-0 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Feature 2: Insight Modes */}
        <div className="flex flex-row items-center gap-2 sm:gap-8 md:gap-12 mb-8 sm:mb-12 -mt-10 md:-mt-14">
          <div className="w-[45%] md:flex-1 relative flex justify-center md:z-30">
            <div className="relative w-full max-w-[820px] overflow-hidden -ml-4 md:ml-0">
              <Image
                src="/images/feature-image-01.webp"
                alt="App Store"
                width={2080}
                height={2080}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="w-[55%] md:flex-1 text-left pr-2 md:pr-0">
            <Button
              size="lg"
              className="text-[4px] sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4 border border-white h-auto py-1 sm:h-12 px-2 sm:px-4 rounded-full flex items-center gap-1 sm:gap-4 text-white"
              aria-label="Insight Modes™"
            >
              Insight Modes™
            </Button>
            <h2
              className="text-[14px] sm:text-[28px] md:text-[48px] lg:text-[53.6701px] font-normal text-white mb-1 sm:mb-4 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Summarize. Skip the Noise. Learn What Counts."
            >
              Summarize. Skip the Noise. <br className="block" />
              <strong>Learn What Counts.</strong>
            </h2>
            <p className="text-gray-100 text-[8px] sm:text-[14px] md:text-[clamp(22px,1.3vw,26px)] leading-[1.2] sm:leading-relaxed">
              Instant takeaways and structured insights—so you save time and
              actually remember.
            </p>
          </div>
        </div>

        {/* Feature 3: Annotations */}
        <div className="flex flex-row-reverse items-center gap-2 sm:gap-8 md:gap-12 mb-6 sm:mb-12 -mt-16 md:-mt-52">
          <div className="w-[45%] md:flex-1 relative flex justify-center md:z-20">
            <div className="relative w-full max-w-[820px] overflow-hidden -mr-4 md:mr-0">
              <Image
                src="/images/feature-image-02.webp"
                alt="App Store"
                width={2080}
                height={2080}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="w-[55%] md:flex-1 text-left pl-2 md:pl-0">
            <Button
              size="lg"
              className="text-[4px] sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4 border border-white h-auto py-1 sm:h-12 px-2 sm:px-4 rounded-full flex items-center gap-1 sm:gap-4 text-white"
              aria-label="Annotations™"
            >
              Annotations™
            </Button>
            <h2
              className="text-[14px] sm:text-[28px] md:text-[48px] lg:text-[53.6701px] font-normal text-white mb-1 sm:mb-4 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="From Passive Watching to Active Listening"
            >
              From Passive Watching <br className="block" />
              <strong>to Active Listening</strong>
            </h2>
            <p className="text-gray-100 text-[8px] sm:text-[14px] md:text-[clamp(22px,1.3vw,26px)] leading-[1.2] sm:leading-relaxed">
              Instantly capture ideas and effortlessly annotate videos in real
              time—without interrupting your flow.
            </p>
          </div>
        </div>

        {/* Feature 4: NoteVault */}
        <div className="flex flex-row items-center gap-2 sm:gap-8 md:gap-12 -mb-4 sm:-mb-10 -mt-16 md:-mt-36">
          <div className="w-[45%] md:flex-1 relative flex justify-center md:z-10">
            <div className="relative w-full max-w-[620px] overflow-hidden -ml-4 md:ml-0">
              <Image
                src="/images/feature-image-03.webp"
                alt="App Store"
                width={1040}
                height={740}
                className="w-full h-auto block scale-100 sm:scale-100"
              />
              <div className="absolute left-0 right-0 bottom-2 sm:bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="w-[55%] md:flex-1 text-left pr-2 md:pr-0">
            <Button
              size="lg"
              className="text-[4px] sm:text-lg md:text-xl font-bold text-white mb-2 sm:mb-4 border border-white h-auto py-1 sm:h-12 px-2 sm:px-4 rounded-full flex items-center gap-1 sm:gap-4 text-white"
              aria-label="NoteVault™"
            >
              NoteVault™
            </Button>
            <h2
              className="text-[14px] sm:text-[28px] md:text-[48px] lg:text-[53.6701px] font-bold text-white mb-1 sm:mb-4 leading-[1.1] inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Revisit & Retain"
            >
              <strong>Revisit & Retain</strong>
            </h2>
            <p className="text-gray-100 text-[8px] sm:text-[14px] md:text-[clamp(22px,1.3vw,26px)] leading-[1.2] sm:leading-relaxed mb-4 sm:mb-8">
              In a world of constant content, it's easy to forget what we hear.
              Cognify changes that. Your key takeaways are captured, organized,
              and always accessible.
            </p>
          </div>
        </div>

        <p className="text-gray-100 text-[6px] sm:text-[clamp(16px,1.1vw,20px)] md:text-[clamp(22px,1.3vw,26px)] leading-relaxed mb-8 text-center mt-6 sm:mt-0">
          {" "}
          „Tell me and I forget, teach me and I may remember, involve me and I
          learn.” <br />
          -Benjamin Franklin{" "}
        </p>
      </Container>
    </section>
  );
}
