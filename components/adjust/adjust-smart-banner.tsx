"use client";

import { useEffect, useState } from "react";
import { getAdjustTrackingLink } from "@/lib/adjust";
import { trackDownload } from "@/lib/tracking";

/**
 * Adjust Smart Banner Component
 * Automatically shows app download banner to mobile users
 * Tracks attribution from web to app stores
 */
export function AdjustSmartBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Detect if mobile
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileDevice = /iphone|ipad|ipod|android/.test(userAgent);
    const iosDevice = /iphone|ipad|ipod/.test(userAgent);

    setIsMobile(mobileDevice);
    setIsIOS(iosDevice);

    // Show banner if mobile and not dismissed
    if (mobileDevice && !localStorage.getItem("adjust-banner-dismissed")) {
      // Small delay to ensure smooth page load
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("adjust-banner-dismissed", "true");
    localStorage.setItem("adjust-banner-dismissed-at", new Date().toISOString());
    setShowBanner(false);
  };

  const handleDownloadClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // Track download before opening store
    await trackDownload();

    // Wait a moment for tracking to complete, then open store
    setTimeout(() => {
      const link = e.currentTarget.href;
      window.open(link, "_blank");
    }, 100);
  };

  if (!showBanner || !isMobile) return null;

  // Get Adjust tracking links
  const adjustLink = getAdjustTrackingLink(isIOS, {
    campaign: "organic_web",
    adgroup: "smart_banner",
    creative: "top_banner",
    deeplink: "cognify://downloads",
    label: "smart_banner_v1",
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3 gap-4 max-w-4xl mx-auto">
        {/* Left: Content */}
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm sm:text-base leading-tight">
            🎧 Download Cognify
          </p>
          <p className="text-xs sm:text-sm opacity-90 leading-tight">
            AI summaries in your pocket
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex gap-2 flex-shrink-0">
          {/* Dismiss Button */}
          <button
            onClick={handleDismiss}
            className="px-3 py-2 text-xs sm:text-sm bg-white/20 hover:bg-white/30 rounded-lg transition-colors font-medium"
            aria-label="Dismiss banner"
          >
            ✕
          </button>

          {/* Download Button */}
          <a
            href={adjustLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="px-4 py-2 text-xs sm:text-sm bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Get App
          </a>
        </div>
      </div>
    </div>
  );
}

/**
 * Variant: Full-width banner with more information
 */
export function AdjustSmartBannerExpanded() {
  const [showBanner, setShowBanner] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const mobileDevice = /iphone|ipad|ipod|android/.test(userAgent);
    const iosDevice = /iphone|ipad|ipod/.test(userAgent);

    setIsMobile(mobileDevice);
    setIsIOS(iosDevice);

    if (mobileDevice && !localStorage.getItem("adjust-banner-dismissed")) {
      setTimeout(() => setShowBanner(true), 1500);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("adjust-banner-dismissed", "true");
    setShowBanner(false);
  };

  const handleDownloadClick = async (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    await trackDownload();
    setTimeout(() => {
      window.open(e.currentTarget.href, "_blank");
    }, 100);
  };

  if (!showBanner || !isMobile) return null;

  const adjustLink = getAdjustTrackingLink(isIOS, {
    campaign: "organic_web",
    adgroup: "smart_banner_expanded",
    creative: "expanded_banner",
  });

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-end">
      <div className="w-full bg-gradient-to-b from-purple-700 to-purple-600 text-white rounded-t-3xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl"
        >
          ✕
        </button>

        <div className="p-6 pt-8 text-center max-w-md mx-auto">
          {/* Icon */}
          <div className="text-5xl mb-4">🎧</div>

          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">Cognify</h2>

          {/* Subtitle */}
          <p className="text-purple-100 mb-4">
            Master any podcast in minutes with AI-powered summaries
          </p>

          {/* Features */}
          <ul className="text-sm text-purple-100 mb-6 space-y-2">
            <li>✓ AI-powered summaries</li>
            <li>✓ Key moments extraction</li>
            <li>✓ Interactive Q&A</li>
          </ul>

          {/* CTA Button */}
          <a
            href={adjustLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadClick}
            className="block w-full bg-white text-purple-600 font-bold py-4 rounded-full hover:bg-purple-50 transition-colors mb-3 text-lg"
          >
            Download Free
          </a>

          {/* Secondary Action */}
          <button
            onClick={handleDismiss}
            className="w-full text-white font-medium py-2 text-sm"
          >
            Not now
          </button>
        </div>

        {/* Safe Area Padding for notched devices */}
        <div className="h-4"></div>
      </div>
    </div>
  );
}
