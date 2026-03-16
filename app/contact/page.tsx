"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { Navbar } from "@/components/layout/navbar";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />

      <main className="relative py-8 flex-1">
        <div className="absolute inset-0 top-0 w-full h-full bg-gradient-to-b from-purple-200 via-purple-100 to-transparent opacity-40 blur-3xl z-0" />

        <Container>
          <div className="max-w-6xl mx-auto relative z-10 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left column: heading + form */}
              <div className="space-y-2 sm:space-y-4">
                <h1 className="text-[20.8224px] md:text-[26.8224px] font-bold font-sans text-center text-gray-900">
                  We Love Feedback!
                </h1>
                {/* Left: form card */}
                {/* <form
                  action="https://form.jotform.com/251245347804153"
                  method="get"
                  target="_blank"
                  className="bg-white rounded-[28px] p-5 sm:p-8 md:p-10 shadow-2xl border border-white/60 max-w-xl w-full mx-auto"
                >
                  <label className="block text-[10px] sm:text-sm font-medium text-gray-600">Name *</label>
                  <div className="flex flex-row gap-2 sm:gap-4 mt-1 sm:mt-2 mb-4 sm:mb-6">
                    <input
                      name="first"
                      placeholder="First Name"
                      className="w-1/2 flex-1 border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-sm bg-white text-gray-400"
                    />
                    <input
                      name="last"
                      placeholder="Last Name"
                      className="w-1/2 flex-1 border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-sm bg-white text-gray-400"
                    />
                  </div>

                  <label className="block text-[10px] sm:text-sm font-medium text-gray-600">Email *</label>
                  <div className="mt-1 sm:mt-2 mb-4 sm:mb-6">
                    <input
                      name="email"
                      type="email"
                      placeholder="example@example.com"
                      className="w-full border rounded px-2 py-1.5 sm:px-3 sm:py-2 text-[10px] sm:text-sm bg-white text-gray-400"
                    />
                  </div>

                  <label className="block text-[10px] sm:text-sm font-medium text-gray-600">Your Message</label>
                  <div className="mt-1 sm:mt-2 mb-4 sm:mb-6">
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Have a question, suggestion, or issue? Drop us a note here."
                      className="w-full border rounded px-2 py-2 sm:px-3 sm:py-3 text-[10px] sm:text-sm bg-white text-gray-400 resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-start">
                    <button
                      type="submit"
                      className="bg-black text-white px-4 py-1.5 sm:px-6 sm:py-2 text-xs sm:text-base rounded-md shadow-sm hover:opacity-95"
                    >
                      SUBMIT
                    </button>
                  </div>
                </form> */}

                <section className="w-full min-h-screen flex justify-center items-start py-4 px-4">
                  <div className="w-full max-w-5xl">
                    <iframe
                      src="https://form.jotform.com/251245347804153?iframe=1"
                      className="w-full border-none"
                      style={{
                        minHeight: "760px",
                        borderRadius: "18px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                      }}
                      loading="lazy"
                      allow="geolocation; microphone; camera"
                    />
                  </div>
                </section>
              </div>

              {/* Right: contact info */}
              <aside className="flex flex-col items-start justify-center px-2 md:pl-8 h-full">
                <div className="mb-6 max-w-md w-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 leading-tight text-gray-900">
                    Have a question, need support, or want to collaborate? Reach
                    out—we'd love to hear from you.
                  </h3>
                  <div className="flex items-start gap-4 mt-8 sm:mt-10">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C5AFEC] shadow-sm ring-2 ring-dark-200">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-6 h-6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="3"
                          y="5"
                          width="18"
                          height="14"
                          rx="2"
                          fill="white"
                          stroke="black"
                          strokeWidth="1.8"
                        />
                        <path
                          d="M3 7.5L12 13L21 7.5"
                          stroke="grey"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>   
                    <a
                        href="mailto:admin@getcognifyai.com"
                        className="mt-2 font-bold text-base md:text-xl text-gray-900 hover:underline"
                      >
                        admin@getcognifyai.com
                      </a>               
                  </div>
                    <div>
                      
                      <br />
                      <div className="mt-4 sm:mt-5 space-y-3 sm:space-y-4">
                        
                        <p className="text-left text-sm sm:text-base text-gray-600 leading-relaxed">
                          If you want to delete your Cognify account or any
                          personal data associated with it, please email us at{" "}
                          <strong>admin@getcognifyai.com</strong>.
                        </p>
                        <p className="text-left text-sm sm:text-base text-gray-600 leading-relaxed">
                          We'll permanently delete your data (email, saved
                          notes, summaries, and usage history) within 7 days.
                        </p>
                      </div>
                    </div>
                </div>
              </aside>
            </div>
          </div>
        </Container>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
