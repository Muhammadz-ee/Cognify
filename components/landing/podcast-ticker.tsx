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
      <div className="text-center mb-6 sm:mb-10">
        {/* Animated Heading */}
        <motion.h3
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-[30px] md:text-5xl text-white mb-2 sm:mb-4 font-semibold inline-block drop-shadow-none sm:[text-shadow:-1px_0_0_#00ffff,1px_0_0_#ff00ff] leading-[1.4]"
        >
          <div className="text-[20px] sm:text-[28px] md:text-[50px] mt-2 md:mt-4 leading-[1.0] inline-flex items-center whitespace-nowrap">
            Crush Your Podcast Backlog
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
          className="text-[clamp(16px,1.1vw,16px)] sm:text-[clamp(22px,1.4vw,28px)] leading-[1.03] text-[#dcdcdc] text-brown-200 font-thin mx-auto mt-4 md:mt-6"
        >
          The Intelligence Layer for High-Performers.
        </motion.p>
      </div>

      <div className="w-full bg-[#2E2D31] p-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-3 md:gap-3 justify-items-center md:px-42">
          {podcasts.map((podcast, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
              className="flex flex-col items-start group cursor-pointer w-24 md:w-42"
            >
              <div className="w-24 h-24 md:w-42 md:h-42 overflow-hidden relative transition-transform duration-300">
                <Image
                  src={podcast.image}
                  alt={podcast.name}
                  width={168}
                  height={168}
                  sizes="(max-width:640px) 96px, (max-width:1024px) 168px, 168px"
                  className="object-cover"
                />
              </div>
              <div className="text-left w-full">
                <span className="text-[10px] md:text-[14px] font-medium text-white transition-colors block truncate w-full">
                  {podcast.name}
                </span>
                <span className="text-[8px] md:text-[11px] text-gray-400 transition-colors block mt-0.5 truncate w-full">
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