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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-[520px] rounded-[24px] bg-[#101317] p-8 sm:p-10 shadow-2xl flex flex-col items-center border border-[#6B5A90]/30">
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 text-purple-300 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Heading */}
        <h2 className="text-center text-[28px] sm:text-[32px] font-bold text-[#ad9ad6] mb-8">
          Get the app
        </h2>

        {/* QR Code */}
        <div className="flex justify-center w-full mb-8">
          {qrCode ? (
            <Image
              src={qrCode}
              alt="QR Code"
              width={200}
              height={200}
              className="w-full max-w-[200px] h-auto object-contain bg-white rounded-md"
            />
          ) : (
            <div className="w-full max-w-[200px] aspect-square bg-gray-200 flex items-center justify-center rounded-md">
              <span className="text-gray-500 text-sm">QR Code</span>
            </div>
          )}
        </div>

        {/* Buttons - Side by Side */}
        <div className="flex flex-row items-center justify-center gap-4 w-full">
          {/* App Store */}
          <a
            href="https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-14 sm:h-16 flex flex-row items-center justify-center gap-3 bg-black border border-[#6B5A90] hover:border-[#ad9ad6] rounded-xl px-2 sm:px-4 transition-all hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/app-store.svg"
                alt="App Store"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center flex-shrink-0 min-w-[85px] sm:min-w-[105px]">
              <span className="text-[10px] sm:text-[12px] text-purple-300 leading-tight whitespace-nowrap">Download on the</span>
              <span className="text-[14px] sm:text-[18px] text-white font-semibold leading-tight whitespace-nowrap">App Store</span>
            </div>
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=com.cognifyai.mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 h-14 sm:h-16 flex flex-row items-center justify-center gap-3 bg-black border border-[#6B5A90] hover:border-[#ad9ad6] rounded-xl px-2 sm:px-4 transition-all hover:scale-105 active:scale-95 cursor-pointer overflow-hidden"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center flex-shrink-0">
              <Image
                src="/images/play-store.svg"
                alt="Google Play"
                width={32}
                height={32}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left justify-center flex-shrink-0 min-w-[85px] sm:min-w-[105px]">
              <span className="text-[10px] sm:text-[12px] text-purple-300 leading-tight whitespace-nowrap">GET IT ON</span>
              <span className="text-[14px] sm:text-[18px] text-white font-semibold leading-tight whitespace-nowrap">Google Play</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
