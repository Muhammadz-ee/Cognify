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
            className="text-2xl md:text-5xl font-bold mb-4 text-white rgb-text"
            data-text="Turn Any Video Into a Masterclass"
          >
            Turn Any Video Into a Masterclass <br />
          </h2>
          <p className="text-white/100 body-text max-w-2xl mx-auto mt-2 mb-8 leading-relaxed">
            Summarize key points, take organized notes, and get AI-powered{" "}
            answers—so you don’t just watch, you truly learn.
          </p>

          <div className="flex justify-center gap-4 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
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
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:-mt-14">
          <div className="flex-1 relative flex justify-center md:z-30">
            <div className="relative w-full max-w-[820px] overflow-hidden">
              <Image
                src="/images/feature-image-01.webp"
                alt="App Store"
                width={2080}
                height={2080}
                className="w-full h-auto block"
              />
              <div className="absolute left-0 right-0 bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold text-white mb-4 border border-white">
              Insight Modes™
            </div> */}
            <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="Insight Modes™"
            >
              Insight Modes™
            </Button>
            <h2
              className="text-[32px] md:text-[48px] lg:text-[53.6701px] font-normal text-white mb-4 leading-[1.1] rgb-text-feature"
              data-text="Summarize. Skip the Noise. Learn What Counts."
            >
              Summarize. Skip the Noise. <br className="hidden md:block" />
              <strong>Learn What Counts.</strong>
            </h2>
            <p className="text-gray-100 body-text leading-relaxed">
              Instant takeaways and structured insights—so you save time and
              actually remember.
            </p>
          </div>
        </div>

        {/* Feature 3: Annotations */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12 mb-12 md:-mt-52">
          <div className="flex-1 relative flex justify-center md:z-20">
            <div className="relative w-full max-w-[820px] overflow-hidden">
              <Image
                src="/images/feature-image-02.webp"
                alt="App Store"
                width={2080}
                height={2080}
                className="w-full h-auto block"
              />
              <div className="absolute left-0 right-0 bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-bold text-white mb-4">
              Annotations™
            </div> */}
            <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="Annotations™"
            >
              Annotations™
            </Button>
            <h2
              className="text-[32px] md:text-[48px] lg:text-[53.6701px] font-normal text-white mb-4 leading-[1.1] rgb-text-feature"
              data-text="From Passive Watching to Active Listening"
            >
              From Passive Watching <br className="hidden md:block" />
              <strong>to Active Listening</strong>
            </h2>
            <p className="text-gray-100 body-text leading-relaxed">
              Instantly capture ideas and effortlessly annotate videos in real
              time—without interrupting your flow.
            </p>
          </div>
        </div>

        {/* Feature 4: NoteVault */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12 md:-mt-36">
          <div className="flex-1 relative flex justify-center md:z-10">
            <div className="relative w-full max-w-[620px] overflow-hidden">
              <Image
                src="/images/feature-image-03.webp"
                alt="App Store"
                width={1040}
                height={740}
                className="w-full h-auto block"
              />
              <div className="absolute left-0 right-0 bottom-10 h-[90%] bg-gradient-to-t from-black/95 to-transparent pointer-events-none" />
            </div>
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-xs font-bold text-white mb-4">
              NoteVault™
            </div> */}
            <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="NoteVault™"
            >
              NoteVault™
            </Button>
            <h2
              className="text-[32px] md:text-[48px] lg:text-[53.6701px] font-bold text-white mb-4 leading-[1.1] rgb-text-feature"
              data-text="Revisit & Retain"
            >
              Revisit & Retain
            </h2>
            <p className="text-gray-100 body-text leading-relaxed mb-8">
              In a world of constant content, it's easy to forget what we hear.
              Cognify changes that. Your key takeaways are captured, organized,
              and always accessible.
            </p>
          </div>
        </div>

        <p className="text-gray-100 body-text leading-relaxed mb-8 text-center">
          {" "}
          „Tell me and I forget, teach me and I may remember, involve me and I
          learn.” <br />
          -Benjamin Franklin{" "}
        </p>
      </Container>
    </section>
  );
}
