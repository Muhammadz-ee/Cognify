import { Container } from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-black pt-0 md:pt-16 pb-8 z-100">
      <Container>
        {/* ========================================================= */}
        {/* DESKTOP LAYOUT */}
        {/* ========================================================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <p className="text-gray-600 max-w-sm text-sm">
                © 2026 CognifyAI Corporation. All rights reserved.
              </p>
              <br />
              <Link href="/" className="flex items-center gap-2 group">
                <Image
                  src="/images/cognify-logo.svg"
                  alt="Cognify Logo"
                  width={192}
                  height={72}
                  className="w-64 h-auto"
                />
              </Link>
            </div>
            <div className="col-span-1"></div>

            <div className="col-span-1">
              <h4 className="text-xs font-bold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-xs text-gray-400"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h4 className="text-xs font-bold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/contact"
                    className="text-xs text-gray-400"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-xs text-gray-400"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-xs text-gray-400"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1  flex flex-col items-center">
              <h4 className="text-xs font-bold text-white mb-4">Connect</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="mailto:admin@getcognifyai.com"
                    className="text-gray-400 inline-flex items-center gap-2"
                  >
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 6.5L12 13L21 6.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/cognify_app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw== "
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 inline-flex items-center gap-2"
                  >
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3.5"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="black" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/people/Get-Cognify-App/61573621870727/?rdid=tndZvRJ3axJvcn64&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F17v5y2KmcL%2F "
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-400 inline-flex items-center gap-2"
                  >
                    <span className="w-6 h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M18 2H15C12.243 2 10 4.243 10 7V10H7v5h3v12h5V15h3.2l.8-5H15V7c0-.552.448-1 1-1h2V2z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] text-light-500">
              <strong> DISCLAIMER:</strong> ALL PODCAST AND VIDEO CONTENT
              DISPLAYED IN THIS APP—INCLUDING CREATOR IMAGES—IS FOR ILLUSTRATIVE
              PURPOSES ONLY. WE DO NOT CLAIM OWNERSHIP OF THIRD-PARTY CONTENT,
              NOR ARE WE AFFILIATED WITH, ENDORSED BY, OR SPONSORED BY THE
              CREATORS FEATURED. THEIR INCLUSION IS SOLELY TO DEMONSTRATE THE
              TYPES OF CONTENT ACCESSIBLE THROUGH OUR PLATFORM. IF YOU ARE A
              CONTENT CREATOR AND HAVE CONCERNS, PLEASE CONTACT US FOR PROMPT
              RESOLUTION.
              <br />
              <br /> THIS APP USES YOUTUBE API SERVICES BUT IS NOT ENDORSED OR
              CERTIFIED BY YOUTUBE OR GOOGLE. YOUTUBE AND THE YOUTUBE LOGO ARE
              TRADEMARKS OF GOOGLE LLC.
              <br />
              <br /> INTERFACE PREVIEWS — FINAL VERSION MAY VARY.
            </p>
          </div>
        </div>

        {/* ========================================================= */}
        {/* MOBILE LAYOUT */}
        {/* ========================================================= */}
        <div className="block md:hidden">
          {/* Header/Copyright & Logo section */}
          <div className="flex flex-col items-center mb-12 gap-8">
            <p className="text-[#888888] text-[12px] sm:text-[13px] text-center">
              © 2026 CognifyAI Corporation. All rights reserved.
            </p>
            <Link href="/" className="flex justify-center -mb-2">
              <Image
                src="/images/cognify-logo.svg"
                alt="Cognify Logo"
                width={192}
                height={72}
                className="w-52 h-auto"
              />
            </Link>
          </div>

          {/* Links & Social grid */}

          <div className="flex flex-col gap-4"></div>

          <div className="flex flex-row justify-between items-start mb-12 w-full max-w-2xl mx-auto px-1 sm:px-0">
            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] sm:text-xs font-bold text-white">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-[11px] sm:text-xs text-[#888888]"
                  >
                    Features
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-[12px] sm:text-xs font-bold text-white">
                Support
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link
                    href="/contact"
                    className="text-[11px] sm:text-xs text-[#888888]"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-[11px] sm:text-xs text-[#888888]"
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-[11px] sm:text-xs text-[#888888]"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center gap-4">
              <h4 className="text-[12px] sm:text-xs font-bold text-white">
                Connect
              </h4>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href="mailto:admin@getcognifyai.com"
                    className="flex justify-center"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                      >
                        <path
                          d="M3 6.5L12 13L21 6.5"
                          stroke="black"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                      >
                        <rect
                          x="3"
                          y="3"
                          width="18"
                          height="18"
                          rx="5"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle
                          cx="12"
                          cy="12"
                          r="3.5"
                          stroke="black"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="17.5" cy="6.5" r="1" fill="black" />
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex justify-center"
                  >
                    <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="black"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-[14px] h-[14px] sm:w-[16px] sm:h-[16px]"
                      >
                        <path d="M18 2H15C12.243 2 10 4.243 10 7V10H7v5h3v12h5V15h3.2l.8-5H15V7c0-.552.448-1 1-1h2V2z" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-0 border-t border-white/10 flex flex-col justify-center gap-4 text-left">
            <p className="text-[10px] sm:text-[11px] text-[#ffffff] leading-tight uppercase font-sans tracking-wide">
              <strong>DISCLAIMER:</strong> ALL PODCAST AND VIDEO CONTENT
              DISPLAYED IN THIS APP—INCLUDING CREATOR IMAGES—IS FOR ILLUSTRATIVE
              PURPOSES ONLY. WE DO NOT CLAIM OWNERSHIP OF THIRD-PARTY CONTENT,
              NOR ARE WE AFFILIATED WITH, ENDORSED BY, OR SPONSORED BY THE
              CREATORS FEATURED. THEIR INCLUSION IS SOLELY TO DEMONSTRATE THE
              TYPES OF CONTENT ACCESSIBLE THROUGH OUR PLATFORM. IF YOU ARE A
              CONTENT CREATOR AND HAVE CONCERNS, PLEASE CONTACT US FOR PROMPT
              RESOLUTION.
              <br />
              <br /> THIS APP USES YOUTUBE API SERVICES BUT IS NOT ENDORSED OR
              CERTIFIED BY YOUTUBE OR GOOGLE. YOUTUBE AND THE YOUTUBE LOGO ARE
              TRADEMARKS OF GOOGLE LLC.
              <br />
              <br /> INTERFACE PREVIEWS — FINAL VERSION MAY VARY.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
