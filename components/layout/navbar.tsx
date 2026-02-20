"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
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

  const linkClass = (href: string, base = "text-xl font-medium transition-colors") => {
    return `${base} ${isActive(href) ? "text-[#ad9ad6] underline decoration-[#ad9ad6] underline-offset-4" : "text-gray-300 hover:text-white"}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/5">
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/cognify-logo.svg"
              alt="Cognify Logo"
              width={192}
              height={72}
              className="w-48 h-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className={linkClass("/")}>Home</Link>
            <Link href="#features" className={linkClass("#features")}>Features</Link>
            <Link href="#contact" className={linkClass("#contact")}>Contact Us</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-white/10 overflow-hidden"
          >
            <Container className="py-4 flex flex-col gap-4">
              <Link href="/" className={isActive("/") ? "text-base font-medium text-[#6B5A90] underline decoration-[#6B5A90] underline-offset-4 py-2" : "text-base font-medium text-gray-300 hover:text-white py-2"} onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="#features" className={isActive("#features") ? "text-base font-medium text-[#6B5A90] underline decoration-[#6B5A90] underline-offset-4 py-2" : "text-base font-medium text-gray-300 hover:text-white py-2"} onClick={() => setIsOpen(false)}>Features</Link>
              <Link href="#contact" className={isActive("#contact") ? "text-base font-medium text-[#6B5A90] underline decoration-[#6B5A90] underline-offset-4 py-2" : "text-base font-medium text-gray-300 hover:text-white py-2"} onClick={() => setIsOpen(false)}>Contact Us</Link>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
