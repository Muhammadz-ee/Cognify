"use client";

import { Container } from "@/components/ui/container";
import { motion } from "motion/react";
import Image from "next/image";

const podcasts = [
  {
    name: "The Mel Robbins Podcast",
    artist: "Mel Robbins",
    image: "/images/album-1.webp",
  },
  {
    name: "The Diary of a CEO",
    artist: "Steven Bartlett",
    image: "/images/album-2.webp",
  },
  {
    name: "Modern Wisdom",
    artist: "Chris Williamson",
    image: "/images/album-3.webp",
  },
  {
    name: "Huberman Lab",
    artist: "Andrew Huberman",
    image: "/images/album-5.webp",
  },
  {
    name: "The Joe Rogan Experience",
    artist: "Joe Rogan",
    image: "/images/album-4.webp",
  },
  {
    name: "The School of Greatness",
    artist: "Lewis Howes",
    image: "/images/final-art.webp",
  },
];

export function PodcastTicker() {
  return (
    <section className="py-2 bg-grey overflow-hidden">
      <div className="text-center mb-10">
        {/* Animated Heading */}
        <motion.h3
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-[30px] md:text-5xl text-white mb-4 font-semibold inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff] leading-[1.4]"
        >
          <div className="leading-[1.0]">Learn Smarter from</div>
          <div className="leading-[1.0]">the YouTube Content</div>
          <div className="leading-[1.0] inline-flex items-center whitespace-nowrap -mt-6">
            You Already Love
            <Image
              src="/images/heart.webp"
              alt="heart"
              width={76}
              height={76}
              className="inline-block w-12 h-12 md:w-[76px] md:h-[76px]"
            />
          </div>
        </motion.h3>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[clamp(18px,1.2vw,18px)] sm:text-[clamp(22px,1.4vw,28px)] leading-[1.03] text-[#dcdcdc] text-brown-200 font-thin mx-auto mt-4 md:mt-6"
        >
          DESIGNED FOR YOUR FOCUS, GROWTH, AND RETENTION.
        </motion.p>
      </div>

      <div className="w-full bg-[#2E2D31] p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1 sm:gap-2 md:gap-2 justify-items-center md:px-42">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-center gap-2 group cursor-pointer"
            >
              <div className="w-24 h-24 md:w-42 md:h-42 overflow-hidden relative border border-white/10 shadow-lg transition-transform duration-300 mx-auto">
                <Image
                  src={podcast.image}
                  alt={podcast.name}
                  width={168}
                  height={168}
                  sizes="(max-width:640px) 96px, (max-width:1024px) 168px, 168px"
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors block">
                  {podcast.name}
                </span>
                <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-100 transition-colors block mt-1">
                  {podcast.artist}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}