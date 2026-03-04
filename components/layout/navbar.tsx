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
  const showHamburger = pathname !== "/"; // only use toggle outside home page

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

  const linkClass = (href: string, base = "font-sans font-medium text-[10px] sm:text-[16px] md:text-[26.8224px] transition-colors capitalize") => {
    return `${base} ${isActive(href) ? "text-[#ad9ad6] underline decoration-[#ad9ad6] underline-offset-4" : "text-gray-300 hover:text-white"}`;
  };

  return (
    <nav className="mt-8 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-20 md:px-12">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/cognify-logo.svg"
              alt="Cognify Logo"
              width={192}
              height={70}
              priority
              className="w-24 sm:w-34 md:w-70 h-auto"
            />
          </Link>

          {/* Nav Links (Desktop & Mobile) */}
          <div className="flex items-center gap-3 sm:gap-8">
            {showHamburger ? (
              <>
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="sm:hidden p-2 text-gray-300 hover:text-white"
                  aria-label="Toggle menu"
                >
                  {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
                <div className={`${menuOpen ? 'flex' : 'hidden'} sm:flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8`} onClick={() => setMenuOpen(false)}>
                  <Link href="/" className={linkClass("/")}>Home</Link>
                  {pathname !== "/" && (
                    <Link href="/about" className={linkClass("/about")}>About Us</Link>
                  )}
                  <Link href="#features" className={linkClass("#features")}>Features</Link>
                  <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>
                </div>
              </>
            ) : (
              // static links when on home
              <>
                <Link href="/" className={linkClass("/")}>Home</Link>
                {pathname !== "/" && (
                  <Link href="/about" className={linkClass("/about")}>About Us</Link>
                )}
                <Link href="#features" className={linkClass("#features")}>Features</Link>
                <Link href="/contact" className={linkClass("/contact")}>Contact Us</Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
}
