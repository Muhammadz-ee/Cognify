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
          <p className="text-light text-lg md:text-xl max-w-2xl mx-auto">
            Summarize key points, take organized notes, and get Al-
            poweredanswers-so you don't just watch, you truly learn.
          </p>

          <div className="flex justify-center gap-4 mt-8">
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
          </div>
        </div>

        {/* Feature 1: Three Phones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
          {/* Card 1 */}
          <div className="bg-gray-900/50 border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              Key Moments™: Distill in Minutes.
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              The Speed: Proves you can finish a 3-hour podcast while brewing
              coffee.
            </p>
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
          <div className="bg-gray-900/50 border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              NoteVault™: Retention for the 1%.
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              The Memory: Solves the "passive listening" problem.
            </p>
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
          <div className="bg-gray-900/50 border border-white/5 rounded-3xl p-8 flex flex-col items-center text-center">
            <h3 className="text-xl font-bold mb-2 text-white">
              AI Assistant: Ask Anything, Instantly.
            </h3>
            <p className="text-sm text-gray-400 mb-8">
              The Interaction: Real-time Q&A without rewinding.
            </p>
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
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-40">
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-[320px] h-[640px] border-gray-800 bg-black border-[12px] rounded-[3.5rem] shadow-2xl shadow-purple-900/10 overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
              <div className="absolute inset-0 bg-gray-900">
                <div className="h-1/2 bg-gray-800 relative">
                  <Image
                    src="https://picsum.photos/seed/vid1/400/300"
                    alt="Cognify AI Insight Modes interface"
                    fill
                    className="object-cover opacity-50"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                </div>
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gray-900 border-t-2 border-gray-800 p-6 rounded-t-[2rem]">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-white font-bold text-lg">
                      In this video
                    </h4>
                  </div>

                  <div className="space-y-3">
                    {/* Key Moments Tab */}
                    <div className="flex border-b border-gray-800 mb-6">
                      <div className="flex-1 pb-2 text-center text-purple-400 border-b-2 border-purple-500 font-medium text-xs">
                        Key Moments
                      </div>
                      <div className="flex-1 pb-2 text-center text-gray-600 font-medium text-xs">
                        Highlights
                      </div>
                    </div>

                    {/* Recommended Option */}
                    <div className="relative p-4 bg-gradient-to-br from-purple-900/40 to-gray-900 rounded-2xl border border-purple-500/30">
                      <div className="absolute -top-3 right-4 bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg flex items-center gap-1">
                        <span>★</span> RECOMMENDED
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-purple-500 flex items-center justify-center shrink-0">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <div>
                          <div className="text-white font-bold text-sm">
                            15 Min
                          </div>
                          <div className="text-gray-400 text-[10px]">
                            Your podcast → 15 min of highlights
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Other Options */}
                    <div className="p-4 bg-gray-800/50 rounded-2xl border border-white/5 flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-pink-500 flex items-center justify-center shrink-0">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm">
                          3 Min
                        </div>
                        <div className="text-gray-400 text-[10px]">
                          Your podcast → 3 min of highlights
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-800/50 rounded-2xl border border-white/5 flex items-center gap-4 opacity-50">
                      <div className="w-10 h-10 rounded-xl bg-gray-700 flex items-center justify-center shrink-0">
                        <span className="text-xs font-bold text-gray-400">
                          Full
                        </span>
                      </div>
                      <div>
                        <div className="text-gray-300 font-bold text-sm">
                          Full Length
                        </div>
                        <div className="text-gray-500 text-[10px]">
                          Play full episode
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-xs font-bold text-white mb-4">
              Insight Modes™
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Summarize Your Way. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-green">
                The Depth.
              </span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Shows the choice between Short, Detailed, or Takeaway.
            </p>
          </div>
        </div>

        {/* Feature 3: Annotations */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-40">
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-[320px] h-[640px] border-gray-800 bg-black border-[12px] rounded-[3.5rem] shadow-2xl shadow-green-900/10 overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
              <div className="absolute inset-0 bg-gray-900 flex flex-col">
                <div className="h-1/3 bg-gray-800 relative">
                  <Image
                    src="https://picsum.photos/seed/vid2/400/300"
                    alt="Cognify AI Annotations interface"
                    fill
                    className="object-cover opacity-50"
                  />
                </div>
                <div className="flex-1 p-5 bg-black flex flex-col justify-between overflow-hidden">
                  <div className="flex gap-6 mb-4 border-b border-white/10 relative">
                    <span className="text-gray-500 text-xs pb-3 font-medium cursor-pointer hover:text-white transition-colors">
                      Notes
                    </span>
                    <span className="text-green-400 text-xs font-bold pb-3 relative">
                      Annotations
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                    </span>
                  </div>

                  <div className="space-y-4 overflow-hidden relative flex-1">
                    <div className="bg-gray-900/50 p-3 rounded-2xl rounded-tl-none border border-white/5 relative group animate-in fade-in slide-in-from-bottom-4 duration-700">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-mono font-bold">
                          02:14
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Great point about making decisions despite fear. This
                        really resonates with my current situation.
                      </p>
                    </div>

                    <div className="bg-gray-900/50 p-3 rounded-2xl rounded-tl-none border border-white/5 relative group animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[10px] bg-green-500/10 text-green-400 border border-green-500/20 px-1.5 py-0.5 rounded font-mono font-bold">
                          02:55
                        </span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        Need to research this topic more—could be useful for the
                        upcoming presentation.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 mt-4 px-1 opacity-50">
                      <span className="text-[10px] bg-green-500/5 text-green-500/40 px-1.5 py-0.5 rounded font-mono">
                        09:35
                      </span>
                      <span className="text-xs text-gray-600 italic">
                        Write your annotation here...
                      </span>
                    </div>

                    <div className="flex items-center gap-2 px-1 opacity-30">
                      <span className="text-[10px] bg-green-500/5 text-green-500/40 px-1.5 py-0.5 rounded font-mono">
                        11:13
                      </span>
                      <span className="text-xs text-gray-600 italic">
                        Write your annotation here...
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 relative group">
                    <div className="absolute right-3 bottom-3 text-gray-600 group-hover:text-green-400 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 3h6v6" />
                        <path d="M10 14 21 3" />
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                      </svg>
                    </div>
                    <div className="w-full bg-gray-900 border border-white/10 rounded-xl p-3 h-20"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-xs font-bold text-white mb-4">
              Annotations™
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              From Passive Watching to{" "}
              <span className="italic font-serif">Active Listening</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Instantly capture ideas and effortlessly annotate videos in real
              time—without interrupting your flow.
            </p>
          </div>
        </div>

        {/* Feature 4: NoteVault */}
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
          <div className="flex-1 relative flex justify-center">
            <div className="relative w-[320px] h-[640px] border-gray-800 bg-black border-[12px] rounded-[3.5rem] shadow-2xl shadow-blue-900/10 overflow-hidden ring-1 ring-white/10">
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
              <div className="absolute inset-0 bg-black p-5 pt-12 flex flex-col">
                <div className="w-full h-10 bg-gray-900/80 backdrop-blur-sm rounded-full mb-6 flex items-center px-4 gap-2 border border-white/10 shadow-lg shadow-purple-900/5">
                  <svg
                    className="w-3 h-3 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <span className="text-[10px] text-gray-500 font-medium tracking-wide">
                    Search for a note or annotation...
                  </span>
                  <div className="ml-auto text-gray-600">
                    <svg
                      className="w-3 h-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 space-y-3 overflow-hidden relative mask-linear-fade-bottom">
                  {/* Item 1 */}
                  <div className="bg-gray-900/30 p-3 rounded-2xl border border-white/5 hover:border-purple-500/30 hover:bg-gray-900/50 transition-all cursor-pointer group">
                    <div className="text-[9px] text-green-500/70 mb-2 truncate font-medium bg-green-900/10 w-fit px-1.5 rounded">
                      Gabor Mate: The Childhood lie That's Ruining All of our
                      lives
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] bg-purple-500/10 text-purple-300 border border-purple-500/20 px-1.5 py-0.5 rounded font-bold">
                        Note
                      </span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-3 h-3 text-gray-400 hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed font-serif italic opacity-90">
                      If we were often criticized as children, we internalize
                      that pattern and start judging ourselv...
                    </p>
                  </div>

                  {/* Item 2 */}
                  <div className="bg-gray-900/30 p-3 rounded-2xl border border-white/5 hover:border-green-500/30 hover:bg-gray-900/50 transition-all cursor-pointer group">
                    <div className="text-[9px] text-green-500/70 mb-2 truncate font-medium bg-green-900/10 w-fit px-1.5 rounded">
                      Why You Procrastinate and How to Stop
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] bg-green-500/10 text-green-300 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">
                        Annotation
                      </span>
                      <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <svg
                          className="w-3 h-3 text-gray-400 hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed font-serif italic opacity-90">
                      "Procrastination isn't laziness, it's emotional
                      regulation."
                    </p>
                    <div className="mt-2 text-[9px] text-gray-600 text-right font-mono">
                      Dec 25, 2024
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="bg-gray-900/30 p-3 rounded-2xl border border-white/5 opacity-40">
                    <div className="text-[9px] text-green-500/70 mb-2 truncate font-medium bg-green-900/10 w-fit px-1.5 rounded">
                      The Power of Solitude: Why Being Alone is Good...
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[9px] bg-green-500/10 text-green-300 border border-green-500/20 px-1.5 py-0.5 rounded font-bold">
                        Annotation
                      </span>
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed font-serif italic opacity-90">
                      If we were often criticized as children...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 text-left">
            <div className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-xs font-bold text-white mb-4">
              NoteVault™
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Retention for the 1%.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
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
