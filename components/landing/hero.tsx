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

  const handleDownloadClick = () => {
    // Detect if mobile
    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
      userAgent.toLowerCase()
    );

    if (isMobile) {
      // Detect OS
      const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
      const isAndroid = /android/i.test(userAgent.toLowerCase());

      if (isIOS) {
        // Open Apple App Store
        window.location.href =
          "https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398";
      } else if (isAndroid) {
        // Open Google Play Store
        window.location.href =
          "https://play.google.com/store/apps/details?id=com.cognifyai.mobile";
      }
    } else {
      // Desktop - show modal
      setShowModal(true);
    }
  };

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
            <h1 className="text-[36px] xs:text-[40px] sm:text-[48px] md:text-[80px] lg:text-[120px] xl:text-[144.048px] font-black tracking-wider text-white mb-1 xs:mb-2 sm:mb-3 md:mb-4 uppercase leading-[1.04] font-monument">
              PODCASTS <br /> DISTILLED
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[20px] lg:text-[30px] xl:text-[44px] leading-[1.2] sm:leading-[1.15] md:leading-[1.08] lg:leading-[1.03] text-[#ad9ad6] font-bold mb-3 xs:mb-4 sm:mb-6 md:mb-8 lg:mb-10 mx-auto text-center px-3 xs:px-4 sm:px-4 max-w-[100%] md:max-w-[100%] relative z-20"
          >
            Turn any podcast into custom-length highlights.
            <br />
            <span className="text-[12px] xs:text-[14px] sm:text-[16px] md:text-[20px] lg:text-[30px] xl:text-[44px] text-white block mt-2 xs:mt-2.5 sm:mt-3 md:mt-4 lg:mt-5 w-[80%] mx-auto">
              Master hours of content in the time it takes to brew your coffee.
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-row justify-center w-full gap-2 sm:gap-6 mt-0 mb-0 z-30 px-2 sm:px-4"
          >
            <Button
              onClick={handleDownloadClick}
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
            className="relative w-full ml-0 max-w-[1320px] mx-auto -mt-[80px] md:-mt-[280px] mb-0 z-10 px-0 sm:px-4"
          >
            {/* Decorative background thumbnails behind the phone mockup */}
            <div className="absolute inset-x-0 top-[26%] sm:top-[25%] md:top-50 lg:top-110 flex justify-center z-30 pointer-events-none">
              <div className="flex gap-2 sm:gap-2 md:gap-4 lg:gap-6 items-start opacity-30 brightness-75 md:opacity-60 md:brightness-100 transform -translate-y-6">
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-1.webp"
                    alt="Mel Robbins"
                    width={220}
                    height={220}
                    sizes="(max-width:640px) 100px, (max-width:1024px) 128px, 220px"
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[240px] lg:h-[240px] object-cover"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-[140px] md:max-w-[240px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[13px] lg:text-[15px] font-bold text-gray-200 block truncate">
                      Mel Robbins Podcast
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[11px] lg:text-[13px] text-gray-500 block mt-0 md:mt-1 truncate">
                      Mel Robbins
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-3.webp"
                    alt="Modern Wisdom"
                    width={220}
                    height={220}
                    sizes="(max-width:640px) 100px, (max-width:1024px) 128px, 220px"
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[240px] lg:h-[240px] object-cover"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-[140px] md:max-w-[240px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[13px] lg:text-[15px] font-bold text-gray-200 block truncate">
                      Modern Wisdom
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[11px] lg:text-[13px] text-gray-500 block mt-0 md:mt-1 truncate">
                      Chris Williamson
                    </span>
                  </div>
                </div>

                {/* Spacer for the center video to shine through */}
                <div className="w-[120px] sm:w-[220px] md:w-[520px] lg:w-[720px]"></div>

                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-2.webp"
                    alt="The Diary of a CEO"
                    width={220}
                    height={220}
                    sizes="(max-width:640px) 100px, (max-width:1024px) 128px, 220px"
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[240px] lg:h-[240px] object-cover"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-[140px] md:max-w-[240px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[13px] lg:text-[15px] font-bold text-gray-200 block truncate">
                      The Diary of a CEO
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[11px] lg:text-[13px] text-gray-500 block mt-0 md:mt-1 truncate">
                      Steven Bartlett
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1 md:gap-3">
                  <Image
                    src="/images/album-4.webp"
                    alt="The School of Greatness"
                    width={220}
                    height={220}
                    sizes="(max-width:640px) 100px, (max-width:1024px) 128px, 220px"
                    className="rounded-[8px] md:rounded-3xl shadow-xl border border-gray-900 md:border-2 w-[50px] h-[50px] sm:w-[100px] sm:h-[100px] md:w-[140px] md:h-[140px] lg:w-[240px] lg:h-[240px] object-cover"
                  />
                  <div className="text-left w-[50px] sm:w-[100px] md:w-[140px] md:max-w-[240px]">
                    <span className="text-[5px] sm:text-[8px] md:text-[13px] lg:text-[15px] font-bold text-gray-200 block truncate">
                      The School of Greatness
                    </span>
                    <span className="text-[4.5px] sm:text-[7px] md:text-[11px] lg:text-[13px] text-gray-500 block mt-0 md:mt-1 truncate">
                      Lewis Howes
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/*
              NOTE: Replace the `src` below with the actual hero video file placed under `public/videos/`.
            */}
            <div className="relative overflow-hidden border-none group h-[80vh] sm:h-[120vh] md:h-[160vh] lg:h-[220vh] w-full mx-auto z-20">
              <video
                ref={videoRef}
                src="/videos/main-asset.webm"
                autoPlay
                loop
                muted={muted}
                playsInline
                onTimeUpdate={onTimeUpdate}
                onLoadedMetadata={onTimeUpdate}
                className="w-full h-full object-cover object-center pointer-events-none relative z-0"
              />

              {/* Overlay: Try For Free + Testimonial bottom-center on video */}
              <div className="absolute inset-x-0 bottom-[10%] sm:bottom-20 z-30 flex flex-col items-center gap-3 sm:gap-6 px-4 pointer-events-none">
                <div className="text-center">
                  <h3 className="text-[20px] sm:text-5xl md:text-[3.5rem] font-bold tracking-tight mb-0 text-white leading-none">
                    Try For <span className="text-[#b292ff]">Free</span>
                  </h3>
                  <p className="mt-1 sm:mt-4 text-[8px] sm:text-[15px] md:text-[20px] font-bold tracking-[0.1em] sm:tracking-[0.12em] uppercase text-gray-200 leading-[1.03]">
                    7 DAY FREE TRIAL - CANCEL ANY TIME
                  </p>
                </div>

                <div className="mt-2 sm:mt-12 relative z-10 max-w-4xl mx-auto flex flex-row items-center justify-center gap-2 sm:gap-6 md:gap-8">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex bg-white rounded-full p-1.5 pr-3 sm:p-3 sm:pr-8 items-center gap-1.5 sm:gap-4 shadow-2xl scale-100">
                      <div className="w-[24px] h-[24px] sm:w-[56px] sm:h-[56px] rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
                        <Image
                          src="/images/testimonial.webp"
                          alt="Sam"
                          width={56}
                          height={56}
                          className="object-cover grayscale"
                        />
                      </div>

                      <div className="flex gap-0.5 sm:gap-1 text-[#b292ff]">
                        <Star className="w-3 h-3 sm:w-8 sm:h-8 fill-current" />
                        <Star className="w-3 h-3 sm:w-8 sm:h-8 fill-current" />
                        <Star className="w-3 h-3 sm:w-8 sm:h-8 fill-current" />
                        <Star className="w-3 h-3 sm:w-8 sm:h-8 fill-current" />
                        <Star className="w-3 h-3 sm:w-8 sm:h-8 fill-current" />
                      </div>
                    </div>

                    <div className="mt-1 text-[8px] sm:text-sm font-extrabold text-[#b292ff] tracking-widest uppercase">
                      SAM D.
                    </div>
                  </div>

                  <p className="text-[8px] sm:text-sm md:text-lg lg:text-xl font-extrabold italic text-white text-left max-w-[140px] sm:max-w-xs md:max-w-md leading-tight drop-shadow-md lg:drop-shadow-none">
                    “FINALLY, AN APP THAT HELPS ME<br className="hidden sm:block" /> ACTUALLY REMEMBER WHAT I WATCH.”
                  </p>
                </div>
              </div>

              {/* Bottom playback controls (dark strip) */}
              <div className="absolute inset-x-0 bottom-4 sm:bottom-4 z-30 px-4 py-2 pointer-events-none group-hover:opacity-100 transition-opacity duration-200">
                <div className="max-w-[1320px] mx-auto flex items-center gap-2 sm:gap-4 pointer-events-auto">
                  {/* progress track with dynamic white fill */}
                  <input
                    aria-label="Seek"
                    type="range"
                    min={0}
                    max={100}
                    value={progress}
                    onChange={onSeek}
                    className="flex-1 h-[2px] sm:h-1 rounded-full appearance-none cursor-pointer"
                    style={{
                      background: `linear-gradient(to right, white ${progress}%, rgba(255,255,255,0.2) ${progress}%)`,
                    }}
                  />

                  <button
                    onClick={toggleMute}
                    aria-label={muted ? "Unmute" : "Mute"}
                    className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                  >
                    {muted ? (
                      <VolumeX className="w-3 h-3 sm:w-4 sm:h-4 stroke-2" />
                    ) : (
                      <Volume2 className="w-3 h-3 sm:w-4 sm:h-4 stroke-2" />
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
      <AppModal isOpen={showModal} onClose={() => setShowModal(false)} qrCode="/images/website-qr.webp" />
    </section>
  );
}
