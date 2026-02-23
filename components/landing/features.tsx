"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import { Apple, Play } from "lucide-react";

export function Features() {
  return (
    <section id="features" className="py-24 bg-black overflow-hidden">
      <Container>
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-32">
          <h2 className="text-2xl md:text-5xl font-bold mb-6 text-white">
            Turn Any Video Into a Masterclass <br />
          </h2>
          <p className="text-light text-[14px] md:text-[24px] max-w-2xl mx-auto mt-8">
            Summarize key points, take organized notes, and get AI- <br />{" "}
            powered answers—so you don’t just watch, you truly learn.
          </p>

          <div className="flex justify-center gap-4 mt-4">
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
                  className="h-18 px-4 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 bg-[#5b4a7a] hover:bg-[#4a3a67] text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
                  aria-label="Download on the App Store"
                >
                  <Image
                    src="/images/app-store.svg"
                    alt="App Store"
                    width={40}
                    height={40}
                    className="w-8 h-10"
                  />
                  <div className="text-left">
                    <div className="text-[12px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[24px] font-bold leading-none">
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
                    width={40}
                    height={40}
                    className="w-8 h-10"
                  />
                  <div className="text-left">
                    <div className="text-[12px] font-bold uppercase tracking-wider opacity-90">
                      Download for free
                    </div>
                    <div className="text-[24px] font-bold leading-none">
                      Google Play
                    </div>
                  </div>
                </Button>
              </a>
            </motion.div>
          </div>
        </div>

        {/* Feature 1: Three Phones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {/* Card 1 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative w-full aspect-[9/16] max-w-[200px]">
              <div className="absolute inset-0 bg-black border-[6px] border-gray-800 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                <div className="p-4 pt-10 h-full flex flex-col">
                  <div className="text-[10px] text-gray-500 mb-2 uppercase tracking-wider font-semibold text-center">
                    Select Mode
                  </div>
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-800/80 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(16,185,129,0.5)]"></div>{" "}
                      Short
                    </div>
                    <div className="p-2 bg-gray-800/80 rounded-lg text-[10px] text-gray-300 flex items-center gap-2 border border-white/5">
                      <div className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_5px_rgba(168,85,247,0.5)]"></div>{" "}
                      Detailed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative w-full aspect-[9/16] max-w-[220px]">
              <div className="absolute inset-0 bg-black border-[6px] border-gray-800 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                <div className="p-4 pt-10 h-full">
                  <div className="space-y-2">
                    <div className="p-2 bg-gray-900/80 border border-white/5 rounded-lg space-y-1.5">
                      <div className="text-[8px] bg-purple-500/10 text-purple-300 w-fit px-1.5 py-0.5 rounded border border-purple-500/20">
                        Note
                      </div>
                      <div className="h-1 w-full bg-gray-700/30 rounded-full"></div>
                      <div className="h-1 w-2/3 bg-gray-700/30 rounded-full"></div>
                    </div>
                    <div className="p-2 bg-gray-900/80 border border-white/5 rounded-lg space-y-1.5">
                      <div className="text-[8px] bg-green-500/10 text-green-300 w-fit px-1.5 py-0.5 rounded border border-green-500/20">
                        Annotation
                      </div>
                      <div className="h-1 w-full bg-gray-700/30 rounded-full"></div>
                      <div className="h-1 w-3/4 bg-gray-700/30 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="p-8 flex flex-col items-center text-center">
            <div className="relative w-full aspect-[9/16] max-w-[220px]">
              <div className="absolute inset-0 bg-black border-[6px] border-gray-800 rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-20"></div>
                <div className="p-4 pt-10 flex flex-col h-full justify-end pb-4 space-y-2">
                  <div className="bg-gray-800/80 backdrop-blur-md p-3 rounded-2xl rounded-bl-none text-[10px] text-gray-300 border border-white/5 shadow-sm">
                    Explain the concept of dopamine stacking?
                  </div>
                  <div className="bg-purple-900/20 border border-purple-500/30 p-3 rounded-t-xl rounded-br-xl text-[10px] text-purple-200">
                    Dopamine stacking is when you layer multiple sources of
                    stimulation...
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 2: Insight Modes */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-2 mb-40">
          <div className="flex-1 relative flex justify-center ">
            <Image
              src="/images/feature-image-01.webp"
              alt="App Store"
              width={2080}
              height={2080}
              className="w-820 h-260"
            />
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold text-white mb-4 border border-white">
              Insight Modes™
            </div> */}
            <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="Insight Modes™"
            >Insight Modes™</Button>
            <h2 className="text-[53.6701px] font-normal text-white mb-6 leading-tight">
              Summarize. Skip the Noise. <strong>Learn What Counts.</strong>{" "}
              <br />
            </h2>
            <p className="text-gray-100 text-[22.6666px] leading-relaxed">
              Instant takeaways and structured insights—so you save time and
              actually remember.
            </p>
          </div>
        </div>

        {/* Feature 3: Annotations */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-40">
          <div className="flex-1 relative flex justify-center">
            <Image
              src="/images/feature-image-02.webp"
              alt="App Store"
              width={2080}
              height={2080}
              className="w-820 h-260"
            />
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-bold text-white mb-4">
              Annotations™
            </div> */}
             <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="Annotations™"
            >Annotations™</Button>
               <h2 className="text-[53.6701px] font-normal text-white mb-6 leading-tight">
              From Passive Watching to <strong>Active Listening</strong>{" "}
              <br />
            </h2>
            <p className="text-gray-100 text-[22.6666px] leading-relaxed">
              Instantly capture ideas and effortlessly annotate videos in real
              time—without interrupting your flow.
            </p>
          </div>
        </div>

        {/* Feature 4: NoteVault */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 relative flex justify-center">
            <Image
              src="/images/feature-image-03.webp"
              alt="App Store"
              width={1040}
              height={740}
              className="w-620 h-260"
            />
          </div>
          <div className="flex-1 text-left">
            {/* <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-xs font-bold text-white mb-4">
              NoteVault™
            </div> */}
            <Button
              size="lg"
              className="text-xl font-bold text-white mb-4 border border-white h-12 px-4 rounded-4xl flex items-center gap-4 text-white"
              aria-label="NoteVault™"
            >NoteVault™</Button>
            <h2 className="text-[53.6701px] font-normal text-white mb-6 leading-tight">
              Retention for the 1%.
              <br />
            </h2>
            <p className="text-gray-100 text-[22.6666px] leading-relaxed mb-8">
              The Memory: Solves the "passive listening" problem. Your key
              takeaways are captured, organized, and always accessible.
            </p>
            <blockquote className="border-l-2 border-white/20 pl-4 italic text-gray-500 text-sm">
              "Tell me and I forget, teach me and I may remember, involve me and
              I learn." <br />— Benjamin Franklin
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
