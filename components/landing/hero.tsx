"use client";

import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { motion } from "motion/react";
import Image from "next/image";
import {
  Star,
  ArrowLeft,
  Bookmark,
  Share2,
  MoreHorizontal,
  Volume2,
  VolumeX,
} from "lucide-react";
import React, { useRef, useState } from "react";
import { AppModal } from "@/components/ui/app-modal";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  // playing state no longer needed since there is no play/pause control
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // helper in case we want to toggle by clicking the video container
  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
  };

  const onTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress((v.currentTime / v.duration) * 100);
  };

  // continuous update using requestAnimationFrame for very smooth slider motion
  React.useEffect(() => {
    let frame: number;
    const loop = () => {
      const v = videoRef.current;
      if (v && v.duration) {
        setProgress((v.currentTime / v.duration) * 100);
      }
      frame = requestAnimationFrame(loop);
    };
    frame = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frame);
  }, []);

  const onSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const val = Number(e.target.value);
    v.currentTime = (val / 100) * v.duration;
    setProgress(val);
  };
  return (
    <section className="relative md:pt-15 pb-1 overflow-hidden bg-black">
      <Container>
        <div className="flex flex-col items-center text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-1 sm:mb-4"
          >
            <h1 className="text-[40px] sm:text-[64px] md:text-[100px] lg:text-[144.048px] font-black tracking-wider text-white mb-2 sm:mb-4 uppercase leading-[1.04] font-monument">
              PODCASTS <br /> DISTILLED
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12px] sm:text-[clamp(24px,2.0vw,54px)] leading-[1.2] sm:leading-[1.03] text-[#ad9ad6] font-bold mb-4 sm:mb-10 mx-auto text-center px-4 max-w-[95%] md:max-w-[95%]"
          >
            Turn long podcasts into a Personal Masterclass. Instantly distill
            hours of content into 3, 15, or custom-minute highlights.
            <br />
            <span className="text-[12px] sm:text-[clamp(24px,2.0vw,54px)] text-white block mt-0.5 sm:mt-2">
              Finish a 3-hour podcast while you brew your coffee.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row justify-center w-full gap-2 sm:gap-6 mt-0 mb-[-12px] sm:-mb-70 z-30 px-2 sm:px-4"
          >
            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="h-auto py-1.5 sm:py-0 sm:h-22 
              w-auto px-2 sm:px-6 
              rounded-[10px] sm:rounded-2xl 
              flex items-center justify-center sm:justify-start 
              gap-2 sm:gap-4 
              transition-all hover:scale-105 active:scale-95
              bg-[#5b4a7a] hover:bg-[#4a3a67] 
              text-white cursor-pointer 
              focus:outline-none focus:ring-2 focus:ring-[#6B5A90]"
            >
              <Image
                src="/images/3.png"
                alt="App Store"
                width={46}
                height={46}
                className="w-4 h-4 sm:w-8 sm:h-8"
              />
              <div className="text-left">
                <div className="text-[6px] sm:text-[18px] font-bold uppercase tracking-wider opacity-90 leading-tight">
                  Try for free
                </div>
              </div>
            </Button>

            {/* Modal */}
            <AppModal isOpen={showModal} onClose={() => setShowModal(false)} />
          </motion.div>

          {/* Video Replacement for Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="relative w-[100%] -ml-[2.5%] sm:w-full sm:ml-0 -mt-26 sm:mt-0 max-w-[1320px] mx-auto mb-4 sm:mb-2 z-10 px-0 sm:px-4"
          >
            {/* Decorative background thumbnails behind the phone mockup */}
            <div className="absolute inset-x-0 top-[26%] sm:top-[25%] md:top-50 lg:top-110 flex justify-center z-0 pointer-events-none">
              <div className="flex gap-2 sm:gap-2 md:gap-3 lg:gap-4 items-center opacity-30 brightness-75 md:opacity-60 md:brightness-100 transform -translate-y-6">
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-1.webp"
                    alt="Mel Robbins"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[38px] h-[38px] sm:w-[75px] sm:h-[75px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left w-[38px] sm:w-[75px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      The Mel Robbins Podcast
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Mel Robbins
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-2.webp"
                    alt="The Diary of a CEO"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover -mr-1"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      The Diary of a CEO
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Steven Bartlett
                    </span>
                  </div>
                </div>

                {/* Spacer for the center video to shine through */}
                <div className="w-[215px] sm:w-[220px] md:w-[280px] lg:w-[620px]"></div>

                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-4.webp"
                    alt="The Joe Rogan Experience"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover -ml-1"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      The Joe Rogan Experience
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Joe Rogan
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-5.webp"
                    alt="Huberman Lab"
                    width={220}
                    height={220}
                    className="rounded-[8px] md:rounded-3xl shadow-2xl border border-gray-900 md:border-2 w-[38px] h-[38px] sm:w-[75px] sm:h-[75px] md:w-32 md:h-32 lg:w-[220px] lg:h-[220px] object-cover"
                  />
                  <div className="text-left w-[38px] sm:w-[75px] md:w-auto md:max-w-[220px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[15px] font-bold text-white block truncate">
                      Huberman Lab
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[13px] text-gray-400 block mt-0 md:mt-1 truncate">
                      Andrew Huberman
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*
              NOTE: Replace the `src` below with the actual hero video file placed under `public/videos/`.
            */}
            <div className="relative overflow-hidden border-none group h-[800px] sm:h-[650px] md:h-[820px] lg:h-[1950px] w-full mx-auto">
              <video
                ref={videoRef}
                src="/videos/main-asset.webm"
                autoPlay
                loop
                muted={muted}
                playsInline
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onTimeUpdate}
                className="w-full h-full object-cover object-center pointer-events-none"
              />

              {/* Overlay: Try For Free + Testimonial bottom-center on video */}
              <div className="absolute bottom-0 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20 w-full px-4 flex flex-col items-center gap-3 sm:gap-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent pt-12 pb-6 sm:bg-none sm:pt-0 sm:pb-0">
                <div className="text-center">
                  <h3 className="text-[20px] sm:text-4xl md:text-[3rem] font-bold tracking-tight mb-1 text-white">
                    Try For{" "}
                    <span className="text-purple-300 relative inline-block">
                      <span className="relative z-10">Free</span>
                    </span>
                  </h3>
                  <p className="mt-6 text-[12px] sm:text-[18px] md:text-[24px] font-bold tracking-[0.12em] uppercase text-gray-200 leading-[1.03]">
                    7 DAY FREE TRIAL - CANCEL ANY TIME
                  </p>
                </div>

                <div className="mt-2 mb-6 sm:mt-16 relative z-10 max-w-4xl mx-auto flex flex-row items-center justify-center gap-3 sm:gap-6 md:gap-10">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex bg-white rounded-full p-1.5 pr-3 sm:p-3 sm:pr-8 items-center gap-1.5 sm:gap-4 shadow-2xl scale-100">
                      <div className="w-[24px] h-[24px] sm:w-[64px] sm:h-[64px] rounded-full bg-gray-200 overflow-hidden relative border border-purple-500/60 flex-shrink-0">
                        <Image
                          src="/images/testimonial.webp"
                          alt="Sam"
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="flex gap-0.5 sm:gap-1 text-[#ad9ad6] sm:text-purple-300">
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                        <Star className="w-3.5 h-3.5 sm:w-8 sm:h-8 md:w-12 md:h-12 fill-current" />
                      </div>
                    </div>

                    <div className="mt-1 sm:mt-2 text-[8px] sm:text-xs md:text-sm font-extrabold text-[#ad9ad6] sm:text-purple-300 tracking-widest">
                      SAM D.
                    </div>
                  </div>

                  <p className="text-[9px] sm:text-sm md:text-lg lg:text-xl font-extrabold italic text-white text-left max-w-[130px] sm:max-w-2xl leading-[1.3] drop-shadow-md lg:drop-shadow-none">
                    “FINALLY, AN APP THAT HELPS ME ACTUALLY REMEMBER WHAT I
                    WATCH.”
                  </p>
                </div>
              </div>

              {/* Bottom playback controls (dark strip) */}
              <div className="absolute left-0 right-0 bottom-0 z-30 px-4 py-4 bg-gradient-to-t from-black/95 to-transparent opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200">
                <div className="max-w-[1320px] mx-auto flex items-center gap-4">
                  {/* progress track with dynamic white fill */}
                  <input
                    aria-label="Seek"
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={onSeek}
                    className="flex-1 h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.3) ${progress}%)`,
                    }}
                  />

                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-white"
                  >
                    {muted ? (
                      <VolumeX className="w-5 h-5" />
                    ) : (
                      <Volume2 className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
      <style jsx>{`
        input[type="range"] {
          -webkit-appearance: none;
          background: transparent;
        }
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 50%;
          margin-top: -6px;
          cursor: pointer;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 50%;
          cursor: pointer;
          box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
        }
        input[type="range"]::-webkit-slider-runnable-track {
          height: 4px;
          border-radius: 2px;
          transition: background 0.1s linear;
        }
        input[type="range"]::-moz-range-track {
          height: 4px;
          border-radius: 2px;
          transition: background 0.1s linear;
        }
      `}</style>
      <AppModal isOpen={showModal} onClose={() => setShowModal(false)} qrCode="/images/qrcode.png" />
    </section>
  );
}
