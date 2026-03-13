"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { trackDownload } from "@/lib/tracking";

export function FooterDownloadButtons() {
  const handleDownloadClick = async () => {
    // Track the download before navigation
    await trackDownload();
  };

  return (
    <div className="flex flex-row justify-center gap-2 sm:gap-4 w-full px-2">
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
          onClick={(e) => {
            e.preventDefault();
            handleDownloadClick().then(() => {
              window.open(
                "https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398",
                "_blank"
              );
            });
          }}
        >
          <Image
            src="/images/app-store.svg"
            alt="App Store"
            width={42}
            height={42}
            className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
          />
          <div className="text-left">
            <div className="text-[7px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
              Download for free
            </div>
            <div className="text-[10px] xs:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
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
          onClick={(e) => {
            e.preventDefault();
            handleDownloadClick().then(() => {
              window.open(
                "https://play.google.com/store/apps/details?id=com.cognifyai.mobile",
                "_blank"
              );
            });
          }}
        >
          <Image
            src="/images/play-store.svg"
            alt="Google Play"
            width={42}
            height={42}
            className="w-4 h-4 sm:w-8 sm:h-10 object-contain"
          />
          <div className="text-left">
            <div className="text-[7px] sm:text-[14px] font-bold uppercase tracking-wider opacity-90">
              Download for free
            </div>
            <div className="text-[10px] xs:text-[12px] sm:text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-none mt-0.5 sm:mt-0">
              Google Play
            </div>
          </div>
        </a>
      </Button>
    </div>
  );
}
