"use client";

import { Container } from "@/components/ui/container";
import Image from "next/image";

const podcasts = [
  { name: "The Mel Robbins Podcast", image: "/images/album-1.webp" },
  { name: "Modern Wisdom", image: "/images/album-2.webp" },
  { name: "Feel Better, Live More", image: "/images/album-3.webp" },
  { name: "The School of Greatness", image: "/images/album-4.webp" },
  { name: "The Diary Of A CEO", image: "/images/album-5.webp" },
];

export function PodcastTicker() {
  return (
    <section className="py-2 bg-grey overflow-hidden">
      <Container>
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-6xl font-bold text-white mb-2">
            Learn Smarter from the <br />
            YouTube Content <br />
            You Already Love
            <span className="inline-block ml-2 text-purple-400">💜</span>
          </h3>
          <p className="text-lg font-bold tracking-[0.2em] text-gray-500 uppercase mt-4">
            Designed for your focus, growth, and retention.
          </p>
        </div>

        <div className="w-full bg-[#2E2D32] rounded-lg p-8">
          <div className="flex flex-wrap gap-8 justify-center">
            {podcasts.map((podcast, index) => (
              <div key={index} className="flex flex-col items-center gap-4 group cursor-pointer">
          <div className="w-28 h-28 md:w-46 md:h-46 overflow-hidden relative border border-white/10 shadow-lg transition-transform duration-300 ">
            <Image
              src={podcast.image}
              alt={podcast.name}
              fill
              className="object-cover"
            />
          </div>
          <div className="text-center max-w-[120px]">
            <span className="text-[10px] md:text-xs font-medium text-gray-500 group-hover:text-white transition-colors block">
              {podcast.name}
            </span>
            <span className="text-[9px] md:text-xs text-gray-600 group-hover:text-gray-400 transition-colors block mt-1">
              Artist Name
            </span>
          </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
