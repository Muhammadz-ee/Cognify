"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; // hamburger icons

export function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isContact = pathname === "/contact";
  const showHamburger = true; // Show hamburger and button on all pages

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Handle scroll for sticky header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && hash === href;
    }
    if (href.startsWith("/#")) {
      return pathname === "/" && hash === href.replace("/", "");
    }
    return pathname === href;
  };

  const linkClass = (href: string, base = "font-sans font-medium text-[10px] sm:text-[14px] md:text-[16px] lg:text-[26.8224px] transition-colors capitalize") => {
    if (isContact) {
      return `${base} ${isActive(href) ? "text-[#6B5A90] underline decoration-[#6B5A90] underline-offset-4" : "text-gray-700 hover:text-black"}`;
    }
    return `${base} ${isActive(href) ? "text-[#ad9ad6] underline decoration-[#ad9ad6] underline-offset-4" : "text-gray-300 hover:text-white"}`;
  };

  // Mobile and Desktop nav backgrounds
  const getMobileNavBg = () => {
    return `transition-all duration-300 ease-in-out ${
      isScrolled
        ? "bg-black/70 backdrop-blur-[12px] border-b border-[#ffffff15] py-2"
        : "bg-black/40 backdrop-blur-[12px] border-b border-[#ffffff00] py-2"
    }`;
  };

  const getDesktopNavBg = () => {
    if (isContact) {
      return `transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 backdrop-blur-[10px] border-b border-gray-200/30 py-3"
          : "bg-transparent backdrop-blur-md border-b border-white/0 py-5 md:py-8"
      }`;
    }
    return `transition-all duration-300 ease-in-out ${
      isScrolled
        ? "bg-black/90 backdrop-blur-[10px] border-b border-white/10 py-3"
        : "bg-black/80 backdrop-blur-md border-b border-white/0 py-5 md:py-8"
    }`;
  };

  return (
    <nav className={`sticky top-0 z-50 sm:${getDesktopNavBg()} ${getMobileNavBg()}`}>
      <Container>
        <div className="flex items-center justify-between md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src={isContact ? "/images/site-logo-lite.webp" : "/images/cognify-logo-dark.webp"}
              alt="Cognify Logo"
              width={1920}
              height={1080}
              priority
              className="w-32 sm:w-32 md:w-40 lg:w-70 h-16 sm:h-auto"
            />
          </Link>

          {/* Nav Links (Desktop & Mobile) */}
          <div className="flex items-center gap-2 sm:gap-5 lg:gap-8 ml-auto">
            {showHamburger ? (
              <>
                {/* Mobile: Try for Free Button */}
                <button
                  onClick={() => {
                    // Track download
                    const userAgent = typeof window !== "undefined" ? navigator.userAgent : "";
                    const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
                      userAgent.toLowerCase()
                    );
                    const isIOS = /iphone|ipad|ipod/i.test(userAgent.toLowerCase());
                    const isAndroid = /android/i.test(userAgent.toLowerCase());

                    if (isMobile) {
                      if (isIOS) {
                        window.location.href =
                          "https://apps.apple.com/us/app/cognify-smarter-listening/id6744607398";
                      } else if (isAndroid) {
                        window.location.href =
                          "https://play.google.com/store/apps/details?id=com.cognifyai.mobile";
                      }
                    }
                  }}
                  className="sm:hidden px-3 py-1.5 bg-linear-to-r from-brand-purple to-brand-green text-white font-semibold text-[11px] rounded-lg hover:opacity-90 shadow-lg shadow-purple-500/20 transition-opacity whitespace-nowrap flex-shrink-0"
                >
                  Try for Free
                </button>

                {/* Mobile: Burger Menu Button */}
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="sm:hidden p-2 flex flex-col gap-1.5 transition-colors"
                  aria-label="Toggle menu"
                >
                  <span className={`w-5 h-0.5 transition-all ${isContact ? "bg-[#6B5A90]" : "bg-gray-300"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                  <span className={`w-5 h-0.5 transition-all ${isContact ? "bg-[#6B5A90]" : "bg-gray-300"} ${menuOpen ? "opacity-0" : ""}`}></span>
                  <span className={`w-5 h-0.5 transition-all ${isContact ? "bg-[#6B5A90]" : "bg-gray-300"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>

                {/* Desktop Menu */}
                <div className={`${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5 lg:gap-8 absolute sm:static top-full left-0 right-0 sm:top-auto sm:left-auto sm:right-auto ${isContact ? "bg-white/90 sm:bg-transparent" : "bg-black/95 sm:bg-transparent"} p-4 sm:p-0`} onClick={() => setMenuOpen(false)}>
                  <Link href="/" className={`${linkClass("/")} text-[20px] sm:text-base`}>Home</Link>
                  {pathname !== "/" && pathname !== "/contact" && (
                    <Link href="/about" className={`${linkClass("/about")} text-[20px] sm:text-base`}>About Us</Link>
                  )}
                  <Link href={isContact ? "/#features" : "#features"} className={`${linkClass(isContact ? "/#features" : "#features")} text-[20px] sm:text-base`}>Features</Link>
                  <Link href="/contact" className={`${linkClass("/contact")} text-[20px] sm:text-base`}>Contact Us</Link>
                </div>
              </>
            ) : (
              // static links when on home
              <>
                <Link href="/" className={linkClass("/")}>Home</Link>
                {pathname !== "/" && pathname !== "/contact" && (
                  <Link href="/about" className={linkClass("/about")}>About Us</Link>
                )}
                <Link href={isContact ? "/#features" : "#features"} className={linkClass(isContact ? "/#features" : "#features")}>Features</Link>
                <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
