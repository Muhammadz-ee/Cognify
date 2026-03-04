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
          <div className="max-w-4xl mx-auto text-center pt-12 sm:pt-16 md:pt-20 px-4 sm:px-6">
            <h2
              className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff]"
              data-text="Turn Any Video Into a Masterclass"
            >
              Cognify turns watching
              <br /> into learning.
            </h2>
            <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-300 max-w-[780px] mx-auto px-2 sm:px-0">
              Our mission is to help you unlock the power of technology to
              <br />{" "}
              <strong> actively listen—rather than passively consume.</strong>
            </p>

            <div className="mx-auto w-[280px] sm:w-[380px] md:w-[480px] lg:w-[580px] p-2 sm:p-4 mt-6 sm:mt-8 md:mt-10 flex items-center justify-center">
              <div className="relative aspect-square w-full flex items-center justify-center">
                <Image
                  src="/images/about-img.webp"
                  alt="sketch"
                  width={580}
                  height={580}
                  sizes="(max-width:480px) 280px, (max-width:640px) 380px, (max-width:1024px) 480px, 580px"
                  className="object-contain"
                />
              </div>
            </div>

            <p className="mt-4 sm:mt-6 md:mt-8 text-xs sm:text-sm md:text-base text-gray-400 max-w-[90%] sm:max-w-[80%] md:max-w-[60%] mx-auto italic px-2">
              It all started with a question: how can we learn better from what
              we watch? Cognify began as a scribble on paper — a simple idea to
              turn videos into actionable learning.
            </p>
          </div>
        </Container>

        <section className="mt-12 sm:mt-16 md:mt-20">
          <div className="w-full bg-gradient-to-r from-[#6f607a] via-[#2b2230] to-black py-12 sm:py-16 md:py-20 lg:py-24">
            <Container>
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-start lg:items-center gap-6 sm:gap-8 md:gap-10 px-3 sm:px-6">
                {/* Left column: big title - 30% */}
                <div className="sm:col-span-2 lg:col-span-1 flex items-center justify-center lg:justify-start">
                  <h2
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff] text-center lg:text-left"
                    data-text="Turn Any Video Into a Masterclass"
                  >
                    Our Why?
                  </h2>
                </div>

                {/* Right column: content + logo - 70% */}
                <div className="sm:col-span-2 lg:col-span-2 text-center lg:text-left">
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-100 max-w-full lg:max-w-[95%] mx-auto lg:mx-0 leading-relaxed px-2 sm:px-0">
                    Cognify is an AI-powered platform that transforms passive
                    video consumption into active learning.
                  </p>

                  <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start px-2 sm:px-0">
                    <Image
                      src="/images/site-logo.webp"
                      alt="Cognify"
                      width={280}
                      height={200}
                      className="w-[200px] sm:w-[240px] md:w-[280px] h-auto"
                    />
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-full lg:max-w-[95%] mx-auto lg:mx-0 leading-relaxed mt-6 sm:mt-8 md:mt-10 px-2 sm:px-0">
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

        <section className="py-12 sm:py-16 md:py-20 lg:py-24">
          <Container>
            <div className="max-w-4xl mx-auto text-center px-3 sm:px-6">
              <h3 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-semibold max-w-full sm:max-w-[95%] md:max-w-[90%] lg:max-w-[85%] mx-auto leading-tight sm:leading-[1.2] md:leading-[1.1]">
                Join us in transforming how you learn from videos.
              </h3>
              <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
                <div className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2 sm:px-0">
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
              <p className="mt-6 sm:mt-8 md:mt-10 text-[12px] xs:text-sm sm:text-base md:text-lg text-gray-200 px-2">
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
