"use client";

import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import React from "react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { motion } from "motion/react";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center pt-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-4 text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Turn Any Video Into a Masterclass"
            >
              Cognify turns watching
              <br /> into learning.
            </h2>
            <p className="mt-6 text-md sm:text-base text-gray-300 max-w-[780px] mx-auto w-[80%]">
              Our mission is to help you unlock the power of technology to
              <br />{" "}
              <strong> actively listen—rather than passively consume.</strong>
            </p>

            <div className="mx-auto w-[380px] sm:w-[480px] md:w-[580px] p-4">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/about-img.webp"
                  alt="sketch"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-2 text-xs sm:text-sm text-white-400 max-w-[80%] md:max-w-[50%] mx-auto italic">
              It all started with a question: how can we learn better from what
              we watch? Cognify began as a scribble on paper — a simple idea to
              turn videos into actionable learning.
            </p>
          </div>
        </Container>

        <section className="mt-20">
          <div className="w-full bg-gradient-to-r from-[#6f607a] via-[#2b2230] to-black py-20">
            <Container>
              <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-8">
                {/* Left column: big title - 30% */}
                <div className="md:col-span-1 px-6 md:px-0 flex items-center justify-center md:justify-start">
                  <h2
                    className="text-4xl md:text-5xl font-bold mb-4 text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff] text-center md:text-left"
                    data-text="Turn Any Video Into a Masterclass"
                  >
                    Our Why?
                  </h2>
                </div>

                {/* Right column: content + logo - 70% */}
                <div className="md:col-span-2 px-6 md:px-0 text-center md:text-left">
                  <p className="text-lg sm:text-xl md:text-2xl text-gray-100 max-w-[80%] mx-auto md:mx-0 w-full leading-relaxed">
                    Cognify is an AI-powered platform that transforms passive
                    video consumption into active learning.
                  </p>

                  <div className="mt-8 flex justify-left md:justify-left">
                    <Image
                      src="/images/site-logo.webp"
                      alt="Cognify"
                      width={280}
                      height={200}
                    />
                  </div>

                  <p className="text-xl mt-8 text-gray-300 max-w-[82%] mx-auto md:mx-0 leading-relaxed">
                    The name Cognify blends 'Cognition' and 'Amplify'—reflecting
                    our mission to enhance learning through technology. Our logo
                    represents the flow of information and insight, symbolizing
                    how we transform raw video content into structured
                    knowledge.
                  </p>
                </div>
              </div>
            </Container>
          </div>
        </section>

        <section className="py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-4xl sm:text-5xl font-semibold w-[65%] mx-auto leading-[1.1]">
                Join us in transforming how you learn from videos.
              </h3>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2">
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
                </div>
              </div>
              <p className="mt-8 text-[10px] md:text-[16px] text-gray-200">
                🎧 Smarter listening starts today — Download now.
              </p>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
