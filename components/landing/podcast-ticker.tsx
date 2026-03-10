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
    <section className="py-0 bg-grey overflow-hidden">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        {/* Animated Heading */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white mb-2 sm:mb-4 px-4 font-semibold inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff] leading-[1.4]"
        >
          <div className="text-[20px] sm:text-[32px] md:text-[40px] lg:text-[50px] mt-1 md:mt-4 leading-tight inline-flex items-center justify-center whitespace-nowrap gap-2 sm:gap-3 lg:gap-4 flex-wrap sm:flex-nowrap">
            Crush Your Podcast Backlog
            <Image
              src="/images/heart.webp"
              alt="heart"
              width={76}
              height={76}
              className="inline-block w-6 h-6 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-[60px] lg:h-[60px] object-contain flex-shrink-0"
            />
          </div>
        </motion.h3>

        {/* Animated Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-[12px] sm:text-[18px] md:text-[24px] lg:text-[28px] leading-[1.2] text-[#dcdcdc] font-thin mx-auto px-4 mt-2 sm:mt-4"
        >
          The Intelligence Layer for High-Performers.
        </motion.p>
      </div>

      <div className="w-full bg-[#1c1b22] py-8 sm:py-12 lg:py-16 px-4 sm:px-8 border-y border-white/5">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10 lg:gap-8 justify-items-center">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-start group cursor-pointer w-full max-w-[125px] sm:max-w-[145px] md:max-w-[165px] lg:max-w-[220px]"
            >
              <div className="w-full aspect-square overflow-hidden relative shadow-xl border border-white/5 bg-black/50">
                <Image
                  src={podcast.image}
                  alt={podcast.name}
                  fill
                  sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="text-left w-full mt-2 sm:mt-3 px-1 sm:px-0">
                <span className="text-[9.5px] sm:text-[11.5px] md:text-[13px] lg:text-[15px] font-medium text-gray-200 block w-full whitespace-nowrap tracking-tighter sm:tracking-tight">
                  {podcast.name}
                </span>
                <span className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] text-gray-500 block w-full whitespace-nowrap tracking-tighter sm:tracking-tight mt-0.5">
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