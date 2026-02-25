"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    setHash(typeof window !== "undefined" ? window.location.hash : "");
    const onHashChange = () => setHash(window.location.hash || "");
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const isActive = (href: string) => {
    if (href.startsWith("#")) {
      return pathname === "/" && hash === href;
    }
    return pathname === href;
  };

  const navFontStyle = { fontFamily: "'Montserrat', Montserrat, sans-serif", fontWeight: "500" };

  const linkClass = (href: string, base = "text-[10px] sm:text-[16px] md:text-[26.8224px] transition-colors capitalize") => {
    return `${base} ${isActive(href) ? "text-[#ad9ad6] underline decoration-[#ad9ad6] underline-offset-4" : "text-gray-300 hover:text-white"}`;
  };

  return (
    <nav className="mt-8 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-20 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/site-logo.webp"
              alt="Cognify Logo"
              width={192}
              height={70}
              className="w-24 sm:w-34 md:w-70 h-auto"
            />
          </Link>

          {/* Nav Links (Desktop & Mobile) */}
          <div className="flex items-center gap-3 sm:gap-8">
            <Link href="/" className={linkClass("/")} style={navFontStyle}>Home</Link>
            <Link href="#features" className={linkClass("#features")} style={navFontStyle}>Features</Link>
            <Link href="/contact" className={linkClass("/contact")} style={navFontStyle}>Contact Us</Link>
          </div>
        </div>
      </Container>
    </nav>
  );
}
