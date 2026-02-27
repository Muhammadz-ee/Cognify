"use client";

import React from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface AppModalProps {
  isOpen: boolean;
  onClose: () => void;
  qrCode?: string;
}

export function AppModal({ isOpen, onClose, qrCode }: AppModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl mx-2 rounded-3xl bg-gradient-to-b from-slate-800 to-slate-900 p-6 sm:p-12 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-5 right-5 text-white hover:text-gray-300 transition-colors cursor-pointer"
        >
          <X className="w-7 h-7 sm:w-8 sm:h-8" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-10">
          Download the app
        </h2>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* LEFT COLUMN — QR CODE */}
          <div className="flex justify-center md:justify-center">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl">
              {qrCode ? (
                <Image
                  src={qrCode}
                  alt="QR Code"
                  width={240}
                  height={240}
                  className="w-44 h-44 sm:w-56 sm:h-56 object-contain"
                />
              ) : (
                <div className="w-44 h-44 sm:w-56 sm:h-56 bg-gray-200 flex items-center justify-center rounded-xl">
                  <span className="text-gray-500 text-sm">QR Code</span>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN — BUTTONS */}
          <div className="flex flex-col items-center justify-center gap-6">
            {/* App Store */}
            <Button
              size="lg"
              asChild
              className="
              w-full sm:w-80 md:w-64
              h-auto
              rounded-2xl
              flex items-center justify-center
              transition-all duration-300 hover:scale-105 active:scale-95
              bg-[#5b4a7a] hover:bg-[#4a3a67]
              text-white cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-[#6B5A90]
              px-4 py-4"
            >
              <a
                href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 w-full h-full"
              >
                <Image
                  src="/images/app-store.svg"
                  alt="App Store"
                  width={42}
                  height={42}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
                <div className="text-center">
                  <div className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider opacity-80">
                    Download for free
                  </div>
                  <div className="text-[16px] sm:text-[20px] font-bold leading-tight">
                    App Store
                  </div>
                </div>
              </a>
            </Button>

            {/* Google Play */}
            <Button
              size="lg"
              asChild
              className="
              w-full sm:w-80 md:w-64
              h-auto 
              rounded-2xl
              flex items-center justify-center
              transition-all duration-300 hover:scale-105 active:scale-95
              bg-[#5b4a7a] hover:bg-[#4a3a67]
              text-white cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-[#6B5A90]
              px-4 py-4"
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.cognifyai.mobile"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-4 w-full h-full"
              >
                <Image
                  src="/images/play-store.svg"
                  alt="Google Play"
                  width={42}
                  height={42}
                  className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
                />
                <div className="text-center">
                  <div className="text-[11px] sm:text-[13px] font-semibold uppercase tracking-wider opacity-80">
                    Download for free
                  </div>
                  <div className="text-[16px] sm:text-[20px] font-bold leading-tight">
                    Google Play
                  </div>
                </div>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
