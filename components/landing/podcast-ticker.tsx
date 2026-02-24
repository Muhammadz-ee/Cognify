"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";

const podcasts = [
  {
    name: "The Mel Robbins Podcast",
    artist: "Mel Robbins",
    image: "/images/album-1.webp",
  },
  {
    name: "Huberman Lab",
    artist: "Andrew Huberman",
    image: "/images/album-2.webp",
  },
  {
    name: "Feel Better, Live More",
    artist: "Dr Rangan Chatterjee",
    image: "/images/album-3.webp",
  },
  {
    name: "The Diary Of A CEO",
    artist: "Steven Bartlett",
    image: "/images/album-5.webp",
  },
  {
    name: "Lex Fridman Podcast",
    artist: "Lex Fridman",
    image: "/images/album-4.webp",
  },
];

export function PodcastTicker() {
  return (
    <section className="py-2 bg-grey overflow-hidden">
      <div>
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 rgb-text leading-[0.95]">
            Learn Smarter from the <br />
            YouTube Content <br />
            You Already Love
            <span className="inline-block ml-2 text-purple-400">🤍</span>
          </h3>  <br />  <br />
          <p className="body-text text-gray-400 max-w-2xl mx-auto">
            DESIGNED FOR YOUR FOCUS, GROWTH, AND RETENTION.
            <br />
          </p>
        </div>

        <div className="w-full bg-[#2E2D31] p-8">
          <div className="flex flex-wrap gap-6 sm:gap-8 md:gap-12 justify-center">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="flex flex-col items-left gap-4 group cursor-pointer"
              >
                <div className="w-28 h-28 md:w-48 md:h-48 overflow-hidden relative border border-white/10 shadow-lg transition-transform duration-300 ">
                  <Image
                    src={podcast.image}
                    alt={podcast.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <span className="text-xs md:text-sm font-medium text-gray-300 group-hover:text-white transition-colors block">
                    {podcast.name}
                  </span>
                  <span className="text-xs md:text-sm text-gray-400 group-hover:text-gray-100 transition-colors block mt-1">
                    {podcast.artist}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
